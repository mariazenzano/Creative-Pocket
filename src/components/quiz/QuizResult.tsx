import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { BounceIn, FadeInDown } from "react-native-reanimated";

type Props = {
  score: number;
  total: number;
  onContinue: () => void;
  onRetry: () => void;
};

export default function QuizResult({ score, total, onContinue, onRetry }: Props) {
  const percentage = Math.round((score / total) * 100);

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      showsVerticalScrollIndicator={false}
    >
      <Animated.Text entering={FadeInDown.delay(80).duration(300)} style={styles.title}>
        Quiz completado
      </Animated.Text>

      <Animated.View entering={BounceIn.delay(120)} style={styles.resultCard}>
        <View style={styles.trophy}>
          <Ionicons name="trophy" size={62} color="#8F55FF" />
        </View>
        <Text style={styles.percentageLabel}>Porcentaje de aciertos</Text>
        <Animated.View entering={BounceIn.delay(250)} style={styles.scoreRing}>
          <Text style={styles.scoreText}>{percentage}%</Text>
          <Text style={styles.fraction}>{score}/{total}</Text>
        </Animated.View>
        <Text style={styles.message}>
          {score === total
            ? "¡Perfecto! Dominas estos conceptos."
            : "Buen trabajo. Sigue practicando para mejorar."}
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(260).duration(350)} style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          onPress={onContinue}
          style={({ pressed }) => [styles.continueButton, pressed && styles.pressed]}
        >
          <Text style={styles.continueText}>Continuar</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={onRetry}
          style={({ pressed }) => [styles.retryButton, pressed && styles.pressed]}
        >
          <Text style={styles.retryText}>Repetir quiz</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flexGrow: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { color: "#F7F4FB", fontSize: 22, fontWeight: "800", marginBottom: 24 },
  resultCard: {
    width: "100%",
    maxWidth: 330,
    minHeight: 335,
    borderRadius: 20,
    backgroundColor: "#18151F",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  trophy: { width: 96, height: 96, borderRadius: 30, backgroundColor: "#25133F", alignItems: "center", justifyContent: "center", marginBottom: 15 },
  percentageLabel: { color: "#F2EEF8", fontSize: 16, fontWeight: "700", marginBottom: 14 },
  scoreRing: {
    width: 102,
    height: 102,
    borderRadius: 51,
    borderWidth: 5,
    borderColor: "#5A20F2",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: { color: "#FFFFFF", fontSize: 25, fontWeight: "800" },
  fraction: { color: "#BDB5CB", fontSize: 14, marginTop: 2 },
  message: { color: "#BDB5CB", fontSize: 14, textAlign: "center", marginTop: 18 },
  actions: { width: "100%", maxWidth: 330, gap: 12, marginTop: 24 },
  continueButton: { minHeight: 48, borderRadius: 24, backgroundColor: "#3003FF", alignItems: "center", justifyContent: "center" },
  continueText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
  retryButton: { minHeight: 45, borderRadius: 23, backgroundColor: "#E8E6EB", alignItems: "center", justifyContent: "center" },
  retryText: { color: "#29242F", fontSize: 16, fontWeight: "700" },
  pressed: { opacity: 0.78, transform: [{ scale: 0.98 }] },
});
