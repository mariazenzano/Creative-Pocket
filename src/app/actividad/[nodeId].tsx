import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { theme } from "../../constants/theme";
import { activityContents } from "../../data/activityContent";
import { mapNodes } from "../../data/mapNodes";
import { regions } from "../../data/regions";

import type { ActivityStep } from "../../types/activity";
import type { MapNode, Region } from "../../types/map";

import { completeNode, getCompletedNodeIds } from "../../storage/mapProgress";
import { awardXPForNode } from "../../storage/xpProgress";
import { getCompletedRegionIds } from "../../utils/mapProgress";

// Porcentaje mínimo para aprobar
const PASSING_PERCENTAGE = 67;

// XP que se obtiene por cada respuesta correcta
const XP_PER_CORRECT_ANSWER = 10;

function getActivityLabel(type: MapNode["type"]): string {
  switch (type) {
    case "lesson":
      return "Lección";
    case "exercise":
      return "Ejercicio";
    case "challenge":
      return "Desafío";
    case "project":
      return "Proyecto";
    default:
      return "Actividad";
  }
}

export default function ActivityScreen() {
  const router = useRouter();

  const { nodeId } = useLocalSearchParams<{ nodeId: string }>();

  const [isSaving, setIsSaving] = useState(false);
  const [completedRegion, setCompletedRegion] = useState<Region | null>(null);

  // Control del avance de la actividad
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Respuesta seleccionada
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Resultados de las preguntas
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Control de la pantalla de resultados
  const [showResults, setShowResults] = useState(false);

  // Animaciones
  const fireScale = useRef(new Animated.Value(1)).current;
  const shakeX = useRef(new Animated.Value(0)).current;
  const trophyScale = useRef(new Animated.Value(0.7)).current;

  // Buscamos la actividad seleccionada
  const activity = mapNodes.find((node) => node.id === nodeId);

  // Reiniciamos los estados cuando cambia la actividad
  useEffect(() => {
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setCorrectAnswers(0);
    setShowResults(false);
    setCompletedRegion(null);

    fireScale.setValue(1);
    shakeX.setValue(0);
    trophyScale.setValue(0.7);
  }, [nodeId, fireScale, shakeX, trophyScale]);

  // Comprobamos que la actividad exista
  if (!activity) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.title}>Actividad no encontrada</Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  // Buscamos el contenido educativo
  const activityContent = activityContents.find(
    (item) => item.nodeId === activity.id,
  );

  // Identificamos el paso actual
  const currentStep: ActivityStep | undefined =
    activityContent?.steps[currentStepIndex];

  // Identificamos si el paso es una pregunta
  const isQuestion = currentStep?.type === "question";

  // Buscamos la respuesta seleccionada
  const selectedOption =
    currentStep?.type === "question"
      ? currentStep.options.find((option) => option.id === selectedOptionId)
      : undefined;

  // Comprobamos si es el último paso
  const isLastStep = activityContent
    ? currentStepIndex === activityContent.steps.length - 1
    : false;

  // Calculamos el progreso de la actividad
  const progressPercentage = activityContent
    ? ((currentStepIndex + 1) / activityContent.steps.length) * 100
    : 0;

  // Contamos las preguntas de la actividad
  const totalQuestions = activityContent
    ? activityContent.steps.filter((step) => step.type === "question").length
    : 0;

  // Calculamos el porcentaje de respuestas correctas
  const resultPercentage =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  // Comprobamos si el estudiante aprobó
  const hasPassed =
    totalQuestions === 0 || resultPercentage >= PASSING_PERCENTAGE;

  // Calculamos la recompensa
  const earnedXP = correctAnswers * XP_PER_CORRECT_ANSWER;

  // Mensajes personalizados según el resultado
  const resultFeedback =
    resultPercentage === 100
      ? {
          title: "¡Dominaste los fundamentos!",
          message:
            "Respondiste todas las preguntas correctamente. Has comprendido los conceptos principales del diseño gráfico.",
          recommendation:
            "Estás listo para avanzar y descubrir nuevos conceptos.",
        }
      : hasPassed
        ? {
            title: "¡Buen trabajo!",
            message:
              "Has comprendido gran parte del contenido. Ya tienes una buena base para continuar aprendiendo.",
            recommendation:
              "Repasa los conceptos que te resultaron más difíciles para reforzar tus conocimientos.",
          }
        : {
            title: "¡Vamos a intentarlo de nuevo!",
            message:
              "Todavía hay algunos conceptos que necesitas reforzar. Equivocarse también forma parte del aprendizaje.",
            recommendation:
              "Vuelve a revisar la lección y presta atención a los elementos visuales y su función comunicativa.",
          };

  // Animación cuando la respuesta es correcta
  const animateCorrectAnswer = () => {
    fireScale.setValue(0.7);

    Animated.sequence([
      Animated.spring(fireScale, {
        toValue: 1.35,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(fireScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Animación cuando la respuesta es incorrecta
  const animateIncorrectAnswer = () => {
    shakeX.setValue(0);

    Animated.sequence([
      Animated.timing(shakeX, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeX, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeX, {
        toValue: 7,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeX, {
        toValue: -7,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeX, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Seleccionamos una respuesta y registramos el resultado
  const handleSelectOption = (optionId: string) => {
    if (selectedOptionId !== null || currentStep?.type !== "question") {
      return;
    }

    const selectedAnswer = currentStep.options.find(
      (option) => option.id === optionId,
    );

    if (!selectedAnswer) {
      return;
    }

    setSelectedOptionId(optionId);

    if (selectedAnswer.isCorrect) {
      setCorrectAnswers((previous) => previous + 1);
      animateCorrectAnswer();
    } else {
      animateIncorrectAnswer();
    }
  };

  // Guardamos la actividad y comprobamos si completamos una región
  const handleCompleteActivity = async () => {
    try {
      setIsSaving(true);

      const previousCompletedNodes = await getCompletedNodeIds();

      // Entregamos XP si esta actividad todavía no recibió su recompensa
      await awardXPForNode(activity.id, earnedXP);

      // Guardamos la actividad
      const updatedCompletedNodes = await completeNode(activity.id);

      const previousCompletedRegions = getCompletedRegionIds(
        regions,
        mapNodes,
        previousCompletedNodes,
      );

      const updatedCompletedRegions = getCompletedRegionIds(
        regions,
        mapNodes,
        updatedCompletedNodes,
      );

      const newlyCompletedRegionId = updatedCompletedRegions.find(
        (regionId) => !previousCompletedRegions.includes(regionId),
      );

      if (newlyCompletedRegionId) {
        const region = regions.find(
          (item) => item.id === newlyCompletedRegionId,
        );

        if (region) {
          setCompletedRegion(region);
          return;
        }
      }

      router.back();
    } catch (error) {
      Alert.alert(
        "No se pudo guardar",
        "Intenta completar la actividad nuevamente.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  // Avanzamos al siguiente paso
  const handleNextStep = () => {
    if (isQuestion && selectedOptionId === null) {
      return;
    }

    // Si llegamos al último paso, mostramos los resultados
    if (isLastStep) {
      setShowResults(true);

      trophyScale.setValue(0.7);

      Animated.spring(trophyScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }).start();

      return;
    }

    setCurrentStepIndex((previousIndex) => previousIndex + 1);
    setSelectedOptionId(null);
    shakeX.setValue(0);
  };

  // Repetimos la actividad desde el principio
  const handleRetryActivity = () => {
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setCorrectAnswers(0);
    setShowResults(false);

    fireScale.setValue(1);
    shakeX.setValue(0);
    trophyScale.setValue(0.7);
  };

  // Pantalla de especialidad completada
  if (completedRegion) {
    return (
      <View style={styles.celebrationScreen}>
        <Animated.View
          style={[
            styles.celebrationIcon,
            {
              backgroundColor: `${completedRegion.accentColor}22`,
              transform: [{ scale: trophyScale }],
            },
          ]}
        >
          <Ionicons
            name="trophy"
            size={76}
            color={completedRegion.accentColor}
          />
        </Animated.View>

        <Text style={styles.celebrationEyebrow}>¡ESPECIALIDAD COMPLETADA!</Text>

        <Text style={styles.celebrationTitle}>¡Lo lograste!</Text>

        <Text style={styles.celebrationDescription}>
          Has completado todas las actividades de
        </Text>

        <Text
          style={[styles.regionTitle, { color: completedRegion.accentColor }]}
        >
          {completedRegion.title}
        </Text>

        <View
          style={[
            styles.rewardCard,
            { borderColor: completedRegion.accentColor },
          ]}
        >
          <Ionicons
            name="medal"
            size={34}
            color={completedRegion.accentColor}
          />

          <View style={styles.rewardTextContainer}>
            <Text style={styles.rewardTitle}>Nueva especialidad dominada</Text>

            <Text style={styles.rewardDescription}>
              Tu progreso ha quedado guardado en Creative Pocket.
            </Text>
          </View>
        </View>

        <Pressable
          style={[
            styles.celebrationButton,
            { backgroundColor: completedRegion.accentColor },
          ]}
          onPress={() => router.back()}
        >
          <Text style={styles.celebrationButtonText}>Continuar explorando</Text>

          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    );
  }

  // Pantalla para actividades sin contenido
  if (!activityContent) {
    return (
      <View style={styles.screen}>
        <View style={styles.content}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
          </Pressable>

          <View style={styles.activityIcon}>
            <Ionicons
              name="book-outline"
              size={48}
              color={theme.colors.primary}
            />
          </View>

          <Text style={styles.activityType}>
            {getActivityLabel(activity.type)}
          </Text>

          <Text style={styles.title}>{activity.title}</Text>

          <Text style={styles.description}>{activity.description}</Text>

          <View style={styles.infoCard}>
            <Ionicons
              name="construct-outline"
              size={24}
              color={theme.colors.secondary}
            />

            <Text style={styles.infoText}>
              Estamos preparando el contenido de esta actividad. Próximamente
              podrás comenzar a aprender aquí.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  // Pantalla de resultados
  if (showResults) {
    return (
      <View style={styles.resultsScreen}>
        <ScrollView
          contentContainerStyle={styles.resultsContent}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={[
              styles.resultsIcon,
              {
                transform: [{ scale: trophyScale }],
              },
            ]}
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
                { color: hasPassed ? "#269B69" : theme.colors.secondary },
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

          {/* Retroalimentación personalizada */}
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
              onPress={handleCompleteActivity}
              disabled={isSaving}
            >
              <Text style={styles.completeButtonText}>
                {isSaving ? "Guardando..." : "Continuar"}
              </Text>

              <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
            </Pressable>
          ) : (
            <Pressable
              style={styles.completeButton}
              onPress={handleRetryActivity}
            >
              <Ionicons name="refresh" size={22} color="#FFFFFF" />

              <Text style={styles.completeButtonText}>Repetir actividad</Text>
            </Pressable>
          )}

          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.back()}
            disabled={isSaving}
          >
            <Text style={styles.secondaryButtonText}>Volver al mapa</Text>
          </Pressable>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Encabezado */}
        <View style={styles.topBar}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
          </Pressable>

          <Text style={styles.topBarTitle}>
            {getActivityLabel(activity.type)}
          </Text>

          <Text style={styles.stepCounter}>
            {currentStepIndex + 1}/{activityContent.steps.length}
          </Text>
        </View>

        {/* Barra de progreso */}
        <View style={styles.progressTrack}>
          <View
            style={[styles.progressFill, { width: `${progressPercentage}%` }]}
          />
        </View>

        {/* Título */}
        <Text style={styles.activityTitle}>{activityContent.title}</Text>

        <Text style={styles.introduction}>{activityContent.introduction}</Text>

        {/* Contenido informativo */}
        {currentStep?.type === "content" && (
          <View style={styles.stepContainer}>
            <View style={styles.contentIcon}>
              <Ionicons
                name="bulb-outline"
                size={38}
                color={theme.colors.primary}
              />
            </View>

            <Text style={styles.stepTitle}>{currentStep.title}</Text>

            <Text style={styles.stepBody}>{currentStep.body}</Text>

            {currentStep.highlight && (
              <View style={styles.highlightCard}>
                <Ionicons
                  name="sparkles-outline"
                  size={24}
                  color={theme.colors.secondary}
                />

                <Text style={styles.highlightText}>
                  {currentStep.highlight}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Pregunta interactiva */}
        {currentStep?.type === "question" && (
          <Animated.View
            style={[
              styles.stepContainer,
              { transform: [{ translateX: shakeX }] },
            ]}
          >
            <View style={styles.contentIcon}>
              <Ionicons
                name="help-circle-outline"
                size={38}
                color={theme.colors.primary}
              />
            </View>

            <Text style={styles.stepTitle}>Comprueba lo aprendido</Text>

            <Text style={styles.questionText}>{currentStep.prompt}</Text>

            {/* Opciones */}
            <View style={styles.optionsContainer}>
              {currentStep.options.map((option) => {
                const isSelected = selectedOptionId === option.id;

                let optionStyle = styles.option;

                if (selectedOptionId !== null && option.isCorrect) {
                  optionStyle = styles.correctOption;
                } else if (isSelected && !option.isCorrect) {
                  optionStyle = styles.incorrectOption;
                }

                return (
                  <Pressable
                    key={option.id}
                    style={optionStyle}
                    disabled={selectedOptionId !== null}
                    onPress={() => handleSelectOption(option.id)}
                  >
                    <Text
                      style={[
                        styles.optionLabel,
                        selectedOptionId !== null && styles.selectedOptionLabel,
                      ]}
                    >
                      {option.label}
                    </Text>

                    {selectedOptionId !== null && option.isCorrect && (
                      <Ionicons
                        name="checkmark-circle"
                        size={22}
                        color="#FFFFFF"
                      />
                    )}

                    {isSelected && !option.isCorrect && (
                      <Ionicons name="close-circle" size={22} color="#FFFFFF" />
                    )}
                  </Pressable>
                );
              })}
            </View>

            {/* Retroalimentación */}
            {selectedOptionId !== null && (
              <View
                style={[
                  styles.feedbackCard,
                  selectedOption?.isCorrect
                    ? styles.correctFeedback
                    : styles.incorrectFeedback,
                ]}
              >
                {selectedOption?.isCorrect ? (
                  <Animated.View
                    style={[
                      styles.fireContainer,
                      { transform: [{ scale: fireScale }] },
                    ]}
                  >
                    <Text style={styles.fireEmoji}>🔥</Text>
                  </Animated.View>
                ) : (
                  <Ionicons
                    name="information-circle"
                    size={28}
                    color={theme.colors.secondary}
                  />
                )}

                <View style={styles.feedbackTextContainer}>
                  <Text style={styles.feedbackTitle}>
                    {selectedOption?.isCorrect
                      ? "¡Excelente!"
                      : "¡Sigue aprendiendo!"}
                  </Text>

                  <Text style={styles.feedbackText}>
                    {currentStep.explanation}
                  </Text>
                </View>
              </View>
            )}
          </Animated.View>
        )}

        {/* Botón para avanzar */}
        <Pressable
          style={[
            styles.completeButton,
            (isSaving || (isQuestion && selectedOptionId === null)) &&
              styles.disabledButton,
          ]}
          onPress={handleNextStep}
          disabled={isSaving || (isQuestion && selectedOptionId === null)}
        >
          <Text style={styles.completeButtonText}>
            {isSaving
              ? "Guardando..."
              : isLastStep
                ? "Ver resultados"
                : "Continuar"}
          </Text>

          <Ionicons
            name={isLastStep ? "trophy-outline" : "arrow-forward"}
            size={22}
            color="#FFFFFF"
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xxl,
    flexGrow: 1,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.md,
  },

  topBarTitle: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },

  stepCounter: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  progressTrack: {
    height: 8,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.full,
    overflow: "hidden",
    marginBottom: theme.spacing.xl,
  },

  progressFill: {
    height: "100%",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.full,
  },

  activityTitle: {
    color: theme.colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },

  introduction: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: 23,
    textAlign: "center",
    marginBottom: theme.spacing.xl,
  },

  stepContainer: {
    flex: 1,
  },

  contentIcon: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#7557FF22",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: theme.spacing.lg,
  },

  stepTitle: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing.lg,
  },

  stepBody: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    lineHeight: 25,
  },

  highlightCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.xl,
  },

  highlightText: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    lineHeight: 22,
    flex: 1,
  },

  questionText: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 27,
    marginBottom: theme.spacing.xl,
  },

  optionsContainer: {
    gap: theme.spacing.md,
  },

  option: {
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm,
  },

  correctOption: {
    backgroundColor: "#269B69",
    borderColor: "#269B69",
    borderWidth: 1,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm,
  },

  incorrectOption: {
    backgroundColor: "#D9534F",
    borderColor: "#D9534F",
    borderWidth: 1,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm,
  },

  optionLabel: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    flex: 1,
  },

  selectedOptionLabel: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  feedbackCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  },

  correctFeedback: {
    backgroundColor: "#269B6922",
  },

  incorrectFeedback: {
    backgroundColor: theme.colors.card,
  },

  fireContainer: {
    width: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  fireEmoji: {
    fontSize: 32,
  },

  feedbackTextContainer: {
    flex: 1,
    gap: 4,
  },

  feedbackTitle: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  feedbackText: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    lineHeight: 22,
    flex: 1,
  },

  completeButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xxl,
  },

  disabledButton: {
    opacity: 0.45,
  },

  completeButtonText: {
    color: "#FFFFFF",
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },

  errorContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginTop: theme.spacing.lg,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  description: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    textAlign: "center",
    lineHeight: 22,
  },

  activityIcon: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#7557FF22",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: theme.spacing.lg,
  },

  activityType: {
    color: theme.colors.secondary,
    fontSize: theme.text.heading,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.xxl,
  },

  infoText: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    flex: 1,
    lineHeight: 21,
  },

  // Pantalla de resultados
  resultsScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  resultsContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.xxl,
  },

  resultsIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#7557FF22",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.lg,
  },

  resultsEmoji: {
    fontSize: 64,
  },

  resultsEyebrow: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textAlign: "center",
  },

  resultsTitle: {
    color: theme.colors.text,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing.md,
  },

  resultsDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: 23,
    textAlign: "center",
    marginTop: theme.spacing.md,
  },

  scoreCard: {
    width: "100%",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.xl,
    gap: theme.spacing.md,
  },

  scoreLabel: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },

  scorePercentage: {
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
  },

  scoreTrack: {
    height: 12,
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.full,
    overflow: "hidden",
  },

  scoreFill: {
    height: "100%",
    borderRadius: theme.radius.full,
  },

  scoreDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: theme.spacing.md,
  },

  scoreDetailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
  },

  scoreDetailText: {
    color: theme.colors.text,
    fontSize: theme.text.small,
    fontWeight: "bold",
  },

  xpCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    backgroundColor: "#F4C54222",
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  },

  xpEmoji: {
    fontSize: 32,
  },

  xpTextContainer: {
    flex: 1,
    gap: 4,
  },

  xpTitle: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  xpDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
  },

  passInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },

  passInfoText: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
    flex: 1,
    lineHeight: 20,
  },

  secondaryButton: {
    padding: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },

  secondaryButtonText: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    fontWeight: "bold",
    textAlign: "center",
  },

  // Celebración de especialidad
  celebrationScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.xl,
  },

  celebrationIcon: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  celebrationEyebrow: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1.5,
  },

  celebrationTitle: {
    color: theme.colors.text,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing.md,
  },

  celebrationDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    textAlign: "center",
    marginTop: theme.spacing.lg,
  },

  regionTitle: {
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing.sm,
  },

  rewardCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderWidth: 1.5,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.xxl,
  },

  rewardTextContainer: {
    flex: 1,
    gap: 4,
  },

  rewardTitle: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  rewardDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
    lineHeight: 18,
  },

  celebrationButton: {
    width: "100%",
    padding: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xxl,
  },

  celebrationButtonText: {
    color: "#FFFFFF",
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  // Retroalimentación de resultados
  feedbackResultCard: {
    width: "100%",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    gap: theme.spacing.md,
  },

  feedbackResultHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },

  feedbackResultTitle: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
    flex: 1,
  },

  feedbackResultMessage: {
    color: theme.colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: 23,
  },

  recommendationContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
  },

  recommendationText: {
    color: theme.colors.text,
    fontSize: theme.text.small,
    lineHeight: 21,
    flex: 1,
  },
});
