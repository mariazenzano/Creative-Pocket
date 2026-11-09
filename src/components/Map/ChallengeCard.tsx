import Ionicons from "@expo/vector-icons/Ionicons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import type { MapNode as MapNodeData, MapNodeStatus } from "../../types/map";

import { theme } from "../../constants/theme";

type ChallengeCardProps = {
  node: MapNodeData | null;
  status: MapNodeStatus;
  onClose: () => void;
  onStart: (nodeId: string) => void;
};

// Traducimos el tipo de actividad para mostrarlo en pantalla
function getTypeLabel(type: MapNodeData["type"]) {
  switch (type) {
    case "lesson":
      return "Lección";

    case "exercise":
      return "Ejercicio";

    case "challenge":
      return "Desafío";

    case "project":
      return "Proyecto";

    default:
      return "Actividad";
  }
}

export default function ChallengeCard({
  node,
  status,
  onClose,
  onStart,
}: ChallengeCardProps) {
  // Si no hay actividad seleccionada, no mostramos la tarjeta
  if (!node) {
    return null;
  }

  const isCompleted = status === "completed";

  return (
    <Modal
      visible={node !== null}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Botón para cerrar */}
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color={theme.colors.text} />
          </Pressable>

          {/* Icono de la actividad */}
          <View style={styles.iconContainer}>
            <Ionicons
              name={
                node.type === "lesson"
                  ? "book-outline"
                  : node.type === "exercise"
                    ? "pencil-outline"
                    : node.type === "challenge"
                      ? "star-outline"
                      : "trophy-outline"
              }
              size={36}
              color={theme.colors.secondary}
            />
          </View>

          <Text style={styles.type}>{getTypeLabel(node.type)}</Text>

          <Text style={styles.title}>{node.title}</Text>

          <Text style={styles.description}>{node.description}</Text>

          {/* Estado de la actividad */}
          {isCompleted && (
            <View style={styles.completedContainer}>
              <Ionicons
                name="checkmark-circle"
                size={18}
                color={theme.colors.secondary}
              />
              <Text style={styles.completedText}>Actividad completada</Text>
            </View>
          )}

          {/* Botón principal */}
          <Pressable
            style={styles.startButton}
            onPress={() => onStart(node.id)}
          >
            <Text style={styles.startButtonText}>
              {isCompleted ? "Volver a practicar" : "Comenzar actividad"}
            </Text>

            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  closeButton: {
    alignSelf: "flex-end",
    padding: theme.spacing.xs,
  },

  iconContainer: {
    width: 76,
    height: 76,
    borderRadius: theme.radius.full,
    backgroundColor: "#7557FF22",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: theme.spacing.md,
  },

  type: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
    fontWeight: "bold",
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing.sm,
  },

  description: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    textAlign: "center",
    lineHeight: 22,
    marginTop: theme.spacing.md,
  },

  completedContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
    marginTop: theme.spacing.md,
  },

  completedText: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
  },

  startButton: {
    width: "100%",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginTop: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.sm,
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: theme.text.body,
    fontWeight: "bold",
  },
});
