import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";
import BotonOpciones from "./BotonOpciones";
import BotonPrimario from "./BotonPrimario";
import EncabezadoLogin from "./EncabezadoLogin";
import Enlace from "./Enlace";
import Formulario from "./Formulario";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <EncabezadoLogin />

      <View style={styles.form}>
        <Formulario
          label="Usuario"
          placeholder="Nombre de usuario"
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
      </View>

      <Enlace
        text="Olvidaste tu contraseña?"
        linkLabel="Recuperala"
        onPress={() => {}}
      />

      <BotonPrimario label="Login with Email" onPress={() => {}} />

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

      <Enlace
        text="No tienes cuenta?"
        linkLabel="Registrate"
        onPress={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, gap: theme.spacing.lg, justifyContent: "center" },
  form: { gap: theme.spacing.lg },
  social: { gap: theme.spacing.md },
  or: {
    textAlign: "center",
    fontSize: theme.text.body,
    color: theme.colors.text,
  },
});
