<script>
    import calendar from "./calendar.js";
    import Button from "./Button.svelte";

    async function getAssignments() {
        let resp = await fetch(
            "https://raw.githubusercontent.com/dev-group-ss/db/main/current-assign.json"
        );
        let op = await resp.text();
        op = JSON.parse(op);
        return op;
    }

    var assignments = getAssignments();
</script>

<style>
    main {
        background-color: #0c0f16;
        border-radius: 10px;
        border-width: 1px;
        border-color: #202020;
        border-style: solid;
        padding: 20px 32px;
    }

    .title {
        margin-bottom: 24px;
    }

    .description {
        font-size: 24px;
        margin-bottom: 4px;
        max-width: 700px;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .class-name {
        font-size: 16px;
        font-weight: 400 !important;
        opacity: 0.8;
    }

    .date-info,
    .files {
        display: flex;
        align-items: center;
        margin: 8px 0;
    }

    .due-date {
        color: #57d263;
        font-weight: 500;
        margin-right: 8px;
    }

    .due-date span {
        font-family: monospace;
        font-size: 18px;
        font-weight: 400;
        color: #57d263;
    }

    @media (max-width: 1220px) {
        .description {
            max-width: 100%;
        }
    }

    @media (max-width: 830px) {
        .date-info,
        .files {
            display: inline;
            margin: 8px 0;
        }
    }

    @media (max-width: 600px) {
        .title .description {
            font-size: 20px;
        }

        .title .class-name {
            font-size: 14px;
        }

        .due-date,
        .due-date span {
            font-size: 16px;
        }
    }

    @media (max-width: 400px) {
        main {
            padding: 14px 20px;
        }
        .title .description {
            font-size: 18px;
        }

        .title .class-name {
            font-size: 12px;
        }
    }
</style>

{#await assignments}
    <div>Loading...</div>
{:then assignments}
    {#if assignments.length === 0}
        <div class="no-assignments">
            <img src="/smiling.svg" alt="no assignments" />
            <div>No assignments</div>
        </div>
    {/if}
    {#each assignments as assignment}
        <main>
            <div class="title">
                <div class="description">{assignment.description}</div>
                <div class="class-name">{assignment.course}</div>
            </div>
            <div class="date-info">
                <div class="due-date">Due: <span>{assignment.due}</span></div>
                <Button
                    description="add to calendar"
                    type="calendar"
                    link={calendar(assignment.due
                            .split('/')
                            .reverse()
                            .join(
                                '-'
                            ), `${assignment.title} ${assignment.course}`, assignment.description)} />
            </div>
            <div class="files">
                {#each assignment.file_links as fileLink}
                    <Button
                        description={fileLink.name}
                        type={fileLink.type}
                        link={fileLink.link} />
                {/each}
            </div>
        </main>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
