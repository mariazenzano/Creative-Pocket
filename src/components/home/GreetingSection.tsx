import { StyleSheet, Text, View } from "react-native";

type GreetingSectionProps = {
  name: string;
};

export default function GreetingSection({
  name,
}: GreetingSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>¡Hola, {name}!</Text>

        <Text style={styles.description}>
          Tus 3 retos diarios ya están listos.
        </Text>
      </View>

      <View style={styles.mascotContainer}>
        {/* Reemplazaremos este emoji por la imagen del conejito */}
        <Text style={styles.mascot}>🐰</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },

  textContainer: {
    flex: 1,
    gap: 8,
  },

  greeting: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  description: {
    color: "#BDBDBD",
    fontSize: 14,
  },

  mascotContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  mascot: {
    fontSize: 65,
  },
});