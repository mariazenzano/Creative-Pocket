import { palette } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return <SafeAreaView style={styles.screen}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  screen: {
    paddingHorizontal: theme.spacing.xxl,
    paddingVertical: theme.spacing.sm,
    backgroundColor: palette.neutral[800],
  },
});
