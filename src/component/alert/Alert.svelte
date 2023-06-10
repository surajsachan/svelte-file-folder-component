<script lang='ts'>
    export let message = "";
</script>

<svelte:options tag="alert-component" />
  
<div class="alert alert-danger" role="alert">
    {message}
</div>