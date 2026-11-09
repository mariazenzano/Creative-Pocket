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

  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>([]);

  const completedRegionIds = getCompletedRegionIds(
    regions,
    mapNodes,
    completedNodeIds,
  );

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

  const totalCount = mapNodes.length;
  const completedCount = completedNodeIds.length;

  const handleRegionPress = (regionId: RegionId) => {
    router.push({
      pathname: "/mapa/[regionId]",
      params: { regionId },
    });
  };

  return (
    <View style={styles.screen}>
      <MapHeader completedCount={completedCount} totalCount={totalCount} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <WorldMap
          regions={regions}
          nodes={mapNodes}
          completedRegionIds={completedRegionIds}
          completedNodeIds={completedNodeIds}
          onRegionPress={handleRegionPress}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 40,
  },
});
