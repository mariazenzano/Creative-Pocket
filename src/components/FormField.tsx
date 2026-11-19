import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  error?: string;
};

export default function FormField({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword,
  error,
}: Props) {
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textMuted}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && hidden}
          autoCapitalize="none"
        />

        {isPassword && (
          <Pressable onPress={() => setHidden(!hidden)}>
            <Ionicons
              name={hidden ? "eye" : "eye-off"}
              size={theme.text.title}
              color={theme.colors.textMuted}
            />
          </Pressable>
        )}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.xs,
  },
  label: {
    fontSize: theme.text.body,
    color: theme.colors.text,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
  },
  input: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    fontSize: theme.text.heading,
    color: theme.colors.text,
  },
  error: {
    fontSize: 12,
    color: "#FF6B6B",
  },
});
