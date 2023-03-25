<script>
    import PaletteColor from "./PaletteColor.svelte";

    export let palette
</script>

<div class:palette>
    {#each palette as color}
        <PaletteColor 
            {color}
            on:color
        />
    {/each}
</div>

<style>
    .palette {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        row-gap: 30px;
        column-gap: 14px;
        margin-top: 20px;
    }
</style>