import { dom } from "@wallerbuilt/mycelia";
import MomentaryBtn from "./MomentaryBtn";
import { flex } from "./styleHelpers";

const { div } = dom;

let currentSteps: number[] = [];

const isActive = (index: number) => currentSteps.includes(index);

const addStep = (step: number) => {
  const steps = [...currentSteps];
  steps.push(step);
  currentSteps = steps.sort((a, b) => a - b);
};

const removeStep = (step: number) => {
  const steps = [...currentSteps];
  currentSteps = steps.filter((n) => n !== step).sort((a, b) => a - b);
};

const onToggle = (step: number) => {
  if (isActive(step)) {
    removeStep(step);
  } else {
    addStep(step);
  }
};

const itter = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );

const seqSteps = itter(1, 16, 1);

const SeqSteps = div(
  {},
  seqSteps.map(MomentaryBtn(onToggle))
) as HTMLDivElement;

flex(SeqSteps, {
  direction: "row",
  alignItems: "center",
  justifyContent: "center",
});

export default SeqSteps;
