import SeccionCards from "@/components/SeccionCards";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BotonPrimario from "../../components/BotonPrimario";
import HeroFlecha from "../../components/HeroFlecha";
import Puntos from "../../components/Puntos";
import SeccionHero from "../../components/SeccionHero";
import { palette } from "../../constants/colors";
import { theme } from "../../constants/theme";
const router = useRouter();
export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <HeroFlecha onPress={() => router.back()} />
        <SeccionHero />
        <SeccionCards />
        <Puntos />

        <BotonPrimario
          label="Continuar"
          onPress={() => console.log("¡Presionado!")}
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
