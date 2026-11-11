import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  ZoomIn,
} from "react-native-reanimated";

import { colors, palette } from "@/constants/colors";
import { theme } from "@/constants/theme";

import type { RankingParticipant } from "./types";

type Props = { participants: RankingParticipant[] };

const podiumColors = [
  palette.neutral[300],
  palette.primary[100],
  palette.secondary[200],
];
const podiumHeights = [
  theme.sizes.podiumSecond,
  theme.sizes.podiumFirst,
  theme.sizes.podiumThird,
];
const podiumOrder = [1, 0, 2];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export default function RankingPodium({ participants }: Props) {
  if (participants.length < 3) return null;

  return (
    <View style={styles.podium}>
      {podiumOrder.map((participantIndex, columnIndex) => {
        const participant = participants[participantIndex];
        const place = participantIndex + 1;
        const color = podiumColors[participantIndex];

        return (
          <Animated.View
            key={participant.id}
            entering={FadeInDown.delay(columnIndex * 110)
              .duration(480)
              .springify()}
            style={styles.column}
          >
            <View style={[styles.avatar, { borderColor: color }]}>
              <Text style={styles.initials}>{initials(participant.name)}</Text>
              {place === 1 && (
                <Animated.View
                  entering={ZoomIn.delay(220).duration(420).springify()}
                  style={styles.crown}
                >
                  <Ionicons
                    name="trophy"
                    size={theme.sizes.iconTiny}
                    color={palette.neutral[800]}
                  />
                </Animated.View>
              )}
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {participant.isCurrentUser ? "Tú" : participant.name.split(" ")[0]}
            </Text>
            <Text style={[styles.points, { color }]}>
              {participant.points.toLocaleString("es-BO")} XP
            </Text>
            <View
              style={[
                styles.podiumBlock,
                {
                  height: podiumHeights[columnIndex],
                  borderColor: `${color}55`,
                },
                place === 1 && styles.firstPlaceBlock,
              ]}
            >
              <Text style={[styles.place, { color }]}>{place}</Text>
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  podium: {
    minHeight: theme.sizes.podium,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: theme.spacing.sm,
    paddingTop: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
  },
  column: {
    flex: 1,
    maxWidth: theme.sizes.podiumColumn,
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  avatar: {
    width: theme.sizes.avatar,
    height: theme.sizes.avatar,
    borderRadius: theme.radius.full,
    borderWidth: 2,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: { color: colors.text, fontWeight: "800", fontSize: theme.text.small },
  crown: {
    position: "absolute",
    top: -theme.spacing.xs,
    right: -theme.spacing.xs,
    width: theme.sizes.iconSmall,
    height: theme.sizes.iconSmall,
    borderRadius: theme.radius.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.primary[100],
  },
  name: {
    maxWidth: "100%",
    color: palette.neutral[200],
    fontSize: theme.text.small,
    fontWeight: "700",
  },
  points: { fontSize: theme.text.caption, fontWeight: "800" },
  podiumBlock: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    backgroundColor: colors.card,
  },
  firstPlaceBlock: { backgroundColor: palette.primary[500] },
  place: { fontSize: theme.text.title, fontWeight: "900" },
});
