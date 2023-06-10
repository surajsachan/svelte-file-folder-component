<svelte:options tag="item-component" />

<script context="module">
  import { setContext, getContext } from "svelte";
  import { writable } from "svelte/store";

  const key = {};

  export const getAccordionContext = () => getContext(key);
  export const createAccordionContext = () => {
    const current = writable(null);
    const context = { current };
    setContext(key, context);

    return context;
  };
</script>

<script>
  import { quadInOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  export let open = false;
  export let folder;

  const { current } = getAccordionContext();
  const currentKey = {};

  createAccordionContext();

  function handleClick() {
    if (folder.type === "file") return;
    open = !open;
    if (open) $current = currentKey;
  }

  $: if ($current !== currentKey) open = false;

  $: folderClass =
    open && folder.children && folder.children.length
      ? "accordion-button"
      : "accordion-button collapsed";
</script>

<div class="accordion">
  {#if folder && folder.name}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="header" on:click={handleClick}>
      <div class="text {folder.type == 'folder' ? folderClass : ''}">
        <h3>
          {#if folder.type == "folder"}
            <img src="./assets/folder.svg" alt="folder" />
          {:else}
            <img src="./assets/file.svg" alt="file" />
          {/if}
          <span>{folder.name}</span>
        </h3>
      </div>
    </div>
  {/if}

  {#if open && folder.children && folder.children.length}
    <div
      class="details"
      transition:slide={{ duration: 150, easing: quadInOut }}
    >
      <ul>
        {#each folder.children as child}
          <li>
            <div
              class="text {child.type == 'folder'
                ? 'accordion-button collapsed'
                : ''}"
            >
              {#if child.type == "folder"}
                <img src="./assets/folder.svg" alt="folder" />
              {:else}
                <img src="./assets/file.svg" alt="file" />
              {/if}
              <h3>{child.name}</h3>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <style>
    div.header {
      display: flex;
      width: 100%;
      background-color: #47d7ac;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }

    .result-container .accordion-button {
      background-color: #47d7ac;
      border-radius: 4px;
    }

    .result-container .accordion-button:not(.collapsed) {
      background-color: #47d7ac;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    div.header .text {
      flex: 1;
      padding: 12px 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div.header:hover h3 {
      color: #fff;
    }

    div.details {
      background-color: #47d7ac;
      padding: 1rem;
    }

    div.details ul {
      list-style-type: none;
    }

    .accordion {
      margin-bottom: 5px;
    }

    .accordion h3 {
      font-size: 16px;
      margin-bottom: 0;
      color: #13294b;
      display: flex;
      align-items: center;
      font-weight: 400;
    }

    div.details .text.accordion-button {
      padding: 0;
    }

    .accordion h3 img,
    div.details .text img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    div.details .text {
      text-align: left;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    h4,
    h2 {
      cursor: pointer;
    }

    .text span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  </style>
</div>
