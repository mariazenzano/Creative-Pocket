import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { colors, palette } from "../../constants/colors";
import { theme } from "../../constants/theme";
import { mapNodes } from "../../data/mapNodes";
import { regions } from "../../data/regions";
import { getCompletedNodeIds } from "../../storage/mapProgress";

const typeLabels = {
  exercise: "Ejercicio",
  challenge: "Reto",
  project: "Proyecto",
};

const typeIcons = {
  exercise: "pencil-outline",
  challenge: "trophy-outline",
  project: "rocket-outline",
} as const;

export default function PracticeAreaScreen() {
  const router = useRouter();
  const { areaId } = useLocalSearchParams<{ areaId: string }>();

  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadProgress = async () => {
        try {
          const completedIds = await getCompletedNodeIds();

          if (isActive) {
            setCompletedNodeIds(completedIds);
          }
        } catch (error) {
          console.error("Error loading practice progress:", error);
        } finally {
          if (isActive) {
            setIsLoading(false);
          }
        }
      };

      loadProgress();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const currentRegion = regions.find((region) => region.id === areaId);

  const areaNodes = mapNodes.filter(
    (node) => node.regionId === areaId && node.type !== "lesson",
  );

  // Connects practice availability with map progress.
  const availableNodes = areaNodes.filter(
    (node) =>
      !completedNodeIds.includes(node.id) &&
      node.requiredNodeIds.every((requiredId) =>
        completedNodeIds.includes(requiredId),
      ),
  );

  const handlePracticePress = (nodeId: string) => {
    router.push({
      pathname: "/actividad/[nodeId]",
      params: { nodeId },
    });
  };

  if (!currentRegion) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Área no encontrada</Text>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.backText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={palette.primary[100]} />
        <Text style={styles.loadingText}>Cargando prácticas...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color={colors.text} />
        <Text style={styles.backText}>Volver a prácticas</Text>
      </Pressable>

      <View style={styles.heading}>
        <View
          style={[
            styles.areaIcon,
            { backgroundColor: `${currentRegion.accentColor}25` },
          ]}
        >
          <Ionicons
            name={currentRegion.iconName as keyof typeof Ionicons.glyphMap}
            size={32}
            color={currentRegion.accentColor}
          />
        </View>

        <Text style={styles.title}>{currentRegion.title}</Text>

        <Text style={styles.subtitle}>{currentRegion.description}</Text>
      </View>

      <View style={styles.progressCard}>
        <View>
          <Text style={styles.progressNumber}>
            {availableNodes.length} de {areaNodes.length}
          </Text>

          <Text style={styles.progressLabel}>Prácticas disponibles</Text>
        </View>

        <Ionicons
          name="layers-outline"
          size={28}
          color={palette.primary[100]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prácticas del área</Text>

        {areaNodes.map((node) => {
          const isCompleted = completedNodeIds.includes(node.id);

          const isAvailable = node.requiredNodeIds.every((requiredId) =>
            completedNodeIds.includes(requiredId),
          );

          const isLocked = !isCompleted && !isAvailable;

          const missingRequirements = node.requiredNodeIds
            .filter((requiredId) => !completedNodeIds.includes(requiredId))
            .map(
              (requiredId) =>
                mapNodes.find((item) => item.id === requiredId)?.title,
            )
            .filter(Boolean);

          return (
            <View
              key={node.id}
              style={[styles.practiceCard, isLocked && styles.lockedCard]}
            >
              <View style={styles.practiceTop}>
                <View style={styles.practiceIcon}>
                  <Ionicons
                    name={typeIcons[node.type as keyof typeof typeIcons]}
                    size={23}
                    color={
                      isLocked ? colors.textMuted : currentRegion.accentColor
                    }
                  />
                </View>

                <View style={styles.statusContainer}>
                  {isCompleted ? (
                    <Text style={styles.completedStatus}>Completada</Text>
                  ) : isLocked ? (
                    <Ionicons
                      name="lock-closed"
                      size={17}
                      color={colors.textMuted}
                    />
                  ) : (
                    <Text style={styles.availableStatus}>Disponible</Text>
                  )}
                </View>
              </View>

              <Text style={styles.practiceType}>
                {typeLabels[node.type as keyof typeof typeLabels]}
              </Text>

              <Text style={styles.practiceTitle}>{node.title}</Text>

              <Text style={styles.practiceDescription}>{node.description}</Text>

              {isLocked ? (
                <View style={styles.requirementsContainer}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={15}
                    color={colors.textMuted}
                  />

                  <Text style={styles.requirementsText}>
                    Completa primero: {missingRequirements.join(", ")}
                  </Text>
                </View>
              ) : (
                <Pressable
                  style={styles.practiceButton}
                  onPress={() => handlePracticePress(node.id)}
                >
                  <Text style={styles.practiceButtonText}>
                    {isCompleted ? "Repetir práctica" : "Comenzar práctica"}
                  </Text>

                  <Ionicons
                    name="arrow-forward"
                    size={17}
                    color={palette.primary[500]}
                  />
                </Pressable>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
    gap: theme.spacing.lg,
  },
  centered: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  loadingText: {
    color: colors.textMuted,
    fontSize: theme.text.body,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  backText: {
    color: colors.text,
    fontSize: theme.text.body,
  },
  heading: {
    alignItems: "flex-start",
    gap: theme.spacing.sm,
  },
  areaIcon: {
    width: 60,
    height: 60,
    borderRadius: theme.radius.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: theme.text.body * 1.5,
  },
  progressCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressNumber: {
    color: colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },
  progressLabel: {
    color: colors.textMuted,
    fontSize: theme.text.small,
    marginTop: theme.spacing.xs,
  },
  section: {
    gap: theme.spacing.md,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: theme.text.subtitle,
    fontWeight: "bold",
  },
  practiceCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  lockedCard: {
    opacity: 0.65,
  },
  practiceTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  practiceIcon: {
    width: 43,
    height: 43,
    borderRadius: theme.radius.md,
    backgroundColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  statusContainer: {
    alignItems: "flex-end",
  },
  completedStatus: {
    color: palette.secondary[200],
    fontSize: theme.text.caption,
    fontWeight: "bold",
  },
  availableStatus: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "bold",
  },
  practiceType: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "600",
  },
  practiceTitle: {
    color: colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
  practiceDescription: {
    color: colors.textMuted,
    fontSize: theme.text.small,
    lineHeight: theme.text.small * 1.5,
  },
  requirementsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xs,
  },
  requirementsText: {
    color: colors.textMuted,
    fontSize: theme.text.caption,
    flex: 1,
    lineHeight: theme.text.caption * 1.7,
  },
  practiceButton: {
    backgroundColor: palette.primary[100],
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm + theme.spacing.xs,
    marginTop: theme.spacing.xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  practiceButtonText: {
    color: palette.primary[500],
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
});
