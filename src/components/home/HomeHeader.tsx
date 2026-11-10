import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { getXPProgress } from "../../storage/xpProgress";

type HomeHeaderProps = {
  onNotificationsPress?: () => void;
};

export default function HomeHeader({ onNotificationsPress }: HomeHeaderProps) {
  const router = useRouter();

  const [totalXP, setTotalXP] = useState(0);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadXP = async () => {
        const progress = await getXPProgress();

        if (isActive) {
          setTotalXP(progress.totalXP);
        }
      };

      loadXP();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const handleProfilePress = () => {
    router.push("/profile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#888888" />

        <TextInput
          style={styles.input}
          placeholder="Buscar cursos o lecciones..."
          placeholderTextColor="#888888"
        />
      </View>

      <View style={styles.xpContainer}>
        <Ionicons name="star" size={17} color="#F4C542" />

        <Text style={styles.xpText}>{totalXP} XP</Text>
      </View>

      <Pressable
        style={styles.iconButton}
        onPress={onNotificationsPress}
        accessibilityRole="button"
        accessibilityLabel="Ver notificaciones"
      >
        <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
      </Pressable>

      <Pressable
        style={styles.profileButton}
        onPress={handleProfilePress}
        accessibilityRole="button"
        accessibilityLabel="Abrir perfil"
      >
        <Ionicons name="person-outline" size={22} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },

  searchContainer: {
    flex: 1,
    minWidth: 0,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#292929",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 8,
  },

  input: {
    flex: 1,
    minWidth: 0,
    color: "#FFFFFF",
    fontSize: 13,
  },

  xpContainer: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 9,
    borderRadius: 14,
    backgroundColor: "#292929",
  },

  xpText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },

  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center",
  },
});
