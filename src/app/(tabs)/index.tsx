import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Animated, { FadeInDown } from "react-native-reanimated";

import { palette } from "@/constants/colors";
import { getCompletedNodeIds } from "@/storage/mapProgress";
import { loadUser } from "@/storage/user";

import { activityContents } from "@/data/activityContent";
import { mapNodes } from "@/data/mapNodes";

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

export default function Index() {
  const router = useRouter();

  const [userName, setUserName] = useState("creativo");
  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>([]);

  // Load user information and progress whenever Home receives focus
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadHomeData = async () => {
        try {
          const [user, completedNodes] = await Promise.all([
            loadUser(),
            getCompletedNodeIds(),
          ]);

          if (isActive) {
            if (user) {
              setUserName(user.name);
            }

            setCompletedNodeIds(completedNodes);
          }
        } catch (error) {
          console.error("Error loading Home data:", error);
        }
      };

      loadHomeData();

      return () => {
        isActive = false;
      };
    }, []),
  );

  // Actividades que estan habilitadas y las filtra
  const availableNodes = mapNodes.filter((node) => {
    const hasContent = activityContents.some(
      (activity) => activity.nodeId === node.id,
    );

    const isUnlocked = node.requiredNodeIds.every((requiredId) =>
      completedNodeIds.includes(requiredId),
    );

    const isCompleted = completedNodeIds.includes(node.id);

    return hasContent && (isUnlocked || isCompleted);
  });

  // convierte las lecciones de el mapa que estan activas en las cards
  const lessons: Lesson[] = availableNodes.map((node) => {
    const activity = activityContents.find((item) => item.nodeId === node.id);

    const questionCount =
      activity?.steps.filter((step) => step.type === "question").length ?? 0;

    const isCompleted = completedNodeIds.includes(node.id);

    const activityImages: Record<string, string> = {
      lesson: "📘",
      exercise: "✏️",
      challenge: "🎯",
      project: "🚀",
    };

    return {
      id: node.id,
      title: node.title,
      questions: questionCount,
      progress: isCompleted ? 100 : 0,
      image: activityImages[node.type] ?? "🎨",
    };
  });

  // cards de retos diarios
  const challenges: Challenge[] = availableNodes
    .filter(
      (node) => node.type !== "lesson" && !completedNodeIds.includes(node.id),
    )
    .slice(0, 3)
    .map((node) => {
      const activity = activityContents.find((item) => item.nodeId === node.id);

      const questionCount =
        activity?.steps.filter((step) => step.type === "question").length ?? 0;

      return {
        id: node.id,
        title: node.title,
        description: node.description,
        points: questionCount * 10,
      };
    });

  // te redirige a las lecciones
  const handleContinueLesson = (id: string) => {
    router.push({
      pathname: "/actividad/[nodeId]",
      params: { nodeId: id },
    });
  };

  const handleStartChallenge = (id: string) => {
    handleContinueLesson(id);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <BackgroundGlow />

      <ScrollView contentContainerStyle={styles.content}>
        <Animated.View entering={FadeInDown.delay(0).duration(350)}>
          <HomeHeader
            onNotificationsPress={() => router.push("/Notifications")}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).duration(350)}>
          <GreetingSection name={userName} />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(350)}>
          <LessonCarousel lessons={lessons} onContinue={handleContinueLesson} />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).duration(350)}>
          <StreakCalendar
            completedGoals={completedNodeIds.length}
            totalGoals={mapNodes.length}
            streakDays={0}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).duration(350)}>
          <WeeklyMinutes minutes={0} />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(500).duration(350)}>
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
