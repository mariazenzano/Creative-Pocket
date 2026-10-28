import { StyleSheet, Text, View } from "react-native";

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      {/* Solo el título por ahora, tal como te lo pide la instrucción */}
      <Text style={styles.title}>Inicio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});