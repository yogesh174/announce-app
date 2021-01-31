import Home from "./routes/Home.svelte";
import Working from "./routes/Working.svelte";
import TimeLine from "./routes/TimeLine.svelte"

export default {
    '/': Home,
    '/assignments': Working,
    '/timetables': TimeLine,
    '/resources': Working,
}