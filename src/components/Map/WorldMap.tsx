import { StyleSheet, View, useWindowDimensions } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import { theme } from "../../constants/theme";
import type { MapNode, Region, RegionId, RegionStatus } from "../../types/map";

import Island from "./Island";
import MapBackground from "./MapBackground";

type WorldMapProps = {
  regions: Region[];
  nodes: MapNode[];
  completedRegionIds: string[];
  completedNodeIds: string[];
  onRegionPress: (regionId: RegionId) => void;
};

type MapPoint = {
  id: string;
  x: number;
  y: number;
};

type BridgeRoute = {
  id: string;
  path: string;
  planks: string[];
  lights: { x: number; y: number }[];
};

// World dimensions
const MAP_HEIGHT = 1450;
const ISLAND_WIDTH = 150;
const ISLAND_HEIGHT = 205;

// Bridge spacing
const ISLAND_RADIUS = 78;
const BRIDGE_HALF_WIDTH = 12.5;
const ISLAND_GAP = 16;

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

function createBridgeRoute(start: MapPoint, end: MapPoint): BridgeRoute | null {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance === 0) {
    return null;
  }

  const directionX = deltaX / distance;
  const directionY = deltaY / distance;

  // Keep the bridge away from the island edges.
  const bridgeOffset = ISLAND_RADIUS + BRIDGE_HALF_WIDTH + ISLAND_GAP;

  const startX = start.x + directionX * bridgeOffset;
  const startY = start.y + directionY * bridgeOffset;

  const endX = end.x - directionX * bridgeOffset;
  const endY = end.y - directionY * bridgeOffset;

  // Avoid drawing a bridge if the islands are too close.
  if ((endX - startX) * directionX + (endY - startY) * directionY <= 0) {
    return null;
  }

  const middleX = (startX + endX) / 2;
  const middleY = (startY + endY) / 2;

  const curveOffset = 45;

  const controlX = middleX - directionY * curveOffset;
  const controlY = middleY + directionX * curveOffset;

  const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;

  const planks: string[] = [];
  const lights: { x: number; y: number }[] = [];

  // Wooden planks along the bridge.
  for (let t = 0.12; t <= 0.88; t += 0.09) {
    const inverseT = 1 - t;

    const x =
      inverseT * inverseT * startX + 2 * inverseT * t * controlX + t * t * endX;

    const y =
      inverseT * inverseT * startY + 2 * inverseT * t * controlY + t * t * endY;

    const tangentX =
      2 * inverseT * (controlX - startX) + 2 * t * (endX - controlX);

    const tangentY =
      2 * inverseT * (controlY - startY) + 2 * t * (endY - controlY);

    const tangentLength = Math.sqrt(tangentX * tangentX + tangentY * tangentY);

    if (tangentLength === 0) {
      continue;
    }

    const normalX = -tangentY / tangentLength;
    const normalY = tangentX / tangentLength;

    const halfWidth = 8;

    const plankStartX = x - normalX * halfWidth;
    const plankStartY = y - normalY * halfWidth;

    const plankEndX = x + normalX * halfWidth;
    const plankEndY = y + normalY * halfWidth;

    planks.push(`M ${plankStartX} ${plankStartY} L ${plankEndX} ${plankEndY}`);

    if (Math.round(t * 100) % 2 === 0) {
      lights.push({ x, y });
    }
  }

  return {
    id: `${start.id}-${end.id}`,
    path,
    planks,
    lights,
  };
}

export default function WorldMap({
  regions,
  nodes,
  completedRegionIds,
  completedNodeIds,
  onRegionPress,
}: WorldMapProps) {
  const { width } = useWindowDimensions();

  const mapWidth = width;

  const regionPoints: MapPoint[] = regions.map((region) => {
    const islandTop = 150 + (region.position.y / 100) * (MAP_HEIGHT - 300);

    // Align the bridge with the visual center of the island platform.
    const islandCenterY = islandTop - ISLAND_HEIGHT / 2 + 22 + 56;

    return {
      id: region.id,
      x: (region.position.x / 100) * mapWidth,
      y: islandCenterY,
    };
  });

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

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignSelf: "center",
    overflow: "visible",
  },

  paths: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  islandPosition: {
    position: "absolute",
    width: ISLAND_WIDTH,
    alignItems: "center",
  },
});
