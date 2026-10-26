import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

type Props = { text: string; linkLabel: string; onPress: () => void };

export default function Enlace({ text, linkLabel, onPress }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.link}>{linkLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  text: { fontSize: theme.text.body, color: theme.colors.textMuted },
  link: {
    fontSize: theme.text.body,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
