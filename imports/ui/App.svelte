<script>
  let loggedIn = false;
</script>


<div>
  {#if !loggedIn}
    <p>Not logged in</p>
  {:else}
    <p>Already logged in</p>
  {/if}
</div>
