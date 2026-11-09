import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import type { RegionId } from "../types/map";

import MapHeader from "../components/Map/MapHeader";
import WorldMap from "../components/Map/WorldMap";

import { theme } from "../constants/theme";
import { mapNodes } from "../data/mapNodes";
import { regions } from "../data/regions";

import { getCompletedNodeIds } from "../storage/mapProgress";
import { getCompletedRegionIds } from "../utils/mapProgress";

export default function MapScreen() {
  const router = useRouter();

  // Actividades completadas
  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>([]);

  // Calculamos las regiones completadas
  const completedRegionIds = getCompletedRegionIds(
    regions,
    mapNodes,
    completedNodeIds,
  );

  // Actualizamos el progreso al entrar o regresar al mapa
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

  // Calculamos el total de actividades
  const totalCount = mapNodes.length;

  // Calculamos cuántas actividades están completadas
  const completedCount = completedNodeIds.length;

  // Abrimos la pantalla de una región
  const handleRegionPress = (regionId: RegionId) => {
    router.push({
      pathname: "/mapa/[regionId]",
      params: { regionId },
    });
  };

  return (
    <View style={styles.screen}>
      <MapHeader completedCount={completedCount} totalCount={totalCount} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <WorldMap
            regions={regions}
            nodes={mapNodes}
            completedRegionIds={completedRegionIds}
            completedNodeIds={completedNodeIds}
            onRegionPress={handleRegionPress}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
