import { palette } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

export default function SeccionHero() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Creative <Text style={styles.destacado}>Pocket</Text>
      </Text>
      <Text style={styles.subtitulo}>
        Descubre las areas que más te interesan en el diseño
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "column",
    gap: 15,
    paddingVertical: theme.spacing.md,
  },
  titulo: {
    fontSize: theme.text.display,
    color: palette.primary[200],
    fontWeight: "900",
  },
  subtitulo: {
    color: palette.neutral[100],
    fontSize: theme.text.subtitle,
    fontWeight: "500",
  },
  destacado: {
    color: palette.secondary[300],
  },
});
