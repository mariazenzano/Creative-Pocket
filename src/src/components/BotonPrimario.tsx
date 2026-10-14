import { Pressable, StyleSheet, Text } from "react-native";
import { palette } from "../constants/colors";
import { theme } from "../constants/theme";
type Props = { label: string; onPress: () => void };
export default function BotonPrimario({ label, onPress }: Props) {
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
  // Select your button in Figma and fill each value with a theme key.
  button: {
    backgroundColor: palette.neutral[800], // Fill → theme.colors
    paddingVertical: theme.spacing.sm, // Auto layout → vertical padding → theme.spacing
    paddingHorizontal: theme.spacing.md, // Auto layout → horizontal padding → theme.spacing
    borderRadius: theme.radius.max1, // Corner radius → theme.radius
    alignItems: "center",
  },
  pressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  // Select the button text in Figma.
  label: {
    fontSize: theme.text.body, // Typography → Font size → theme.text
    fontWeight: 500, // Typography → weight: 'normal', '500', '600' or 'bold'
    color: theme.colors.text, // Fill of the text → theme.colors
  },
});
