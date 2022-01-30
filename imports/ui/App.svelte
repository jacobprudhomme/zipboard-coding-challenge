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
    <button class="button-clear" on:click={logout}>Log Out</button>

    <MessageForm />

    <MessageBoard />
  {/if}
</div>

<style>
  div {
    height: 100vh;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
