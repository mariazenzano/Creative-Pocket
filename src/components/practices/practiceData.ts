import { palette } from "../../constants/colors";

export const areas = [
  {
    id: "graphic-design",
    title: "Diseño gráfico",
    description: "Color, tipografía y composición",
    icon: "color-palette-outline",
    color: palette.primary[100],
  },
  {
    id: "web-design",
    title: "Diseño web",
    description: "Interfaces y experiencias digitales",
    icon: "laptop-outline",
    color: palette.secondary[200],
  },
  {
    id: "audiovisual",
    title: "Audiovisual",
    description: "Fotografía, narrativa y edición",
    icon: "videocam-outline",
    color: palette.primary[200],
  },
  {
    id: "3d-design",
    title: "Diseño 3D",
    description: "Modelado, materiales y escenarios",
    icon: "cube-outline",
    color: palette.secondary[300],
  },
] as const;