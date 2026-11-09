import type Ionicons from "@expo/vector-icons/Ionicons";

export type NotificationItem = {
  id: string;
  title: string;
  time: string;
  message: string;
  icon: keyof typeof Ionicons.glyphMap;
};
