<script>
  export let message;

  function formatDate(when) {
    const year = message.createdAt.getFullYear();
    const month = message.createdAt.getMonth() + 1;
    const day = message.createdAt.getDate();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }
</script>

<div>
  <hr />
  <p><strong>{message.poster}</strong> said...</p>
  <p>{message.message}</p>
  <p class="date">...on {formatDate(message.createdAt)}</p>
</div>

<style>
  hr {
    border-color: blueviolet;
  }

  p {
    margin: 1rem 0;
  }

  .date {
    font-size: 1.2rem;
    font-style: italic;
  }
</style>
