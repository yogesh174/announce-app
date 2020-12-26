<script>
    export let description = "Make a lab report (2 pages) showing Forward-Bias pn diode charachteristics";
    export let class_name = "EDC-Lab";
    export let due_date = "26/12/20";
    export let resources = [
        "exp1_forwardbias.doc",
        "Electronics_lab_manual.pdf"
    ];
</script>

<main>
    <div class="container">
        <p class="description">{description}</p>
        <p class="class-name">{class_name}</p>
        {due_date}
    </div>
</main>

<style>
    main {
        background-color: #0C0F16;
        border-radius: 10px;
        border-width: 1px;
        border-color: #202020;
        border-style: solid;
    }
    .container {
        padding: 20px;        
    }

    .description {
        font-size: 24px; 
        width: 600px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .class-name {
        font-size: 18px;
        opacity: 0.8;
    }

</style>