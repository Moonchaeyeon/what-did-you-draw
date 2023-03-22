<script>
	import { onMount } from 'svelte'
	// import Canvas from './Canvas.svelte'
  	import Canvas from './canvas/index.svelte';
  	import Guess from './Guess.svelte';
  	import Success from './Success.svelte';
	import {CLASSES} from './utils/classes';

	// word
	let suggestedWord = '';
	let guessedWord = '';

	// status
	let win = false;

	const generateRandomWord = () => {
		suggestedWord = CLASSES[Math.floor(Math.random() * Object.keys(CLASSES).length) + 1].displayName;
	}

	const guessImage = async (img) => {
		// Load the model.
		cocoSsd.load().then(model => {
			model.detect(img).then(predictions => {
			// console.log('Predictions: ', predictions);
			if (predictions.length) {
				console.log(predictions[0].class);
				guessedWord = predictions[0].class;
			}
			});
		});
	}
	
	const retryGame = () => {
		generateRandomWord();
		win = false;
	}

	onMount(() => {
		console.log("what..")
		generateRandomWord();
	})
	$ : win = (suggestedWord === guessedWord);
</script>

<main>
	{#if win}
		<Success retryGame={retryGame}/>
	{:else}
		<h1>{ suggestedWord }</h1>
		<Canvas 
			{guessImage}
		/>
		<Guess 
			{guessedWord}
		/>
	{/if}
</main>

<style>	
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #e5e5e5;
	}
	
	:global(.visually-hidden:not(:focus):not(:active)) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
	
	main {
		max-width: 300px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem 0;
	}
	
	main :global(canvas) {
		align-self: center;
	}
	
</style>