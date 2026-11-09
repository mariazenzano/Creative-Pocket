import { ScrollView, StyleSheet } from "react-native";

import NotificationCard from "./NotificationCard";
import type { NotificationItem } from "./types";

type Props = {
  notifications: NotificationItem[];
  onDelete: (id: string) => void;
};

export default function NotificationsList({ notifications, onDelete }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    >
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onDelete={onDelete}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 14,
    paddingBottom: 24,
  },
});
