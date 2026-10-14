import { palette } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BotonPrimario from "../components/BotonPrimario";
export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
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
