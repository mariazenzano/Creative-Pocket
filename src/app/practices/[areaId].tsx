import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { styles } from "../../components/practices/PracticeAreaStyles";
import { colors, palette } from "../../constants/colors";
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
