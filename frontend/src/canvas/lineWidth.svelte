<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let lineWidth;

  const changeLineWidth = (e) => {
    console.log(e.target.value);
    lineWidth = e.target.value;
    dispatch("lineWidth", { lineWidth: lineWidth });
  };
</script>

<input type="range" bind:value="{lineWidth}" on:change="{changeLineWidth}" />
