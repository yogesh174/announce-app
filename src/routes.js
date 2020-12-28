import Home from "./routes/Home.svelte";
import Working from "./routes/Working.svelte";

export default {
  '/': Home,
  '/assignments': Working,
  '/timetables': Working,
  '/resources': Working,
}