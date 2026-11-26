import { useWindowDimensions, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import { theme } from "../../constants/theme";
import type { MapNode, Region, RegionId } from "../../types/map";

import Island from "./Island";
import MapBackground from "./MapBackground";
import { styles } from "./WorldMapStyles";

import {
  createBridgeRoute,
  getStatus,
  ISLAND_HEIGHT,
  ISLAND_WIDTH,
  MAP_HEIGHT,
  type BridgeRoute,
  type MapPoint,
} from "./WorldMapLogic";

type WorldMapProps = {
  regions: Region[];
  nodes: MapNode[];
  completedRegionIds: string[];
  completedNodeIds: string[];
  onRegionPress: (regionId: RegionId) => void;
};

export default function WorldMap({
  regions,
  nodes,
  completedRegionIds,
  completedNodeIds,
  onRegionPress,
}: WorldMapProps) {
  const { width } = useWindowDimensions();

  const mapWidth = width;

  // Calculate island positions.
  const regionPoints: MapPoint[] = regions.map((region) => {
    const islandTop = 150 + (region.position.y / 100) * (MAP_HEIGHT - 300);

    const islandCenterY = islandTop - ISLAND_HEIGHT / 2 + 22 + 56;

    return {
      id: region.id,
      x: (region.position.x / 100) * mapWidth,
      y: islandCenterY,
    };
  });

  // Generate bridges between consecutive islands.
  const bridgeRoutes = regions
    .slice(0, -1)
    .map((region, index) => {
      const start = regionPoints[index];
      const end = regionPoints[index + 1];

      if (!start || !end) {
        return null;
      }

      return createBridgeRoute(start, end);
    })
    .filter((route): route is BridgeRoute => route !== null);

  return (
    <View
      style={[
        styles.container,
        {
          width: mapWidth,
          height: MAP_HEIGHT,
        },
      ]}
    >
      <MapBackground width={mapWidth} height={MAP_HEIGHT} />

      {/* Floating bridges */}
      <Svg
        width={mapWidth}
        height={MAP_HEIGHT}
        style={styles.paths}
        pointerEvents="none"
      >
        {/* Bridge shadows */}
        {bridgeRoutes.map((route) => (
          <Path
            key={`shadow-${route.id}`}
            d={route.path}
            stroke="#000000"
            strokeWidth={29}
            strokeLinecap="round"
            opacity={0.22}
            fill="none"
          />
        ))}

        {/* Main bridge structure */}
        {bridgeRoutes.map((route) => (
          <Path
            key={`base-${route.id}`}
            d={route.path}
            stroke="#493A78"
            strokeWidth={25}
            strokeLinecap="round"
            fill="none"
          />
        ))}

        {/* Outer bridge edges */}
        {bridgeRoutes.map((route) => (
          <Path
            key={`edge-${route.id}`}
            d={route.path}
            stroke="#927ED0"
            strokeWidth={21}
            strokeLinecap="round"
            fill="none"
          />
        ))}

        {/* Walkable surface */}
        {bridgeRoutes.map((route) => (
          <Path
            key={`surface-${route.id}`}
            d={route.path}
            stroke="#C5B9F0"
            strokeWidth={15}
            strokeLinecap="round"
            fill="none"
          />
        ))}

        {/* Center illumination */}
        {bridgeRoutes.map((route) => (
          <Path
            key={`light-${route.id}`}
            d={route.path}
            stroke={theme.colors.primarySoft}
            strokeWidth={5}
            strokeLinecap="round"
            opacity={0.9}
            fill="none"
          />
        ))}

        {/* Individual bridge planks */}
        {bridgeRoutes.map((route) =>
          route.planks.map((plank, index) => (
            <Path
              key={`plank-${route.id}-${index}`}
              d={plank}
              stroke="#7865AE"
              strokeWidth={2}
              strokeLinecap="round"
              opacity={0.75}
              fill="none"
            />
          )),
        )}

        {/* Small glowing lights */}
        {bridgeRoutes.map((route) =>
          route.lights.map((light, index) => (
            <Glimmer
              key={`glimmer-${route.id}-${index}`}
              x={light.x}
              y={light.y}
            />
          )),
        )}
      </Svg>

      {/* Floating islands */}
      {regions.map((region) => {
        const status = getStatus(region, completedRegionIds);

        const regionNodes = nodes.filter((node) => node.regionId === region.id);

        const completedCount = regionNodes.filter((node) =>
          completedNodeIds.includes(node.id),
        ).length;

        const point = regionPoints.find((item) => item.id === region.id);

        if (!point) {
          return null;
        }

        const islandTop = 150 + (region.position.y / 100) * (MAP_HEIGHT - 300);

        return (
          <View
            key={region.id}
            style={[
              styles.islandPosition,
              {
                left: point.x - ISLAND_WIDTH / 2,
                top: islandTop - ISLAND_HEIGHT / 2,
              },
            ]}
          >
            <Island
              region={region}
              status={status}
              completedCount={completedCount}
              totalCount={regionNodes.length}
              onPress={onRegionPress}
            />
          </View>
        );
      })}
    </View>
  );
}

function Glimmer({ x, y }: { x: number; y: number }) {
  return (
    <>
      <Circle
        cx={x}
        cy={y}
        r={5}
        fill={theme.colors.primarySoft}
        opacity={0.2}
      />

      <Circle cx={x} cy={y} r={2} fill="#FFFFFF" opacity={0.9} />
    </>
  );
}
