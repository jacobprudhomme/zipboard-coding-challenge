<script>
  let username = '';
  let password = '';

  let errorMessage = null;
  function login() {
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

  <div>
    <button type="submit">Log In</button>
  </div>
</form>
