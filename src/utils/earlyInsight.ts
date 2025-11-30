export type LoopZone = "Work" | "Relationship" | "Life" | "Visibility" | "School";

export interface EarlyInsight {
  title: string;
  body: string;
  pull: string;
}

export function scoreSpotlightBlock(answers: number[]): number {
  return answers.reduce((t, v) => t + v, 0);
}

export type ReflexSignature =
  | "withdrawal"
  | "caution"
  | "self-monitoring"
  | "activation"
  | "overexposure";

export function classifyReflex(score: number): ReflexSignature {
  if (score <= 9) return "withdrawal";
  if (score <= 14) return "caution";
  if (score <= 19) return "self-monitoring";
  if (score <= 23) return "activation";
  return "overexposure";
}

const placeholder = (zone: LoopZone, reflex: ReflexSignature) => ({
  title: `Insight — ${zone}`,
  body: `Reflex pattern detected: ${reflex}.`,
  pull: "Next block continues scan.",
});

const insightLibrary: Record<LoopZone, Record<ReflexSignature, EarlyInsight>> = {
  Work: {
    withdrawal: {
      title: "System Readout — Work Arena",
      body: `Your first responses show a reflex that pulls you away from visibility before pressure even appears.
The move is quiet and fast — a preemptive retreat meant to avoid missteps.
This once protected you, but in the Work arena it interrupts influence and momentum.`,
      pull: "Next block begins verification under rising stakes.",
    },
    caution: placeholder("Work", "caution"),
    "self-monitoring": placeholder("Work", "self-monitoring"),
    activation: placeholder("Work", "activation"),
    overexposure: placeholder("Work", "overexposure"),
  },
  Relationship: {
    withdrawal: placeholder("Relationship", "withdrawal"),
    caution: placeholder("Relationship", "caution"),
    "self-monitoring": placeholder("Relationship", "self-monitoring"),
    activation: placeholder("Relationship", "activation"),
    overexposure: placeholder("Relationship", "overexposure"),
  },
  Life: {
    withdrawal: placeholder("Life", "withdrawal"),
    caution: placeholder("Life", "caution"),
    "self-monitoring": placeholder("Life", "self-monitoring"),
    activation: placeholder("Life", "activation"),
    overexposure: placeholder("Life", "overexposure"),
  },
  Visibility: {
    withdrawal: placeholder("Visibility", "withdrawal"),
    caution: placeholder("Visibility", "caution"),
    "self-monitoring": placeholder("Visibility", "self-monitoring"),
    activation: placeholder("Visibility", "activation"),
    overexposure: placeholder("Visibility", "overexposure"),
  },
  School: {
    withdrawal: placeholder("School", "withdrawal"),
    caution: placeholder("School", "caution"),
    "self-monitoring": placeholder("School", "self-monitoring"),
    activation: placeholder("School", "activation"),
    overexposure: placeholder("School", "overexposure"),
  },
};

export function generateEarlyInsight(loopZone: LoopZone, answers: number[]) {
  const score = scoreSpotlightBlock(answers);
  const reflex = classifyReflex(score);
  return insightLibrary[loopZone][reflex];
}
