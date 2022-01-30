<script>
  import 'milligram/dist/milligram.min.css';

  import { Meteor } from 'meteor/meteor';

  import LoginForm from './LoginForm.svelte';
  import MessageBoard from './MessageBoard.svelte';
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

    <MessageBoard />

    <button on:click={logout}>Log Out</button>
  {/if}
</div>

<style>
  div {
    height: 100vh;
  }
</style>
