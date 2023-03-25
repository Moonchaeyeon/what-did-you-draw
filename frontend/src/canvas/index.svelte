<script>
    import Canvas from './Canvas.svelte';
    import ColorPicker from './ColorPicker.svelte';
    import LineWidth from './lineWidth.svelte';
    import Palette from './Palette.svelte';
	
	export let guessImage
    let palette = [
        "#000fff",
        "#333fff",
        "#666fff",
        "#999fff",
        "#cccfff",
        "#ffffff",
        "#f00fff",
        "#0f0fff",
        "#00ffff",
        "#ff0fff",
        "#0fffff",
        "#f0ffff",
    ];
    let color = '#333'
    let lineWidth = 10

    const changeColor = (e) => {
        console.log(color);
        color = e.detail.color;
    }
    const changeLineWidth = (e) => {
        lineWidth = e.detail.lineWidth;
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
<LineWidth 
    on:lineWidth={changeLineWidth}
    {lineWidth}
/>
<ColorPicker 
    on:color={changeColor}
    {color}
/>