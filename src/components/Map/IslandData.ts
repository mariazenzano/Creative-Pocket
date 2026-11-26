import Ionicons from "@expo/vector-icons/Ionicons";

import type { Region } from "../../types/map";

export const islandDecorations: Record<
  Region["id"],
  {
    first: keyof typeof Ionicons.glyphMap;
    second: keyof typeof Ionicons.glyphMap;
    third: keyof typeof Ionicons.glyphMap;
  }
> = {
  "graphic-design": {
    first: "color-palette-outline",
    second: "pencil-outline",
    third: "shapes-outline",
  },
  "web-design": {
    first: "code-slash-outline",
    second: "desktop-outline",
    third: "grid-outline",
  },
  audiovisual: {
    first: "camera-outline",
    second: "film-outline",
    third: "videocam-outline",
  },
  "3d-design": {
    first: "cube-outline",
    second: "layers-outline",
    third: "shapes-outline",
  },
};

export function getNatureVariant(
  regionId: Region["id"],
): "graphic" | "web" | "audiovisual" | "3d" {
  switch (regionId) {
    case "graphic-design":
      return "graphic";
    case "web-design":
      return "web";
    case "audiovisual":
      return "audiovisual";
    case "3d-design":
      return "3d";
  }
}
