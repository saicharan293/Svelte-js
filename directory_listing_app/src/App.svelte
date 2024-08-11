<script>
  import Root from "./components/Root.svelte";
  let name='Root';

  let directories = [
      { name: "Directory A", subdirectories: [
          { name: "Directory AA", subdirectories: [] },
          { name: "Directory AB", subdirectories: [] }
      ]},
      { name: "Directory B", subdirectories: [
          { name: "Directory BA", subdirectories: [] }
      ]}
  ];
</script>

<Root {directories} {name}/>

<style>

</style>


