import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { colors, palette } from "../../constants/colors";
import { theme } from "../../constants/theme";
import { practiceContents } from "../../data/practiceContent";
import { savePracticeResult } from "../../storage/practiceProgress";
import { awardXPForPractice, getXPProgress } from "../../storage/xpProgress";

export default function PracticeScreen() {
  const router = useRouter();
  const { practiceId } = useLocalSearchParams<{
    practiceId: string;
  }>();

  const practice = practiceContents.find((item) => item.id === practiceId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const currentQuestion = practice?.questions[currentQuestionIndex];

  const selectedOption = currentQuestion?.options.find(
    (option) => option.id === selectedOptionId,
  );

  const totalQuestions = practice?.questions.length ?? 0;

  const progressPercentage =
    totalQuestions > 0
      ? ((currentQuestionIndex + 1) / totalQuestions) * 100
      : 0;

  const handleSelectOption = (optionId: string) => {
    if (!currentQuestion || selectedOptionId !== null) {
      return;
    }

    const option = currentQuestion.options.find((item) => item.id === optionId);

    if (!option) {
      return;
    }

    setSelectedOptionId(optionId);

    if (option.isCorrect) {
      setCorrectAnswers((previous) => previous + 1);
    }
  };

  const handleFinishPractice = async () => {
    if (!practice || isSaving) {
      return;
    }

    try {
      setIsSaving(true);

      // Save the attempt and update the best score.
      const record = await savePracticeResult(
        practice.id,
        correctAnswers,
        totalQuestions,
      );

      setBestScore(record.bestScore);

      // Calcula xp
      const reward =
        practice.baseXP + correctAnswers * practice.bonusXPPerCorrectAnswer;

      const previousProgress = await getXPProgress();

      const updatedTotalXP = await awardXPForPractice(practice.id, reward);

      // A repetir si sacas 0
      setEarnedXP(updatedTotalXP - previousProgress.totalXP);

      setShowResults(true);
    } catch (error) {
      console.error("Error completing practice:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOptionId === null || !practice) {
      return;
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      handleFinishPractice();
      return;
    }

    setCurrentQuestionIndex((previous) => previous + 1);
    setSelectedOptionId(null);
  };

  const handleRetryPractice = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setCorrectAnswers(0);
    setShowResults(false);
    setEarnedXP(0);
    setBestScore(0);
  };

  if (!practice) {
    return (
      <View style={styles.centered}>
        <Ionicons
          name="alert-circle-outline"
          size={45}
          color={palette.primary[100]}
        />

        <Text style={styles.title}>Reto no encontrado</Text>

        <Pressable style={styles.primaryButton} onPress={() => router.back()}>
          <Text style={styles.primaryButtonText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  if (showResults) {
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

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

        <Text style={styles.subtitle}>{practice.title}</Text>

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

        <Pressable style={styles.primaryButton} onPress={() => router.back()}>
          <Text style={styles.primaryButtonText}>Volver a prácticas</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={handleRetryPractice}>
          <Text style={styles.secondaryButtonText}>Repetir reto</Text>
        </Pressable>
      </ScrollView>
    );
  }

  if (!currentQuestion) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>No hay preguntas disponibles</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="close" size={24} color={colors.text} />
        <Text style={styles.backText}>Salir del reto</Text>
      </Pressable>

      <View style={styles.heading}>
        <Text style={styles.eyebrow}>RETO DESTACADO</Text>

        <Text style={styles.title}>{practice.title}</Text>

        <Text style={styles.subtitle}>{practice.description}</Text>
      </View>

      <View style={styles.progressInformation}>
        <Text style={styles.questionCounter}>
          Pregunta {currentQuestionIndex + 1} de {totalQuestions}
        </Text>

        <Text style={styles.xpLabel}>
          Hasta{" "}
          {practice.baseXP + totalQuestions * practice.bonusXPPerCorrectAnswer}{" "}
          XP
        </Text>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[styles.progressFill, { width: `${progressPercentage}%` }]}
        />
      </View>

      <View style={styles.questionCard}>
        <Text style={styles.questionLabel}>PON A PRUEBA TUS CONOCIMIENTOS</Text>

        <Text style={styles.questionText}>{currentQuestion.prompt}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          const isCorrect = option.isCorrect;

          return (
            <Pressable
              key={option.id}
              disabled={selectedOptionId !== null}
              onPress={() => handleSelectOption(option.id)}
              style={[
                styles.optionButton,
                isSelected && isCorrect && styles.correctOption,
                isSelected && !isCorrect && styles.incorrectOption,
              ]}
            >
              <View style={styles.optionLetter}>
                <Text style={styles.optionLetterText}>
                  {option.id.toUpperCase()}
                </Text>
              </View>

              <Text style={styles.optionText}>{option.label}</Text>

              {isSelected && (
                <Ionicons
                  name={isCorrect ? "checkmark-circle" : "close-circle"}
                  size={22}
                  color={isCorrect ? palette.secondary[200] : "#FF8D9B"}
                />
              )}
            </Pressable>
          );
        })}
      </View>

      {selectedOption && (
        <View style={styles.feedbackCard}>
          <Text style={styles.feedbackTitle}>
            {selectedOption.isCorrect ? "¡Muy bien!" : "Sigue aprendiendo"}
          </Text>

          <Text style={styles.feedbackText}>{selectedOption.explanation}</Text>
        </View>
      )}

      <Pressable
        style={[
          styles.primaryButton,
          selectedOptionId === null && styles.disabledButton,
        ]}
        disabled={selectedOptionId === null || isSaving}
        onPress={handleNextQuestion}
      >
        {isSaving ? (
          <ActivityIndicator color={palette.primary[500]} />
        ) : (
          <Text style={styles.primaryButtonText}>
            {currentQuestionIndex === totalQuestions - 1
              ? "Finalizar reto"
              : "Siguiente pregunta"}
          </Text>
        )}
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
    gap: theme.spacing.lg,
  },
  resultContent: {
    flexGrow: 1,
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
    justifyContent: "center",
    gap: theme.spacing.md,
  },
  centered: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  backText: {
    color: colors.text,
    fontSize: theme.text.body,
  },
  heading: {
    gap: theme.spacing.sm,
  },
  eyebrow: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  title: {
    color: colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: theme.text.body * 1.5,
  },
  progressInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionCounter: {
    color: colors.text,
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
  xpLabel: {
    color: palette.primary[100],
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
  progressTrack: {
    height: theme.spacing.sm,
    backgroundColor: colors.border,
    borderRadius: theme.radius.full,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: palette.primary[100],
    borderRadius: theme.radius.full,
  },
  questionCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  questionLabel: {
    color: colors.textMuted,
    fontSize: theme.text.caption,
    fontWeight: "bold",
  },
  questionText: {
    color: colors.text,
    fontSize: theme.text.subtitle,
    fontWeight: "bold",
    lineHeight: theme.text.subtitle * 1.4,
  },
  optionsContainer: {
    gap: theme.spacing.sm,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  optionLetter: {
    width: theme.spacing.xl,
    height: theme.spacing.xl,
    borderRadius: theme.radius.full,
    backgroundColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  optionLetterText: {
    color: colors.text,
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
  optionText: {
    flex: 1,
    color: colors.text,
    fontSize: theme.text.body,
    lineHeight: theme.text.body * 1.4,
  },
  correctOption: {
    borderColor: palette.secondary[200],
  },
  incorrectOption: {
    borderColor: "#FF8D9B",
  },
  feedbackCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  feedbackTitle: {
    color: palette.primary[100],
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
  feedbackText: {
    color: colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: theme.text.body * 1.5,
  },
  primaryButton: {
    backgroundColor: palette.primary[100],
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: theme.spacing.xxl + theme.spacing.sm,
  },
  primaryButtonText: {
    color: palette.primary[500],
    fontSize: theme.text.body,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.4,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },
  resultIcon: {
    width: 88,
    height: 88,
    alignSelf: "center",
    borderRadius: theme.radius.full,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  resultTitle: {
    color: colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
  },
  scoreCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    alignItems: "center",
    gap: theme.spacing.md,
  },
  scoreNumber: {
    color: colors.text,
    fontSize: theme.text.display,
    fontWeight: "bold",
  },
  scoreLabel: {
    color: colors.textMuted,
    fontSize: theme.text.body,
  },
  percentageText: {
    color: palette.primary[100],
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
  rewardCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  rewardInformation: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  rewardNumber: {
    color: palette.primary[100],
    fontSize: theme.text.title,
    fontWeight: "bold",
  },
  rewardLabel: {
    color: colors.textMuted,
    fontSize: theme.text.small,
  },
  bestScoreCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.md,
  },
  bestScoreLabel: {
    color: colors.textMuted,
    fontSize: theme.text.body,
  },
  bestScoreNumber: {
    color: colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
});
