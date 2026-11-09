import { StyleSheet, View } from "react-native";
import ActivityCard from "./ActivityCard";

export default function ActivityCardList() {
  return (
    <View style={styles.contenedor}>
      <ActivityCard titulo="Programación web" icono="🎨" />
      <ActivityCard titulo="Diseño de interfaz de usuario" icono="💻" />
      <ActivityCard titulo="Diseño UI/UX" icono="🟣" />
      <ActivityCard titulo="Componentes UI" icono="🧩" />
      <ActivityCard titulo="Identidad visual" icono="🌈" />
      <ActivityCard titulo="HTML y CSS" icono="🌐" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 15,
  },
});
