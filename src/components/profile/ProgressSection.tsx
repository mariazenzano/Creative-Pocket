
import { StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import MetricCard from "./MetricCard";

type ProgressSectionProps = {
  completedLessons: number;
  totalLessons: number;
  totalXP: number;
  learningMinutes: number;
  dailyLessons: number;
  dailyGoal: number;
};

export default function ProgressSection({
  completedLessons,
  totalLessons,
  totalXP,
  learningMinutes,
  dailyLessons,
  dailyGoal,
}: ProgressSectionProps) {
  const lessonProgress =
    totalLessons > 0
      ? (completedLessons / totalLessons) * 100
      : 0;

  const dailyProgress =
    dailyGoal > 0
      ? Math.min((dailyLessons / dailyGoal) * 100, 100)
      : 0;

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) return `${minutes} min`;
    if (remainingMinutes === 0) return `${hours} h`;

    return `${hours} h ${remainingMinutes} min`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu progreso</Text>

      <View style={styles.metricsContainer}>
        <MetricCard
          title="Lecciones completas"
          value={completedLessons}
          detail={`${completedLessons}/${totalLessons} lecciones`}
          iconName="book-outline"
          iconColor={theme.colors.primarySoft}
          progress={lessonProgress}
        />

        <MetricCard
          title="Puntos ganados"
          value={totalXP}
          detail={`${totalXP} XP acumulados`}
          iconName="trophy-outline"
          iconColor={theme.colors.secondary}
          progress={(totalXP % 90) / 90 * 100}
        />

        <MetricCard
          title="Tiempo de aprendizaje"
          value={formatTime(learningMinutes)}
          detail="Tiempo total registrado"
          iconName="time-outline"
          iconColor={theme.colors.primary}
          progress={Math.min((learningMinutes / 300) * 100, 100)}
        />

        <MetricCard
          title="Lecciones diarias"
          value={`${dailyLessons}/${dailyGoal}`}
          detail={
            dailyLessons >= dailyGoal
              ? "¡Objetivo completado!"
              : "Sigue aprendiendo hoy"
          }
          iconName="bookmark"
          iconColor={theme.colors.primarySoft}
          progress={dailyProgress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 14,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: "800",
  },
  metricsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
