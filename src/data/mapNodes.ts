import type { MapConnection, MapNode } from "../types/map";

// Actividades que encontraremos dentro de las regiones
export const mapNodes: MapNode[] = [
  // =====================================
  // REGIÓN 1: DISEÑO GRÁFICO
  // =====================================
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

  // =====================================
  // REGIÓN 2: DISEÑO WEB
  // =====================================
  {
    id: "wd-01",
    regionId: "web-design",
    title: "Fundamentos del diseño web",
    description: "Descubre cómo se estructuran y diseñan las páginas web.",
    type: "lesson",
    position: { x: 50, y: 10 },
    requiredNodeIds: [],
  },
  {
    id: "wd-02",
    regionId: "web-design",
    title: "Estructura con HTML",
    description: "Aprende a organizar el contenido de una página web.",
    type: "exercise",
    position: { x: 25, y: 35 },
    requiredNodeIds: ["wd-01"],
  },
  {
    id: "wd-03",
    regionId: "web-design",
    title: "Estilos con CSS",
    description: "Explora colores, tipografías y estilos para tus páginas.",
    type: "exercise",
    position: { x: 75, y: 35 },
    requiredNodeIds: ["wd-01"],
  },
  {
    id: "wd-04",
    regionId: "web-design",
    title: "Diseño adaptable",
    description: "Aprende a adaptar interfaces a diferentes pantallas.",
    type: "challenge",
    position: { x: 50, y: 60 },
    requiredNodeIds: ["wd-02", "wd-03"],
  },
  {
    id: "wd-05",
    regionId: "web-design",
    title: "Tu primera página web",
    description: "Crea una página aplicando lo aprendido.",
    type: "project",
    position: { x: 50, y: 85 },
    requiredNodeIds: ["wd-04"],
  },

  // =====================================
  // REGIÓN 3: DISEÑO AUDIOVISUAL
  // =====================================
  {
    id: "av-01",
    regionId: "audiovisual",
    title: "Lenguaje audiovisual",
    description: "Descubre cómo las imágenes y los sonidos cuentan historias.",
    type: "lesson",
    position: { x: 50, y: 10 },
    requiredNodeIds: [],
  },
  {
    id: "av-02",
    regionId: "audiovisual",
    title: "Fundamentos de fotografía",
    description: "Explora la luz, el encuadre y la composición fotográfica.",
    type: "exercise",
    position: { x: 25, y: 35 },
    requiredNodeIds: ["av-01"],
  },
  {
    id: "av-03",
    regionId: "audiovisual",
    title: "Narrativa y guion",
    description: "Aprende a desarrollar ideas y construir historias.",
    type: "exercise",
    position: { x: 75, y: 35 },
    requiredNodeIds: ["av-01"],
  },
  {
    id: "av-04",
    regionId: "audiovisual",
    title: "Edición y montaje",
    description:
      "Descubre cómo organizar imágenes y sonidos para contar una historia.",
    type: "challenge",
    position: { x: 50, y: 60 },
    requiredNodeIds: ["av-02", "av-03"],
  },
  {
    id: "av-05",
    regionId: "audiovisual",
    title: "Tu primera pieza audiovisual",
    description: "Crea una pieza aplicando los conocimientos adquiridos.",
    type: "project",
    position: { x: 50, y: 85 },
    requiredNodeIds: ["av-04"],
  },

  // =====================================
  // REGIÓN 4: DISEÑO 3D
  // =====================================
  {
    id: "3d-01",
    regionId: "3d-design",
    title: "Introducción al mundo 3D",
    description: "Descubre los fundamentos de la creación tridimensional.",
    type: "lesson",
    position: { x: 50, y: 10 },
    requiredNodeIds: [],
  },
  {
    id: "3d-02",
    regionId: "3d-design",
    title: "Modelado de objetos",
    description: "Aprende a crear y transformar objetos tridimensionales.",
    type: "exercise",
    position: { x: 25, y: 35 },
    requiredNodeIds: ["3d-01"],
  },
  {
    id: "3d-03",
    regionId: "3d-design",
    title: "Materiales y texturas",
    description: "Explora cómo aplicar materiales y texturas a tus modelos.",
    type: "exercise",
    position: { x: 75, y: 35 },
    requiredNodeIds: ["3d-01"],
  },
  {
    id: "3d-04",
    regionId: "3d-design",
    title: "Iluminación y escenarios",
    description: "Aprende a iluminar tus modelos y construir escenarios.",
    type: "challenge",
    position: { x: 50, y: 60 },
    requiredNodeIds: ["3d-02", "3d-03"],
  },
  {
    id: "3d-05",
    regionId: "3d-design",
    title: "Tu primera creación 3D",
    description: "Crea una composición tridimensional aplicando lo aprendido.",
    type: "project",
    position: { x: 50, y: 85 },
    requiredNodeIds: ["3d-04"],
  },
];

// =====================================
// CAMINOS QUE CONECTAN LAS ACTIVIDADES
// =====================================
export const mapConnections: MapConnection[] = [
  // Conexiones de Diseño Gráfico
  { from: "gd-01", to: "gd-02" },
  { from: "gd-01", to: "gd-03" },
  { from: "gd-02", to: "gd-04" },
  { from: "gd-03", to: "gd-04" },
  { from: "gd-04", to: "gd-05" },

  // Conexiones de Diseño Web
  { from: "wd-01", to: "wd-02" },
  { from: "wd-01", to: "wd-03" },
  { from: "wd-02", to: "wd-04" },
  { from: "wd-03", to: "wd-04" },
  { from: "wd-04", to: "wd-05" },

  // Conexiones de Diseño Audiovisual
  { from: "av-01", to: "av-02" },
  { from: "av-01", to: "av-03" },
  { from: "av-02", to: "av-04" },
  { from: "av-03", to: "av-04" },
  { from: "av-04", to: "av-05" },

  // Conexiones de Diseño 3D
  { from: "3d-01", to: "3d-02" },
  { from: "3d-01", to: "3d-03" },
  { from: "3d-02", to: "3d-04" },
  { from: "3d-03", to: "3d-04" },
  { from: "3d-04", to: "3d-05" },
];
