import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, palette } from "@/constants/colors";
import { theme } from "@/constants/theme";

import type { RankingPeriod } from "./types";

const options: { id: RankingPeriod; label: string }[] = [
  { id: "week", label: "Semana" },
  { id: "month", label: "Mes" },
  { id: "allTime", label: "Histórico" },
];

type Props = {
  selected: RankingPeriod;
  onSelect: (period: RankingPeriod) => void;
};

export default function RankingPeriodTabs({ selected, onSelect }: Props) {
  return (
    <View style={styles.container} accessibilityRole="tablist">
      {options.map((option) => {
        const isSelected = selected === option.id;

        return (
          <Pressable
            key={option.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected }}
            onPress={() => onSelect(option.id)}
            style={({ pressed }) => [
              styles.tab,
              isSelected && styles.selectedTab,
              pressed && styles.pressed,
            ]}
          >
            <Text style={[styles.label, isSelected && styles.selectedLabel]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: theme.spacing.xs,
    padding: theme.spacing.xs,
    borderRadius: theme.radius.lg,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tab: {
    flex: 1,
    minHeight: theme.sizes.touchTarget,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.md,
  },
  selectedTab: { backgroundColor: palette.primary[200] },
  pressed: { opacity: 0.88, transform: [{ scale: 0.97 }] },
  label: { color: colors.textMuted, fontSize: theme.text.small, fontWeight: "700" },
  selectedLabel: { color: colors.text },
});
