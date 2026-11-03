import { palette } from "@/constants/colors";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonOpciones from "../components/BotonOpciones";
import BotonPrimario from "../components/BotonPrimario";
import EncabezadoLogin from "../components/EncabezadoLogin";
import Enlace from "../components/Enlace";
import Formulario from "../components/Formulario";
import { theme } from "../constants/theme";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
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
          setConfirmPassword("");
        }}
      />

      <BotonPrimario
        label={isRegistering ? "Crear cuenta" : "Iniciar sesión"}
        onPress={() => {}}
      />

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
  form: { gap: theme.spacing.lg },
  social: { gap: theme.spacing.md },
  or: {
    textAlign: "center",
    fontSize: theme.text.body,
    color: theme.colors.text,
  },
});
