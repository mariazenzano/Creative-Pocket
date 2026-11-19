import { palette } from "@/constants/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import FormField from "../components/FormField";
import InlineLink from "../components/InlineLink";
import LoginHeader from "../components/LoginHeader";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";
import { theme } from "../constants/theme";
import { loadUser, saveUser } from "../storage/user";

type FieldErrors = {
  username?: string;
  password?: string;
  confirmPassword?: string;
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const router = useRouter();

  // Validate username
  const getUsernameError = (value: string) => {
    if (!value.trim()) return "Este campo es obligatorio.";
    if (value.trim().length < 4) {
      return "Tu nombre debe tener al menos 4 caracteres.";
    }
    return "";
  };
  const getPasswordError = (value: string) => {
    if (!value) return "Este campo es obligatorio.";
    if (value.length < 5) {
      return "Usa al menos 5 caracteres.";
    }
    if (!/[A-Z]/.test(value)) {
      return "Incluye al menos una letra mayúscula.";
    }
    if (!/[0-9]/.test(value)) {
      return "Incluye al menos un número.";
    }
    return "";
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);

    setErrors((prev) => ({
      ...prev,
      username: value ? getUsernameError(value) : undefined,
    }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    setErrors((prev) => ({
      ...prev,
      password: value ? getPasswordError(value) : undefined,
      confirmPassword:
        confirmPassword && value !== confirmPassword
          ? "Las contraseñas no coinciden."
          : undefined,
    }));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);

    setErrors((prev) => ({
      ...prev,
      confirmPassword:
        value && value !== password
          ? "Las contraseñas no coinciden."
          : undefined,
    }));
  };

  const handleRegister = async () => {
    const newErrors: FieldErrors = {
      username: getUsernameError(username),
      password: getPasswordError(password),
      confirmPassword: !confirmPassword
        ? "Confirma tu contraseña."
        : password !== confirmPassword
          ? "Las contraseñas no coinciden."
          : "",
    };

    setErrors(newErrors);

    if (newErrors.username || newErrors.password || newErrors.confirmPassword) {
      return;
    }

    try {
      await saveUser({
        name: username.trim(),
      });

      setIsRegistering(false);
      setPassword("");
      setConfirmPassword("");
      setErrors({});

      Alert.alert(
        "¡Cuenta creada!",
        "Tu cuenta se guardó correctamente. Ahora puedes iniciar sesión.",
      );
    } catch (error) {
      Alert.alert("Error", "No pudimos guardar tus datos.");
      console.error("Error saving user:", error);
    }
  };

  // Login an existing user
  const handleLogin = async () => {
    const newErrors: FieldErrors = {
      username: getUsernameError(username),
      password: getPasswordError(password),
    };

    setErrors(newErrors);

    if (newErrors.username || newErrors.password) {
      return;
    }

    try {
      const user = await loadUser();

      if (!user) {
        setErrors({
          username: "Primero debes crear una cuenta.",
        });
        return;
      }

      if (user.name.trim().toLowerCase() !== username.trim().toLowerCase()) {
        setErrors({
          username: "El usuario no es correcto.",
        });
        return;
      }

      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "No pudimos recuperar tus datos.");
      console.error("Login error:", error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <LoginHeader />

      <View style={styles.form}>
        <FormField
          label={isRegistering ? "Nombre" : "Usuario"}
          placeholder={isRegistering ? "Tu nombre" : "Nombre de usuario"}
          value={username}
          onChangeText={handleUsernameChange}
          error={errors.username}
        />

        <FormField
          label="Contraseña"
          placeholder="Contraseña"
          value={password}
          onChangeText={handlePasswordChange}
          isPassword
          error={errors.password}
        />

        {isRegistering && (
          <FormField
            label="Confirmar contraseña"
            placeholder="Repite tu contraseña"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            isPassword
            error={errors.confirmPassword}
          />
        )}
      </View>

      <InlineLink
        text={isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
        linkLabel={isRegistering ? "Inicia sesión" : "Regístrate"}
        onPress={() => {
          setIsRegistering(!isRegistering);
          setPassword("");
          setConfirmPassword("");
          setErrors({});
        }}
      />

      <PrimaryButton
        label={isRegistering ? "Crear cuenta" : "Iniciar sesión"}
        onPress={() => {
          if (isRegistering) {
            handleRegister();
          } else {
            handleLogin();
          }
        }}
      />

      {!isRegistering && (
        <>
          <Text style={styles.or}>Or</Text>

          <View style={styles.social}>
            <SocialButton
              label="Login with Email"
              icon="logo-instagram"
              onPress={() => {}}
            />

            <SocialButton
              label="Login with Google"
              icon="logo-google"
              onPress={() => {}}
            />

            <SocialButton
              label="Login with Apple"
              icon="logo-apple"
              onPress={() => {}}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: theme.spacing.lg,
    justifyContent: "center",
    paddingHorizontal: theme.spacing.xxl,
    paddingVertical: theme.spacing.sm,
    backgroundColor: palette.neutral[800],
  },

  form: {
    gap: theme.spacing.lg,
  },

  social: {
    gap: theme.spacing.md,
  },

  or: {
    textAlign: "center",
    fontSize: theme.text.body,
    color: theme.colors.text,
  },
});
