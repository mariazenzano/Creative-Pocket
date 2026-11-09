import { StyleSheet, View } from "react-native";

import type { Region, RegionId, RegionStatus } from "../../types/map";

import Island from "./Island";

type WorldMapProps = {
  regions: Region[];
  completedRegionIds: string[];
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
  completedRegionIds,
  onRegionPress,
}: WorldMapProps) {
  return (
    <View style={styles.container}>
      {regions.map((region) => {
        const status = getStatus(region, completedRegionIds);

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
            <Island region={region} status={status} onPress={onRegionPress} />
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
