import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import { colors, palette } from "@/constants/colors";
import { theme } from "@/constants/theme";

export default function RankingHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>CREATIVE POCKET</Text>
        <Text style={styles.title}>Ranking</Text>
        <Text style={styles.subtitle}>Compite, crea y sube de posición.</Text>
      </View>
      <View style={styles.trophy}>
        <Ionicons
          name="trophy"
          size={theme.sizes.iconMedium}
          color={palette.primary[100]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: theme.sizes.rankingHeader,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: theme.spacing.sm,
  },
  copy: { flex: 1, gap: theme.spacing.xs },
  eyebrow: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "800",
    letterSpacing: 2,
  },
  title: { color: colors.text, fontSize: theme.text.title, fontWeight: "800" },
  subtitle: { color: colors.textMuted, fontSize: theme.text.small },
  trophy: {
    width: theme.sizes.iconLarge,
    height: theme.sizes.iconLarge,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
