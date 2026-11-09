import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { palette } from "@/constants/colors";

type Props = {
  onPress: () => void;
};

export default function ClearNotificationsButton({ onPress }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Borrar todas las notificaciones"
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.label}>Borrar</Text>
        <Ionicons name="trash-outline" size={14} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    paddingTop: 6,
    paddingBottom: 18,
  },
  button: {
    minHeight: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingHorizontal: 12,
    borderRadius: 7,
    backgroundColor: palette.primary[300],
  },
  label: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.72,
  },
});
