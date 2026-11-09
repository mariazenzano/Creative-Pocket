// Identificadores de las regiones del mundo
export type RegionId =
  | "graphic-design"
  | "web-design"
  | "audiovisual"
  | "3d-design";

// Reglas para desbloquear una región
export type RegionUnlockRule =
  | {
      type: "open";
    }
  | {
      type: "requires-regions";
      regionIds: RegionId[];
    };

// Posición de una isla dentro del mapa general
export type MapPosition = {
  x: number;
  y: number;
};

// Información de cada región
export type Region = {
  id: RegionId;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  position: MapPosition;
  unlockRule: RegionUnlockRule;
};

// Tipos de actividades dentro de una región
export type MapNodeType = "lesson" | "exercise" | "challenge" | "project";

// Posibles estados de una actividad
export type MapNodeStatus = "locked" | "available" | "completed";

// Información de cada actividad
export type MapNode = {
  id: string;
  regionId: RegionId;
  title: string;
  description: string;
  type: MapNodeType;
  position: MapPosition;
  requiredNodeIds: string[];
};

// Conexiones entre actividades
export type MapConnection = {
  from: string;
  to: string;
};
