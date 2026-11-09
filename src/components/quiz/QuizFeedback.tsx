import { StyleSheet, Text } from "react-native";
import Animated, { BounceIn, SlideInDown } from "react-native-reanimated";

type Props = { isCorrect: boolean };

export default function QuizFeedback({ isCorrect }: Props) {
  const color = isCorrect ? "#16BF70" : "#F53652";

  return (
    <Animated.View
      entering={SlideInDown.duration(480).withInitialValues({ originY: -120 })}
      style={[styles.banner, { backgroundColor: color }]}
    >
      <Animated.Image
        entering={BounceIn.delay(120).duration(500)}
        source={require("../../../assets/images/conejologin.png")}
        style={styles.mascot}
        resizeMode="contain"
        accessibilityLabel="Mascota de Creative Pocket"
      />
      <Text style={styles.title}>
        {isCorrect ? "¡Bien\nhecho!" : "Sigue\nintentando"}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: "absolute",
    top: 54,
    left: 0,
    right: 0,
    zIndex: 10,
    elevation: 10,
    height: 116,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  mascot: { width: 62, height: 90 },
  title: {
    width: "58%",
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "800",
    textAlign: "center",
  },
});
