import ActivityCardList from "@/components/ActivityCardList";
import { palette } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import PaginationDots from "../components/PaginationDots";
import OnboardingHero from "../components/OnboardingHero";
const router = useRouter();
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <BackButton onPress={() => router.back()} />
        <OnboardingHero />
        <ActivityCardList />
        <PaginationDots />

        <PrimaryButton
          label="Continuar"
          onPress={() => router.replace("/(tabs)")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.neutral[800],
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.xxl,
    paddingVertical: theme.spacing.sm,
  },

  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing.xl,
  },
});
