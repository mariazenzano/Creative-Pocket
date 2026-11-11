import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

const weekDays = [
  { id: "monday", label: "L", completed: true },
  { id: "tuesday", label: "M", completed: true },
  { id: "wednesday", label: "M", completed: true },
  { id: "thursday", label: "J", completed: true },
  { id: "friday", label: "V", completed: true },
  { id: "saturday", label: "S", completed: true },
  { id: "sunday", label: "D", completed: false },
];

type StreakCalendarProps = {
  completedGoals: number;
  totalGoals: number;
  streakDays: number;
};

export default function StreakCalendar({
  completedGoals,
  totalGoals,
  streakDays,
}: StreakCalendarProps) {
  const percentage = Math.round((completedGoals / totalGoals) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Mis retos de hoy</Text>
          <Text style={styles.subtitle}>
            {completedGoals} de {totalGoals} metas de esta semana
          </Text>
        </View>

        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>
      </View>

      <View style={styles.streak}>
        <Ionicons name="flame" size={25} color="#FF9D3D" />
        <Text style={styles.streakNumber}>{streakDays}</Text>
        <Text style={styles.streakText}>días de racha</Text>
      </View>

      <View style={styles.calendar}>
        {weekDays.map((day, index) => (
          <View key={day.id} style={styles.day}>
            <Text style={styles.dayLabel}>{day.label}</Text>

            <View
              style={[
                styles.dayCircle,
                day.completed && styles.completedDay,
                index === 3 && styles.activeDay,
              ]}
            >
              {day.completed ? (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              ) : (
                <View style={styles.emptyDot} />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
    borderRadius: 18,
    padding: 18,
    gap: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#BDBDBD",
    fontSize: 12,
    marginTop: 5,
  },

  percentageContainer: {
    backgroundColor: "#414141",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },

  percentage: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  streak: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  streakNumber: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  streakText: {
    color: "#BDBDBD",
    fontSize: 13,
  },

  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  day: {
    alignItems: "center",
    gap: 10,
  },

  dayLabel: {
    color: "#BDBDBD",
    fontSize: 12,
    fontWeight: "600",
  },

  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: "#414141",
    alignItems: "center",
    justifyContent: "center",
  },

  completedDay: {
    backgroundColor: "#3D3D3D",
  },

  activeDay: {
    backgroundColor: "#6200EE",
  },

  emptyDot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: "#888888",
  },
});
