<script>
    import Button from "./Button.svelte";
    import CurrentAssignments from "./CurrentAssignments.svelte";

    async function getLinks() {
        let resp = await fetch(
            "https://raw.githubusercontent.com/dev-group-ss/db/main/meet-links.json"
        );
        let op = await resp.text();
        op = JSON.parse(op);
        return op;
    }

    let meetLinks = getLinks();
</script>

<style>
    main {
        font-family: "DM Sans", sans-serif;
        display: flex;
    }
</style>

<main>
    {#await meetLinks}
        <div>Loading...</div>
    {:then meetLinks}
        {#each meetLinks as meetLink}
            <Button {...meetLink} icon="video.svg" />
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>
