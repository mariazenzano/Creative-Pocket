import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export type Reminder = {
  id: string;
  hour: number;
  minute: number;
};

const REMINDER_KEY = "reminder";

export async function askNotificationPermission(): Promise<boolean> {
  if (Platform.OS === "web") {
    return false;
  }

  if (Platform.OS === "android") {
    try {
      await Notifications.setNotificationChannelAsync("default", {
        name: "Recordatorios",
        importance: Notifications.AndroidImportance.MAX,
      });
    } catch {
      // Expo Go may not expose the channel provider in some Android runtimes.
      // Continue so the OS permission request can still be attempted.
    }
  }

  const current = await Notifications.getPermissionsAsync();
  if (current.granted) {
    return true;
  }

  const answer = await Notifications.requestPermissionsAsync();
  return answer.granted;
}

export async function hasNotificationPermission(): Promise<boolean> {
  if (Platform.OS === "web") {
    return false;
  }

  const permission = await Notifications.getPermissionsAsync();
  return permission.granted;
}

export async function scheduleTestNotification(): Promise<void> {
  if (Platform.OS === "web") {
    return;
  }

  if (!(await hasNotificationPermission())) {
    throw new Error("Notification permission has not been granted.");
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Creative Pocket",
      body: "¡Las notificaciones funcionan! Sigue aprendiendo diseño.",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 10,
    },
  });
}

export async function scheduleDailyReminder(
  hour: number,
  minute: number,
): Promise<Reminder | null> {
  if (Platform.OS === "web") {
    return null;
  }

  if (
    !Number.isInteger(hour) ||
    hour < 0 ||
    hour > 23 ||
    !Number.isInteger(minute) ||
    minute < 0 ||
    minute > 59
  ) {
    throw new RangeError("La hora del recordatorio no es válida.");
  }

  if (!(await hasNotificationPermission())) {
    return null;
  }

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: "Tu lección de hoy te espera",
      body: "Vuelve a Creative Pocket y continúa aprendiendo diseño.",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  });

  const reminder = { id, hour, minute };
  try {
    await AsyncStorage.setItem(REMINDER_KEY, JSON.stringify(reminder));
  } catch (error) {
    await Notifications.cancelScheduledNotificationAsync(id);
    throw error;
  }

  return reminder;
}

export async function loadReminder(): Promise<Reminder | null> {
  const saved = await AsyncStorage.getItem(REMINDER_KEY);
  if (saved === null) {
    return null;
  }

  try {
    const value: unknown = JSON.parse(saved);
    if (
      typeof value === "object" &&
      value !== null &&
      "id" in value &&
      typeof value.id === "string" &&
      "hour" in value &&
      typeof value.hour === "number" &&
      Number.isInteger(value.hour) &&
      value.hour >= 0 &&
      value.hour <= 23 &&
      "minute" in value &&
      typeof value.minute === "number" &&
      Number.isInteger(value.minute) &&
      value.minute >= 0 &&
      value.minute <= 59
    ) {
      return { id: value.id, hour: value.hour, minute: value.minute };
    }
  } catch {
    // Clear malformed stored data below.
  }

  await AsyncStorage.removeItem(REMINDER_KEY);
  return null;
}

export async function cancelReminder(): Promise<void> {
  const reminder = await loadReminder();

  if (reminder !== null && Platform.OS !== "web") {
    await Notifications.cancelScheduledNotificationAsync(reminder.id);
  }

  await AsyncStorage.removeItem(REMINDER_KEY);
}
