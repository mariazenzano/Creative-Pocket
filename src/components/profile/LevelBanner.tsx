import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";

type LevelBannerProps = {
  level: number;
  currentXP: number;
  nextLevelXP: number;
  onRankingPress: () => void;
};

export default function LevelBanner({
  level,
  currentXP,
  nextLevelXP,
  onRankingPress,
}: LevelBannerProps) {
  const progress =
    nextLevelXP > 0 ? Math.min(Math.max(currentXP / nextLevelXP, 0), 1) : 0;

  const progressWidth = `${progress * 100}%` as `${number}%`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>TU NIVEL</Text>
          <Text style={styles.level}>{level}</Text>
        </View>

        <View style={styles.medal}>
          <Ionicons name="trophy" size={34} color={theme.colors.secondary} />
        </View>
      </View>

      <View style={styles.progressInfo}>
        <Text style={styles.progressLabel}>Progreso al siguiente nivel</Text>

        <Text style={styles.xpText}>
          {currentXP}/{nextLevelXP} XP
        </Text>
      </View>

      <View
        style={styles.progressBackground}
        accessibilityRole="progressbar"
        accessibilityValue={{
          min: 0,
          max: 100,
          now: Math.round(progress * 100),
        }}
      >
        <View style={[styles.progressFill, { width: progressWidth }]} />
      </View>

      <Pressable
        style={styles.rankingButton}
        onPress={onRankingPress}
        accessibilityRole="button"
      >
        <Ionicons name="podium-outline" size={17} color={theme.colors.text} />

        <Text style={styles.rankingText}>Ver ranking</Text>

        <Ionicons name="arrow-forward" size={16} color={theme.colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 18,
    borderRadius: 24,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.primarySoft,
    gap: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    color: theme.colors.textMuted,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  level: {
    color: theme.colors.text,
    fontSize: 42,
    fontWeight: "800",
  },

  medal: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  progressLabel: {
    color: theme.colors.textMuted,
    fontSize: 11,
    flexShrink: 1,
  },

  xpText: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: "700",
  },

  progressBackground: {
    width: "100%",
    height: 10,
    borderRadius: 99,
    backgroundColor: theme.colors.background,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 99,
    backgroundColor: theme.colors.primary,
  },

  rankingButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 99,
    backgroundColor: theme.colors.secondary,
  },

  rankingText: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: "700",
  },
});
