import { StyleSheet, View } from "react-native";
import CardsSeleccion from "../components/CardsSeleccion";

export default function SeccionCards() {
  return (
    <View style={styles.contenedor}>
      <CardsSeleccion titulo="Programación web" icono="🎨" />
      <CardsSeleccion titulo="Diseño de interfaz de usuario" icono="💻" />
      <CardsSeleccion titulo="Diseño UI/UX" icono="🟣" />
      <CardsSeleccion titulo="Componentes UI" icono="🧩" />
      <CardsSeleccion titulo="Identidad visual" icono="🌈" />
      <CardsSeleccion titulo="HTML y CSS" icono="🌐" />
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
