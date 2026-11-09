import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

import type {
    MapConnection,
    MapNode,
    Region,
    RegionStatus,
} from "../../types/map";

import { theme } from "../../constants/theme";

import MapNodeComponent from "./MapNode";
import MapPath from "./MapPath";

import { getNodeStatus, getRegionStatus } from "../../utils/mapProgress";

type RegionMapProps = {
  region: Region;
  nodes: MapNode[];
  connections: MapConnection[];
  completedNodeIds: string[];
  completedRegionIds: string[];
  onNodePress: (nodeId: string) => void;
};

const MAP_HEIGHT = 950;
const NODE_WIDTH = 125;
const NODE_HEIGHT = 124;
const NODE_CENTER_OFFSET = 28;

export default function RegionMap({
  region,
  nodes,
  connections,
  completedNodeIds,
  completedRegionIds,
  onNodePress,
}: RegionMapProps) {
  const { width } = useWindowDimensions();

  // Keep the map responsive on smaller screens.
  const mapWidth = Math.max(width, 360);

  const regionStatus: RegionStatus = getRegionStatus(
    region,
    completedRegionIds,
  );

  return (
    <View style={styles.container}>
      {/* Region heading */}
      <View style={styles.header}>
        <Text style={styles.title}>{region.title}</Text>

        <Text style={styles.description}>{region.description}</Text>

        <Text style={styles.subtitle}>Tu recorrido de aprendizaje</Text>
      </View>

      {/* Learning map */}
      <View
        style={[
          styles.mapContainer,
          {
            width: mapWidth,
            height: MAP_HEIGHT,
          },
        ]}
      >
        {/* Trails stay behind the activity nodes */}
        <MapPath
          nodes={nodes}
          connections={connections}
          width={mapWidth}
          height={MAP_HEIGHT}
        />

        {/* Learning activities */}
        {nodes.map((node) => {
          const status = getNodeStatus(node, completedNodeIds, regionStatus);

          // Match the coordinates used by MapPath.
          const positionX = (node.position.x / 100) * mapWidth;

          const positionY =
            (node.position.y / 100) * MAP_HEIGHT + NODE_CENTER_OFFSET;

          return (
            <View
              key={node.id}
              style={[
                styles.nodePosition,
                {
                  left: positionX - NODE_WIDTH / 2,
                  top: positionY - NODE_HEIGHT / 2,
                },
              ]}
            >
              <MapNodeComponent
                node={node}
                status={status}
                onPress={onNodePress}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  header: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },

  description: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    marginTop: theme.spacing.sm,
    lineHeight: 21,
  },

  subtitle: {
    color: theme.colors.secondary,
    fontSize: theme.text.heading,
    fontWeight: "bold",
    marginTop: theme.spacing.lg,
  },

  mapContainer: {
    position: "relative",
    alignSelf: "center",
    overflow: "visible",
  },

  nodePosition: {
    position: "absolute",
    width: NODE_WIDTH,
    minHeight: NODE_HEIGHT,
    alignItems: "center",
    zIndex: 2,
    elevation: 2,
  },
});
