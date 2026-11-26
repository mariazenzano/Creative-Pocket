import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Animated,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { theme } from "../../constants/theme";
import type { ActivityStep } from "../../types/activity";
import type { MapNode } from "../../types/map";
import { getActivityLabel } from "./ActivityLogic";
import { styles } from "./ActivityStyles";

type Props = {
  activity: MapNode;
  activityTitle: string;
  introduction: string;
  currentStep?: ActivityStep;
  currentStepIndex: number;
  totalSteps: number;
  progressPercentage: number;
  selectedOptionId: string | null;
  selectedOption?: { isCorrect: boolean };
  shakeX: Animated.Value;
  fireScale: Animated.Value;
  isSaving: boolean;
  isQuestion: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
};

export function ActivityLessonView({
  activity,
  activityTitle,
  introduction,
  currentStep,
  currentStepIndex,
  totalSteps,
  progressPercentage,
  selectedOptionId,
  selectedOption,
  shakeX,
  fireScale,
  isSaving,
  isQuestion,
  isLastStep,
  onBack,
  onSelectOption,
  onNext,
}: Props) {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <Pressable style={styles.backButton} onPress={onBack}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.colors.text}
            />
          </Pressable>

          <Text style={styles.topBarTitle}>
            {getActivityLabel(activity.type)}
          </Text>

          <Text style={styles.stepCounter}>
            {currentStepIndex + 1}/{totalSteps}
          </Text>
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${progressPercentage}%` },
            ]}
          />
        </View>

        <Text style={styles.activityTitle}>{activityTitle}</Text>

        <Text style={styles.introduction}>{introduction}</Text>

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

            <Text style={styles.stepTitle}>
              Comprueba lo aprendido
            </Text>

            <Text style={styles.questionText}>
              {currentStep.prompt}
            </Text>

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
                    onPress={() => onSelectOption(option.id)}
                  >
                    <Text
                      style={[
                        styles.optionLabel,
                        selectedOptionId !== null &&
                          styles.selectedOptionLabel,
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
                      <Ionicons
                        name="close-circle"
                        size={22}
                        color="#FFFFFF"
                      />
                    )}
                  </Pressable>
                );
              })}
            </View>

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

        <Pressable
          style={[
            styles.completeButton,
            (isSaving || (isQuestion && selectedOptionId === null)) &&
              styles.disabledButton,
          ]}
          onPress={onNext}
          disabled={
            isSaving || (isQuestion && selectedOptionId === null)
          }
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