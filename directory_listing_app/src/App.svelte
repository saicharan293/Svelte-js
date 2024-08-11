<script>
  import Root from "./components/Root.svelte";
  let name = "Root";

  let directories = [
    {
      name: "Directory A",
      folders: 2,
      files: 4,
      subdirectories: [
        { name: "Directory AA", folders: 1, files: 2,
         subdirectories: [
          { name: "Directory AA1", folders: 1, files: 2,
            subdirectories:[
              { name: "Directory AAA1", folders: 1, files: 2},
              { name: "Directory AAB1", folders: 1, files: 2},
              { name: "Directory AAc1", folders: 1, files: 2},
              { name: "Directory AAd1", folders: 1, files: 2},
            ]
          },
          { name: "Directory AB1", folders: 1, files: 2},
          { name: "Directory AC1", folders: 1, files: 2},
          { name: "Directory AD1", folders: 1, files: 2},
         ]
         },
        { name: "Directory AB", folders: 0, files: 2, subdirectories: [] },
      ],
    },
    {
      name: "Directory B",
      folders: 1,
      files: 3,
      subdirectories: [
        { name: "Directory BA", folders: 1, files: 1, subdirectories: [] },
      ],
    },
  ];
</script>

<Root {directories} {name} />

<style>
</style>
