import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { palette } from "@/constants/colors";

import type { NotificationItem } from "./types";

type Props = {
  notification: NotificationItem;
  onDelete: (id: string) => void;
};

export default function NotificationCard({ notification, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.mascotWrap}>
        {/* Pendiente: agregar la imagen de la mascota cuando esté disponible.
        <Image
          source={require("../../../assets/images/conejologin.png")}
          style={styles.mascot}
          resizeMode="contain"
          accessibilityLabel="Mascota de Creative Pocket"
        />
        */}
        <Ionicons
          name={notification.icon}
          size={18}
          color="#FFFFFF"
          style={styles.iconBadge}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.time}>{notification.time}</Text>
        <Text style={styles.message}>{notification.message}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Borrar notificación: ${notification.title}`}
        onPress={() => onDelete(notification.id)}
        hitSlop={8}
        style={({ pressed }) => [styles.deleteButton, pressed && styles.pressed]}
      >
        <Ionicons name="trash-outline" size={16} color="#C4A7FF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 112,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#17191A",
  },
  mascotWrap: {
    width: 48,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    width: 42,
    height: 52,
  },
  iconBadge: {
    backgroundColor: palette.primary[300],
    borderRadius: 10,
    padding: 4,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  time: {
    color: "#B7B7B7",
    fontSize: 10,
  },
  message: {
    color: "#D1D1D1",
    fontSize: 11,
    lineHeight: 15,
  },
  deleteButton: {
    width: 30,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.72,
  },
});
