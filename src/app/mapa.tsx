import { useRouter, type Href } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { theme } from "../constants/theme";

import MapHeader from "../components/Map/MapHeader";
import WorldMap from "../components/Map/WorldMap";

import { mapNodes } from "../data/mapNodes";
import { regions } from "../data/regions";

export default function MapScreen() {
  const router = useRouter();

  // Actividades completadas de prueba
  const [completedNodeIds] = useState<string[]>([]);

  // Regiones completadas de prueba
  const [completedRegionIds] = useState<string[]>([]);

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
