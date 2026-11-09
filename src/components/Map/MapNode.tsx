import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text } from "react-native";

import type { MapNode as MapNodeData, MapNodeStatus } from "../../types/map";

import { theme } from "../../constants/theme";

type MapNodeProps = {
  node: MapNodeData;
  status: MapNodeStatus;
  onPress: (nodeId: string) => void;
};

// Elegimos un icono según el tipo de actividad
function getNodeIcon(type: MapNodeData["type"]) {
  switch (type) {
    case "lesson":
      return "book-outline";

    case "exercise":
      return "pencil-outline";

    case "challenge":
      return "star-outline";

    case "project":
      return "trophy-outline";

    default:
      return "ellipse-outline";
  }
}

export default function MapNode({ node, status, onPress }: MapNodeProps) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  // Definimos el color según el estado
  const nodeColor = isLocked
    ? theme.colors.textMuted
    : isCompleted
      ? theme.colors.secondary
      : theme.colors.primary;

  // Elegimos el icono de estado
  const statusIcon = isLocked
    ? "lock-closed"
    : isCompleted
      ? "checkmark"
      : "play";

  return (
    <Pressable
      style={[
        styles.container,
        {
          opacity: isLocked ? 0.5 : 1,
        },
      ]}
      disabled={isLocked}
      onPress={() => onPress(node.id)}
    >
      <Text style={styles.title} numberOfLines={2}>
        {node.title}
      </Text>

      <Pressable
        style={[styles.nodeCircle, { backgroundColor: nodeColor }]}
        disabled={isLocked}
        onPress={() => onPress(node.id)}
      >
        <Ionicons
          name={getNodeIcon(node.type) as keyof typeof Ionicons.glyphMap}
          size={28}
          color="#FFFFFF"
        />

        <Ionicons
          name={statusIcon}
          size={14}
          color="#FFFFFF"
          style={styles.statusIcon}
        />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    alignItems: "center",
    gap: theme.spacing.xs,
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.small,
    fontWeight: "bold",
    textAlign: "center",
    minHeight: 30,
  },

  nodeCircle: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.full,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  statusIcon: {
    position: "absolute",
    right: 2,
    bottom: 2,
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.full,
    overflow: "hidden",
  },
});
