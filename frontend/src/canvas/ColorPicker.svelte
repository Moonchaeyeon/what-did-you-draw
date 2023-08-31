<style>
  input {
    width: 50px;
    height: 50px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    width: 50px;
    height: 50px;
    padding: 0;
    border: none;
  }
  input[type="color"]::-webkit-color-swatch {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 10px;
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let color;

  const changeColor = (e) => {
    dispatch("color", { color: e.currentTarget.value });
  };
</script>

<input
  type="color"
  id="brushColor"
  name="brushColor"
  bind:value="{color}"
  on:change="{changeColor}"
/>
