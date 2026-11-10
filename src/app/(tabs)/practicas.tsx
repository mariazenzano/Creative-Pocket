import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { palette } from "../../constants/colors";
import { theme } from "../../constants/theme";

const areas = [
  {
    id: "graphic-design",
    title: "Diseño gráfico",
    description: "Color, tipografía y composición",
    icon: "color-palette-outline",
    color: palette.primary[100],
  },
  {
    id: "web-design",
    title: "Diseño web",
    description: "Interfaces y experiencias digitales",
    icon: "laptop-outline",
    color: palette.secondary[200],
  },
  {
    id: "audiovisual",
    title: "Audiovisual",
    description: "Fotografía, narrativa y edición",
    icon: "videocam-outline",
    color: palette.primary[200],
  },
  {
    id: "3d-design",
    title: "Diseño 3D",
    description: "Modelado, materiales y escenarios",
    icon: "cube-outline",
    color: palette.secondary[300],
  },
] as const;

export default function Practicas() {
  const router = useRouter();

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

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Page heading */}
      <View style={styles.heading}>
        <Text style={styles.title}>Prácticas</Text>

        <Text style={styles.subtitle}>
          Pon a prueba tus ideas. Experimenta y aprende creando.
        </Text>
      </View>

      {/* Featured challenge */}
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

      {/* Practice areas */}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.xl,
  },

  heading: {
    gap: theme.spacing.sm,
  },

  title: {
    fontSize: theme.text.title,
    fontWeight: "bold",
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.body,
    lineHeight: 21,
    color: theme.colors.textMuted,
  },

  section: {
    gap: theme.spacing.md,
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: theme.text.subtitle,
    fontWeight: "bold",
    color: theme.colors.text,
  },

  sectionDescription: {
    fontSize: theme.text.small,
    color: theme.colors.textMuted,
    marginTop: -theme.spacing.sm,
  },

  challengeCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.max2,
    borderWidth: 1,
    borderColor: theme.colors.primarySoft,
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },

  challengeTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  challengeTag: {
    backgroundColor: theme.colors.primarySoft,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.full,
  },

  challengeTagText: {
    color: theme.colors.text,
    fontSize: theme.text.caption,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  challengeTitle: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },

  challengeDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
    lineHeight: 20,
  },

  challengeDetails: {
    flexDirection: "row",
    gap: theme.spacing.lg,
    marginTop: theme.spacing.xs,
  },

  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
  },

  detailText: {
    color: theme.colors.text,
    fontSize: theme.text.small,
    fontWeight: "600",
  },

  challengeButton: {
    backgroundColor: theme.colors.primarySoft,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginTop: theme.spacing.xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.sm,
  },

  challengeButtonText: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  areasGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },

  areaCard: {
    width: "48%",
    flexGrow: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },

  areaCardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  areaIconContainer: {
    width: theme.spacing.xxl,
    height: theme.spacing.xxl,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primarySoft,
    justifyContent: "center",
    alignItems: "center",
  },

  areaTitle: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },

  areaDescription: {
    color: theme.colors.textMuted,
    fontSize: theme.text.caption,
    lineHeight: 16,
    minHeight: 32,
  },

  areaFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing.xs,
  },

  exploreText: {
    color: theme.colors.text,
    fontSize: theme.text.small,
    fontWeight: "600",
  },
});
