import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../../constants/theme";

type AccountActionsProps = {
  onLogout: () => void;
  onChangeAccount: () => void;
};

export default function AccountActions({
  onLogout,
  onChangeAccount,
}: AccountActionsProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={onLogout}
        accessibilityRole="button"
      >
        <Ionicons
          name="log-out-outline"
          size={20}
          color={theme.colors.primarySoft}
        />

        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={onChangeAccount}
        accessibilityRole="button"
      >
        <Ionicons
          name="person-circle-outline"
          size={20}
          color={theme.colors.primarySoft}
        />

        <Text style={styles.buttonText}>Cambiar de cuenta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },

  button: {
    width: "100%",
    minHeight: 52,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  buttonText: {
    color: theme.colors.text,
    fontSize: 13,
    fontWeight: "600",
  },
});
