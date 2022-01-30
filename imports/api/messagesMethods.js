import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { MessagesCollection } from '../db/MessagesCollection';

Meteor.methods({
  'messages.post'(message) {
    check(message, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    MessagesCollection.insert({
      message,
      userId: Meteor.user().username,
      createdAt: new Date(),
    });
  },
});
