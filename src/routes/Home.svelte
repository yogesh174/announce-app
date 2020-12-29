<script>
  import CurrentAssignments from "../components/CurrentAssignments.svelte";
  import MeetLinks from "../components/MeetLinks.svelte";
  import Notifications from "../components/Notifications.svelte";
</script>

<style>
  main {
    margin: 0 auto;
    padding-top: 100px;
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

  @media (max-width: 1324px) {
    main {
      width: 95%;
    }
  }

  @media (max-width: 960px) {
    main {
      flex-direction: column-reverse;
      width: 100%;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 600px) {
    main {
      margin: 0;
    }

    .heading {
      font-size: 26px;
    }
  }
</style>

<main>
  <div class="current-assignments">
    <p class="heading">Current Assignments</p>
    <CurrentAssignments />
  </div>
  <div class="right-container">
    <p class="heading">Meet Links</p>
    <div class="meet-links">
      <MeetLinks />
    </div>
    <div class="notifications">
      <p class="heading">Notifications</p>
      <Notifications />
    </div>
  </div>
</main>
