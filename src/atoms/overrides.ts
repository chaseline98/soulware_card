export interface OverridePatch {
  arena: string;
  inside: string;
  outside: string;
}

export const OVERRIDE_PATCHES: OverridePatch[] = [
  {
    arena: "work",
    inside: "I'm allowed to ask for clarity.",
    outside: "Here's what I need to move forward.",
  },
  {
    arena: "relationships",
    inside: "I don't need to carry everything alone.",
    outside: "Can we share this together?",
  },
  {
    arena: "self",
    inside: "My fear is a signal, not a stop sign.",
    outside: "One small step is enough today.",
  },
];
