import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { palette } from "@/constants/colors";

type Props = {
  onBack: () => void;
};

export default function NotificationsHeader({ onBack }: Props) {
  return (
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Volver"
        onPress={onBack}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <Ionicons name="arrow-back" size={20} color={palette.primary[200]} />
      </Pressable>
      <Text style={styles.title}>notificaciones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: palette.primary[300],
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#E8E3EF",
    fontSize: 19,
    fontWeight: "700",
    textTransform: "lowercase",
  },
  pressed: {
    opacity: 0.72,
  },
});
