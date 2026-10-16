import { theme } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

export default function Puntos() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.destacado} />
      <View style={styles.circulo} />
      <View style={styles.circulo} />
    </View>
  );
}
const styles = StyleSheet.create({
  circulo: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#fbf8f8",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    alignItems: "center",
    justifyContent: "center",
  },

  destacado: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#454545",
    borderWidth: 1,
    borderColor: "#666666",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedor: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    paddingTop: theme.spacing.xl,
  },
});
