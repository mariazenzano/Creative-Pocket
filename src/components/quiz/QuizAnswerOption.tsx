import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

type Props = {
  label: string;
  index: number;
  isCorrect: boolean;
  isIncorrect: boolean;
  disabled: boolean;
  onPress: () => void;
  grid?: boolean;
  action?: boolean;
};

export default function QuizAnswerOption({
  label,
  index,
  isCorrect,
  isIncorrect,
  disabled,
  onPress,
  grid = false,
  action = false,
}: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(isPressed ? 0.96 : 1) }],
  }));

  const optionStyle = isCorrect
    ? styles.correct
    : isIncorrect
      ? styles.incorrect
      : action
        ? styles.action
        : styles.option;

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 45).duration(260)}
      style={[animatedStyle, grid && styles.gridItem]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled, selected: isCorrect || isIncorrect }}
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          grid && styles.gridButton,
          optionStyle,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.label, action && styles.actionLabel]}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  gridItem: { width: "47%", aspectRatio: 1.1 },
  button: {
    minHeight: 60,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridButton: { height: "100%" },
  option: { backgroundColor: "#0E081D", borderColor: "#21123F" },
  correct: { backgroundColor: "#10BF70", borderColor: "#10BF70" },
  incorrect: { backgroundColor: "#F53652", borderColor: "#F53652" },
  action: { backgroundColor: "#3003FF", borderColor: "#3003FF" },
  label: { color: "#F5F2FA", fontSize: 14, fontWeight: "600", textAlign: "center" },
  actionLabel: { fontSize: 16, fontWeight: "700" },
  pressed: { opacity: 0.85 },
});
