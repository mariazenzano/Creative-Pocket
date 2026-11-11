import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import { colors, palette } from "@/constants/colors";
import { theme } from "@/constants/theme";

import type { RankingParticipant } from "./types";

type Props = {
  participants: RankingParticipant[];
  currentUserId: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export default function RankingList({ participants, currentUserId }: Props) {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.duration(280)} style={styles.heading}>
        <Text style={styles.title}>Clasificación</Text>
        <Text style={styles.count}>{participants.length} participantes</Text>
      </Animated.View>
      <View style={styles.rows}>
        {participants.slice(3).map((participant, index) => {
          const position = index + 4;
          const isCurrentUser = participant.id === currentUserId;

          return (
            <Animated.View
              key={participant.id}
              entering={FadeInDown.delay(index * 45).duration(280)}
              style={[styles.row, isCurrentUser && styles.currentRow]}
              accessibilityLabel={`${position} lugar, ${participant.name}, ${participant.points} XP${isCurrentUser ? ", tu posición" : ""}`}
            >
              <Text style={[styles.position, isCurrentUser && styles.currentText]}>
                {position.toString().padStart(2, "0")}
              </Text>
              <View style={[styles.avatar, isCurrentUser && styles.currentAvatar]}>
                <Text style={styles.initials}>{initials(participant.name)}</Text>
              </View>
              <View style={styles.person}>
                <Text style={[styles.name, isCurrentUser && styles.currentText]} numberOfLines={1}>
                  {isCurrentUser ? `${participant.name} · Tú` : participant.name}
                </Text>
                <Text style={styles.tag}>{isCurrentUser ? "Tu posición" : "Creador"}</Text>
              </View>
              <Text style={[styles.points, isCurrentUser && styles.currentText]}>
                {participant.points.toLocaleString("es-BO")} <Text style={styles.xp}>XP</Text>
              </Text>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.md,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { color: colors.text, fontSize: theme.text.heading, fontWeight: "800" },
  count: { color: colors.textMuted, fontSize: theme.text.caption },
  rows: { gap: theme.spacing.sm },
  row: {
    minHeight: theme.sizes.listRow,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  currentRow: {
    borderColor: palette.primary[200],
    backgroundColor: palette.primary[500],
  },
  position: {
    width: theme.sizes.rankMarker,
    color: colors.textMuted,
    fontSize: theme.text.small,
    fontWeight: "800",
  },
  avatar: {
    width: theme.sizes.avatarSmall,
    height: theme.sizes.avatarSmall,
    borderRadius: theme.radius.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  currentAvatar: { backgroundColor: palette.primary[300] },
  initials: { color: colors.text, fontSize: theme.text.caption, fontWeight: "800" },
  person: { flex: 1, gap: theme.spacing.xs },
  name: { color: palette.neutral[200], fontSize: theme.text.small, fontWeight: "700" },
  tag: { color: colors.textMuted, fontSize: theme.text.caption },
  currentText: { color: palette.primary[100] },
  points: { color: colors.text, fontSize: theme.text.small, fontWeight: "800" },
  xp: { color: palette.neutral[500], fontSize: theme.text.caption },
});
