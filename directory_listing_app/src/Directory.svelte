<script>
    import Directory from './Directory.svelte';
    export let directory;
    export let level = 0;
    let selectedDirectory = null;
  
    function selectDirectory(dir) {
      selectedDirectory = dir;
    }
  </script>
  
  
  <div class="directory">
    <div>
      <strong>{directory.name}</strong>
      {#if directory.children && directory.children.length > 0}
        <ul>
          {#each directory.children as child}
            {#if child.type === 'directory'}
              <button class="item" on:click={() => selectDirectory(child)}>
                <span class="icon">📁</span> {child.name}
                <div class="info">
                  <span>{child.children ? child.children.filter(c => c.type === 'directory').length : 0}</span>
                  <span>📁</span>
                  <span>{child.children ? child.children.filter(c => c.type === 'file').length : 0}</span>
                  <span>📦</span>
                </div>
              </button>
            {:else}
              <li class="item">
                <span class="icon">📄</span> {child.name}
              </li>
            {/if}
          {/each}
        </ul>
      {/if}
    </div>
  
    {#if selectedDirectory}
      <div class="panel">
        <Directory directory={selectedDirectory} level={level + 1} />
      </div>
    {/if}
  </div>
  <style>
    .directory {
      display: flex;
      flex-direction: column;
    }
  
    .panel {
      display: flex;
      margin-left: 20px;
      border-left: 1px solid #ddd;
      padding-left: 10px;
    }
  
    .item {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 5px 10px;
      margin: 5px 0;
      border-radius: 5px;
      color: #3b3b3b;
      font-weight: 500;
    }
  
    .item:hover {
      background-color: #f5f5f5;
    }
  
    .icon {
      margin-right: 8px;
      font-size: 18px;
    }
  
    .info {
      font-size: 12px;
      color: #999;
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  
    .info span {
      margin-left: 5px;
      font-weight: 600;
    }
  </style>