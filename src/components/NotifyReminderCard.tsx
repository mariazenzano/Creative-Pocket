import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { askNotificationPermission } from "@/notifications/notifications";

type Status = "idle" | "granted" | "denied";

export default function NotifyCard() {
  const [status, setStatus] = useState<Status>("idle");

  const handlePress = async () => {
    try {
      const allowed = await askNotificationPermission();

      setStatus(allowed ? "granted" : "denied");
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      setStatus("denied");
    }
  };

  if (status === "granted") {
    return (
      <View style={styles.card}>
        <Text style={styles.icon}>🔔</Text>

        <View style={styles.info}>
          <Text style={styles.title}>
            ¡Listo! Ya tienes los avisos activados.
          </Text>
          <Text style={styles.description}>
            Podrás recibir nuestros recordatorios diarios.
          </Text>
        </View>
      </View>
    );
  }

  if (status === "denied") {
    return (
      <View style={styles.card}>
        <Text style={styles.icon}>🔕</Text>

        <View style={styles.info}>
          <Text style={styles.title}>Sin avisos</Text>
          <Text style={styles.description}>
            Puedes activarlos desde los ajustes de tu celular.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.icon}>🔔</Text>

      <View style={styles.info}>
        <Text style={styles.title}>
          ¿Quieres que te recordemos todos los días?
        </Text>

        <Text style={styles.description}>
          Activa los avisos y no olvides continuar aprendiendo.
        </Text>
      </View>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Sí, avísame</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 24,
    backgroundColor: "#292929",
  },

  icon: {
    fontSize: 25,
  },

  info: {
    flex: 1,
    gap: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  description: {
    fontSize: 13,
    lineHeight: 19,
    color: "#CCCCCC",
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },

  buttonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#222222",
  },
});
