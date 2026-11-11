import type { RankingParticipant, RankingPeriod } from "./types";

type DemoParticipant = {
  id: string;
  name: string;
  week: number;
  month: number;
  allTime: number;
};

type DemoPeriod = "week" | "month" | "allTime";

const demoParticipants: DemoParticipant[] = [
  { id: "sofia", name: "Sofía Rojas", week: 480, month: 2140, allTime: 12840 },
  { id: "diego", name: "Diego Vargas", week: 430, month: 1980, allTime: 11920 },
  { id: "valentina", name: "Valentina Cruz", week: 390, month: 1760, allTime: 10750 },
  { id: "mateo", name: "Mateo Salazar", week: 340, month: 1510, allTime: 9630 },
  { id: "camila", name: "Camila Flores", week: 290, month: 1320, allTime: 8510 },
  { id: "lucas", name: "Lucas Méndez", week: 240, month: 1090, allTime: 7240 },
  { id: "renata", name: "Renata Paredes", week: 190, month: 880, allTime: 5920 },
  { id: "thiago", name: "Thiago Herrera", week: 140, month: 650, allTime: 4310 },
];

const periodPoints: Record<RankingPeriod, DemoPeriod> = {
  week: "week",
  month: "month",
  allTime: "allTime",
};

const userPositionByPeriod: Record<RankingPeriod, number> = {
  week: 9,
  month: 2,
  allTime: 5,
};

export function getRankingParticipants(
  period: RankingPeriod,
  userName: string,
  userPoints: number,
): RankingParticipant[] {
  const scoreKey = periodPoints[period];
  const demoRanking = demoParticipants
    .map((player) => ({
      id: player.id,
      name: player.name,
      points: player[scoreKey],
    }))
    .sort((a, b) => b.points - a.points);

  const userPosition = userPositionByPeriod[period];
  const aboveUser = demoRanking.slice(0, userPosition - 1);
  const belowUser = demoRanking.slice(userPosition - 1);

  return [
    ...aboveUser.map((participant, index) => ({
      ...participant,
      points: Math.max(
        participant.points,
        userPoints + (aboveUser.length - index) * 10,
      ),
    })),
    {
      id: "current-user",
      name: userName || "Tú",
      points: userPoints,
      isCurrentUser: true,
    },
    ...belowUser.map((participant, index) => ({
      ...participant,
      points: Math.min(
        participant.points,
        Math.max(0, userPoints - (index + 1) * 10),
      ),
    })),
  ];
}
