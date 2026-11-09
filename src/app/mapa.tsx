import { useFocusEffect, useRouter, type Href } from "expo-router";
import { useCallback, useState } from "react";

import { ScrollView, StyleSheet, View } from "react-native";

import MapHeader from "../components/Map/MapHeader";
import WorldMap from "../components/Map/WorldMap";
import { theme } from "../constants/theme";

import { mapNodes } from "../data/mapNodes";
import { regions } from "../data/regions";

import { getCompletedNodeIds } from "../storage/mapProgress";

export default function MapScreen() {
  const router = useRouter();

  // Actividades completadas
  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>([]);

  // Regiones completadas
  const [completedRegionIds] = useState<string[]>([]);

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
  const handleRegionPress = (regionId: string) => {
    router.push(`/mapa/${regionId}` as Href);
  };

  return (
    <View style={styles.screen}>
      <MapHeader completedCount={completedCount} totalCount={totalCount} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <WorldMap
            regions={regions}
            completedRegionIds={completedRegionIds}
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
