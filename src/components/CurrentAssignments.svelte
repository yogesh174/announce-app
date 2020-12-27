<script>
    import calendar from "./calendar.js";
    import Button from "./Button.svelte";
    export let description =
        "Make a lab report (2 pages) showing Forward-Bias pn diode charachteristics";
    export let className = "EDC-Lab";
    export let dueDate = "26/12/2020";
    let linkDate = dueDate.split("/").reverse().join("-");
    let resources = ["exp1_forwardbias.doc", "Electronics_lab_manual.pdf"];
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
        min-width: 400px;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .class-name {
        font-size: 16px;
        font-weight: 400 !important;
        opacity: 0.8;
    }

    .date-info {
        display: flex;
        align-items: center;
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
    }
</style>

<main>
    <div class="title">
        <div class="description">{description}</div>
        <div class="class-name">{className}</div>
    </div>
    <div class="date-info">
        <div class="due-date">Due: <span>{dueDate}</span></div>
        <Button
            description="add to calendar"
            type="calendar"
            link={calendar(linkDate, description)} />
    </div>
</main>
