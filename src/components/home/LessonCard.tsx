import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

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

export default function LessonCard({
  lesson,
  onContinue,
}: LessonCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.information}>
          <Text style={styles.title}>{lesson.title}</Text>

          <Text style={styles.questions}>
            {lesson.questions} preguntas
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${lesson.progress}%` },
              ]}
            />
          </View>

          <Text style={styles.progressText}>
            {lesson.progress}%
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => onContinue(lesson.id)}
        >
          <Text style={styles.buttonText}>Continuar</Text>
          <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholder}>{lesson.image}</Text>
      </View>
    </View>
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
    gap: 5,
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
    gap: 5,
    backgroundColor: "#6200EE",
    borderRadius: 10,
    paddingVertical: 9,
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