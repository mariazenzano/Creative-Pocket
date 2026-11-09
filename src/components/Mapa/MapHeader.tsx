
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { theme } from "../../constants/theme";

type MapHeaderProps = {
  completedCount: number;
  totalCount: number;
};

export default function MapHeader({
  completedCount,
  totalCount,
}: MapHeaderProps) {
  const router = useRouter();

  // Calculamos el porcentaje de progreso
  const progress =
    totalCount > 0
      ? Math.round((completedCount / totalCount) * 100)
      : 0;

  return (
    <View style={styles.container}>

      {/* Fila superior: botón de regreso y título */}
      <View style={styles.topRow}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.colors.text}
          />
        </Pressable>

        <Text style={styles.title}>
          Mapa de aprendizaje
        </Text>
      </View>

      {/* Indicador de progreso */}
      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressLabel}>
            Tu progreso
          </Text>

          <Text style={styles.progressPercentage}>
            {progress}%
          </Text>
        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress}%` },
            ]}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.card,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },

  progressContainer: {
    marginTop: theme.spacing.lg,
  },

  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.sm,
  },

  progressLabel: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
  },

  progressPercentage: {
    color: theme.colors.secondary,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  progressBackground: {
    height: 8,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.border,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.secondary,
  },
});
