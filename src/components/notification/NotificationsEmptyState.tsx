import { StyleSheet, Text, View } from "react-native";

export default function NotificationsEmptyState() {
  return (
    <View style={styles.container}>
      <View style={styles.illustration}>
        {/* Pendiente: agregar la imagen de la mascota cuando esté disponible.
        <Image
          source={require("../../../assets/images/conejologin.png")}
          style={styles.mascot}
          resizeMode="contain"
          accessibilityLabel="Mascota de Creative Pocket"
        />
        */}
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>Sin notificaciones</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  illustration: {
    width: 240,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    width: 150,
    height: 205,
    marginTop: 28,
  },
  speechBubble: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 18,
    borderBottomLeftRadius: 4,
    backgroundColor: "#303035",
    borderWidth: 1,
    borderColor: "#77717D",
  },
  speechText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },
});
