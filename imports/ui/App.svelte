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


<div class="app">
  {#if !user}
    <LoginForm />
  {:else}
    <div class="top-row">
      <MessageForm />
      <button class="button-clear" on:click={logout}>Log Out</button>
    </div>

    <MessageBoard />
  {/if}
</div>

<style>
  .app {
    height: 100vh;
  }

  .top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  button {
    line-height: 1;
    height: 2rem;

    padding: 0;
  }
</style>
