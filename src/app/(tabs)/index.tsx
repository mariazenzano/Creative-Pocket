
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


import Animated, { FadeInDown } from "react-native-reanimated";

import { palette } from "@/constants/colors";
import { loadUser } from "@/storage/user";

import DailyChallenges, {
  type Challenge,
} from "@/components/home/DailyChallenges";
import HomeHeader from "@/components/home/HomeHeader";
import type { Lesson } from "@/components/home/LessonCard";
import LessonCarousel from "@/components/home/LessonCarousel";
import StreakCalendar from "@/components/home/StreakCalendar";
import WeeklyMinutes from "@/components/home/WeeklyMinutes";
import BackgroundGlow from "../../components/home/BackgroundGlow";
import GreetingSection from "../../components/home/GreetingSection";

// Sample lessons
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

// Sample daily challenges
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
  const router = useRouter();
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
        
        <Animated.View
          entering={FadeInDown.delay(0).duration(350)}
        >
          <HomeHeader
            onNotificationsPress={() => router.push("/notificaciones")}
            onProfilePress={() => Alert.alert("Perfil", "Próximamente")}
          />
        </Animated.View>

       
        <Animated.View
          entering={FadeInDown.delay(100).duration(350)}
        >
          <GreetingSection name={userName} />
        </Animated.View>

       
        <Animated.View
          entering={FadeInDown.delay(200).duration(350)}
        >
          <LessonCarousel
            lessons={lessons}
            onContinue={handleContinueLesson}
          />
        </Animated.View>

       
        <Animated.View
          entering={FadeInDown.delay(300).duration(350)}
        >
          <StreakCalendar
            completedGoals={6}
            totalGoals={7}
            streakDays={12}
          />
        </Animated.View>

        
        <Animated.View
          entering={FadeInDown.delay(400).duration(350)}
        >
          <WeeklyMinutes minutes={45} />
        </Animated.View>

       
        <Animated.View
          entering={FadeInDown.delay(500).duration(350)}
        >
          <DailyChallenges
            challenges={challenges}
            onStartChallenge={handleStartChallenge}
          />
        </Animated.View>
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
