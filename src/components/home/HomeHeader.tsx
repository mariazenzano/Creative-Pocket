import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type HomeHeaderProps = {
  onNotificationsPress?: () => void;
  onProfilePress?: () => void;
};

export default function HomeHeader({
  onNotificationsPress,
  onProfilePress,
}: HomeHeaderProps) {
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

      <Pressable style={styles.iconButton} onPress={onNotificationsPress}>
        <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
      </Pressable>

      <Pressable
        style={styles.profileButton}
        onPress={() => router.push("/perfil")}
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
    gap: 10,
    width: "100%",
  },

  searchContainer: {
    flex: 1,
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
    color: "#FFFFFF",
    fontSize: 13,
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
