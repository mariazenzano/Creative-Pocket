import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated, Pressable, ScrollView, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import type { Region } from "../../types/map";

import { PASSING_PERCENTAGE } from "./ActivityLogic";
import {
    celebrationStyles,
    resultStyles as styles,
} from "./ActivityResultStyles";
type Feedback = {
  title: string;
  message: string;
  recommendation: string;
};

type CelebrationProps = {
  region: Region;
  trophyScale: Animated.Value;
  onContinue: () => void;
};

export function ActivityCelebration({
  region,
  trophyScale,
  onContinue,
}: CelebrationProps) {
  return (
    <View style={celebrationStyles.celebrationScreen}>
      <Animated.View
        style={[
          celebrationStyles.celebrationIcon,
          {
            backgroundColor: `${region.accentColor}22`,
            transform: [{ scale: trophyScale }],
          },
        ]}
      >
        <Ionicons name="trophy" size={76} color={region.accentColor} />
      </Animated.View>

      <Text style={celebrationStyles.celebrationEyebrow}>
        ¡ESPECIALIDAD COMPLETADA!
      </Text>

      <Text style={celebrationStyles.celebrationTitle}>¡Lo lograste!</Text>

      <Text style={celebrationStyles.celebrationDescription}>
        Has completado todas las actividades de
      </Text>

      <Text
        style={[celebrationStyles.regionTitle, { color: region.accentColor }]}
      >
        {region.title}
      </Text>

      <View
        style={[
          celebrationStyles.rewardCard,
          { borderColor: region.accentColor },
        ]}
      >
        <Ionicons name="medal" size={34} color={region.accentColor} />

        <View style={celebrationStyles.rewardTextContainer}>
          <Text style={celebrationStyles.rewardTitle}>
            Nueva especialidad dominada
          </Text>

          <Text style={celebrationStyles.rewardDescription}>
            Tu progreso ha quedado guardado en Creative Pocket.
          </Text>
        </View>
      </View>

      <Pressable
        style={[
          celebrationStyles.celebrationButton,
          { backgroundColor: region.accentColor },
        ]}
        onPress={onContinue}
      >
        <Text style={celebrationStyles.celebrationButtonText}>
          Continuar explorando
        </Text>

        <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

type ResultsProps = {
  trophyScale: Animated.Value;
  hasPassed: boolean;
  resultPercentage: number;
  correctAnswers: number;
  totalQuestions: number;
  resultFeedback: Feedback;
  earnedXP: number;
  isSaving: boolean;
  onComplete: () => void;
  onRetry: () => void;
  onBack: () => void;
};

export function ActivityResults({
  trophyScale,
  hasPassed,
  resultPercentage,
  correctAnswers,
  totalQuestions,
  resultFeedback,
  earnedXP,
  isSaving,
  onComplete,
  onRetry,
  onBack,
}: ResultsProps) {
  return (
    <View style={styles.resultsScreen}>
      <ScrollView
        contentContainerStyle={styles.resultsContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[styles.resultsIcon, { transform: [{ scale: trophyScale }] }]}
        >
          <Text style={styles.resultsEmoji}>{hasPassed ? "🏆" : "💪"}</Text>
        </Animated.View>

        <Text style={styles.resultsEyebrow}>
          {hasPassed ? "ACTIVIDAD COMPLETADA" : "SIGUE PRACTICANDO"}
        </Text>

        <Text style={styles.resultsTitle}>
          {hasPassed ? "¡Superaste la actividad!" : "¡Puedes lograrlo!"}
        </Text>

        <Text style={styles.resultsDescription}>
          {hasPassed
            ? "Has demostrado lo que aprendiste. ¡Sigue avanzando!"
            : "Todavía puedes reforzar lo aprendido. ¡Inténtalo otra vez!"}
        </Text>

        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>TU RESULTADO</Text>

          <Text
            style={[
              styles.scorePercentage,
              {
                color: hasPassed ? "#269B69" : theme.colors.secondary,
              },
            ]}
          >
            {resultPercentage}%
          </Text>

          <View style={styles.scoreTrack}>
            <View
              style={[
                styles.scoreFill,
                {
                  width: `${resultPercentage}%`,
                  backgroundColor: hasPassed ? "#269B69" : "#E6A23C",
                },
              ]}
            />
          </View>

          <View style={styles.scoreDetails}>
            <View style={styles.scoreDetailItem}>
              <Ionicons name="checkmark-circle" size={23} color="#269B69" />

              <Text style={styles.scoreDetailText}>
                {correctAnswers} correctas
              </Text>
            </View>

            <View style={styles.scoreDetailItem}>
              <Ionicons
                name="help-circle"
                size={23}
                color={theme.colors.secondary}
              />

              <Text style={styles.scoreDetailText}>
                {totalQuestions} preguntas
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.feedbackResultCard}>
          <View style={styles.feedbackResultHeader}>
            <Ionicons
              name={
                resultPercentage === 100
                  ? "trophy"
                  : hasPassed
                    ? "school"
                    : "refresh-circle"
              }
              size={28}
              color={theme.colors.primary}
            />

            <Text style={styles.feedbackResultTitle}>
              {resultFeedback.title}
            </Text>
          </View>

          <Text style={styles.feedbackResultMessage}>
            {resultFeedback.message}
          </Text>

          <View style={styles.recommendationContainer}>
            <Ionicons
              name="bulb-outline"
              size={21}
              color={theme.colors.secondary}
            />

            <Text style={styles.recommendationText}>
              {resultFeedback.recommendation}
            </Text>
          </View>
        </View>

        {hasPassed && (
          <View style={styles.xpCard}>
            <Text style={styles.xpEmoji}>⭐</Text>

            <View style={styles.xpTextContainer}>
              <Text style={styles.xpTitle}>Recompensa obtenida</Text>

              <Text style={styles.xpDescription}>
                +{earnedXP} XP por tus respuestas correctas
              </Text>
            </View>
          </View>
        )}

        <View style={styles.passInfo}>
          <Ionicons
            name={hasPassed ? "checkmark-circle" : "information-circle"}
            size={20}
            color={hasPassed ? "#269B69" : theme.colors.secondary}
          />

          <Text style={styles.passInfoText}>
            {hasPassed
              ? `¡Alcanzaste el ${PASSING_PERCENTAGE}% necesario para aprobar!`
              : `Necesitas al menos ${PASSING_PERCENTAGE}% para completar esta actividad.`}
          </Text>
        </View>

        {hasPassed ? (
          <Pressable
            style={styles.completeButton}
            onPress={onComplete}
            disabled={isSaving}
          >
            <Text style={styles.completeButtonText}>
              {isSaving ? "Guardando..." : "Continuar"}
            </Text>

            <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
          </Pressable>
        ) : (
          <Pressable style={styles.completeButton} onPress={onRetry}>
            <Ionicons name="refresh" size={22} color="#FFFFFF" />

            <Text style={styles.completeButtonText}>Repetir actividad</Text>
          </Pressable>
        )}

        <Pressable
          style={styles.secondaryButton}
          onPress={onBack}
          disabled={isSaving}
        >
          <Text style={styles.secondaryButtonText}>Volver al mapa</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
