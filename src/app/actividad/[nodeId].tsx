import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Animated } from "react-native";

import { activityContents } from "../../data/activityContent";
import { mapNodes } from "../../data/mapNodes";
import { regions } from "../../data/regions";

import type { Region } from "../../types/map";

import { completeNode, getCompletedNodeIds } from "../../storage/mapProgress";
import { awardXPForNode } from "../../storage/xpProgress";
import { getCompletedRegionIds } from "../../utils/mapProgress";

import {
  PASSING_PERCENTAGE,
  XP_PER_CORRECT_ANSWER,
  useLearningTimer,
} from "../../components/activity/ActivityLogic";

import {
  ActivityEmptyView,
  ActivityErrorView,
} from "../../components/activity/ActivityFallbackViews";
import { ActivityLessonView } from "../../components/activity/ActivityLessonView";

import {
  ActivityCelebration,
  ActivityResults,
} from "../../components/activity/ActivityFeedbackViews";

export default function ActivityScreen() {
  const { nodeId } = useLocalSearchParams<{ nodeId: string }>();

  return <ActivityContent key={nodeId} nodeId={nodeId} />;
}

function ActivityContent({ nodeId }: { nodeId: string }) {
  const router = useRouter();

  useLearningTimer(nodeId);

  const [isSaving, setIsSaving] = useState(false);
  const [completedRegion, setCompletedRegion] = useState<Region | null>(null);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [fireScale] = useState(() => new Animated.Value(1));
  const [shakeX] = useState(() => new Animated.Value(0));
  const [trophyScale] = useState(() => new Animated.Value(0.7));

  const activity = mapNodes.find((node) => node.id === nodeId);

  if (!activity) {
    return <ActivityErrorView onBack={() => router.back()} />;
  }

  const activityContent = activityContents.find(
    (item) => item.nodeId === activity.id,
  );

  if (!activityContent) {
    return (
      <ActivityEmptyView activity={activity} onBack={() => router.back()} />
    );
  }

  const currentStep = activityContent.steps[currentStepIndex];

  const isQuestion = currentStep?.type === "question";

  const selectedOption =
    currentStep?.type === "question"
      ? currentStep.options.find((option) => option.id === selectedOptionId)
      : undefined;

  const isLastStep = currentStepIndex === activityContent.steps.length - 1;

  const progressPercentage =
    ((currentStepIndex + 1) / activityContent.steps.length) * 100;

  const totalQuestions = activityContent.steps.filter(
    (step) => step.type === "question",
  ).length;

  const resultPercentage =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  const hasPassed =
    totalQuestions === 0 || resultPercentage >= PASSING_PERCENTAGE;

  const earnedXP = correctAnswers * XP_PER_CORRECT_ANSWER;

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

  const animateCorrectAnswer = () => {
    Animated.sequence([
      Animated.spring(fireScale, {
        toValue: 1.35,
        useNativeDriver: true,
        speed: 20,
      }),
      Animated.spring(fireScale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 20,
      }),
    ]).start();
  };

  const animateIncorrectAnswer = () => {
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

  const handleSelectOption = (optionId: string) => {
    if (selectedOptionId !== null || currentStep?.type !== "question") {
      return;
    }

    const option = currentStep.options.find((item) => item.id === optionId);

    if (!option) return;

    setSelectedOptionId(optionId);

    if (option.isCorrect) {
      setCorrectAnswers((previous) => previous + 1);
      animateCorrectAnswer();
    } else {
      animateIncorrectAnswer();
    }
  };

  const handleCompleteActivity = async () => {
    try {
      setIsSaving(true);

      const previousCompletedNodes = await getCompletedNodeIds();

      await awardXPForNode(activity.id, earnedXP);
      await completeNode(activity.id);

      const updatedCompletedNodes = await getCompletedNodeIds();

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

      const newlyCompletedRegion = regions.find(
        (region) =>
          updatedCompletedRegions.includes(region.id) &&
          !previousCompletedRegions.includes(region.id),
      );

      if (newlyCompletedRegion) {
        setCompletedRegion(newlyCompletedRegion);
        return;
      }

      router.back();
    } catch (error) {
      console.error("Error al completar la actividad:", error);

      Alert.alert(
        "No se pudo guardar",
        "Intenta completar la actividad nuevamente.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleNextStep = () => {
    if (isQuestion && selectedOptionId === null) {
      return;
    }

    if (isLastStep) {
      setShowResults(true);

      Animated.spring(trophyScale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();

      return;
    }

    setCurrentStepIndex((previous) => previous + 1);
    setSelectedOptionId(null);
    shakeX.setValue(0);
  };

  const handleRetryActivity = () => {
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setCorrectAnswers(0);
    setShowResults(false);

    fireScale.setValue(1);
    shakeX.setValue(0);
    trophyScale.setValue(0.7);
  };

  if (completedRegion) {
    return (
      <ActivityCelebration
        region={completedRegion}
        trophyScale={trophyScale}
        onContinue={() => router.back()}
      />
    );
  }

  if (showResults) {
    return (
      <ActivityResults
        trophyScale={trophyScale}
        hasPassed={hasPassed}
        resultPercentage={resultPercentage}
        correctAnswers={correctAnswers}
        totalQuestions={totalQuestions}
        resultFeedback={resultFeedback}
        earnedXP={earnedXP}
        isSaving={isSaving}
        onComplete={handleCompleteActivity}
        onRetry={handleRetryActivity}
        onBack={() => router.back()}
      />
    );
  }

  return (
    <ActivityLessonView
      activity={activity}
      activityTitle={activityContent.title}
      introduction={activityContent.introduction}
      currentStep={currentStep}
      currentStepIndex={currentStepIndex}
      totalSteps={activityContent.steps.length}
      progressPercentage={progressPercentage}
      selectedOptionId={selectedOptionId}
      selectedOption={selectedOption}
      shakeX={shakeX}
      fireScale={fireScale}
      isSaving={isSaving}
      isQuestion={isQuestion}
      isLastStep={isLastStep}
      onBack={() => router.back()}
      onSelectOption={handleSelectOption}
      onNext={handleNextStep}
    />
  );
}
