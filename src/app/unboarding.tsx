import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SeccionCards from "@/components/SeccionCards";
import { palette } from "@/constants/colors";
import { theme } from "@/constants/theme";

import BotonPrimario from "../components/BotonPrimario";
import HeroFlecha from "../components/HeroFlecha";
import Puntos from "../components/Puntos";
import SeccionHero from "../components/SeccionHero";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.container}>
          <HeroFlecha onPress={() => router.back()} />

          <SeccionHero />

          <SeccionCards />

          <Puntos />

          <BotonPrimario
            label="Continuar"
            onPress={() => router.replace("/(tabs)")}
          />
        </View>
      </ScrollView>
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
