<script>
  import { Meteor } from 'meteor/meteor';

  import LoginForm from './LoginForm.svelte';

  let loggedIn = false;
  $m: loggedIn = !!Meteor.user();

  function logout() {
    Meteor.logout();
  }
</script>


<div>
  {#if !loggedIn}
    <LoginForm />
  {:else}
    <p>You are logged in!</p>
    <button on:click={logout}>Log Out</button>
  {/if}
</div>
