import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

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
