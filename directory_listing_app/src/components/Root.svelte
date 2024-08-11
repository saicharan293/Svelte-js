<script>
  import Root from "./Root.svelte";
  export let directories;
  export let name;
  let openIndex = null;
  function toggleOpen(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<body>
  <div class="container">
    <div class="header">
      {name}
      <button class="add-button">+</button>
    </div>
    <div class="content">
      <div class="parent-directory">
        {#each directories as directory, index}
          <div class="directory-group">
            <button class="directory" on:click={() => toggleOpen(index)}>
              <div class="directory-name">
                {directory.name}
              </div>
              <div class="directory-info">
                <span class="folder-icon">📁 {directory.folders}</span>
                <span class="box-icon">📦 {directory.boxes}</span>
              </div>
            </button>

            <div class="info-dir-icon">
              <span class="info-icon">
                <button class="info-button">ℹ️</button>
              </span>
            </div>
          </div>
        {/each}
      </div>
      
    </div>
  </div>
  {#if openIndex !== null}
      <div class="subdirectories">
          <Root
          directories={directories[openIndex].subdirectories}
          name={directories[openIndex].name}
          />
        </div>
        {/if}
</body>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }
  .directory-group {
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between; 
    align-items: center;
  }

  .container {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
  }

  .header {
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: #555;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }

  .add-button {
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    font-size: 22px;
    cursor: pointer;
    color: #777;
  }
  .parent-directory {
    width: 310px; 
    padding: 15px;
    border-right: 1px solid #777;
    overflow-y: auto;
  }

  .directory-group {
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    gap: 158px;
    align-items: center;
  }
  .subdirectories {
    position: fixed;
    top: 0; 
    left: 341px; 
    width: calc(100% - 310px); 
    height: 100%; 
    overflow-y: auto; 
    background-color: white; 
  }
  .directory {
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: #333;
    cursor: pointer;
    width: 100px;
    background-color: #a9ff7e;
    flex-direction: column;
    /* gap: 5px; */
    border: none;
    background: none;
    appearance: none;
  }

  .directory-name {
    font-size: 14px;
  }

  .directory-info {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
  }

  .folder-icon,
  .box-icon {
    font-size: 14px;
    color: #888;
  }
  .info-icon {
    padding-top: 6px;
    border-radius: 100%;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    border: 1px solid rgb(220 214 214);
  }

  .info-button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #777;
  }

  .content { 
    display: flex; 
    height: 100%;
  }
 
</style>
