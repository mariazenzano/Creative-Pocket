import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  loadNotifications,
  saveNotifications,
} from "@/notifications/notificationStore";

import ClearNotificationsButton from "./ClearNotificationsButton";
import NotificationsEmptyState from "./NotificationsEmptyState";
import NotificationsHeader from "./NotificationsHeader";
import NotificationsList from "./NotificationsList";
import type { NotificationItem } from "./types";

export default function NotificationsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] =
    useState<NotificationItem[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    loadNotifications()
      .then((savedNotifications) => {
        if (isMounted) {
          setNotifications(savedNotifications);
        }
      })
      .catch(() => {
        if (isMounted) {
          setNotifications([]);
          Alert.alert(
            "Error",
            "No se pudieron cargar las notificaciones guardadas.",
          );
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (notifications === null) {
      return;
    }

    saveNotifications(notifications).catch(() => {
      Alert.alert("Error", "No se pudieron guardar los cambios.");
    });
  }, [notifications]);

  const deleteNotification = (id: string) => {
    setNotifications((current) =>
      current?.filter((notification) => notification.id !== id) ?? null,
    );
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <NotificationsHeader onBack={() => router.back()} />

      {notifications === null ? null : notifications.length > 0 ? (
        <>
          <ClearNotificationsButton onPress={() => setNotifications([])} />
          <NotificationsList
            notifications={notifications}
            onDelete={deleteNotification}
          />
        </>
      ) : (
        <NotificationsEmptyState />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#000000",
  },
});
