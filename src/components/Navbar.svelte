<script>
    import { IconMenu } from "svelte-feather";

    let navList = [
        { name: "Home", link: "/#" },
        { name: "Assignments", link: "/#/assignments" },
        { name: "Time Tables", link: "/#/timetables" },
        { name: "Resources", link: "/#/resources" },
    ];

    let check = false;
</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        padding-right: 7.5%;
    }

    a {
        text-decoration: none;
        color: #f0f6fc;
        display: block;
        padding: 10px 20px;
        font-size: 18px;
    }

    li > a:hover {
        text-decoration: underline;
    }

    header {
        position: fixed;
        z-index: 1;
        background-color: #0c0f16;
        display: flex;
        align-items: center;
        box-shadow: 0 1px #202020;
        padding: 1em 0;
        width: 100vw;
        top: 0;
    }

    .logo {
        flex: 1;
        padding-left: 7.5%;
    }

    .logo a {
        font-size: 28px;
    }

    label {
        display: none;
        cursor: pointer;
    }

    @media (max-width: 1324px) {
        .logo {
            padding-left: 2.5%;
        }

        ul,
        label {
            padding-right: 5.5%;
        }
    }
    @media (max-width: 850px) {
        header {
            position: fixed;
        }

        label {
            display: flex;
            align-items: center;
        }

        ul {
            position: fixed;
            top: 0em;
            left: -100%;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: -1;
            padding: 0;
            text-align: center;
            background: #21262d;
            transition: 0.2s ease-in-out;
        }

        #check:checked ~ ul {
            left: 0;
        }
    }
</style>

<header>
    <div class="logo"><a href="/#/">Announce</a></div>
    <input
        type="checkbox"
        id="check"
        style="display: none;"
        bind:checked={check} />
    <label for="check">
        <IconMenu />
    </label>
    <ul>
        {#each navList as nav}
            <li>
                <a
                    href={nav.link}
                    on:click={() => (check = !check)}>{nav.name}</a>
            </li>
        {/each}
    </ul>
</header>
