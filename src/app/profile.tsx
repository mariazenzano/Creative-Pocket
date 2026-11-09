import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { theme } from "../constants/theme";
import { loadUser } from "../storage/user";

export default function ProfileScreen() {
  const router = useRouter();

  const [userName, setUserName] = useState("Diseñador");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await loadUser();

        if (user?.name) {
          setUserName(user.name);
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={23} color="#FFFFFF" />
        </Pressable>

        <Text style={styles.headerTitle}>Mi perfil</Text>

        <View style={styles.headerSpace} />
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={48} color="#FFFFFF" />
        </View>

        {loading ? (
          <ActivityIndicator color={theme.colors.primary} />
        ) : (
          <>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userDescription}>Diseñador en formación</Text>
          </>
        )}
      </View>

      {/* Account information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mi cuenta</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="person-outline"
              size={21}
              color={theme.colors.primary}
            />
          </View>

          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>Nombre de usuario</Text>
            <Text style={styles.infoValue}>{userName}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="school-outline"
              size={21}
              color={theme.colors.primary}
            />
          </View>

          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>Plataforma</Text>
            <Text style={styles.infoValue}>Creative Pocket</Text>
          </View>
        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre mí</Text>

        <View style={styles.aboutCard}>
          <Ionicons
            name="sparkles-outline"
            size={25}
            color={theme.colors.primary}
          />

          <Text style={styles.aboutText}>
            Cada lección es una oportunidad para desarrollar nuevas habilidades
            y potenciar tu creatividad.
          </Text>
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
    paddingHorizontal: 22,
    paddingTop: 50,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 38,
  },

  backButton: {
    width: 43,
    height: 43,
    borderRadius: 50,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: "700",
  },

  headerSpace: {
    width: 43,
  },

  profileSection: {
    alignItems: "center",
    marginBottom: 42,
  },

  avatarContainer: {
    width: 112,
    height: 112,
    borderRadius: 60,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  userName: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
  },

  userDescription: {
    color: theme.colors.textMuted,
    fontSize: 14,
  },

  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 15,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    gap: 14,
  },

  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: theme.colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },

  infoText: {
    flex: 1,
    gap: 4,
  },

  infoLabel: {
    color: theme.colors.textMuted,
    fontSize: 12,
  },

  infoValue: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: "600",
  },

  aboutCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    padding: 18,
    gap: 12,
  },

  aboutText: {
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
});
