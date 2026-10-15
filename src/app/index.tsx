import CardsSeleccion from "@/components/CardsSeleccion";
import { palette } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BotonPrimario from "../components/BotonPrimario";
import HeroFlecha from "../components/HeroFlecha";
import SeccionCards from "@/components/SeccionCards";
const router = useRouter();
export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <HeroFlecha onPress={() => router.back()} />
        <SeccionCards />

        <BotonPrimario
          label="Enter With Email"
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
