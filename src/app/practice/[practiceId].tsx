import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { colors, palette } from "../../constants/colors";
import { practiceContents } from "../../data/practiceContent";
import { savePracticeResult } from "../../storage/practiceProgress";
import { awardXPForPractice, getXPProgress } from "../../storage/xpProgress";

import { styles } from "../../components/practices/PracticeQuizStyles";
import PracticeResultView from "../../components/practices/PracticeResultView";

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
    if (!currentQuestion || selectedOptionId !== null) return;

    const option = currentQuestion.options.find((item) => item.id === optionId);

    if (!option) return;

    setSelectedOptionId(optionId);

    if (option.isCorrect) {
      setCorrectAnswers((previous) => previous + 1);
    }
  };

  const handleFinishPractice = async () => {
    if (!practice || isSaving) return;

    try {
      setIsSaving(true);

      const record = await savePracticeResult(
        practice.id,
        correctAnswers,
        totalQuestions,
      );

      setBestScore(record.bestScore);

      const reward =
        practice.baseXP + correctAnswers * practice.bonusXPPerCorrectAnswer;

      const previousProgress = await getXPProgress();

      const updatedTotalXP = await awardXPForPractice(practice.id, reward);

      setEarnedXP(updatedTotalXP - previousProgress.totalXP);

      setShowResults(true);
    } catch (error) {
      console.error("Error completing practice:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOptionId === null || !practice) return;

    if (currentQuestionIndex === totalQuestions - 1) {
      void handleFinishPractice();
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
    return (
      <PracticeResultView
        practiceTitle={practice.title}
        correctAnswers={correctAnswers}
        totalQuestions={totalQuestions}
        earnedXP={earnedXP}
        bestScore={bestScore}
        onBack={() => router.back()}
        onRetry={handleRetryPractice}
      />
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
