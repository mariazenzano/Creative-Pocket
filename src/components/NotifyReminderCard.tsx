import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

import { theme } from "@/constants/theme";
import { useDailyReminder } from "@/notifications/useDailyReminder";

import { styles } from "./NotifyReminderCard.styles";

export default function NotifyReminderCard() {
  const {
    errorMessage,
    handleReminderToggle,
    handleRequestPermission,
    handleSaveReminder,
    handleTestNotification,
    hourInput,
    isLoading,
    isSaving,
    isTimeValid,
    minuteInput,
    permissionGranted,
    permissionRequested,
    reminder,
    testMessage,
    timeValidationMessage,
    updateHourInput,
    updateMinuteInput,
  } = useDailyReminder();

  const busy = isSaving;

  return (
    <View style={styles.card}>
      <View style={styles.heading}>
        <Ionicons
          name="notifications-outline"
          size={22}
          color={theme.colors.primarySoft}
        />
        <View style={styles.headingText}>
          <Text style={styles.title}>Recordatorio diario</Text>
          <Text style={styles.description}>
            Continúa aprendiendo diseño con un aviso a la hora que elijas.
          </Text>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator color={theme.colors.primarySoft} />
      ) : Platform.OS === "web" ? (
        <Text style={styles.description}>
          Los recordatorios funcionan desde la app en tu celular.
        </Text>
      ) : reminder ? (
        <View style={styles.activeRow}>
          <View style={styles.activeInfo}>
            <Text style={styles.statusTitle}>
              {permissionGranted
                ? "Te avisamos todos los días a " +
                  [reminder.hour, reminder.minute]
                    .map((part) => String(part).padStart(2, "0"))
                    .join(":")
                : "Avisos desactivados en los ajustes del celular"}
            </Text>
            {!permissionGranted && (
              <Text style={styles.description}>
                Actívalos en los ajustes o apaga este recordatorio.
              </Text>
            )}
          </View>
          <Switch
            value
            onValueChange={handleReminderToggle}
            disabled={busy}
            accessibilityLabel="Apagar recordatorio diario"
          />
        </View>
      ) : !permissionGranted ? (
        <View style={styles.permissionSection}>
          <View style={styles.statusRow}>
            <Ionicons
              name={
                permissionRequested
                  ? "notifications-off-outline"
                  : "notifications-outline"
              }
              size={20}
              color={theme.colors.primarySoft}
            />
            <Text style={styles.description}>
              {permissionRequested
                ? "Sin permiso. Puedes activarlo en los ajustes del celular."
                : "¿Te avisamos cada día para que no pierdas tu ritmo?"}
            </Text>
          </View>
          <Pressable
            style={[styles.button, busy && styles.buttonDisabled]}
            onPress={handleRequestPermission}
            disabled={busy}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>
              {busy ? "Solicitando permiso..." : "Avísame"}
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.statusTitle}>¿A qué hora te avisamos?</Text>
          <View style={styles.timeFields}>
            <View style={styles.timeField}>
              <Text style={styles.fieldLabel}>Hora (0–23)</Text>
              <TextInput
                value={hourInput}
                onChangeText={updateHourInput}
                keyboardType="number-pad"
                maxLength={2}
                style={styles.timeInput}
                accessibilityLabel="Hora del recordatorio"
              />
            </View>
            <View style={styles.timeField}>
              <Text style={styles.fieldLabel}>Minuto (0–59)</Text>
              <TextInput
                value={minuteInput}
                onChangeText={updateMinuteInput}
                keyboardType="number-pad"
                maxLength={2}
                style={styles.timeInput}
                accessibilityLabel="Minuto del recordatorio"
              />
            </View>
          </View>
          {timeValidationMessage && (
            <Text style={styles.error}>{timeValidationMessage}</Text>
          )}
          <Pressable
            style={[
              styles.button,
              (!isTimeValid || busy) && styles.buttonDisabled,
            ]}
            onPress={handleSaveReminder}
            disabled={!isTimeValid || busy}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>
              {busy ? "Guardando..." : "Guardar recordatorio"}
            </Text>
          </Pressable>
        </View>
      )}

      {Platform.OS !== "web" && (
        <View style={styles.testSection}>
          <Pressable
            style={[styles.testButton, busy && styles.buttonDisabled]}
            onPress={handleTestNotification}
            disabled={busy || Boolean(testMessage)}
            accessibilityRole="button"
          >
            <Text style={styles.testButtonText}>
              {busy ? "Preparando prueba..." : "Probar aviso en 10 segundos"}
            </Text>
          </Pressable>
          <Text style={styles.description}>
            Al tocarlo, permite las notificaciones y deja la app minimizada para
            ver el aviso en el celular.
          </Text>
          {testMessage && <Text style={styles.success}>{testMessage}</Text>}
        </View>
      )}

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
}
