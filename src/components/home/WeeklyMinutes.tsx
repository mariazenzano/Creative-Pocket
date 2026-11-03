import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

type WeeklyMinutesProps = {
  minutes: number;
};

export default function WeeklyMinutes({
  minutes,
}: WeeklyMinutesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="time-outline" size={24} color="#FFFFFF" />
      </View>

      <View style={styles.information}>
        <Text style={styles.title}>Tu tiempo de aprendizaje</Text>
        <Text style={styles.subtitle}>Minutos acumulados esta semana</Text>
      </View>

      <Text style={styles.minutes}>{minutes} min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center",
  },

  information: {
    flex: 1,
    gap: 4,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#BDBDBD",
    fontSize: 10,
  },

  minutes: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});