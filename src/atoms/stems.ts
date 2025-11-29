export type StemKey =
  | "avoidance"
  | "perfectionism"
  | "exposure"
  | "confidence"
  | "imposter"
  | "visibility";

export const STEM_ATOMS: Record<StemKey, string> = {
  avoidance: "I avoid situations where I might become the center of attention.",
  perfectionism: "I feel pressured to do things flawlessly or not at all.",
  exposure: "I hesitate before entering new or uncertain situations.",
  confidence: "I question my capability even when I know I’m qualified.",
  imposter: "I worry others will discover I'm not as competent as they think.",
  visibility: "I shrink back when an opportunity puts me in the spotlight.",
};
