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
  <p>{message.userId}</p>
  <p>{message.message}</p>
  <p>Posted on {formatDate(message.createdAt)}</p>
</div>
