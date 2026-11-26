import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

import { areas } from "../../components/practices/practiceData";
import { styles } from "../../components/practices/practiceStyles";
import { theme } from "../../constants/theme";
import { getPracticeProgress } from "../../storage/practiceProgress";
import type { PracticeRecord } from "../../types/practice";

export default function Practicas() {
  const router = useRouter();
  const [practiceRecords, setPracticeRecords] = useState<PracticeRecord[]>([]);
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadPracticeStats = async () => {
        try {
          const progress = await getPracticeProgress();
          if (isActive) setPracticeRecords(progress.records);
        } catch (error) {
          console.error("Error loading practice statistics:", error);
        } finally {
          if (isActive) setIsLoadingStats(false);
        }
      };

      loadPracticeStats();
      return () => {
        isActive = false;
      };
    }, []),
  );

  const handleAreaPress = (areaId: string) => {
    router.push({
      pathname: "/practices/[areaId]",
      params: { areaId },
    });
  };

  const handleChallengePress = () => {
    router.push({
      pathname: "/practice/[practiceId]",
      params: { practiceId: "daily-challenge" },
    });
  };

  const totalCompleted = practiceRecords.length;
  const totalAttempts = practiceRecords.reduce(
    (total, record) => total + record.attempts,
    0,
  );

  const bestPercentage = practiceRecords.reduce((best, record) => {
    if (record.totalQuestions === 0) return best;
    const percentage = Math.round(
      (record.bestScore / record.totalQuestions) * 100,
    );
    return Math.max(best, percentage);
  }, 0);

  const latestPractice = [...practiceRecords].sort(
    (a, b) =>
      new Date(b.lastAttemptAt).getTime() - new Date(a.lastAttemptAt).getTime(),
  )[0];

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heading}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Prácticas</Text>
          <Image
            source={require("../../../assets/images/Group 86.png")}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.subtitle}>
          Pon a prueba tus ideas. Experimenta y aprende creando.
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Reto destacado</Text>
          <Ionicons
            name="flame-outline"
            size={22}
            color={theme.colors.secondary}
          />
        </View>

        <View style={styles.challengeCard}>
          <View style={styles.challengeTop}>
            <View style={styles.challengeTag}>
              <Text style={styles.challengeTagText}>RETO ESPECIAL</Text>
            </View>
            <Ionicons
              name="trophy-outline"
              size={30}
              color={theme.colors.secondary}
            />
          </View>

          <Text style={styles.challengeTitle}>Composición en equilibrio</Text>
          <Text style={styles.challengeDescription}>
            Pon a prueba tu criterio visual organizando elementos para conseguir
            una composición equilibrada.
          </Text>

          <View style={styles.challengeDetails}>
            <View style={styles.detailItem}>
              <Ionicons
                name="time-outline"
                size={17}
                color={theme.colors.primary}
              />
              <Text style={styles.detailText}>15 min</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons
                name="star-outline"
                size={17}
                color={theme.colors.secondary}
              />
              <Text style={styles.detailText}>30 XP</Text>
            </View>
          </View>

          <Pressable
            style={styles.challengeButton}
            onPress={handleChallengePress}
          >
            <Text style={styles.challengeButtonText}>Comenzar reto</Text>
            <Ionicons
              name="arrow-forward"
              size={18}
              color={theme.colors.text}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mi actividad práctica</Text>

        {isLoadingStats ? (
          <Text style={styles.statsMessage}>Cargando estadísticas...</Text>
        ) : (
          <>
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={23}
                  color={theme.colors.secondary}
                />
                <Text style={styles.statValue}>{totalCompleted}</Text>
                <Text style={styles.statLabel}>Retos completados</Text>
              </View>

              <View style={styles.statCard}>
                <Ionicons
                  name="repeat-outline"
                  size={23}
                  color={theme.colors.primary}
                />
                <Text style={styles.statValue}>{totalAttempts}</Text>
                <Text style={styles.statLabel}>Intentos realizados</Text>
              </View>

              <View style={styles.statCard}>
                <Ionicons
                  name="trophy-outline"
                  size={23}
                  color={theme.colors.secondary}
                />
                <Text style={styles.statValue}>{bestPercentage}%</Text>
                <Text style={styles.statLabel}>Mejor puntuación</Text>
              </View>
            </View>

            {latestPractice && (
              <View style={styles.latestPractice}>
                <Ionicons
                  name="time-outline"
                  size={20}
                  color={theme.colors.primary}
                />
                <View style={styles.latestPracticeInfo}>
                  <Text style={styles.latestPracticeLabel}>
                    Última práctica
                  </Text>
                  <Text style={styles.latestPracticeTitle}>
                    {latestPractice.practiceId}
                  </Text>
                </View>
              </View>
            )}
          </>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explora por áreas</Text>
        <Text style={styles.sectionDescription}>
          Elige una disciplina y descubre sus prácticas disponibles.
        </Text>

        <View style={styles.areasGrid}>
          {areas.map((area) => (
            <Pressable
              key={area.id}
              style={({ pressed }) => [
                styles.areaCard,
                pressed && styles.areaCardPressed,
              ]}
              onPress={() => handleAreaPress(area.id)}
            >
              <View style={styles.areaIconContainer}>
                <Ionicons name={area.icon} size={27} color={area.color} />
              </View>
              <Text style={styles.areaTitle}>{area.title}</Text>
              <Text style={styles.areaDescription}>{area.description}</Text>

              <View style={styles.areaFooter}>
                <Text style={styles.exploreText}>Explorar</Text>
                <Ionicons name="arrow-forward" size={16} color={area.color} />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
