<script>
  import { Meteor } from 'meteor/meteor';
  import { Accounts } from 'meteor/accounts-base';

  let email = '';
  let password = '';

  let errorMessage = null;
  function login() {
    if (!logIn) {
      Accounts.createUser({
        email,
        password,
      });
    }

    Meteor.loginWithPassword(email, password, (err) => {
      errorMessage = `Error: ${err.message.slice(0, -6)}`;
    });
  }

  let logIn = true;
  function toggle() {
    logIn = !logIn;

    errorMessage = null;
  }
</script>

<form on:submit|preventDefault={login}>
  <div>
    <label for="email">Email</label>
    <input
      type="email"
      placeholder="Enter email"
      name="email"
      required
      bind:value={email}
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
