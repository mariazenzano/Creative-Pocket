import type { Region } from "../types/map";

export const regions: Region[] = [
  {
    id: "graphic-design",
    title: "Isla del Diseño Gráfico",
    description:
      "Explora los fundamentos de la comunicación visual, composición, color y tipografía.",
    iconName: "color-palette-outline",
    accentColor: "#7557FF",
    position: {
      x: 35,
      y: 8,
    },
    unlockRule: {
      type: "open",
    },
  },
  {
    id: "web-design",
    title: "Isla del Diseño Web",
    description:
      "Descubre cómo crear experiencias digitales e interfaces para la web.",
    iconName: "desktop-outline",
    accentColor: "#00B6FF",
    position: {
      x: 65,
      y: 35,
    },
    unlockRule: {
      type: "requires-regions",
      regionIds: ["graphic-design"],
    },
  },
  {
    id: "audiovisual",
    title: "Isla Audiovisual",
    description:
      "Aprende sobre narrativa, fotografía, edición y producción audiovisual.",
    iconName: "videocam-outline",
    accentColor: "#FF9F43",
    position: {
      x: 35,
      y: 63,
    },
    unlockRule: {
      type: "open",
    },
  },
  {
    id: "3d-design",
    title: "Isla del Diseño 3D",
    description:
      "Adéntrate en el modelado, la iluminación y la creación de mundos tridimensionales.",
    iconName: "cube-outline",
    accentColor: "#FF5C9A",
    position: {
      x: 65,
      y: 90,
    },
    unlockRule: {
      type: "requires-regions",
      regionIds: ["graphic-design", "audiovisual"],
    },
  },
];
