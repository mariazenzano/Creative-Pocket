import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

export default function EncabezadoLogin() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/conejologin.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        Ingresa a tu cuenta de <Text style={styles.brand}>Creative Pocket</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: theme.spacing.lg },
  // Size from Figma (an image always needs width and height)
  logo: { width: 80, height: 118 },
  title: {
    fontSize: theme.text.subtitle,
    fontWeight: "600",
    color: theme.colors.textMuted,
    textAlign: "center",
  },
  brand: { color: theme.colors.primary },
});
