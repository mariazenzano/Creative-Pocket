import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type CoursesHeaderProps = {
  onNotificationsPress?: () => void;
  onProfilePress?: () => void;
};

export default function CoursesHeader({
  onNotificationsPress,
  onProfilePress,
}: CoursesHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Flecha para regresar */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
      </Pressable>

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#888888" />

        <TextInput
          style={styles.input}
          placeholder="Buscar cursos o lecciones..."
          placeholderTextColor="#888888"
        />
      </View>

      {/* Notificaciones */}
      <Pressable
        style={styles.iconButton}
        onPress={() => router.push("/Notifications")}
        accessibilityRole="button"
        accessibilityLabel="Abrir notificaciones"
      >
        <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
      </Pressable>

      {/* Perfil de usuario */}
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
    gap: 8,
    width: "100%",
  },

  backButton: {
    width: 34,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    flex: 1,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#292929",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 6,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 12,
  },

  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },

  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center",
  },
});
