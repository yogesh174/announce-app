<script>

    // export let description =
    //     "COA class has been canceled on Thursday, 24/12/20";

    async function getdescriptions() {
        let resp = await fetch('https://raw.githubusercontent.com/dev-group-ss/db/main/notification.json');
        let op = await resp.text();
        op = JSON.parse(op);
        return op
    }

    var descriptions = getdescriptions();
    

</script>

<style>
    main {
        background-color: #0c0f16;
        border-radius: 10px;
        border-width: 1px;
        border-color: #202020;
        border-style: solid;
        padding: 24px 36px;
    }

    .description {
        font-size: 20px;
        text-align: justify;
    }
</style>

<main>
    {#await descriptions}
        <div>Loading...</div>
    {:then descriptions}
        {#each descriptions as description}
            <div class="description">{description.description}</div>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>
