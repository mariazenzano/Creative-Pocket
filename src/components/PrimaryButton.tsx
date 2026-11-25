import { Pressable, StyleSheet, Text } from "react-native";
import { palette } from "../constants/colors";
import { theme } from "../constants/theme";
type Props = { label: string; onPress: () => void };
export default function PrimaryButton({ label, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: palette.primary[300],
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.max1,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },

  label: {
    fontSize: theme.text.body,
    fontWeight: 500,
    color: theme.colors.text,
  },
});
