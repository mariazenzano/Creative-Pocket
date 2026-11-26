import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, ScrollView, Text, View } from "react-native";

import { palette } from "../../constants/colors";
import { styles } from "./PracticeQuizStyles";

type Props = {
  practiceTitle: string;
  correctAnswers: number;
  totalQuestions: number;
  earnedXP: number;
  bestScore: number;
  onBack: () => void;
  onRetry: () => void;
};

export default function PracticeResultView({
  practiceTitle,
  correctAnswers,
  totalQuestions,
  earnedXP,
  bestScore,
  onBack,
  onRetry,
}: Props) {
  const percentage =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.resultContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.resultIcon}>
        <Ionicons name="trophy" size={48} color={palette.primary[100]} />
      </View>

      <Text style={styles.resultTitle}>¡Reto completado!</Text>

      <Text style={styles.subtitle}>{practiceTitle}</Text>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreNumber}>
          {correctAnswers}/{totalQuestions}
        </Text>

        <Text style={styles.scoreLabel}>Respuestas correctas</Text>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${percentage}%` }]} />
        </View>

        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>

      <View style={styles.rewardCard}>
        <Ionicons name="sparkles" size={30} color={palette.primary[100]} />

        <View style={styles.rewardInformation}>
          <Text style={styles.rewardNumber}>+{earnedXP} XP</Text>

          <Text style={styles.rewardLabel}>
            {earnedXP > 0
              ? "Recompensa obtenida"
              : "Ya habías recibido la recompensa"}
          </Text>
        </View>
      </View>

      <View style={styles.bestScoreCard}>
        <Text style={styles.bestScoreLabel}>Tu mejor puntuación</Text>

        <Text style={styles.bestScoreNumber}>
          {bestScore}/{totalQuestions}
        </Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={onBack}>
        <Text style={styles.primaryButtonText}>Volver a prácticas</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={onRetry}>
        <Text style={styles.secondaryButtonText}>Repetir reto</Text>
      </Pressable>
    </ScrollView>
  );
}
