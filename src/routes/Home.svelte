<script>
  import NavBar from "../components/Navbar.svelte";
  import CurrentAssignments from "../components/CurrentAssignments.svelte";
  import MeetLinks from "../components/MeetLinks.svelte";
  import Notifications from "../components/Notifications.svelte";
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-evenly;
    width: 85%;
  }

  .current-assignments {
    flex: 2;
    margin: 0 40px;
  }

  .right-container {
    flex: 1;
    margin: 0 40px;
  }

  .heading {
    font-size: 34px;
  }
</style>

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
