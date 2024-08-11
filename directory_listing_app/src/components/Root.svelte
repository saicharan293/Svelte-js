<script>
    export let directories;
</script>

<body>
  
    <div class="container">
      <div class="header">
          ROOT
          <button class="add-button">+</button>
      </div>
      <div class="parent-directory">
      {#each directories as directory}
        <div class="directory-group">
    
          <div class="directory">
            <div class="directory-name">
              {directory.name}
            </div>
            <div class="directory-info">
              <span class="folder-icon">📁 {directory.folders}</span>
              <span class="box-icon">📦 {directory.boxes}</span>
              
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
    </body>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .directory-group{
          border-bottom: 1px solid #eee;
          
        }
      
        .container {
          width: 360px;
          /* padding: 20px; */
          height: 100%;
          border: 1px solid #ddd;
        }
      
        .header {
          width: 319px;
          height: 30px;
          /* background-color: aqua; */
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
            /* background-color: rgb(235, 243, 185); */
      
        }
        .parent-directory{
          /* -top:10px; */
      
          padding: 15px;
          border-right: 1px solid #777;
          height: 434px;
      
          /* background-color: aqua; */
          
        }
      
        .directory-group {
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-around;
          /* width: 97px; */
          gap: 158px;
          align-items: center;
      }
        .directory{
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 10px ;
          color: #333;
          /* background-color: #a9ff7e; */
          flex-direction: column;
          gap: 5px;
      }
          
          .directory-name {
          /* background-color: #569c33; */
            font-size: 14px;
        }
      
      
        .directory-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            /* background-color: rgb(240, 149, 30); */
        }
      
        .folder-icon,
        .box-icon {
            font-size: 14px;
            color: #888;
        }
        .info-icon {
          border: 0;
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
      </style>