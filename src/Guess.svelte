<script>
    export let guessedWord;
</script>

{#if guessedWord.length}
    <h2>I think that you drew {guessedWord}</h2>
{:else}
    <h2>Sorry, I don't know what you drew</h2>
{/if}