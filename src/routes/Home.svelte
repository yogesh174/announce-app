<script>
  import CurrentAssignments from "../components/CurrentAssignments.svelte";
  import MeetLinks from "../components/MeetLinks.svelte";
  import Notifications from "../components/Notifications.svelte";
  import { slimscroll } from "svelte-slimscroll";
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

  :global(.no-assignments) {
    text-align: center;
  }

  :global(.no-assignments > div) {
    color: #21262d;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 20px;
  }

  @media (max-width: 1390px) {
    main {
      width: 95%;
    }
  }

  @media (max-width: 1220px) {
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
  @media (max-width: 400px) {
    .current-assignments,
    .right-container {
      margin: 0 20px;
    }

    p {
      margin-bottom: 12px;
    }
  }
</style>

<main>
  <div class="current-assignments">
    <p class="heading">Current Assignments</p>
    <div
      use:slimscroll={{ maxHeight: '500px', alwaysVisible: true, color: 'white', opacity: 0.2, allowPageScroll: true, position: 'right' }}>
      <CurrentAssignments />
    </div>
  </div>
  <div class="right-container">
    <p class="heading">Meet Links</p>
    <div class="meet-links">
      <MeetLinks />
    </div>
    <div class="notifications">
      <p class="heading">Notifications</p>
      <div
        use:slimscroll={{ maxHeight: '400px', alwaysVisible: true, color: 'white', opacity: 0.2, allowPageScroll: true, position: 'right' }}>
        <Notifications />
      </div>
    </div>
  </div>
</main>
