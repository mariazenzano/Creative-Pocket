import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "../constants/theme";

export default function Mapa() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color={theme.colors.text}
          />
        </Pressable>

        <Text style={styles.headerTitle}>Mi mapa</Text>
      </View>

      {/* Introducción */}
      <View style={styles.introduction}>
        <Text style={styles.title}>Tu ruta creativa</Text>

        <Text style={styles.description}>
          Avanza paso a paso, descubre nuevas habilidades
          y construye tu camino como diseñador.
        </Text>
      </View>

      {/* Espacio para el recorrido de aprendizaje */}
      <View style={styles.mapContainer}>
        <Ionicons
          name="map-outline"
          size={48}
          color={theme.colors.secondary}
        />

        <Text style={styles.mapTitle}>
          Tu aventura comienza aquí
        </Text>

        <Text style={styles.mapDescription}>
          Próximamente encontrarás aquí tus niveles,
          desafíos y actividades.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },

  introduction: {
    marginTop: theme.spacing.xl,
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.display,
    fontWeight: "bold",
  },

  description: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: 21,
    marginTop: theme.spacing.sm,
  },

  mapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.xl,
  },

  mapTitle: {
    color: theme.colors.text,
    fontSize: theme.text.subtitle,
    fontWeight: "bold",
    marginTop: theme.spacing.md,
    textAlign: "center",
  },

  mapDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    textAlign: "center",
    lineHeight: 21,
    marginTop: theme.spacing.sm,
  },
});