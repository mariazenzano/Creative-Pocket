
import type { Region, RegionStatus } from "../../types/map";

// World dimensions
export const MAP_HEIGHT = 1450;
export const ISLAND_WIDTH = 150;
export const ISLAND_HEIGHT = 205;

// Bridge spacing
const ISLAND_RADIUS = 78;
const BRIDGE_HALF_WIDTH = 12.5;
const ISLAND_GAP = 16;

export type MapPoint = {
  id: string;
  x: number;
  y: number;
};

export type BridgeRoute = {
  id: string;
  path: string;
  planks: string[];
  lights: { x: number; y: number }[];
};

export function getStatus(
  region: Region,
  completedRegionIds: string[],
): RegionStatus {
  if (completedRegionIds.includes(region.id)) {
    return "completed";
  }

  if (region.unlockRule.type === "open") {
    return "available";
  }

  const requirementsCompleted = region.unlockRule.regionIds.every(
    (regionId) => completedRegionIds.includes(regionId),
  );

  return requirementsCompleted ? "available" : "locked";
}

export function createBridgeRoute(
  start: MapPoint,
  end: MapPoint,
): BridgeRoute | null {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance === 0) {
    return null;
  }

  const directionX = deltaX / distance;
  const directionY = deltaY / distance;

  const bridgeOffset = ISLAND_RADIUS + BRIDGE_HALF_WIDTH + ISLAND_GAP;

  const startX = start.x + directionX * bridgeOffset;
  const startY = start.y + directionY * bridgeOffset;

  const endX = end.x - directionX * bridgeOffset;
  const endY = end.y - directionY * bridgeOffset;

  if (
    (endX - startX) * directionX +
      (endY - startY) * directionY <=
    0
  ) {
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

  for (let t = 0.12; t <= 0.88; t += 0.09) {
    const inverseT = 1 - t;

    const x =
      inverseT * inverseT * startX +
      2 * inverseT * t * controlX +
      t * t * endX;

    const y =
      inverseT * inverseT * startY +
      2 * inverseT * t * controlY +
      t * t * endY;

    const tangentX =
      2 * inverseT * (controlX - startX) +
      2 * t * (endX - controlX);

    const tangentY =
      2 * inverseT * (controlY - startY) +
      2 * t * (endY - controlY);

    const tangentLength = Math.sqrt(
      tangentX * tangentX + tangentY * tangentY,
    );

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

    planks.push(
      `M ${plankStartX} ${plankStartY} L ${plankEndX} ${plankEndY}`,
    );

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
