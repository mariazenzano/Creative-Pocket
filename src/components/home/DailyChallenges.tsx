import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type Challenge = {
  id: string;
  title: string;
  description: string;
  points: number;
};

type DailyChallengesProps = {
  challenges: Challenge[];
  onStartChallenge: (id: string) => void;
};

export default function DailyChallenges({
  challenges,
  onStartChallenge,
}: DailyChallengesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tus retos diarios</Text>

      {challenges.map((challenge) => (
        <View key={challenge.id} style={styles.card}>
          <View style={styles.information}>
            <Text style={styles.title}>{challenge.title}</Text>

            <Text style={styles.description}>
              {challenge.description}
            </Text>

            <View style={styles.points}>
              <Ionicons name="star" size={15} color="#FFCA3A" />
              <Text style={styles.pointsText}>
                +{challenge.points} puntos
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => onStartChallenge(challenge.id)}
          >
            <Text style={styles.buttonText}>Iniciar reto</Text>
            <Ionicons
              name="arrow-forward"
              size={15}
              color="#FFFFFF"
            />
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#292929",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  information: {
    flex: 1,
    gap: 6,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  description: {
    color: "#BDBDBD",
    fontSize: 12,
  },

  points: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  pointsText: {
    color: "#FFCA3A",
    fontSize: 12,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#6200EE",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
});