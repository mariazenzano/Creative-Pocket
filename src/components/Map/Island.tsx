import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import type { Region, RegionId, RegionStatus } from "../../types/map";

// Información que recibirá nuestra isla
type IslandProps = {
  region: Region;
  status: RegionStatus;
  onPress: (regionId: RegionId) => void;
};

export default function Island({ region, status, onPress }: IslandProps) {
  // Comprobamos si la isla está bloqueada
  const isLocked = status === "locked";

  // Elegimos el icono según el estado
  const statusIcon =
    status === "locked"
      ? "lock-closed"
      : status === "completed"
        ? "checkmark-circle"
        : "arrow-forward-circle";

  return (
    <Pressable
      style={[
        styles.container,
        {
          borderColor: region.accentColor,
          opacity: isLocked ? 0.55 : 1,
        },
      ]}
      disabled={isLocked}
      onPress={() => onPress(region.id)}
    >
      {/* Círculo que representa la isla */}
      <View style={[styles.island, { backgroundColor: region.accentColor }]}>
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
          {status === "locked"
            ? "Bloqueada"
            : status === "completed"
              ? "Completada"
              : "Explorar"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    minHeight: 150,
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
});
