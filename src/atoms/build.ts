import { buildItem } from "./items";
import { ArenaKey } from "./arenas";
import { StemKey } from "./stems";

interface StageConfig {
  arena: ArenaKey;
  stems: StemKey[];
}

export const SCAN_STAGES: StageConfig[] = [
  {
    arena: "work",
    stems: ["avoidance", "exposure", "confidence", "perfectionism", "visibility"],
  },
  {
    arena: "relationships",
    stems: ["exposure", "avoidance", "visibility", "confidence", "imposter"],
  },
  {
    arena: "self",
    stems: ["perfectionism", "imposter", "avoidance", "exposure", "confidence"],
  },
  {
    arena: "social",
    stems: ["visibility", "avoidance", "exposure", "confidence", "imposter"],
  },
  {
    arena: "leadership",
    stems: ["confidence", "visibility", "perfectionism", "exposure", "avoidance"],
  },
];

export function buildFullScan() {
  let idCounter = 0;

  return SCAN_STAGES.flatMap((stage) =>
    stage.stems.map((stem) => buildItem(stage.arena, stem, idCounter++))
  );
}
