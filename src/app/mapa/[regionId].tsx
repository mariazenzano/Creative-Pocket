import { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import {
  useFocusEffect,
  useLocalSearchParams,
  useRouter,
  type Href,
} from "expo-router";
import { getCompletedRegionIds } from "../../utils/mapProgress";

import { theme } from "../../constants/theme";
import { mapConnections, mapNodes } from "../../data/mapNodes";
import { regions } from "../../data/regions";

import type { MapNode } from "../../types/map";

import { getNodeStatus, getRegionStatus } from "../../utils/mapProgress";

import { getCompletedNodeIds } from "../../storage/mapProgress";

import ChallengeCard from "../../components/Map/ChallengeCard";
import RegionMap from "../../components/Map/RegionMap";

export default function RegionScreen() {
  const router = useRouter();

  // Obtenemos el identificador de la región desde la URL
  const { regionId } = useLocalSearchParams<{ regionId: string }>();

  // Buscamos la región correspondiente
  const region = regions.find((item) => item.id === regionId);

  // Estados del progreso
  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>([]);
  const completedRegionIds = getCompletedRegionIds(
    regions,
    mapNodes,
    completedNodeIds,
  );

  // Actividad seleccionada
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null);

  // Recuperamos el progreso guardado cada vez que volvemos a esta pantalla
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadProgress = async () => {
        const savedNodes = await getCompletedNodeIds();

        if (isActive) {
          setCompletedNodeIds(savedNodes);
        }
      };

      loadProgress();

      return () => {
        isActive = false;
      };
    }, []),
  );

  // Si no encontramos la región, mostramos un mensaje
  if (!region) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Región no encontrada</Text>

        <Pressable
          style={styles.backButton}
          onPress={() => router.replace("/mapa")}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </Pressable>
      </View>
    );
  }

  // Filtramos las actividades de esta región
  const regionNodes = mapNodes.filter((node) => node.regionId === region.id);

  // Obtenemos los identificadores de sus actividades
  const regionNodeIds = regionNodes.map((node) => node.id);

  // Conservamos únicamente las conexiones de esta región
  const regionConnections = mapConnections.filter(
    (connection) =>
      regionNodeIds.includes(connection.from) &&
      regionNodeIds.includes(connection.to),
  );

  // Calculamos el estado de la región
  const regionStatus = getRegionStatus(region, completedRegionIds);

  // Calculamos el estado de la actividad seleccionada
  const selectedNodeStatus = selectedNode
    ? getNodeStatus(selectedNode, completedNodeIds, regionStatus)
    : "locked";

  // Seleccionamos una actividad
  const handleNodePress = (nodeId: string) => {
    const node = regionNodes.find((item) => item.id === nodeId);

    if (node) {
      setSelectedNode(node);
    }
  };

  // Cerramos el modal y navegamos a la actividad
  const handleStartActivity = (nodeId: string) => {
    setSelectedNode(null);

    router.push(`/actividad/${nodeId}` as Href);
  };

  return (
    <View style={styles.screen}>
      {/* Encabezado de la región */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </Pressable>

        <Text style={styles.headerTitle}>Explorar región</Text>
      </View>

      {/* Recorrido de aprendizaje */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <RegionMap
          region={region}
          nodes={regionNodes}
          connections={regionConnections}
          completedNodeIds={completedNodeIds}
          completedRegionIds={completedRegionIds}
          onNodePress={handleNodePress}
        />

        {regionNodes.length === 0 && (
          <Text style={styles.emptyText}>
            Próximamente encontrarás actividades en esta región.
          </Text>
        )}
      </ScrollView>

      {/* Tarjeta de la actividad seleccionada */}
      <ChallengeCard
        node={selectedNode}
        status={selectedNodeStatus}
        onClose={() => setSelectedNode(null)}
        onStart={handleStartActivity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.card,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },

  emptyText: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    textAlign: "center",
    padding: theme.spacing.lg,
  },

  errorContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },

  errorTitle: {
    color: theme.colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },

  backButtonText: {
    color: theme.colors.text,
    fontWeight: "bold",
  },
});
