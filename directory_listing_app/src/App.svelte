<script>
  import Root from "./components/Root.svelte";

  let directories = [
      { name: "Directory A", folders: 4, boxes: 5 },
      { name: "Directory B", folders: 5, boxes: 4 }
  ];
</script>

<Root {directories}/>

<style>

</style>


