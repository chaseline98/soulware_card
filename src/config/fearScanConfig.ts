export type FearDimension =
  | "Spotlight"
  | "Rejection"
  | "Shame"
  | "Perfectionism"
  | "Conflict";

export type FearQuestion = {
  id: string;
  dimension: FearDimension;
  text: string;
  groupIndex: number; // 0–4 (for each block of 5)
};

export const FEAR_SCAN_QUESTIONS: FearQuestion[] = [
  // Spotlight Fear – group 0
  {
    id: "spotlight_1",
    dimension: "Spotlight",
    groupIndex: 0,
    text: "I avoid situations where I might be the center of attention.",
  },
  {
    id: "spotlight_2",
    dimension: "Spotlight",
    groupIndex: 0,
    text: "When I have to speak in front of a group, I can’t stop imagining myself messing up.",
  },
  {
    id: "spotlight_3",
    dimension: "Spotlight",
    groupIndex: 0,
    text: "I’d rather stay quiet than risk saying something embarrassing in front of others.",
  },
  {
    id: "spotlight_4",
    dimension: "Spotlight",
    groupIndex: 0,
    text: "If I make a mistake while others are watching, I replay it in my head for days.",
  },
  {
    id: "spotlight_5",
    dimension: "Spotlight",
    groupIndex: 0,
    text: "I feel tense or self-conscious when people are looking at me, even if I’m just doing something normal.",
  },

  // Rejection Fear – group 1
  {
    id: "rejection_1",
    dimension: "Rejection",
    groupIndex: 1,
    text: "If someone takes a long time to reply, I assume I did something wrong.",
  },
  {
    id: "rejection_2",
    dimension: "Rejection",
    groupIndex: 1,
    text: "I worry a lot about people secretly not liking me.",
  },
  {
    id: "rejection_3",
    dimension: "Rejection",
    groupIndex: 1,
    text: "If I ask for what I want, I’m afraid it will push people away.",
  },
  {
    id: "rejection_4",
    dimension: "Rejection",
    groupIndex: 1,
    text: "Even small signs of distance (short replies, fewer emojis, etc.) bother me more than I’d like to admit.",
  },
  {
    id: "rejection_5",
    dimension: "Rejection",
    groupIndex: 1,
    text: "After conversations, I replay them in my head, wondering if I said something that turned the other person off.",
  },

  // Shame / Not Enough – group 2
  {
    id: "shame_1",
    dimension: "Shame",
    groupIndex: 2,
    text: "Deep down, I often feel like I’m not as good as other people.",
  },
  {
    id: "shame_2",
    dimension: "Shame",
    groupIndex: 2,
    text: "If people knew what I’m really like, they’d think less of me.",
  },
  {
    id: "shame_3",
    dimension: "Shame",
    groupIndex: 2,
    text: "When someone compliments me, it’s hard to believe they truly mean it.",
  },
  {
    id: "shame_4",
    dimension: "Shame",
    groupIndex: 2,
    text: "I feel like I have to hide certain parts of myself to be accepted.",
  },
  {
    id: "shame_5",
    dimension: "Shame",
    groupIndex: 2,
    text: "I compare myself to others a lot and usually come out worse in my own mind.",
  },

  // Perfectionism / Exposure – group 3
  {
    id: "perf_1",
    dimension: "Perfectionism",
    groupIndex: 3,
    text: "I delay sharing my work until it feels absolutely perfect.",
  },
  {
    id: "perf_2",
    dimension: "Perfectionism",
    groupIndex: 3,
    text: "I’d rather not try than risk failing in front of other people.",
  },
  {
    id: "perf_3",
    dimension: "Perfectionism",
    groupIndex: 3,
    text: "I spend a lot of time fixing tiny details so no one can criticize me.",
  },
  {
    id: "perf_4",
    dimension: "Perfectionism",
    groupIndex: 3,
    text: "Even after I’ve finished something, I keep tweaking it because it never feels good enough.",
  },
  {
    id: "perf_5",
    dimension: "Perfectionism",
    groupIndex: 3,
    text: "If I make a visible mistake, I feel like it says something bad about who I am.",
  },

  // Conflict Avoidance – group 4
  {
    id: "conflict_1",
    dimension: "Conflict",
    groupIndex: 4,
    text: "I often say “it’s fine” even when it isn’t, just to keep the peace.",
  },
  {
    id: "conflict_2",
    dimension: "Conflict",
    groupIndex: 4,
    text: "I avoid giving honest feedback because I don’t want to upset anyone.",
  },
  {
    id: "conflict_3",
    dimension: "Conflict",
    groupIndex: 4,
    text: "Disagreeing with people makes me so uncomfortable that I usually back down.",
  },
  {
    id: "conflict_4",
    dimension: "Conflict",
    groupIndex: 4,
    text: "I’d rather do something I don’t really want to do than risk an argument.",
  },
  {
    id: "conflict_5",
    dimension: "Conflict",
    groupIndex: 4,
    text: "When someone seems annoyed with me, I panic and try to fix it immediately, even if I’m not sure I did anything wrong.",
  },
];

export const TOTAL_QUESTIONS = FEAR_SCAN_QUESTIONS.length; // 25
export const GROUP_COUNT = 5;
export const GROUP_SIZE = 5;
