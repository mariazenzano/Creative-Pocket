import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import type { Region, RegionId, RegionStatus } from "../../types/map";

// Información que recibirá nuestra isla
type IslandProps = {
  region: Region;
  status: RegionStatus;
  completedCount: number;
  totalCount: number;
  onPress: (regionId: RegionId) => void;
};

export default function Island({
  region,
  status,
  completedCount,
  totalCount,
  onPress,
}: IslandProps) {
  // Comprobamos si la isla está bloqueada
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  // Calculamos el porcentaje de progreso
  const progressPercentage =
    totalCount > 0
      ? Math.min(100, Math.max(0, (completedCount / totalCount) * 100))
      : 0;

  // Elegimos el icono según el estado
  const statusIcon =
    status === "locked"
      ? "lock-closed"
      : isCompleted
        ? "checkmark-circle"
        : "arrow-forward-circle";

  return (
    <Pressable
      style={[
        styles.container,
        {
          borderColor: region.accentColor,
          borderWidth: isCompleted ? 2.5 : 1.5,
          opacity: isLocked ? 0.55 : 1,
          backgroundColor: isCompleted
            ? `${region.accentColor}18`
            : theme.colors.card,
        },
      ]}
      disabled={isLocked}
      onPress={() => onPress(region.id)}
    >
      {/* Círculo que representa la isla */}
      <View
        style={[
          styles.island,
          {
            backgroundColor: region.accentColor,
            transform: [{ scale: isCompleted ? 1.08 : 1 }],
          },
        ]}
      >
        <Ionicons
          name={region.iconName as keyof typeof Ionicons.glyphMap}
          size={36}
          color="#FFFFFF"
        />
      </View>

      {/* Nombre de la región */}
      <Text style={styles.title}>{region.title}</Text>

      {/* Estado de la región */}
      <View style={styles.statusContainer}>
        <Ionicons name={statusIcon} size={15} color={region.accentColor} />

        <Text style={styles.statusText}>
          {isLocked ? "Bloqueada" : isCompleted ? "Completada" : "Explorar"}
        </Text>
      </View>

      {/* Progreso de actividades */}
      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressLabel}>Progreso</Text>

          <Text style={styles.progressCount}>
            {completedCount}/{totalCount}
          </Text>
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progressPercentage}%`,
                backgroundColor: region.accentColor,
              },
            ]}
          />
        </View>
      </View>

      {/* Indicador adicional de especialidad completada */}
      {isCompleted && (
        <View
          style={[
            styles.completedBadge,
            { backgroundColor: region.accentColor },
          ]}
        >
          <Ionicons name="trophy" size={12} color="#FFFFFF" />
          <Text style={styles.completedBadgeText}>¡Lograda!</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    minHeight: 175,
    borderRadius: theme.radius.lg,
    borderWidth: 1.5,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },

  island: {
    width: 76,
    height: 76,
    borderRadius: theme.radius.full,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
    textAlign: "center",
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  statusText: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
  },

  progressContainer: {
    width: "100%",
    gap: 5,
  },

  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progressLabel: {
    color: theme.colors.textMuted,
    fontSize: 10,
  },

  progressCount: {
    color: theme.colors.text,
    fontSize: 10,
    fontWeight: "bold",
  },

  progressTrack: {
    height: 6,
    width: "100%",
    borderRadius: 10,
    backgroundColor: theme.colors.border,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
  },

  completedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: theme.radius.full,
  },

  completedBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
});
