import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { palette } from "@/constants/colors";
import { loadUser } from "@/storage/user";

import BackgroundGlow from "@/components/BackgroundGlow";
import type { Challenge } from "@/components/home/DailyChallenges";
import DailyChallenges from "@/components/home/DailyChallenges";
import GreetingSection from "@/components/home/GreetingSection";
import HomeHeader from "@/components/home/HomeHeader";
import type { Lesson } from "@/components/home/LessonCard";
import LessonCarousel from "@/components/home/LessonCarousel";
import StreakCalendar from "@/components/home/StreakCalendar";
import WeeklyMinutes from "@/components/home/WeeklyMinutes";

const lessons: Lesson[] = [
  {
    id: "1",
    title: "Diseño UI",
    questions: 10,
    progress: 60,
    image: "🎨",
  },
  {
    id: "2",
    title: "Teoría del color",
    questions: 8,
    progress: 30,
    image: "🌈",
  },
  {
    id: "3",
    title: "Composición",
    questions: 12,
    progress: 80,
    image: "🖼️",
  },
];

const challenges: Challenge[] = [
  {
    id: "1",
    title: "Explora el color",
    description: "Aprende sobre armonías cromáticas.",
    points: 10,
  },
  {
    id: "2",
    title: "Domina la composición",
    description: "Pon a prueba tu creatividad.",
    points: 20,
  },
  {
    id: "3",
    title: "Crea una interfaz",
    description: "Resuelve un pequeño desafío UI.",
    points: 30,
  },
];

export default function Index() {
  const [userName, setUserName] = useState("creativo");

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await loadUser();

        if (user) {
          setUserName(user.name);
        }
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };

    getUser();
  }, []);

  const handleContinueLesson = (id: string) => {
    Alert.alert("Continuar lección", `Lección seleccionada: ${id}`);
  };

  const handleStartChallenge = (id: string) => {
    Alert.alert("Iniciar reto", `Reto seleccionado: ${id}`);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <BackgroundGlow />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <HomeHeader
          onNotificationsPress={() =>
            Alert.alert("Notificaciones", "Próximamente")
          }
          onProfilePress={() => Alert.alert("Perfil", "Próximamente")}
        />

        <GreetingSection name={userName} />

        <LessonCarousel lessons={lessons} onContinue={handleContinueLesson} />

        <StreakCalendar completedGoals={6} totalGoals={7} streakDays={12} />

        <WeeklyMinutes minutes={45} />

        <DailyChallenges
          challenges={challenges}
          onStartChallenge={handleStartChallenge}
        />
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
    paddingVertical: 15,
    gap: 25,
    paddingBottom: 35,
  },
});
