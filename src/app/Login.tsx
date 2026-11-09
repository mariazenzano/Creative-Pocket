import { palette } from "@/constants/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import BotonOpciones from "../components/BotonOpciones";
import BotonPrimario from "../components/BotonPrimario";
import EncabezadoLogin from "../components/EncabezadoLogin";
import Enlace from "../components/Enlace";
import Formulario from "../components/Formulario";

import { theme } from "../constants/theme";
import { loadUser, saveUser } from "../storage/user";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  // Register a new user
  const handleRegister = async () => {
    if (!username.trim() || !password || !confirmPassword) {
      Alert.alert("Campos incompletos", "Completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Contraseñas diferentes", "Las contraseñas no coinciden.");
      return;
    }

    try {
      await saveUser({
        name: username.trim(),
      });

      // Return to the login form.
      setIsRegistering(false);
      setPassword("");
      setConfirmPassword("");

      Alert.alert(
        "¡Cuenta creada!",
        "Tu cuenta se guardó correctamente. Ahora puedes iniciar sesión.",
      );
    } catch (error) {
      Alert.alert(
        "Error",
        "No pudimos guardar tus datos. Inténtalo nuevamente.",
      );

      console.error("Error saving user:", error);
    }
  };

  // Login an existing user
  const handleLogin = async () => {
    if (!username.trim() || !password) {
      Alert.alert("Campos incompletos", "Completa tus datos.");
      return;
    }

    try {
      const user = await loadUser();

      if (!user) {
        Alert.alert("Usuario no encontrado", "Primero debes crear una cuenta.");
        return;
      }

      if (user.name.trim().toLowerCase() !== username.trim().toLowerCase()) {
        Alert.alert("Usuario incorrecto", "Revisa tu nombre de usuario.");
        return;
      }

      // Navigate to the main index screen.
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
      <EncabezadoLogin />

      <View style={styles.form}>
        <Formulario
          label={isRegistering ? "Nombre" : "Usuario"}
          placeholder={isRegistering ? "Tu nombre" : "Nombre de usuario"}
          value={username}
          onChangeText={setUsername}
        />

        <Formulario
          label="Contraseña"
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          isPassword
        />

        {isRegistering && (
          <Formulario
            label="Confirmar contraseña"
            placeholder="Repite tu contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword
          />
        )}
      </View>

      <Enlace
        text={isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
        linkLabel={isRegistering ? "Inicia sesión" : "Regístrate"}
        onPress={() => {
          setIsRegistering(!isRegistering);
          setPassword("");
          setConfirmPassword("");
        }}
      />

      <BotonPrimario
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
            <BotonOpciones
              label="Login with Email"
              icon="logo-instagram"
              onPress={() => {}}
            />

            <BotonOpciones
              label="Login with Google"
              icon="logo-google"
              onPress={() => {}}
            />

            <BotonOpciones
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
