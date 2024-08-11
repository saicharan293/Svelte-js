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
    <div class="content">
    <div class="header">
      {name}
      <button class="add-button">+</button>
    </div>
    <div class="content">
      <div class="parent-directory">
        {#each directories as directory, index}
          <div class="directory-group " class:selection={openIndex === index} >
            <div class="directory "  on:click={() => toggleOpen(index)} on:keypress>
              <div class="directory-name">
                {directory.name}
              </div>
              <div class="directory-info">
                <span class="folder-icon">📁 {directory.folders}</span>
                <span class="box-icon">📦 {directory.files}</span>
              </div>
            </div>

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
    </div>
</body>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }
  .content{
    display: flex;
    flex-direction: column;
    width: 288px;
    height: 100%;
  }
  .container {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
  }

  .header {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: #555;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 15px;
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
    width: 100%; 
    padding: 15px;
    border-right: 1px solid #777;
    overflow-y: auto;
    height: 100%;
    /* position: relative; */
  }

  .directory-group {
    position: relative;
    border-bottom: 1px solid #ece9e9;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
    padding: 5px;
  }
 
  .directory-group.selection{
    background-color: #dcecf6;
    border-radius: 10px;
  }
  .subdirectories {
    position: absolute;
    top: 0; 
    left: 320px; 
    /* width: calc(100% - 160px);  */
    width: 100%;

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
    width: 260px;
    background-color: #a9ff7e;
    flex-direction: column;
    gap: 5px;
    /* border: none; */
    background: none;
    appearance: none;
    border-radius: 20px;
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
