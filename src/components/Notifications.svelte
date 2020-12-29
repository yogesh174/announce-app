<script>
    async function getDescriptions() {
        let resp = await fetch(
            "https://raw.githubusercontent.com/dev-group-ss/db/main/notification.json"
        );
        let op = await resp.text();
        op = JSON.parse(op);
        return op;
    }

    var descriptions = getDescriptions();
</script>

<style>
    main {
        font-family: "DM Sans", sans-serif;
        background-color: #0c0f16;
        border-radius: 10px;
        border-width: 1px;
        border-color: #202020;
        border-style: solid;
        padding: 24px 36px;
    }

    .description {
        font-size: 18px;
        line-height: 150%;
    }

    @media (max-width: 600px) {
        main {
            padding: 18px 24px;
        }

        .description {
            font-size: 17px;
            line-height: 150%;
        }
    }
</style>

{#await descriptions}
    <div>Loading...</div>
{:then descriptions}
    {#each descriptions as description}
        <main>
            <div class="description">{description.description}</div>
        </main>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
