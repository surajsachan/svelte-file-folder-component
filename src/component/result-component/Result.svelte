<svelte:options tag="result-component" />

<script lang="ts">
  import { folderStructure } from "../../store/stores";
  import Accordion, { createAccordionContext } from "../item/Item.svelte";

  createAccordionContext();
</script>

<div class="col-md-5 right-tab">
  <div class="result-container">
    <h4>File & Folder Structure</h4>
    <div class="accordian-container">
      {#if !!$folderStructure?.length}
        {#each $folderStructure as folder}
          <Accordion {folder} />
        {/each}
      {:else}
        <div class="alert alert-light" role="alert">
          No files and folders are created!
        </div>
      {/if}
    </div>
  </div>

  <style>
    .right-tab {
      padding-left: 1.5rem;
    }
    .result-container {
      padding: 20px;
      background-color: #13294b;
      color: #fff;
      border-radius: 10px;
      max-height: 500px;
      display: flex;
      flex-direction: column;
    }
    .result-container h4 {
      font-weight: 300;
      margin-bottom: 20px;
    }
    .accordian-container {
      overflow: auto;
    }

    @media only screen and (max-width: 768px) {
      .ps-4 {
        padding-left: 0 !important;
      }
    }
  </style>
</div>
