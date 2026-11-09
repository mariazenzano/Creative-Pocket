import AsyncStorage from "@react-native-async-storage/async-storage";

import type { NotificationItem } from "@/components/notification/types";

const NOTIFICATIONS_KEY = "creative-pocket:notifications";

const initialNotifications: NotificationItem[] = [
  {
    id: "xp",
    title: "+300 XP listos para reclamar",
    time: "Lunes, 20:31",
    message:
      'Tienes 3 retos nuevos disponibles. Completa “Cazador de Tipografías” antes de medianoche.',
    icon: "sparkles-outline",
  },
  {
    id: "lesson",
    title: "¡Estás a solo 2 minutos de terminar!",
    time: "Lunes, 18:30",
    message:
      'Dejaste “Jerarquía Tipográfica” al 80%. Entra y termina este concepto hoy.',
    icon: "book-outline",
  },
  {
    id: "tip",
    title: "Atajo de Figma del día",
    time: "Lunes, 10:03",
    message:
      "Presiona Shift + A para aplicar Auto Layout en un segundo. Ponlo a prueba en tu próximo reto.",
    icon: "bulb-outline",
  },
];

export async function loadNotifications(): Promise<NotificationItem[]> {
  const saved = await AsyncStorage.getItem(NOTIFICATIONS_KEY);

  if (saved === null) {
    await saveNotifications(initialNotifications);
    return initialNotifications;
  }

  try {
    const parsed: unknown = JSON.parse(saved);

    if (Array.isArray(parsed)) {
      return parsed as NotificationItem[];
    }
  } catch {
    // Replace invalid saved data with the initial notification list.
  }

  await saveNotifications(initialNotifications);
  return initialNotifications;
}

export function saveNotifications(
  notifications: NotificationItem[],
): Promise<void> {
  return AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
}
