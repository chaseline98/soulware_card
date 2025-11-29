export interface ScoringProfile {
  arena: string;
  score: number;
}

export function scoreResponse(value: number): number {
  return value; // placeholder scoring
}
