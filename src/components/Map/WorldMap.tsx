import { StyleSheet, View } from "react-native";

import type { MapNode, Region, RegionId, RegionStatus } from "../../types/map";

import Island from "./Island";

type WorldMapProps = {
  regions: Region[];
  nodes: MapNode[];
  completedRegionIds: string[];
  completedNodeIds: string[];
  onRegionPress: (regionId: RegionId) => void;
};

// Calculamos el estado de cada región
function getStatus(region: Region, completedRegionIds: string[]): RegionStatus {
  if (completedRegionIds.includes(region.id)) {
    return "completed";
  }

  if (region.unlockRule.type === "open") {
    return "available";
  }

  const requirementsCompleted = region.unlockRule.regionIds.every((regionId) =>
    completedRegionIds.includes(regionId),
  );

  return requirementsCompleted ? "available" : "locked";
}

export default function WorldMap({
  regions,
  nodes,
  completedRegionIds,
  completedNodeIds,
  onRegionPress,
}: WorldMapProps) {
  return (
    <View style={styles.container}>
      {regions.map((region) => {
        // Calculamos el estado de la región
        const status = getStatus(region, completedRegionIds);

        // Obtenemos todas las actividades de esta región
        const regionNodes = nodes.filter((node) => node.regionId === region.id);

        // Contamos las actividades completadas
        const completedCount = regionNodes.filter((node) =>
          completedNodeIds.includes(node.id),
        ).length;

        // Calculamos el total de actividades
        const totalCount = regionNodes.length;

        return (
          <View
            key={region.id}
            style={[
              styles.islandPosition,
              {
                left: `${region.position.x}%`,
                top: `${region.position.y}%`,
              },
            ]}
          >
            <Island
              region={region}
              status={status}
              completedCount={completedCount}
              totalCount={totalCount}
              onPress={onRegionPress}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 900,
    height: 950,
    position: "relative",
  },

  islandPosition: {
    position: "absolute",
    transform: [{ translateX: -75 }, { translateY: -75 }],
  },
});
