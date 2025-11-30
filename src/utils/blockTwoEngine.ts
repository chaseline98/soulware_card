import { ReflexSignature, TRAJECTORY_ATOMS, REFLEX_ATOMS } from "@/atoms/fearScanAtoms";

export interface BlockTwoInsight {
  title: string;
  readout: string;
  interpretation: string;
  takeaway: string;
  pull: string;
}

export const classifyReflex = (score: number): ReflexSignature => {
  if (score <= 9) return "withdrawal";
  if (score <= 14) return "caution";
  if (score <= 19) return "self-monitoring";
  if (score <= 23) return "activation";
  return "overexposure";
};

export const detectTrajectory = (reflex1: ReflexSignature, reflex2: ReflexSignature) => {
  if (reflex1 === "withdrawal" && reflex2 === "withdrawal") {
    return "unified_protection";
  }
  if (reflex1 === reflex2) return "stable";
  return "diverging";
};

export const generateBlockTwoInsight = ({
  loopZone,
  firstBlockScores,
  secondBlockScores,
}: {
  loopZone: string;
  firstBlockScores: number[];
  secondBlockScores: number[];
}): BlockTwoInsight => {
  const r1Score = firstBlockScores.reduce((a, b) => a + b, 0);
  const r2Score = secondBlockScores.reduce((a, b) => a + b, 0);

  const reflex1 = classifyReflex(r1Score);
  const reflex2 = classifyReflex(r2Score);

  const trajectory = detectTrajectory(reflex1, reflex2);

  if (trajectory === "unified_protection") {
    return {
      title: `System Readout — Unified Protection Reflex (${loopZone})`,
      readout: `Your responses across the first ten items show a single reflex pattern repeating across both visibility cues and relational risk cues.`,
      interpretation: `This indicates a deeply learned protection script: the system pulls inward before pressure forms, no matter where the pressure comes from. ${REFLEX_ATOMS["withdrawal"].description}`,
      takeaway:
        "A reflex designed to keep you safe can shrink your range of motion until it becomes the only move your system trusts.",
      pull: "Next block will determine whether this rigidity softens as the scan deepens.",
    };
  }

  if (trajectory === "stable") {
    return {
      title: `System Readout — Stable Reflex Pattern (${loopZone})`,
      readout: `Your early reflex remains consistent across the first two blocks.`,
      interpretation: `This tells us your system prefers predictability. It does not rapidly adjust its strategy as the type of pressure shifts.`,
      takeaway: "A stable reflex can support control — or limit adaptability when conditions shift.",
      pull: "Next block will measure adaptability under higher-stakes cues.",
    };
  }

  return {
    title: `System Readout — Diverging Reflexes (${loopZone})`,
    readout: `Your system is using different reflex strategies depending on the type of pressure.`,
    interpretation: `This internal split creates mixed signals: one part of you leans in while another part protects. This divergence is meaningful and will clarify further in the next blocks.`,
    takeaway: "Divergence often signals competing needs — safety and movement — both active at the same time.",
    pull: "Next block will identify which reflex becomes dominant as intensity rises.",
  };
};
