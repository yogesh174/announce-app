<script>
    import { IconVideo, IconFileText, IconCalendar } from "svelte-feather";

    export let description;
    export let type = "meet";
    export let active = false;
    export let link;
</script>

<style>
    a {
        font-family: "DM Sans", sans-serif;
        border-radius: 8px;
        border: 2px solid;
        padding: 0.3em 0.8em;
        margin: 0 5px;
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    a.active {
        color: #f0f6fc;
        background-color: #2a9640;
        border-color: #389148;
        transition: 0.2s ease-in-out;
    }

    a.active:hover {
        background-color: #258f3a;
    }

    a.normal {
        color: #f0f6fc;
        background-color: #21262d;
        border-color: #383838;
        transition: 0.2s ease-in-out;
    }

    a.normal:hover {
        background-color: #2d323a;
        border-color: #464646;
    }

    .icon {
        display: flex;
        align-items: center;
        margin-right: 8px;
    }

    .description {
        margin: 0;
        display: block;
        font-size: 18px;
        font-weight: 400;
    }
</style>

<a
    href={link}
    class={active ? 'active' : 'normal'}
    target="_blank"
    rel="noopener">
    <div class="icon">
        {#if type === 'meet'}
            <IconVideo color="#F0F6FC" />
        {:else if type === 'file'}
            <IconFileText color="#F0F6FC" />
        {:else if type === 'calendar'}
            <IconCalendar color="#F0F6FC" />
        {/if}
    </div>
    <div class="description">{description}</div>
</a>
