import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import CourseCard from "./CourseCard";
import type { CourseLevel } from "./LevelFilter";

// Información que tendrá cada curso
export type Course = {
  id: string;
  title: string;
  branch: string;
  // Exclude nos permite quitar "all" de los niveles permitidos
  level: Exclude<CourseLevel, "all">;
  duration: string;
  description: string;
  tags: string[];
  iconName: keyof typeof Ionicons.glyphMap;
};

// Información que recibirá CourseList
type CourseListProps = {
  courses: Course[];
  activeLevel: CourseLevel;
  onContinue: (courseId: string) => void;
};

export default function CourseList({
  courses,
  activeLevel,
  onContinue,
}: CourseListProps) {
  // Filtramos los cursos según el nivel seleccionado
  const filteredCourses =
    activeLevel === "all"
      ? courses
      : courses.filter((course) => course.level === activeLevel);

  return (
    <View style={styles.container}>
      //* Si existen cursos, recorremos el arreglo y creamos una tarjeta por
      cada uno */
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            branch={course.branch}
            level={course.level}
            duration={course.duration}
            description={course.description}
            tags={course.tags}
            iconName={course.iconName}
            onContinue={() => onContinue(course.id)}
          />
        ))
      ) : (
        // Si no existen cursos para el nivel seleccionado, mostramos este mensaje
        <Text style={styles.emptyText}>
          No hay cursos disponibles en este nivel.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  emptyText: {
    color: "#A4A4A4",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 24,
  },
});
