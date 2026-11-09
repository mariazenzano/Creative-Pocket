import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  titulo: string;
  icono: string;
};

export default function ActivityCard({ titulo, icono }: Props) {
  const [marcado, setMarcado] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.icono}>
        <Text>{icono}</Text>
      </View>

      <Text style={styles.titulo}>{titulo}</Text>

      <Pressable
        onPress={() => setMarcado(!marcado)}
        style={[styles.checkbox, marcado && styles.checkboxMarcado]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: marcado }}
      >
        {marcado && <Text style={styles.check}>✓</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#080808",
    borderWidth: 1,
    borderColor: "#843BFF",
    borderRadius: 8,
    gap: 20,
  },

  icono: {
    marginRight: 12,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: theme.text.heading,
    flex: 1,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#454545",
    borderWidth: 1,
    borderColor: "#666666",
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxMarcado: {
    backgroundColor: "#843BFF",
    borderColor: "#843BFF",
  },

  check: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 17,
  },
});
