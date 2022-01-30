<script>
  import { Meteor } from 'meteor/meteor';

  import LoginForm from './LoginForm.svelte';

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
    <p>You are logged in!</p>
    <button on:click={logout}>Log Out</button>
  {/if}
</div>
