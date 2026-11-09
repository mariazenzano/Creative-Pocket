import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";

type MetricCardProps = {
  title: string;
  value: string | number;
  detail: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  iconColor: string;
  progress: number;
};

export default function MetricCard({
  title,
  value,
  detail,
  iconName,
  iconColor,
  progress,
}: MetricCardProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  const progressWidth = `${safeProgress}%` as `${number}%`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={23} color={iconColor} />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.detail}>{detail}</Text>

      <View
        style={styles.progressBackground}
        accessibilityRole="progressbar"
        accessibilityValue={{
          min: 0,
          max: 100,
          now: safeProgress,
        }}
      >
        <View style={[styles.progressFill, { width: progressWidth }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 140,
    padding: 15,
    borderRadius: 20,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    gap: 9,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    flex: 1,
    color: theme.colors.textMuted,
    fontSize: 11,
    fontWeight: "600",
  },

  value: {
    color: theme.colors.text,
    fontSize: 25,
    fontWeight: "800",
  },

  detail: {
    color: theme.colors.textMuted,
    fontSize: 10,
  },

  progressBackground: {
    width: "100%",
    height: 6,
    borderRadius: 99,
    backgroundColor: theme.colors.background,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 99,
    backgroundColor: theme.colors.primary,
  },
});
