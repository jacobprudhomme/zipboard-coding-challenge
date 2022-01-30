<script>
  export let message;

  function formatDate(when) {
    const year = when.getFullYear();
    const month = when.getMonth() + 1;
    const day = when.getDate();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }

  function formatTime(when) {
    let hours = when.getHours();
    const minutes = when.getMinutes();
    const whichHalf = 0 <= hours && hours <= 11 ? 'AM' : 'PM';
    hours = hours !== 0 && hours !== 12 ? hours % 12 : 12;

    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${whichHalf}`;
  }
</script>

<div>
  <hr />
  <p><strong>{message.poster}</strong> said...</p>
  <p>{message.message}</p>
  <p class="date">...on {formatDate(message.createdAt)} at {formatTime(message.createdAt)}</p>
</div>

<style>
  hr {
    border-color: blueviolet;

    margin: 2rem 0;
  }

  p {
    margin: 1rem 0;
  }

  .date {
    font-size: 1.2rem;
    font-style: italic;
  }
</style>
