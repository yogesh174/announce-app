<script>
    export let description = "COA class has been canceled on Thursday, 24/12/20";
    export let icon = "video.svg";
    export let colour = "#070A11";
    export let background_colour = "#74DF7F";
    export let border_colour = "#4CB556";
</script>

<main style="background-color: {background_colour}; color: {colour}; border-color: {border_colour};">
    <div class="container">    
        <img src={icon} alt="Meet Icon" class="icon"/>
        <p class="description">{description}</p>
    </div>
</main>

<style>
    main {
        border-radius: 10px;
        border-width: 2px;
        border-style: solid;
    }
    .icon {
        padding: 0px 1px;
        display: block;        
    }

    .description {
        margin: 0;
        display: block;
        font-size: 24px;
    }

    .container {
        /* padding: 10px 0px; */
        display: flex;
    }

</style>