export type ArenaKey = "work" | "relationships" | "self" | "social" | "leadership";

export interface ArenaAtom {
  key: ArenaKey;
  label: string;
  prefix: string;
}

export const ARENA_ATOMS: Record<ArenaKey, ArenaAtom> = {
  work: {
    key: "work",
    label: "Work",
    prefix: "When I'm working,",
  },
  relationships: {
    key: "relationships",
    label: "Relationships",
    prefix: "With people I care about,",
  },
  self: {
    key: "self",
    label: "Self / Identity",
    prefix: "When I'm alone with my thoughts,",
  },
  social: {
    key: "social",
    label: "Social",
    prefix: "In group or public settings,",
  },
  leadership: {
    key: "leadership",
    label: "Leadership",
    prefix: "When people are depending on me,",
  },
};
