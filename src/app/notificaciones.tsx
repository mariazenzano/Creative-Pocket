import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { palette } from "@/constants/colors";

import BackgroundGlow from "@/components/home/BackgroundGlow";
import NotifyCard from "@/components/NotifyReminderCard";

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <BackgroundGlow />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Notificaciones</Text>

          <Text style={styles.description}>
            Mantente al día y no olvides continuar aprendiendo.
          </Text>
        </View>

        <NotifyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.neutral[800],
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    gap: 25,
    paddingBottom: 35,
  },

  header: {
    gap: 8,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
  },

  description: {
    color: "#AAAAAA",
    fontSize: 14,
    lineHeight: 21,
  },
});
