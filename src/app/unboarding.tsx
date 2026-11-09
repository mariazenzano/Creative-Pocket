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
