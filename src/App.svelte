<script>
	import NavBar from './components/Navbar.svelte';
	import CurrentAssignments from './components/CurrentAssignments.svelte';
	import MeetLinks from './components/MeetLinks.svelte';
	import Notifications from './components/Notifications.svelte';
</script>

<NavBar />
<main>
	<div class="current-assignments">
		<p class="heading">Current Assignments</p>
		<CurrentAssignments />
	</div>
	<div class="right-container">
		<p class="heading">Meet Links</p>
		<div class="meet-links">
			<MeetLinks />
			<!-- <MeetLinks />
			<MeetLinks />
			<MeetLinks />
			<MeetLinks /> -->
		</div>
		<div class="notifications">
			<p class="heading">Notifications</p>
			<Notifications />
		</div>
	</div>
</main>

<style>
	main {
		/* margin: 0; */
		display: flex;
		/* justify-content: space-between; */
	}

	.current-assignments {
		padding-left: 100px;
		padding-right: 25px;
	}

	.right-container {
		padding-left: 25px;
		padding-right: 100px;
	}

	.heading {
		font-size: 34px;
	}

	/* .meet-links {
		display: flex;
	} */
</style>