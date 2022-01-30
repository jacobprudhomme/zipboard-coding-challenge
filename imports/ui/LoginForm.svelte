<script>
  import { Meteor } from 'meteor/meteor';
  import { Accounts } from 'meteor/accounts-base';

  let username = '';
  let password = '';

  let logIn = true;
  function toggle() {
    logIn = !logIn;

    username = '';
    password = '';
  }

  let errorMessage = null;
  function login() {
    if (!logIn) {
      Accounts.createUser({
        username,
        password,
      });
    }

    Meteor.loginWithPassword(username, password, (err) => {
      errorMessage = `Error: ${err.message.slice(0, -6)}`;
    });
  }
</script>

<form on:submit|preventDefault={login}>
  <div>
    <label for="username">Username</label>
    <input
      type="text"
      placeholder="Enter username"
      name="username"
      required
      bind:value={username}
    />
  </div>

  <div>
    <label for="password">Password</label>
    <input
      type="password"
      placeholder="Enter password"
      name="password"
      required
      bind:value={password}
    />
  </div>

  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}

  {#if logIn}
    <button type="submit">Log In</button>
    <button class="button-clear" on:click={toggle}>Or create a new account</button>
  {:else}
    <button type="submit">Create Account</button>
    <button class="button-clear" on:click={toggle}>Or log in</button>
  {/if}
</form>

<style>
  form {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: rgb(230, 25, 25);

    margin-bottom: 1rem;
  }
</style>
