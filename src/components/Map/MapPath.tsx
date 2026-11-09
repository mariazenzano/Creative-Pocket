import Svg, { Path } from "react-native-svg";

import type { MapConnection, MapNode as MapNodeData } from "../../types/map";

type MapPathProps = {
  nodes: MapNodeData[];
  connections: MapConnection[];
  width: number;
  height: number;
};

export default function MapPath({
  nodes,
  connections,
  width,
  height,
}: MapPathProps) {
  return (
    <Svg
      width={width}
      height={height}
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {connections.map((connection) => {
        // Buscamos las dos actividades conectadas
        const startNode = nodes.find((node) => node.id === connection.from);

        const endNode = nodes.find((node) => node.id === connection.to);

        // Si no encontramos alguna actividad, no dibujamos el camino
        if (!startNode || !endNode) {
          return null;
        }

        // Convertimos las posiciones relativas a coordenadas reales
        const startX = (startNode.position.x / 100) * width;
        const startY = (startNode.position.y / 100) * height;

        const endX = (endNode.position.x / 100) * width;
        const endY = (endNode.position.y / 100) * height;

        // Calculamos un punto intermedio para crear una curva
        const middleX = (startX + endX) / 2;
        const middleY = (startY + endY) / 2;

        return (
          <Path
            key={`${connection.from}-${connection.to}`}
            d={`M ${startX} ${startY} Q ${middleX} ${middleY} ${endX} ${endY}`}
            stroke="#7557FF"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray="8 8"
            fill="none"
          />
        );
      })}
    </Svg>
  );
}
