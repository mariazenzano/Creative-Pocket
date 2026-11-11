import * as Clipboard from "expo-clipboard";
import { router } from "expo-router";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AccountActions from "../components/profile/AccountActions";
import LevelBanner from "../components/profile/LevelBanner";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProgressSection from "../components/profile/ProgressSection";

import { theme } from "../constants/theme";

export default function PerfilScreen() {

  // Temporary profile information
  const userName = "María Fernanda Zenzano";
  const userId = "mafe_0789";

  // Copy user ID
  const handleCopyId = async () => {
    await Clipboard.setStringAsync(userId);

    Alert.alert("ID copiado", "Tu identificador se copió correctamente.");
  };

  // Navigate to ranking
  const handleRankingPress = () => {
    router.push("/ranking");
  };

  // Logout action
  const handleLogout = () => {
    Alert.alert("Cerrar sesión", "¿Deseas cerrar tu sesión?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Cerrar sesión",
        style: "destructive",
        onPress: () => {
          router.replace("/Login");
        },
      },
    ]);
  };

  // Change account action
  const handleChangeAccount = () => {
    Alert.alert(
      "Cambiar de cuenta",
      "Esta función se conectará con tu sistema de usuarios.",
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader
          name={userName}
          userId={userId}
          onBack={() => router.back()}
          onCopyId={handleCopyId}
        />

        <LevelBanner
          level={8}
          currentXP={24}
          nextLevelXP={30}
          onRankingPress={handleRankingPress}
        />

        <ProgressSection />

        <AccountActions
          onLogout={handleLogout}
          onChangeAccount={handleChangeAccount}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    gap: 24,
  },
});
