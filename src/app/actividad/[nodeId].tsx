import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { theme } from "../../constants/theme";
import { mapNodes } from "../../data/mapNodes";
import { regions } from "../../data/regions";
import type { MapNode, Region } from "../../types/map";

import { completeNode, getCompletedNodeIds } from "../../storage/mapProgress";

import { getCompletedRegionIds } from "../../utils/mapProgress";

function getActivityLabel(type: MapNode["type"]): string {
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

export default function ActivityScreen() {
  const router = useRouter();

  const [isSaving, setIsSaving] = useState(false);
  const [completedRegion, setCompletedRegion] = useState<Region | null>(null);

  // Recuperamos el identificador de la actividad
  const { nodeId } = useLocalSearchParams<{ nodeId: string }>();

  // Buscamos la actividad correspondiente
  const activity = mapNodes.find((node) => node.id === nodeId);

  // Comprobamos si existe la actividad
  if (!activity) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.title}>Actividad no encontrada</Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  // Guardamos la actividad y comprobamos si completamos una región
  const handleCompleteActivity = async () => {
    try {
      setIsSaving(true);

      // Recuperamos el progreso anterior
      const previousCompletedNodes = await getCompletedNodeIds();

      // Guardamos la actividad actual
      const updatedCompletedNodes = await completeNode(activity.id);

      // Calculamos las regiones completadas antes y después
      const previousCompletedRegions = getCompletedRegionIds(
        regions,
        mapNodes,
        previousCompletedNodes,
      );

      const updatedCompletedRegions = getCompletedRegionIds(
        regions,
        mapNodes,
        updatedCompletedNodes,
      );

      // Buscamos una región que acaba de completarse
      const newlyCompletedRegionId = updatedCompletedRegions.find(
        (regionId) => !previousCompletedRegions.includes(regionId),
      );

      if (newlyCompletedRegionId) {
        const region = regions.find(
          (item) => item.id === newlyCompletedRegionId,
        );

        if (region) {
          setCompletedRegion(region);
          return;
        }
      }

      // Si no completamos una región, regresamos al mapa
      router.back();
    } catch (error) {
      Alert.alert(
        "No se pudo guardar",
        "Intenta completar la actividad nuevamente.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  // Pantalla de celebración
  if (completedRegion) {
    return (
      <View style={styles.celebrationScreen}>
        <View
          style={[
            styles.celebrationIcon,
            { backgroundColor: `${completedRegion.accentColor}22` },
          ]}
        >
          <Ionicons
            name="trophy"
            size={76}
            color={completedRegion.accentColor}
          />
        </View>

        <Text style={styles.celebrationEyebrow}>¡ESPECIALIDAD COMPLETADA!</Text>

        <Text style={styles.celebrationTitle}>¡Lo lograste!</Text>

        <Text style={styles.celebrationDescription}>
          Has completado todas las actividades de
        </Text>

        <Text
          style={[styles.regionTitle, { color: completedRegion.accentColor }]}
        >
          {completedRegion.title}
        </Text>

        <View
          style={[
            styles.rewardCard,
            { borderColor: completedRegion.accentColor },
          ]}
        >
          <Ionicons
            name="medal"
            size={34}
            color={completedRegion.accentColor}
          />

          <View style={styles.rewardTextContainer}>
            <Text style={styles.rewardTitle}>Nueva especialidad dominada</Text>

            <Text style={styles.rewardDescription}>
              Tu progreso ha quedado guardado en Creative Pocket.
            </Text>
          </View>
        </View>

        <Pressable
          style={[
            styles.celebrationButton,
            { backgroundColor: completedRegion.accentColor },
          ]}
          onPress={() => router.back()}
        >
          <Text style={styles.celebrationButtonText}>Continuar explorando</Text>

          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </Pressable>
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
        <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
      </Pressable>

      <View style={styles.activityIcon}>
        <Ionicons name="book-outline" size={48} color={theme.colors.primary} />
      </View>

      <Text style={styles.activityType}>{getActivityLabel(activity.type)}</Text>

      <Text style={styles.title}>{activity.title}</Text>

      <Text style={styles.description}>{activity.description}</Text>

      <View style={styles.infoCard}>
        <Ionicons
          name="sparkles-outline"
          size={24}
          color={theme.colors.secondary}
        />

        <Text style={styles.infoText}>
          Aquí encontrarás el contenido y los ejercicios necesarios para
          completar esta actividad.
        </Text>
      </View>

      <Pressable
        style={[styles.completeButton, { opacity: isSaving ? 0.6 : 1 }]}
        onPress={handleCompleteActivity}
        disabled={isSaving}
      >
        <Text style={styles.completeButtonText}>
          {isSaving ? "Guardando..." : "Completar actividad"}
        </Text>

        <Ionicons name="checkmark-circle-outline" size={22} color="#FFFFFF" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    flexGrow: 1,
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  activityIcon: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#7557FF22",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: theme.spacing.lg,
  },

  activityType: {
    color: theme.colors.secondary,
    fontSize: theme.text.heading,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },

  description: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    textAlign: "center",
    lineHeight: 22,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.xxl,
  },

  infoText: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    flex: 1,
    lineHeight: 21,
  },

  completeButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xl,
  },

  completeButtonText: {
    color: "#FFFFFF",
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },

  errorContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginTop: theme.spacing.lg,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  // Estilos de la celebración
  celebrationScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.xl,
  },

  celebrationIcon: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  celebrationEyebrow: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1.5,
  },

  celebrationTitle: {
    color: theme.colors.text,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing.md,
  },

  celebrationDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    textAlign: "center",
    marginTop: theme.spacing.lg,
  },

  regionTitle: {
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing.sm,
  },

  rewardCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderWidth: 1.5,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.xxl,
  },

  rewardTextContainer: {
    flex: 1,
    gap: 4,
  },

  rewardTitle: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  rewardDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
    lineHeight: 18,
  },

  celebrationButton: {
    width: "100%",
    padding: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xxl,
  },

  celebrationButtonText: {
    color: "#FFFFFF",
    fontSize: theme.text.body,
    fontWeight: "bold",
  },
});
