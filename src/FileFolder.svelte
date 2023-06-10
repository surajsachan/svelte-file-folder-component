<svelte:options tag="file-folder-component" />

<script lang="ts">
  import { onMount } from "svelte";
  import FormComponent from "./component/form-component/FormComponent.svelte";
  import Result from "./component/result-component/Result.svelte";
  import { folderStructure } from "./store/stores";

  onMount(() => {
    const storedData = localStorage.getItem("store");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      folderStructure.set(parsedData);
    }
  });
</script>

<div class="container svelte-component-wrapper">
  <div class="row">
    <FormComponent />
    <Result />
  </div>

  <style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    body {
      background-color: #000;
      padding: 10px;
    }

    .svelte-component-wrapper {
      font-family: "Roboto", sans-serif;
      background-color: #fff;
      border-radius: 10px;
      margin-top: 70px;
      padding: 30px 30px 30px 50px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }
  </style>
</div>
