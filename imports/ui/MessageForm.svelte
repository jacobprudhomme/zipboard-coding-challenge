<script>
  let message = '';
  function postMessage() {
    if (!message) return;

    Meteor.call('messages.post', message);

    message = '';
  }
</script>

<form on:submit|preventDefault={postMessage}>
  <label for="message">Tell us something...</label>
  <textarea
    name="message"
    placeholder="Type your message here"
    bind:value={message}
  />
  <button type="submit">Post Message</button>
</form>

<style>
  form {
    margin-bottom: 0;
  }
</style>
