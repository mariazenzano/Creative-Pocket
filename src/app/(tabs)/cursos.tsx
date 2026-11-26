
import { useRouter, type Href } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { theme } from "../../constants/theme";

import CourseList, { type Course } from "../../components/Courses/CourseList";
import CoursesHeader from "../../components/Courses/CoursesHeader";
import CourseTabs, {
  type CourseTab,
} from "../../components/Courses/CourseTabs";
import LevelFilter, {
  type CourseLevel,
} from "../../components/Courses/LevelFilter";

import { mapNodes } from "../../data/mapNodes";
import { regions } from "../../data/regions";

// Nivel asignado a cada región
const regionLevels: Record<string, Exclude<CourseLevel, "all">> = {
  "graphic-design": "easy",
  "web-design": "intermediate",
  audiovisual: "easy",
  "3d-design": "advanced",
};

// Creamos los cursos a partir de las regiones reales
const mapCourses: Course[] = regions.map((region): Course => {
  const regionNodes = mapNodes.filter(
    (node) => node.regionId === region.id,
  );

  return {
    id: region.id,
    title: region.title,
    branch: "Mapa de aprendizaje",
    level: regionLevels[region.id] ?? "easy",
    duration: `${regionNodes.length} actividades`,
    description: region.description,
    tags: ["Lecciones", "Ejercicios", "Proyectos"],
    iconName: region.iconName as Course["iconName"],
  };
});

// Tarjeta adicional: tutorial de cuestionarios
const tutorialCourse: Course = {
  id: "quiz-tutorial",
  title: "Tutorial de cuestionarios",
  branch: "Aprende a resolver los quizzes",
  level: "easy",
  duration: "Guía rápida",
  description:
    "Conoce cómo funcionan los cuestionarios y practica tus conocimientos.",
  tags: ["Preguntas", "Respuestas", "Práctica"],
  iconName: "help-circle-outline",
};

// Lista final de cursos
const courses: Course[] = [...mapCourses, tutorialCourse];

export default function Cursos() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<CourseTab>("my-courses");
  const [recentCourseIds, setRecentCourseIds] = useState<string[]>([]);
  const [activeLevel, setActiveLevel] = useState<CourseLevel>("all");

  // Texto escrito en la barra de búsqueda
  const [searchQuery, setSearchQuery] = useState("");

  // Registrar curso reciente y abrir su destino
  const handleContinue = (courseId: string) => {
    setRecentCourseIds((previousIds) => [
      courseId,
      ...previousIds.filter((id) => id !== courseId),
    ]);

    if (courseId === "quiz-tutorial") {
      router.push("/quiz");
      return;
    }

    router.push(`/mapa/${courseId}` as Href);
  };

  // Filtrar cursos según pestaña y búsqueda
  const visibleCourses = courses.filter((course) => {
    const query = searchQuery.trim().toLowerCase();

    // Comprobar pestaña activa
    const matchesTab =
      activeTab !== "recent" || recentCourseIds.includes(course.id);

    // Buscar en información del curso
    const matchesCourse = [
      course.title,
      course.branch,
      course.description,
      ...course.tags,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);

    // Buscar también dentro de las actividades del mapa
    const matchesLesson = mapNodes.some((node) => {
      if (node.regionId !== course.id) return false;

      return `${node.title} ${node.description}`
        .toLowerCase()
        .includes(query);
    });

    return (
      matchesTab &&
      (query === "" || matchesCourse || matchesLesson)
    );
  });

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <CoursesHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

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

        <LevelFilter
          activeLevel={activeLevel}
          onLevelChange={setActiveLevel}
        />

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
