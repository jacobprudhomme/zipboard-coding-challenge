import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { mockMethodCall } from 'meteor/quave:testing';
import { assert } from 'chai';

import { MessagesCollection } from '../db/MessagesCollection';

import './messagesMethods';

if (Meteor.isServer) {
  describe('Messages', () => {
    describe('methods', () => {
      const email = 'test@mail.com';
      let userId;

      beforeEach(() => {
        userId = Accounts.createUser({ email });
        Meteor.user = () => {
          const user = Meteor.users.findOne({ _id: userId });
          return user;
        };

        // Precondition: Messages.length = 1
        MessagesCollection.insert({
          message: 'Hello, world!',
          poster: email,
          createdAt: new Date(),
        });
      });

      afterEach(() => {
        MessagesCollection.remove({});
        Meteor.users.remove({});
      });

      it('can post new messages', () => {
        const message = 'Another message';
        mockMethodCall('messages.post', message, { context: { userId } });

        const messages = MessagesCollection.find({}).fetch();

        assert.equal(messages.length, 2);
        assert.isTrue(messages.some(msg => msg.message === message));
      });
    });
  });
}
