import { StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import MetricCard from "./MetricCard";

export default function ProgressSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu progreso</Text>

      <View style={styles.metricsContainer}>
        <MetricCard
          title="Lecciones completas"
          value={23}
          detail="24/30 lecciones"
          iconName="book-outline"
          iconColor={theme.colors.primarySoft}
          progress={80}
        />

        <MetricCard
          title="Puntos ganados"
          value={2050}
          detail="3060 PX | 18500 PX"
          iconName="trophy-outline"
          iconColor={theme.colors.secondary}
          progress={17}
        />

        <MetricCard
          title="Tiempo de pantalla"
          value="120 min"
          detail="Tiempo de aprendizaje"
          iconName="time-outline"
          iconColor={theme.colors.primary}
          progress={60}
        />

        <MetricCard
          title="Lecciones diarias"
          value="4/4"
          detail="¡Objetivo completado!"
          iconName="bookmark"
          iconColor={theme.colors.primarySoft}
          progress={100}
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
