<script>
	import { onMount } from 'svelte'
	// import { env } from '$env/dynamic/private'
	import axios from 'axios'
	// import vision from '@google-cloud/vision'

	// const client = new vision.ImageAnnotatorClient();
	
	export let width = 300
	export let height = 300
	export let color = '#333'
	export let background = '#fff'
	export let guessImage
	
	let canvas
	let context
	let isDrawing
	let start
	
	let t, l
	
	onMount(() => {
		context = canvas.getContext('2d')
		context.lineWidth = 3
		
		handleSize()
	})
	
	$: if(context) {
			context.strokeStyle = color
	}
	
	const handleStart = (({ offsetX: x, offsetY: y }) => { 
		if(color === background) {
			context.clearRect(0, 0, width, height)
		} else {
			isDrawing = true
			start = { x, y }
		}
	})
	
	const handleEnd = () => { isDrawing = false; guessImage(canvasToImage()); }
	const handleMove = (({ offsetX: x1, offsetY: y1 }) => {
		if(!isDrawing) return
		
		const { x, y } = start
		context.beginPath()
		context.moveTo(x, y)
		context.lineTo(x1, y1)
		context.closePath()
		context.stroke()
		
		start = { x: x1, y: y1 }
	})
	
	const handleSize = () => {
		const { top, left } = canvas.getBoundingClientRect()
		t = top
		l = left
	}

	const canvasToImage = () => {
		const image = new Image()
		image.src = canvas.toDataURL('image/png')
		return image
	}
</script>

<svelte:window on:resize={handleSize} />

<canvas
				{width}
				{height}
				style:background
				bind:this={canvas} 
				on:mousedown={handleStart}	
				on:touchstart={e => {
					const { clientX, clientY } = e.touches[0]
					handleStart({
						offsetX: clientX - l,
						offsetY: clientY - t
					})
				}}	
				on:mouseup={handleEnd}				
				on:touchend={handleEnd}				
				on:mouseleave={handleEnd}
				on:mousemove={handleMove}
				on:touchmove={e => {
					const { clientX, clientY } = e.touches[0]
					handleMove({
						offsetX: clientX - l,
						offsetY: clientY - t
					})
				}}
				/>