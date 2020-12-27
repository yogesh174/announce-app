<script>
    import Button from "./Button.svelte";
    import CurrentAssignments from "./CurrentAssignments.svelte";

    let meetLinks = [
        {
            description: "EDC-Lab",
            link: "https://meet.google.com",
            type: "meet",
            active: true,
        },
        {
            description: "EDC",
            link: "https://meet.google.com",
            type: "meet",
            active: false,
        },
    ];
</script>

<style>
    main {
        display: flex;
    }
</style>

<main>
    {#each meetLinks as item}
        <Button {...item} icon="video.svg" />
    {/each}
</main>
