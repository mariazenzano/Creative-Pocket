export type RankingPeriod = "week" | "month" | "allTime";

export type RankingParticipant = {
  id: string;
  name: string;
  points: number;
  isCurrentUser?: boolean;
};
