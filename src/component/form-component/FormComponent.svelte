<svelte:options tag="form-component" />

<script lang="ts">
  import { folderStructure } from "../../store/stores";
  import { onMount } from "svelte";

  import type { RootFolderType } from "./Types";
  import Alert from "../alert/Alert.svelte";

  let name: string = "";
  let type: string = "file";
  let selectLevel: string = "root";
  let isDuplicate: boolean = false;
  let selectedFolder: string = "";
  let rootFolder: RootFolderType[] = [];
  let canCreateChild: boolean = true;
  let filterList: RootFolderType[] = [];

  function checkLength() {
    const folderCount = rootFolder.filter(
      (folder) => folder.type === "folder"
    ).length;
    canCreateChild = folderCount === 0;
  }

  function checkDuplicateName(fileArray) {
    return fileArray.some((x) => x.name === name);
  }

  function handleSave() {
    const item = {
      name,
      type,
      children: [],
    };

    const targetFolder = selectedFolder
      ? rootFolder.find(({ name }) => name === selectedFolder)
      : null;

    const isNameExists = targetFolder
      ? checkDuplicateName(targetFolder.children)
      : checkDuplicateName(rootFolder);

    if (isNameExists) {
      isDuplicate = true;
      return false;
    } else {
      isDuplicate = false;
    }

    if (targetFolder) {
      targetFolder.children.push(item);
    } else {
      rootFolder.push(item);
    }

    folderStructure.update((arr) => {
      const updatedData = [...arr];
      localStorage.setItem("store", JSON.stringify(updatedData));
      return updatedData;
    });

    checkLength();
    resetForm();
  }

  const handleCancel: () => void = () => {
    isDuplicate = false;
    resetForm();
  };

  const resetForm: () => void = () => {
    name = "";
    type = "file";
    selectLevel = "root";
    selectedFolder = "";
  };

  const resetStore: () => void = () => {
    localStorage.removeItem("store");
    folderStructure.set([]);
  };

  onMount(() => {
    folderStructure.subscribe((value) => {
      rootFolder = value;
      filterList = rootFolder.filter((folder) => folder.type === "folder");
      checkLength();
    });
  });
</script>

<div class="col-md-7 left-tab">
  <div class="form-container">
    <div class="form-heading">
      <h3>Create Files or Folders</h3>
    </div>
    {#if isDuplicate}
      <Alert message="File/Folder with this name already exists." />
    {/if}
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Enter file or Folder name"
        bind:value={name}
      />
      <label for="name">Name</label>
    </div>

    <div class="form-floating mb-3">
      <select class="form-select" id="type" bind:value={type}>
        <option value="file">File</option>
        <option value="folder">Folder</option>
      </select>
      <label for="type">Type</label>
    </div>

    <div class="form-floating mb-3">
      <select
        class="form-select"
        id="level"
        bind:value={selectLevel}
        disabled={canCreateChild}
      >
        <option value="root">Root</option>
        <option value="child">Child</option>
      </select>
      <label for="level">Select Level</label>
    </div>

    {#if selectLevel === "child"}
      <div class="form-floating mb-3">
        <select
          class="form-select"
          id="folder"
          bind:value={selectedFolder}
          disabled={canCreateChild}
        >
          {#each filterList as folder}
            <option value={folder.name}>{folder.name}</option>
          {/each}
        </select>
        <label for="folder">Folder</label>
      </div>
    {/if}

    <div class="d-flex justify-content-between action-btns">
      <div>
        <button class="btn btn-outline-primary ms-1" on:click={resetStore}
          >Reset</button
        >
      </div>
      <div>
        <button class="btn btn-outline-primary me-1" on:click={handleCancel}
          >Cancel</button
        >
        <button
          disabled={!name}
          class="btn btn-primary ms-1"
          on:click={handleSave}>Save</button
        >
      </div>
    </div>
    <div class="d-flex justify-content-center mt-1" />
  </div>

  <style>
    .left-tab {
      padding-right: 1.5rem !important;
    }
    .form-container {
      width: 80%;
    }

    .form-heading {
      margin-bottom: 40px;
    }

    .form-heading h3 {
      color: #47d7ac;
    }

    .action-btns {
      margin-top: 40px;
    }

    .action-btns .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .action-btns .btn-primary {
      background-color: #13294b;
      border-color: #13294b;
    }

    .action-btns .btn-outline-primary {
      border-color: #13294b;
      color: #13294b;
    }

    .action-btns .btn-primary.disabled,
    .action-btns .btn-primary:disabled {
      background-color: #13294b;
    }

    @media only screen and (max-width: 1050px) {
      .form-container {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      .form-container {
        margin-bottom: 20px;
      }

      .left-tab {
        padding-right: 0;
      }
    }
  </style>
</div>
