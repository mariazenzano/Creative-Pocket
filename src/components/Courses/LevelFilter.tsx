
import { StyleSheet, Text, Pressable, View } from "react-native";
import { theme } from "../../constants/theme";

export type CourseLevel =
  | "all"
  | "easy"
  | "intermediate"
  | "advanced";

type LevelFilterProps = {
  activeLevel: CourseLevel;
  onLevelChange: (level: CourseLevel) => void;
};
//* colección de los elementos que usare  */
const levels: { id: CourseLevel; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "easy", label: "Fácil" },
  { id: "intermediate", label: "Intermedio" },
  { id: "advanced", label: "Avanzado" },
];

export default function LevelFilter({
  activeLevel,
  onLevelChange,
}: LevelFilterProps) {
  return (
    <View style={styles.container}>
      {levels.map((level) => {
        const isActive = activeLevel === level.id;

        return (
          <Pressable
            key={level.id}
            style={[
              styles.filter,
              isActive && styles.activeFilter,
            ]}
            onPress={() => onLevelChange(level.id)}
          >
            <Text
              style={[
                styles.filterText,
                isActive && styles.activeFilterText,
              ]}
            >
              {level.label}
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
    justifyContent: "space-between",
    gap: theme.spacing.xs,
    marginTop: theme.spacing.lg,
  },

  filter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: 4,
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  activeFilter: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondary,
  },

  filterText: {
    color: theme.colors.textMuted,
    fontSize: theme.text.caption,
    fontWeight: "600",
  },

  activeFilterText: {
    color: theme.colors.background,
  },
});
