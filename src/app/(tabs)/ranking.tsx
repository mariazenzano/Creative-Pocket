import { useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

import RankingHeader from "@/components/ranking/RankingHeader";
import RankingList from "@/components/ranking/RankingList";
import RankingPeriodTabs from "@/components/ranking/RankingPeriodTabs";
import RankingPodium from "@/components/ranking/RankingPodium";
import { colors, palette } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { getPracticeProgress } from "@/storage/practiceProgress";
import { loadUser } from "@/storage/user";
import { getXPProgress } from "@/storage/xpProgress";
import { practiceContents } from "@/data/practiceContent";

import { getRankingParticipants } from "@/components/ranking/rankingData";
import type { RankingPeriod } from "@/components/ranking/types";

const periodCopy: Record<RankingPeriod, { title: string; caption: string }> = {
  week: {
    title: "Esta semana",
    caption: "Puntos de prácticas realizadas desde el lunes",
  },
  month: {
    title: "Este mes",
    caption: "Puntos de prácticas realizadas este mes",
  },
  allTime: {
    title: "Histórico general",
    caption: "Todo tu progreso desde que empezaste",
  },
};

function getPeriodStart(period: RankingPeriod, now: Date): Date | null {
  if (period === "allTime") return null;

  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  if (period === "month") {
    start.setDate(1);
  } else {
    const daysSinceMonday = (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - daysSinceMonday);
  }

  return start;
}

export default function Ranking() {
  const [period, setPeriod] = useState<RankingPeriod>("week");
  const [userName, setUserName] = useState("Tú");
  const [totalXP, setTotalXP] = useState(0);
  const [practicePoints, setPracticePoints] = useState<Record<"week" | "month", number>>({
    week: 0,
    month: 0,
  });

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadRankingData = async () => {
        try {
          const [user, xpProgress, practiceProgress] = await Promise.all([
            loadUser(),
            getXPProgress(),
            getPracticeProgress(),
          ]);

          if (!isActive) return;

          setUserName(user?.name?.trim() || "Tú");
          setTotalXP(xpProgress.totalXP);

          const now = new Date();
          const sumPeriodPoints = (selectedPeriod: "week" | "month") => {
            const start = getPeriodStart(selectedPeriod, now);
            return practiceProgress.records.reduce((sum, record) => {
              const lastAttempt = new Date(record.lastAttemptAt);
              if (Number.isNaN(lastAttempt.getTime()) || !start || lastAttempt < start) {
                return sum;
              }

              const practice = practiceContents.find(
                (item) => item.id === record.practiceId,
              );
              const earnedXP = practice
                ? practice.baseXP +
                  record.bestScore * practice.bonusXPPerCorrectAnswer
                : record.bestScore * 10;

              return sum + earnedXP;
            }, 0);
          };

          setPracticePoints({
            week: sumPeriodPoints("week"),
            month: sumPeriodPoints("month"),
          });
        } catch (error) {
          console.error("Error al cargar el ranking:", error);
        }
      };

      loadRankingData();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const userPoints = period === "allTime" ? totalXP : practicePoints[period];
  const participants = useMemo(
    () => getRankingParticipants(period, userName, userPoints),
    [period, userName, userPoints],
  );
  const userPosition = participants.findIndex((participant) => participant.isCurrentUser) + 1;
  const copy = periodCopy[period];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.duration(320)}>
          <RankingHeader />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(50).duration(320)}>
          <RankingPeriodTabs selected={period} onSelect={setPeriod} />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).duration(340)}>
          <View style={styles.positionCard}>
            <View style={styles.positionIcon}>
              <Text style={styles.positionNumber}>#{userPosition}</Text>
            </View>
            <View style={styles.positionCopy}>
              <Text style={styles.positionLabel}>TU POSICIÓN · {copy.title.toUpperCase()}</Text>
              <Text style={styles.positionName} numberOfLines={1}>{userName}</Text>
              <Text style={styles.positionCaption}>{copy.caption}</Text>
            </View>
            <View style={styles.scorePill}>
              <Text style={styles.scoreValue}>{userPoints.toLocaleString("es-BO")}</Text>
              <Text style={styles.scoreLabel}>XP</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View entering={FadeIn.delay(130).duration(300)}>
          <View style={styles.podiumCard}>
            <View style={styles.podiumHeading}>
              <View>
                <Text style={styles.podiumTitle}>Los mejores</Text>
                <Text style={styles.podiumSubtitle}>{copy.title}</Text>
              </View>
              <Text style={styles.demoLabel}>DEMO</Text>
            </View>
            <RankingPodium participants={participants.slice(0, 3)} />
          </View>
        </Animated.View>

        <RankingList
          participants={participants}
          currentUserId="current-user"
        />

        <Animated.Text
          entering={FadeIn.delay(180).duration(300)}
          style={styles.disclaimer}
        >
          Las posiciones de otros participantes son datos de muestra. Tu progreso
          se calcula con la información guardada en este dispositivo.
        </Animated.Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  positionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: palette.primary[300],
    backgroundColor: colors.card,
  },
  positionIcon: {
    width: theme.sizes.avatar,
    height: theme.sizes.avatar,
    borderRadius: theme.radius.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.primary[500],
  },
  positionNumber: { color: colors.text, fontSize: theme.text.heading, fontWeight: "900" },
  positionCopy: { flex: 1, gap: theme.spacing.xs },
  positionLabel: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "800",
    letterSpacing: 0.7,
  },
  positionName: { color: colors.text, fontSize: theme.text.body, fontWeight: "800" },
  positionCaption: { color: colors.textMuted, fontSize: theme.text.caption },
  scorePill: { alignItems: "flex-end", gap: theme.spacing.xs },
  scoreValue: { color: colors.text, fontSize: theme.text.heading, fontWeight: "900" },
  scoreLabel: { color: colors.textMuted, fontSize: theme.text.caption, fontWeight: "700" },
  podiumCard: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  podiumHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.xs,
  },
  podiumTitle: { color: colors.text, fontSize: theme.text.heading, fontWeight: "800" },
  podiumSubtitle: { color: colors.textMuted, fontSize: theme.text.caption, marginTop: theme.spacing.xs },
  demoLabel: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "900",
    letterSpacing: 1,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    overflow: "hidden",
    backgroundColor: palette.primary[500],
  },
  disclaimer: {
    color: palette.neutral[500],
    fontSize: theme.text.caption,
    lineHeight: theme.text.small + theme.spacing.xs,
    textAlign: "center",
    paddingHorizontal: theme.spacing.md,
  },
});
