<script>
  import { MessagesCollection } from '../db/MessagesCollection';

  import Message from './Message.svelte';

  let messages = [];
  $m: messages = MessagesCollection.find({}).fetch();
</script>

<ul>
  {#each messages as message (message._id)}
    <Message message={message} />
  {/each}
</ul>
