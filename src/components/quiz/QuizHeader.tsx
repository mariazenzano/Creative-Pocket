import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import { palette } from "../../constants/colors";

type Props = { title: string; onBack: () => void };

export default function QuizHeader({ title, onBack }: Props) {
  return (
    <Animated.View entering={FadeInDown.duration(300)} style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Volver a cursos"
        onPress={onBack}
        hitSlop={8}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <Ionicons name="arrow-back" size={19} color={palette.primary[100]} />
      </Pressable>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  backButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: palette.primary[300],
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    left: 58,
    right: 58,
    color: "#F4F1FA",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: { opacity: 0.7, transform: [{ scale: 0.94 }] },
});
