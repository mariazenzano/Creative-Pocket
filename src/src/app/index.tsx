import { StyleSheet, View } from "react-native";
import BotonPrimario from "../components/BotonPrimario";
export default function Index() {
  return (
    <View style={styles.container}>
      <BotonPrimario
        label="Continuar"
        onPress={() => console.log("¡Presionado!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
