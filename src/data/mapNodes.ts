import type { MapConnection, MapNode } from "../types/map";

// Actividades que encontraremos dentro de las regiones
export const mapNodes: MapNode[] = [
  {
    id: "gd-01",
    regionId: "graphic-design",
    title: "Fundamentos del diseño",
    description: "Conoce los principios básicos de la comunicación visual.",
    type: "lesson",
    position: { x: 50, y: 10 },
    requiredNodeIds: [],
  },
  {
    id: "gd-02",
    regionId: "graphic-design",
    title: "El mundo del color",
    description: "Aprende a combinar colores y crear armonías visuales.",
    type: "exercise",
    position: { x: 25, y: 35 },
    requiredNodeIds: ["gd-01"],
  },
  {
    id: "gd-03",
    regionId: "graphic-design",
    title: "Explora la tipografía",
    description: "Descubre cómo las letras comunican ideas y emociones.",
    type: "exercise",
    position: { x: 75, y: 35 },
    requiredNodeIds: ["gd-01"],
  },
  {
    id: "gd-04",
    regionId: "graphic-design",
    title: "Composición visual",
    description: "Combina elementos para crear una composición equilibrada.",
    type: "challenge",
    position: { x: 50, y: 60 },
    requiredNodeIds: ["gd-02", "gd-03"],
  },
  {
    id: "gd-05",
    regionId: "graphic-design",
    title: "Diseña tu primer cartel",
    description: "Aplica lo aprendido en tu primer proyecto gráfico.",
    type: "project",
    position: { x: 50, y: 85 },
    requiredNodeIds: ["gd-04"],
  },
];

// Caminos que conectan las actividades
export const mapConnections: MapConnection[] = [
  { from: "gd-01", to: "gd-02" },
  { from: "gd-01", to: "gd-03" },
  { from: "gd-02", to: "gd-04" },
  { from: "gd-03", to: "gd-04" },
  { from: "gd-04", to: "gd-05" },
];
