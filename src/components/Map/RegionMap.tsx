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

// Información que recibirá el mapa de una región
type RegionMapProps = {
  region: Region;
  nodes: MapNode[];
  connections: MapConnection[];
  completedNodeIds: string[];
  completedRegionIds: string[];
  onNodePress: (nodeId: string) => void;
};

export default function RegionMap({
  region,
  nodes,
  connections,
  completedNodeIds,
  completedRegionIds,
  onNodePress,
}: RegionMapProps) {
  // Obtenemos el ancho disponible del dispositivo
  const { width } = useWindowDimensions();

  // Evitamos que el mapa sea demasiado estrecho
  const mapWidth = Math.max(width, 360);

  // Altura del recorrido de aprendizaje
  const mapHeight = 950;

  // Calculamos el estado de la región
  const regionStatus: RegionStatus = getRegionStatus(
    region,
    completedRegionIds,
  );

  return (
    <View style={styles.container}>
      {/* Información de la especialidad */}
      <View style={styles.header}>
        <Text style={styles.title}>{region.title}</Text>

        <Text style={styles.description}>{region.description}</Text>

        <Text style={styles.subtitle}>Tu recorrido de aprendizaje</Text>
      </View>

      {/* Lienzo donde aparecen los caminos y actividades */}
      <View
        style={[
          styles.mapContainer,
          {
            width: mapWidth,
            height: mapHeight,
          },
        ]}
      >
        {/* Dibujamos las conexiones entre actividades */}
        <MapPath
          nodes={nodes}
          connections={connections}
          width={mapWidth}
          height={mapHeight}
        />

        {/* Recorremos las actividades de la región */}
        {nodes.map((node) => {
          // Calculamos el estado de cada actividad
          const status = getNodeStatus(node, completedNodeIds, regionStatus);

          return (
            <View
              key={node.id}
              style={[
                styles.nodePosition,
                {
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
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
  },

  nodePosition: {
    position: "absolute",
    transform: [{ translateX: -60 }, { translateY: -50 }],
  },
});
