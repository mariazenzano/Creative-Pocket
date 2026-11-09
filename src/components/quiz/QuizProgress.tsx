import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import { palette } from "../../constants/colors";

type Props = { current: number; total: number };

export default function QuizProgress({ current, total }: Props) {
  return (
    <View accessibilityLabel={`Pregunta ${current + 1} de ${total}`} style={styles.container}>
      {Array.from({ length: total }, (_, index) => (
        <Animated.View
          key={index}
          entering={FadeInDown.delay(index * 45).duration(250)}
          style={[styles.dot, index <= current ? styles.active : styles.inactive]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  active: { backgroundColor: palette.primary[300] },
  inactive: { backgroundColor: "#77717D" },
});
