import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import BackButton from "../common/BackButton";

type ProfileHeaderProps = {
  name: string;
  userId: string;
  avatarUri?: string;
  onBack: () => void;
  onCopyId: () => void;
};

export default function ProfileHeader({
  name,
  userId,
  avatarUri,
  onBack,
  onCopyId,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <BackButton onPress={onBack} />

      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <Ionicons
              name="person"
              size={27}
              color={theme.colors.primarySoft}
            />
          )}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          <Text style={styles.userId} numberOfLines={1}>
            ID: {userId}
          </Text>
        </View>
      </View>

      <Pressable
        style={styles.copyButton}
        onPress={onCopyId}
        accessibilityRole="button"
        accessibilityLabel="Copiar ID de usuario"
      >
        <Text style={styles.copyText}>Copiar</Text>

        <Ionicons name="copy-outline" size={15} color={theme.colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minWidth: 0,
  },

  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.card,
    borderWidth: 1.5,
    borderColor: theme.colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },

  textContainer: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },

  name: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: "700",
  },

  userId: {
    color: theme.colors.textMuted,
    fontSize: 11,
  },

  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
  },

  copyText: {
    color: theme.colors.text,
    fontSize: 11,
    fontWeight: "600",
  },
});
