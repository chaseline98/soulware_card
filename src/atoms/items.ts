import { ARENA_ATOMS, ArenaKey } from "./arenas";
import { STEM_ATOMS, StemKey } from "./stems";

export interface QuestionItem {
  id: number;
  arena: ArenaKey;
  stem: StemKey;
  text: string;
}

export function buildItem(arena: ArenaKey, stem: StemKey, id: number): QuestionItem {
  const a = ARENA_ATOMS[arena];
  const s = STEM_ATOMS[stem];

  return {
    id,
    arena,
    stem,
    text: a.prefix + " " + s,
  };
}
