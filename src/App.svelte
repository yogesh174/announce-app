<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
	import NavBar from "./components/NavBar.svelte";
</script>

<style>
	:global(*) {
		color: #f0f6fc;
	}
</style>

<NavBar />
<Router {routes} />

<svelte:head>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700;900&display=swap");
	</style>
</svelte:head>
