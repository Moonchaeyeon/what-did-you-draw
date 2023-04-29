<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let color

    let start
    let end
    let isDragged = false

    const changeColor = (color) => {
        dispatch('color', { color: color })
    }

    const handleStart = ({ offsetX: x, offsetY: y }) => {
		start = { x, y }
    }

    const handleEnd = ({ offsetX: x, offsetY: y }) => {
        if (start) {
            if ((x-start.x)**2 + (y-start.y)**2 > 100) isDragged = true
            console.log("dragged",isDragged)

            if(isDragged) {
                // isDragged = false
            } else {
                changeColor(color)
            }

            start = null
        }
    }

    const handleMove = ({ offsetX: x1, offsetY: y1 }) => {
    }
</script>

<div 
    draggable="true"
    style:background={color ? color : 'gray'}
	on:mousedown={handleStart}	
	on:touchstart={e => {
		const { clientX, clientY } = e.touches[0]
		handleStart({
			offsetX: clientX,
			offsetY: clientY
		})
	}}	
	on:mouseup={handleEnd}				
	on:touchend={handleEnd}				
	on:mouseleave={handleEnd}
	on:mousemove={handleMove}
	on:touchmove={e => {
		const { clientX, clientY } = e.touches[0]
		handleMove({
			offsetX: clientX,
			offsetY: clientY
		})
	}}
/>

<style>
    div {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>