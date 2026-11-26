import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import type { Region, RegionStatus } from "../../types/map";

import { getNatureVariant, islandDecorations } from "./IslandData";
import IslandNature from "./IslandNature";
import { styles } from "./IslandStyles";

type IslandProps = {
  region: Region;
  status: RegionStatus;
  completedCount: number;
  totalCount: number;
  onPress: (regionId: Region["id"]) => void;
};

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
