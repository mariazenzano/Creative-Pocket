import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
export type Lesson = {
  id: string;
  title: string;
  questions: number;
  progress: number;
  image: string;
};

type LessonCardProps = {
  lesson: Lesson;
  onContinue: (id: string) => void;
};

export default function LessonCard({ lesson, onContinue }: LessonCardProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <Animated.View
      style={[styles.card, animatedStyle]}
      onTouchStart={() => {
        scale.value = withSpring(0.96);
      }}
      onTouchEnd={() => {
        scale.value = withSpring(1);
      }}
    >
      <View style={styles.content}>
        <View style={styles.information}>
          <Text style={styles.title}>{lesson.title}</Text>

          <Text style={styles.questions}>{lesson.questions} preguntas</Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View
              style={[styles.progressFill, { width: `${lesson.progress}%` }]}
            />
          </View>

          <Text style={styles.progressText}>{lesson.progress}%</Text>
        </View>

        <Pressable style={styles.button} onPress={() => onContinue(lesson.id)}>
          <Animated.View style={[styles.button, animatedStyle]}>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </Animated.View>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholder}>{lesson.image}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    minHeight: 190,
    borderRadius: 18,
    backgroundColor: "#292929",
    padding: 15,
    flexDirection: "row",
    gap: 10,
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
  },

  information: {
    gap: 7,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  questions: {
    color: "#BDBDBD",
    fontSize: 12,
  },

  progressContainer: {
    gap: 1,
  },

  progressBackground: {
    width: "100%",
    height: 6,
    backgroundColor: "#555555",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#6200EE",
    borderRadius: 10,
  },

  progressText: {
    color: "#BDBDBD",
    fontSize: 11,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    backgroundColor: "#6200EE",
    borderRadius: 100,
    width: 60,
    height: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  imageContainer: {
    width: 95,
    borderRadius: 12,
    backgroundColor: "#414141",
    alignItems: "center",
    justifyContent: "center",
  },

  imagePlaceholder: {
    fontSize: 45,
  },
});
