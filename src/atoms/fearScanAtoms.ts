export type ReflexSignature =
  | "withdrawal"
  | "caution"
  | "self-monitoring"
  | "activation"
  | "overexposure";

export const REFLEX_ATOMS: Record<ReflexSignature, { label: string; description: string }> = {
  withdrawal: {
    label: "Withdrawal",
    description:
      "The system reduces visibility or engagement before pressure forms. A preemptive retreat pattern.",
  },
  caution: {
    label: "Caution",
    description:
      "The system slows movement and scans for risk before taking action. A measured defensive strategy.",
  },
  "self-monitoring": {
    label: "Self-Monitoring",
    description:
      "The system shifts attention inward and manages perception before expression. A precision-control reflex.",
  },
  activation: {
    label: "Activation",
    description:
      "The system moves forward quickly but remains highly aware of evaluation or judgment cues.",
  },
  overexposure: {
    label: "Overexposure",
    description:
      "The system surges into visibility rapidly, sometimes before readiness stabilizes. A high-exposure reflex.",
  },
};

export type TrajectorySignature =
  | "unified_protection"
  | "stable"
  | "diverging"
  | "escalating"
  | "converging";

export const TRAJECTORY_ATOMS: Record<
  TrajectorySignature,
  { label: string; description: string }
> = {
  unified_protection: {
    label: "Unified Protection Reflex",
    description:
      "The system deploys the same protective reflex across multiple threat types. Deep, consolidated safety script.",
  },
  stable: {
    label: "Stable Pattern",
    description:
      "The system repeats a similar reflex across contexts. Predictable but less adaptive.",
  },
  diverging: {
    label: "Diverging Reflexes",
    description:
      "Different domains trigger different reflexes, creating mixed internal signals.",
  },
  escalating: {
    label: "Escalating Response",
    description:
      "Reflex intensity increases as pressure rises. Protective mechanisms amplify.",
  },
  converging: {
    label: "Converging Pattern",
    description:
      "Initially different reflexes begin to align into a single consistent pattern.",
  },
};

export interface InsightAtoms {
  readout: string;
  interpretation: string;
  takeaway: string;
  pull: string;
}

export const INSIGHT_COMPONENT_ATOMS = {
  readoutLabel: "Phase Readout",
  interpretationLabel: "Phase Interpretation",
  takeawayLabel: "System Takeaway",
  pullLabel: "Next Block",
};
