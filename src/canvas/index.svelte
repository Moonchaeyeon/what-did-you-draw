<script>
    import Canvas from './Canvas.svelte';
    import Palette from './Palette.svelte';
	
	export let guessImage
    let palette = [
        "#000",
        "#333",
        "#666",
        "#999",
        "#ccc",
        "#fff",
        "#f00",
        "#0f0",
        "#00f",
        "#ff0",
        "#0ff",
        "#f0f",
    ];
    let color = '#333'
    let lineWidth = 10

    const changeColor = (e) => {
        color = e.detail.color;
    }
</script>

<Canvas 
    {color}
    {lineWidth}
    {guessImage}
/>
<Palette 
    on:color={changeColor}
    {palette}
/>