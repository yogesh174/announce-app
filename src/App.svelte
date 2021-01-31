<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
  import NavBar from "./components/Navbar.svelte";

	const metadata = {
		title: "Announce",
		description: "Check College notifications easily",
		image: "/favicon.png",
	};
</script>

<style>
	:global(*) {
		color: #f0f6fc;
		-webkit-tap-highlight-color: transparent;
	}
</style>

<NavBar />
<Router {routes} />

<svelte:head>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700;900&display=swap");
	</style>
</svelte:head>
