import Svg, { Path } from "react-native-svg";

import type { MapConnection, MapNode as MapNodeData } from "../../types/map";

import { theme } from "../../constants/theme";

type MapPathProps = {
  nodes: MapNodeData[];
  connections: MapConnection[];
  width: number;
  height: number;
};

type Point = {
  x: number;
  y: number;
};

type Trail = {
  id: string;
  path: string;
};

// Trail appearance and spacing
const NODE_RADIUS = 38;
const TRAIL_WIDTH = 5;
const TRAIL_GAP = 45;

function getNodeCoordinates(
  node: MapNodeData,
  width: number,
  height: number,
): Point {
  return {
    x: (node.position.x / 100) * width,
    y: (node.position.y / 100) * height + 28,
  };
}

function createTrail(start: Point, end: Point, id: string): Trail | null {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const offset = NODE_RADIUS + TRAIL_GAP;

  if (distance <= offset * 2) {
    return null;
  }

  const directionX = deltaX / distance;
  const directionY = deltaY / distance;

  // Shorten both ends to leave space around each lesson.
  const startX = start.x + directionX * offset;
  const startY = start.y + directionY * offset;

  const endX = end.x - directionX * offset;
  const endY = end.y - directionY * offset;

  const middleX = (startX + endX) / 2;
  const middleY = (startY + endY) / 2;

  const curveDirection = deltaX >= 0 ? 1 : -1;
  const curveOffset = Math.min(Math.abs(endY - startY) * 0.18, 45);

  const controlX = middleX + curveOffset * curveDirection;

  const path = `M ${startX} ${startY} Q ${controlX} ${middleY} ${endX} ${endY}`;

  return { id, path };
}

export default function MapPath({
  nodes,
  connections,
  width,
  height,
}: MapPathProps) {
  const trails = connections
    .map((connection) => {
      const startNode = nodes.find((node) => node.id === connection.from);

      const endNode = nodes.find((node) => node.id === connection.to);

      if (!startNode || !endNode) {
        return null;
      }

      const start = getNodeCoordinates(startNode, width, height);

      const end = getNodeCoordinates(endNode, width, height);

      return createTrail(start, end, `${connection.from}-${connection.to}`);
    })
    .filter((trail): trail is Trail => trail !== null);

  return (
    <Svg width={width} height={height} style={styles.svg} pointerEvents="none">
      {/* Soft shadow */}
      {trails.map((trail) => (
        <Path
          key={`shadow-${trail.id}`}
          d={trail.path}
          stroke="#000000"
          strokeWidth={TRAIL_WIDTH + 4}
          strokeLinecap="round"
          opacity={0.12}
          fill="none"
        />
      ))}

      {/* Raised trail edge */}
      {trails.map((trail) => (
        <Path
          key={`edge-${trail.id}`}
          d={trail.path}
          stroke="#493A78"
          strokeWidth={TRAIL_WIDTH + 2}
          strokeLinecap="round"
          fill="none"
        />
      ))}

      {/* Main trail surface */}
      {trails.map((trail) => (
        <Path
          key={`surface-${trail.id}`}
          d={trail.path}
          stroke="#C5B9F0"
          strokeWidth={TRAIL_WIDTH}
          strokeLinecap="round"
          fill="none"
        />
      ))}

      {/* Central decorative detail */}
      {trails.map((trail) => (
        <Path
          key={`detail-${trail.id}`}
          d={trail.path}
          stroke={theme.colors.primary}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="2 9"
          opacity={0.8}
          fill="none"
        />
      ))}
    </Svg>
  );
}

const styles = {
  svg: {
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
};
