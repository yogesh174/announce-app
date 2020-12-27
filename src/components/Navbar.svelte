<script>
    let navList = [
        { name: "Home", link: "/#" },
        { name: "Assignments", link: "/#/assignments" },
        { name: "Time Tables", link: "/#/timetables" },
        { name: "Resources", link: "/#/resources" },
    ];
</script>

<style>
    ul {
        list-style-type: none;
        display: flex;
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

    nav {
        display: flex;
        align-items: center;
    }

    header {
        background-color: #0c0f16;
        display: flex;
        align-items: center;
        box-shadow: 0 1px #202020;
        padding: 0 calc(15% / 2);
    }

    .logo {
        flex: 1;
    }

    .logo a {
        font-size: 28px;
    }
</style>

<header>
    <div class="logo"><a href="/#">Announce</a></div>
    <nav>
        <ul>
            {#each navList as nav}
                <li><a href={nav.link}>{nav.name}</a></li>
            {/each}
        </ul>
    </nav>
</header>
