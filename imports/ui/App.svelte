<script>
  import { Meteor } from 'meteor/meteor';

  import LoginForm from './LoginForm.svelte';
  import MessageForm from './MessageForm.svelte';

  Meteor.subscribe('messages');

  let user = null;
  $m: user = Meteor.user();

  function logout() {
    Meteor.logout();
  }
</script>


<div>
  {#if !user}
    <LoginForm />
  {:else}
    <MessageForm />

    <button on:click={logout}>Log Out</button>
  {/if}
</div>
