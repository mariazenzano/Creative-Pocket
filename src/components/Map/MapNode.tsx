import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { MapNode as MapNodeData, MapNodeStatus } from "../../types/map";

import { theme } from "../../constants/theme";

type MapNodeProps = {
  node: MapNodeData;
  status: MapNodeStatus;
  onPress: (nodeId: string) => void;
};

const nodeIcons = {
  lesson: "book-outline",
  exercise: "pencil-outline",
  challenge: "star-outline",
  project: "trophy-outline",
} as const;

const nodeLabels = {
  lesson: "LECCIÓN",
  exercise: "PRÁCTICA",
  challenge: "DESAFÍO",
  project: "PROYECTO",
} as const;

export default function MapNode({ node, status, onPress }: MapNodeProps) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  const isSpecial = node.type === "challenge" || node.type === "project";

  const iconColor = isLocked
    ? theme.colors.textMuted
    : isCompleted
      ? theme.colors.secondary
      : theme.colors.primary;

  const backgroundColor = isLocked
    ? theme.colors.border
    : isCompleted
      ? theme.colors.secondarySoft
      : theme.colors.primarySoft;

  const handlePress = () => {
    if (!isLocked) {
      onPress(node.id);
    }
  };

  return (
    <View style={styles.container}>
      {/* Activity information */}
      <View style={styles.labelContainer}>
        <Text style={styles.nodeTitle} numberOfLines={2}>
          {node.title}
        </Text>

        <View style={styles.typeBadge}>
          <Text style={styles.nodeType}>{nodeLabels[node.type]}</Text>
        </View>
      </View>

      {/* Floating platform */}
      <Pressable
        onPress={handlePress}
        disabled={isLocked}
        accessibilityRole="button"
        accessibilityState={{ disabled: isLocked }}
        accessibilityLabel={`${node.title}. ${nodeLabels[node.type]}. ${
          isLocked ? "Bloqueado" : isCompleted ? "Completado" : "Disponible"
        }`}
        style={({ pressed }) => [
          styles.nodeButton,
          isLocked && styles.locked,
          pressed && !isLocked && styles.pressed,
        ]}
      >
        {/* Lower platform shadow */}
        <View style={[styles.nodeShadow, { backgroundColor: iconColor }]} />

        {/* Main platform */}
        <View
          style={[
            styles.nodeSurface,
            {
              backgroundColor,
              borderColor: iconColor,
            },
          ]}
        >
          {/* Inner circular surface */}
          <View style={styles.iconContainer}>
            <Ionicons
              name={
                isLocked
                  ? "lock-closed"
                  : isCompleted
                    ? "checkmark"
                    : nodeIcons[node.type]
              }
              size={29}
              color={iconColor}
            />
          </View>

          {/* Small decorative light */}
          {!isLocked && (
            <View style={[styles.lightDot, { backgroundColor: iconColor }]} />
          )}
        </View>

        {/* Special activity badge */}
        {isSpecial && (
          <View
            style={[
              styles.specialBadge,
              {
                backgroundColor:
                  node.type === "project"
                    ? theme.colors.secondary
                    : theme.colors.primary,
              },
            ]}
          >
            <Ionicons
              name={node.type === "project" ? "trophy" : "star"}
              size={12}
              color={theme.colors.text}
            />
          </View>
        )}

        {/* Completion indicator */}
        {!isLocked && (
          <View
            style={[
              styles.statusDot,
              {
                backgroundColor: isCompleted
                  ? theme.colors.secondary
                  : theme.colors.primary,
              },
            ]}
          />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 125,
    alignItems: "center",
  },

  labelContainer: {
    minHeight: 48,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },

  nodeTitle: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    maxWidth: 120,
  },

  typeBadge: {
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  nodeType: {
    color: theme.colors.textMuted,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  nodeButton: {
    width: 76,
    height: 76,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  nodeSurface: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    elevation: 9,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 6,
  },

  nodeShadow: {
    position: "absolute",
    bottom: 1,
    width: 65,
    height: 65,
    borderRadius: 33,
    opacity: 0.3,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: theme.colors.card,
    justifyContent: "center",
    alignItems: "center",
  },

  lightDot: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    top: 7,
    right: 10,
    opacity: 0.65,
  },

  specialBadge: {
    position: "absolute",
    top: -3,
    left: -2,
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.background,
    elevation: 4,
  },

  statusDot: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    top: 2,
    right: 3,
    borderWidth: 2,
    borderColor: theme.colors.background,
  },

  locked: {
    opacity: 0.55,
  },

  pressed: {
    transform: [{ scale: 0.92 }, { translateY: 3 }],
  },
});
