import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/theme";

//** Esto es extra que aprendi , Creamos un tipo que limita las opciones posibles. Así TypeScript evita que utilicemos nombres incorrectos. */

export type CourseTab = "my-courses" | "recent" | "map";

type CourseTabsProps = {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
};
const tabs: { id: CourseTab; label: string }[] = [
  { id: "my-courses", label: "Mis cursos" },
  { id: "recent", label: "Recientes" },
  { id: "map", label: "Mi mapa" },
];

export default function CourseTabs({
  activeTab,
  onTabChange,
}: CourseTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        //** Comprueba si la pestaña actual coincide con la seleccionada */

        return (
          <Pressable
            key={tab.id}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onTabChange(tab.id)}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },

  tab: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  activeTab: {
    backgroundColor: theme.colors.primarySoft,
    borderColor: theme.colors.primarySoft,
  },

  tabText: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
    fontWeight: "600",
  },

  activeTabText: {
    color: theme.colors.text,
  },
});
