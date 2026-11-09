import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeOutLeft,
} from "react-native-reanimated";

import QuizAnswerOption from "../components/quiz/QuizAnswerOption";
import QuizFeedback from "../components/quiz/QuizFeedback";
import QuizHeader from "../components/quiz/QuizHeader";
import QuizProgress from "../components/quiz/QuizProgress";
import QuizQuestionArt from "../components/quiz/QuizQuestionArt";
import QuizResult from "../components/quiz/QuizResult";
import { quizQuestions } from "../components/quiz/questions";
import { colors } from "../constants/colors";

export default function QuizScreen() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const question = quizQuestions[questionIndex];
  const isComplete = questionIndex >= quizQuestions.length;
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = hasAnswered
    ? question?.answers[selectedAnswer]?.isCorrect === true
    : false;

  const selectAnswer = (answerIndex: number) => {
    if (hasAnswered) return;

    setSelectedAnswer(answerIndex);
    if (question.answers[answerIndex].isCorrect) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const continueQuiz = () => {
    setSelectedAnswer(null);
    setQuestionIndex((currentIndex) => currentIndex + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setQuestionIndex(0);
    setSelectedAnswer(null);
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right", "bottom"]}>
      <QuizHeader
        title={isComplete ? "Cursos" : question.title}
        onBack={() => router.back()}
      />

      {isComplete ? (
        <QuizResult
          score={score}
          total={quizQuestions.length}
          onContinue={() => router.back()}
          onRetry={restartQuiz}
        />
      ) : (
        <>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <Animated.View
              key={`question-${questionIndex}`}
              entering={FadeInRight.duration(350)}
              exiting={FadeOutLeft.duration(180)}
              style={styles.questionContent}
            >
              <QuizQuestionArt type={question.art} />

              <Animated.Text entering={FadeInDown.delay(80).duration(300)} style={styles.prompt}>
                {question.prompt}
              </Animated.Text>

              <View
                style={
                  question.layout === "grid"
                    ? styles.answerGrid
                    : styles.answerList
                }
              >
                {question.answers.map((answer, index) => {
                  const showCorrect = hasAnswered && answer.isCorrect;
                  const showIncorrect = hasAnswered && selectedAnswer === index && !answer.isCorrect;

                  return (
                    <QuizAnswerOption
                      key={`${question.id}-${answer.label}`}
                      label={answer.label}
                      index={index}
                      isCorrect={showCorrect}
                      isIncorrect={showIncorrect}
                      disabled={hasAnswered}
                      grid={question.layout === "grid"}
                      onPress={() => selectAnswer(index)}
                    />
                  );
                })}
              </View>

              {hasAnswered && (
                <Animated.View entering={FadeInDown.duration(250)}>
                  <View style={styles.continueButtonWrap}>
                    <QuizAnswerOption
                      label={
                        questionIndex === quizQuestions.length - 1
                          ? "Ver resultados"
                          : "Continuar"
                      }
                      index={0}
                      isCorrect
                      isIncorrect={false}
                      disabled={false}
                      action
                      onPress={continueQuiz}
                    />
                  </View>
                </Animated.View>
              )}
            </Animated.View>
          </ScrollView>

          <QuizProgress current={questionIndex} total={quizQuestions.length} />
          {hasAnswered && (
            <QuizFeedback
              key={`feedback-${questionIndex}`}
              isCorrect={isCorrect}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  content: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 12,
  },
  questionContent: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  prompt: {
    marginTop: 14,
    marginBottom: 12,
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 27,
    textAlign: "center",
  },
  answerList: { flex: 1, justifyContent: "space-evenly", gap: 10 },
  answerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
  },
  continueButtonWrap: { marginTop: 14 },
});
