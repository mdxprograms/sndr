import { mount, dom } from "@wallerbuilt/mycelia";
import SeqSteps from "./SeqSteps";
import { bgDark } from "./styleHelpers";

const { div } = dom;

const App = div({}, SeqSteps) as HTMLDivElement;

bgDark(App);

mount(App, "#app");
