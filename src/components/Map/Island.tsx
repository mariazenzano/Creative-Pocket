import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import type { Region, RegionStatus } from "../../types/map";

import IslandNature from "./IslandNature";

type IslandProps = {
  region: Region;
  status: RegionStatus;
  completedCount: number;
  totalCount: number;
  onPress: (regionId: Region["id"]) => void;
};

const islandDecorations: Record<
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

function getNatureVariant(
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

export default function Island({
  region,
  status,
  completedCount,
  totalCount,
  onPress,
}: IslandProps) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  const progress =
    totalCount > 0 ? Math.min((completedCount / totalCount) * 100, 100) : 0;

  const decorations = islandDecorations[region.id];

  const regionName = region.title.replace("Isla del ", "").replace("Isla ", "");

  const statusIcon = isLocked
    ? "lock-closed"
    : isCompleted
      ? "checkmark"
      : "play";

  const statusLabel = isLocked
    ? "Bloqueada"
    : isCompleted
      ? "Completada"
      : "Explorar";

  const statusColor = isLocked
    ? theme.colors.border
    : isCompleted
      ? theme.colors.secondary
      : theme.colors.primary;

  const handlePress = () => {
    if (!isLocked) {
      onPress(region.id);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={isLocked}
      accessibilityRole="button"
      accessibilityState={{ disabled: isLocked }}
      accessibilityLabel={`${region.title}. ${statusLabel}. ${completedCount} de ${totalCount} actividades completadas.`}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        isLocked && styles.locked,
      ]}
    >
      {/* Floating shadow */}
      <View style={styles.groundShadow} />

      {/* Natural environment */}
      <IslandNature
        accentColor={region.accentColor}
        variant={getNatureVariant(region.id)}
      />

      {/* Lower island terrain */}
      <View
        style={[
          styles.islandBaseShadow,
          { backgroundColor: region.accentColor },
        ]}
      />

      <View
        style={[styles.islandBase, { backgroundColor: region.accentColor }]}
      />

      {/* Upper island platform */}
      <View style={[styles.islandSurface, { borderColor: region.accentColor }]}>
        {/* Surface decoration */}
        <View
          style={[styles.surfaceGlow, { backgroundColor: region.accentColor }]}
        />

        {/* Decorative icons */}
        <View style={styles.decorationLeft}>
          <Ionicons
            name={decorations.first}
            size={22}
            color={region.accentColor}
          />
        </View>

        <View style={styles.decorationRight}>
          <Ionicons
            name={decorations.second}
            size={21}
            color={region.accentColor}
          />
        </View>

        <View style={styles.decorationBottom}>
          <Ionicons
            name={decorations.third}
            size={18}
            color={region.accentColor}
          />
        </View>

        {/* Light details */}
        <View
          style={[
            styles.lightDot,
            styles.lightDotLeft,
            { backgroundColor: region.accentColor },
          ]}
        />

        <View
          style={[
            styles.lightDot,
            styles.lightDotRight,
            { backgroundColor: region.accentColor },
          ]}
        />

        {/* Main icon platform */}
        <View
          style={[
            styles.iconPlatformShadow,
            { backgroundColor: region.accentColor },
          ]}
        >
          <View
            style={[styles.iconPlatform, { borderColor: region.accentColor }]}
          >
            <Ionicons
              name={region.iconName as keyof typeof Ionicons.glyphMap}
              size={38}
              color={region.accentColor}
            />
          </View>
        </View>

        {/* Region status */}
        <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
          <Ionicons name={statusIcon} size={13} color={theme.colors.text} />
        </View>
      </View>

      {/* Region information */}
      <View style={styles.information}>
        <Text style={styles.regionTitle} numberOfLines={2}>
          {regionName}
        </Text>

        <Text
          style={[
            styles.statusText,
            {
              color: isLocked ? theme.colors.textMuted : region.accentColor,
            },
          ]}
        >
          {statusLabel}
        </Text>

        {/* Progress indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${progress}%`,
                  backgroundColor: region.accentColor,
                },
              ]}
            />
          </View>

          <Text style={styles.progressText}>
            {completedCount}/{totalCount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    minHeight: 205,
    alignItems: "center",
    paddingBottom: 8,
  },

  pressed: {
    transform: [{ scale: 0.96 }, { translateY: 3 }],
  },

  locked: {
    opacity: 0.58,
  },

  groundShadow: {
    position: "absolute",
    top: 120,
    width: 126,
    height: 25,
    borderRadius: 70,
    backgroundColor: "#000000",
    opacity: 0.2,
  },

  islandBaseShadow: {
    position: "absolute",
    top: 42,
    width: 132,
    height: 91,
    borderRadius: 42,
    opacity: 0.55,
    transform: [{ scaleX: 1.08 }, { translateY: 8 }],
  },

  islandBase: {
    position: "absolute",
    top: 31,
    width: 132,
    height: 96,
    borderRadius: 45,
    transform: [{ scaleX: 1.06 }],
    opacity: 0.95,
  },

  islandSurface: {
    position: "absolute",
    top: 22,
    width: 140,
    height: 112,
    borderRadius: 48,
    backgroundColor: theme.colors.card,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    elevation: 12,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 9,
  },

  surfaceGlow: {
    position: "absolute",
    top: 5,
    width: 75,
    height: 5,
    borderRadius: 5,
    opacity: 0.12,
  },

  decorationLeft: {
    position: "absolute",
    left: 14,
    top: 24,
    opacity: 0.8,
  },

  decorationRight: {
    position: "absolute",
    right: 13,
    top: 26,
    opacity: 0.8,
  },

  decorationBottom: {
    position: "absolute",
    bottom: 12,
    right: 31,
    opacity: 0.75,
  },

  lightDot: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    opacity: 0.6,
  },

  lightDotLeft: {
    left: 34,
    bottom: 22,
  },

  lightDotRight: {
    right: 31,
    top: 17,
  },

  iconPlatformShadow: {
    width: 83,
    height: 83,
    borderRadius: 42,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.3,
  },

  iconPlatform: {
    position: "absolute",
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: theme.colors.background,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  statusBadge: {
    position: "absolute",
    top: -6,
    right: 4,
    width: 28,
    height: 28,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.background,
    elevation: 5,
  },

  information: {
    width: "100%",
    alignItems: "center",
    marginTop: 137,
  },

  regionTitle: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    maxWidth: 145,
  },

  statusText: {
    fontSize: 9,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginTop: 3,
  },

  progressContainer: {
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },

  progressBackground: {
    flex: 1,
    height: 6,
    borderRadius: 5,
    backgroundColor: theme.colors.border,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 5,
  },

  progressText: {
    color: theme.colors.textMuted,
    fontSize: 10,
    fontWeight: "700",
  },
});
