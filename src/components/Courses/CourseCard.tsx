import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { theme } from "../../constants/theme";
//*limita los niveles posibles a tres/
type CourseLevel = "easy" | "intermediate" | "advanced";

type CourseCardProps = {
  title: string;
  branch: string;
  level: CourseLevel;
  duration: string;
  description: string;
  //*recibiremos una lista de textos/
  tags: string[];
  iconName: keyof typeof Ionicons.glyphMap;
  onContinue: () => void;
};


export default function CourseCard({
  title,
  branch,
  level,
  duration,
  description,
  tags,
  iconName,
  onContinue,
}: CourseCardProps) {
  return (
    <View style={styles.card}>

      {/* Información principal */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.branch}>{branch}</Text>
        </View>

        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>
            {level === "easy"
              ? "Fácil"
              : level === "intermediate"
              ? "Intermedio"
              : "Avanzado"}
          </Text>
        </View>
      </View>

      {/* Duración */}
      <View style={styles.durationContainer}>
        <Ionicons
          name="time-outline"
          size={15}
          color={theme.colors.textMuted}
        />
        <Text style={styles.duration}>{duration}</Text>
      </View>

      {/* Descripción */}
      <Text style={styles.description}>{description}</Text>

      {/* Hashtags, recorre el arreglo de etiquetas y crea un elemento de texto*/}
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Text key={`${tag}-${index}`} style={styles.tag}>
            #{tag}
          </Text>
        ))}
      </View>

      {/* Botón y categoría */}
      <View style={styles.footer}>
        <Pressable
          style={styles.continueButton}
          onPress={onContinue}
        >
          <Text style={styles.continueText}>Continuar</Text>
          <Ionicons
            name="arrow-forward"
            size={16}
            color={theme.colors.text}
          />
        </Pressable>

        <View style={styles.courseIcon}>
          <Ionicons
            name={iconName}
            size={22}
            color={theme.colors.secondary}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: theme.spacing.sm,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.text.subtitle,
    fontWeight: "bold",
  },

  branch: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
    marginTop: theme.spacing.xs,
  },

  levelBadge: {
    backgroundColor: theme.colors.primarySoft,
    borderRadius: theme.radius.full,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },

  levelText: {
    color: theme.colors.text,
    fontSize: theme.text.caption,
    fontWeight: "600",
  },

  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
    marginTop: theme.spacing.md,
  },

  duration: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
  },

  description: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    lineHeight: 21,
    marginTop: theme.spacing.md,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  },

  tag: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.lg,
  },

  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.full,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },

  continueText: {
    color: theme.colors.text,
    fontSize: theme.text.small,
    fontWeight: "600",
  },

  courseIcon: {
    width: 42,
    height: 42,
    borderRadius: theme.radius.full,
    backgroundColor: "#29203F",
    alignItems: "center",
    justifyContent: "center",
  },
});