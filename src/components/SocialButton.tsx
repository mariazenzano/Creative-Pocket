import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function SocialButton({ label, icon, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={theme.text.title} color={theme.colors.text} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.full,
    borderWidth: 1, // stroke width from Figma
    borderColor: theme.colors.textMuted,
  },
  pressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  label: {
    fontSize: theme.text.heading,
    fontWeight: "bold",
    color: theme.colors.text,
  },
});
