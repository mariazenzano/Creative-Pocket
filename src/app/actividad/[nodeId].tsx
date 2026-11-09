import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { completeNode } from "../../storage/mapProgress";

import { theme } from "../../constants/theme";
import { mapNodes } from "../../data/mapNodes";
import type { MapNode } from "../../types/map";

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
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  // Recuperamos el identificador que viene en la URL.
  const { nodeId } = useLocalSearchParams<{ nodeId: string }>();

  // Buscamos la actividad correspondiente en nuestros datos.
  const activity = mapNodes.find((node) => node.id === nodeId);

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
  const handleCompleteActivity = async () => {
    try {
      setIsSaving(true);

      await completeNode(activity.id);

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
        <Pressable
          style={[styles.completeButton, { opacity: isSaving ? 0.6 : 1 }]}
          onPress={handleCompleteActivity}
          disabled={isSaving}
        ></Pressable>

        <Text style={styles.infoText}>
          Aquí encontrarás el contenido y los ejercicios necesarios para
          completar esta actividad.
        </Text>
      </View>
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
  completeButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    marginTop: theme.spacing.xl,
  },

  completeButtonText: {
    color: "#FFFFFF",
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
});
