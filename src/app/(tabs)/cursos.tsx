import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { theme } from "../../constants/theme";

import CoursesHeader from "../../components/Courses/CoursesHeader";

import CourseTabs, {
  type CourseTab,
} from "../../components/Courses/CourseTabs";

import LevelFilter, {
  type CourseLevel,
} from "../../components/Courses/LevelFilter";

import CourseList, { type Course } from "../../components/Courses/CourseList";

// Cursos de prueba
//*iniciamos a crear los cursos/
//*una constante llamada courses que contiene una lista de cursos./
const courses: Course[] = [
  {
    id: "course-01",
    title: "Fundamentos de ilustración",
    branch: "Ilustración digital",
    level: "easy",
    duration: "4 horas",
    description:
      "Aprende los principios básicos del dibujo y la ilustración digital.",
    tags: ["Dibujo", "Creatividad", "Color"],
    iconName: "color-palette-outline",
  },
  {
    id: "course-02",
    title: "Fotografía creativa",
    branch: "Fotografía",
    level: "intermediate",
    duration: "6 horas",
    description:
      "Explora la composición, la luz y la narrativa visual mediante la fotografía.",
    tags: ["Fotografía", "Composición", "Luz"],
    iconName: "camera-outline",
  },
  {
    id: "course-03",
    title: "Introducción a programación",
    branch: "Desarrollo digital",
    level: "advanced",
    duration: "8 horas",
    description:
      "Descubre los fundamentos de la programación aplicada a proyectos digitales.",
    tags: ["Código", "Lógica", "Tecnología"],
    iconName: "code-slash-outline",
  },
];

export default function Cursos() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<CourseTab>("my-courses");

  const [recentCourseIds, setRecentCourseIds] = useState<string[]>([]);

  const [activeLevel, setActiveLevel] = useState<CourseLevel>("all");

  const handleContinue = (courseId: string) => {
    // Guardamos el curso seleccionado al inicio de la lista
    setRecentCourseIds((previousIds) => [
      courseId,
      ...previousIds.filter((id) => id !== courseId),
    ]);

    Alert.alert("Curso seleccionado", `Has seleccionado el curso: ${courseId}`);
  };

  //  cursos que se deben mostrar según la pestaña activa
  const visibleCourses =
    activeTab === "recent"
      ? courses.filter((course) => recentCourseIds.includes(course.id))
      : courses;

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <CoursesHeader />

        <CourseTabs
          activeTab={activeTab}
          onTabChange={(tab) => {
            if (tab === "map") {
              router.push("/mapa");
              return;
            }

            setActiveTab(tab);
          }}
        />

        <LevelFilter activeLevel={activeLevel} onLevelChange={setActiveLevel} />

        <CourseList
          courses={visibleCourses}
          activeLevel={activeLevel}
          onContinue={handleContinue}
        />
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
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.xxl,
  },
});
