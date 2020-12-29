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
        margin: 8px 0;
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

    @media (max-width: 400px) {
        main {
            padding: 12px 18px;
        }
    }
</style>

{#await descriptions}
    <div>Loading...</div>
{:then descriptions}
    {#if descriptions.length === 0}
        <div class="no-assignments">
            <img src="/belloff.svg" alt="no notifications" />
            <div>No new Notifications</div>
        </div>
    {/if}
    {#each descriptions as description}
        <main>
            <div class="description">{description.description}</div>
        </main>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
