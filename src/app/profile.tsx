import * as Clipboard from "expo-clipboard";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AccountActions from "../components/profile/AccountActions";
import LevelBanner from "../components/profile/LevelBanner";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProgressSection from "../components/profile/ProgressSection";

import { theme } from "../constants/theme";
import { mapNodes } from "../data/mapNodes";
import { getTotalLearningMinutes } from "../storage/learningTime";
import { getCompletedNodeIds, getDailyCompletedNodeCount } from "../storage/mapProgress";
import { loadUser } from "../storage/user";
import { getXPProgress } from "../storage/xpProgress";

const XP_PER_LEVEL = 90;
const DAILY_GOAL = 4;

export default function PerfilScreen() {
  const [userName, setUserName] = useState("creativo");
  const [userId, setUserId] = useState("ID pendiente");

  const [completedLessons, setCompletedLessons] = useState(0);
  const [totalLessons, setTotalLessons] = useState(mapNodes.length);
  const [totalXP, setTotalXP] = useState(0);
  const [learningMinutes, setLearningMinutes] = useState(0);
  const [dailyLessons, setDailyLessons] = useState(0);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadProfileData = async () => {
        try {
          const [user, completedNodes, xpProgress, totalMinutes, dailyCount] =
            await Promise.all([
              loadUser(),
              getCompletedNodeIds(),
              getXPProgress(),
              getTotalLearningMinutes(),
              getDailyCompletedNodeCount(),
            ]);

          if (!isActive) return;

          if (user) {
            setUserName(user.name);
            setUserId(user.id);
          }

          setCompletedLessons(completedNodes.length);
          setTotalXP(xpProgress.totalXP);
          setLearningMinutes(totalMinutes);
          setDailyLessons(dailyCount);
        } catch (error) {
          console.error("Error al cargar las estadísticas:", error);
        }
      };

      loadProfileData();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const level = Math.floor(totalXP / XP_PER_LEVEL) + 1;
  const currentLevelXP = totalXP % XP_PER_LEVEL;
  const nextLevelXP = XP_PER_LEVEL;

  const handleCopyId = async () => {
    await Clipboard.setStringAsync(userId);
    Alert.alert("ID copiado", "Tu identificador se copió correctamente.");
  };

  const handleRankingPress = () => {
    router.push("/ranking");
  };

  const handleLogout = () => {
    Alert.alert("Cerrar sesión", "¿Deseas cerrar tu sesión?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Cerrar sesión",
        style: "destructive",
        onPress: () => router.replace("/Login"),
      },
    ]);
  };

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
          level={level}
          currentXP={currentLevelXP}
          nextLevelXP={nextLevelXP}
          onRankingPress={handleRankingPress}
        />

        <ProgressSection
          completedLessons={completedLessons}
          totalLessons={totalLessons}
          totalXP={totalXP}
          learningMinutes={learningMinutes}
          dailyLessons={dailyLessons}
          dailyGoal={DAILY_GOAL}
        />

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
