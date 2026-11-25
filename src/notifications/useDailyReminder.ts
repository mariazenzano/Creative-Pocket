import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

import {
  askNotificationPermission,
  cancelReminder,
  hasNotificationPermission,
  loadReminder,
  scheduleDailyReminder,
  scheduleTestNotification,
  type Reminder,
} from "./notifications";

const DEFAULT_HOUR = "20";
const DEFAULT_MINUTE = "00";

export function useDailyReminder() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [permissionRequested, setPermissionRequested] = useState(false);
  const [reminder, setReminder] = useState<Reminder | null>(null);
  const [hourInput, setHourInput] = useState(DEFAULT_HOUR);
  const [minuteInput, setMinuteInput] = useState(DEFAULT_MINUTE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [testMessage, setTestMessage] = useState<string | null>(null);

  const hour = Number(hourInput);
  const minute = Number(minuteInput);
  const isTimeValid =
    /^\d{1,2}$/.test(hourInput) &&
    /^\d{1,2}$/.test(minuteInput) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59;
  const timeValidationMessage =
    hourInput.length > 0 && hour > 23
      ? "La hora debe estar entre 0 y 23."
      : minuteInput.length > 0 && minute > 59
        ? "Los minutos deben estar entre 0 y 59."
        : null;

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      Promise.all([loadReminder(), hasNotificationPermission()])
        .then(([savedReminder, hasPermission]) => {
          if (!isActive) return;

          setReminder(savedReminder);
          setPermissionGranted(hasPermission);
          setPermissionRequested(false);
          setTestMessage(null);
          if (savedReminder) {
            setHourInput(String(savedReminder.hour).padStart(2, "0"));
            setMinuteInput(String(savedReminder.minute).padStart(2, "0"));
          }
        })
        .catch(() => {
          if (isActive) {
            setErrorMessage("No se pudieron cargar los ajustes de avisos.");
          }
        })
        .finally(() => {
          if (isActive) setIsLoading(false);
        });

      return () => {
        isActive = false;
      };
    }, []),
  );

  const handleRequestPermission = async () => {
    setIsSaving(true);
    setErrorMessage(null);
    try {
      const allowed = await askNotificationPermission();
      setPermissionGranted(allowed);
      setPermissionRequested(true);
      if (!allowed) {
        setErrorMessage("Puedes activar los avisos desde los ajustes del celular.");
      }
    } catch {
      setErrorMessage("No se pudo solicitar el permiso de notificaciones.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleTestNotification = async () => {
    setIsSaving(true);
    setErrorMessage(null);
    setTestMessage(null);
    let stage: "permission" | "schedule" = "permission";
    try {
      const allowed = await askNotificationPermission();
      setPermissionGranted(allowed);
      setPermissionRequested(true);
      if (!allowed) {
        setErrorMessage("Permite las notificaciones para probar el aviso.");
        return;
      }

      stage = "schedule";
      await scheduleTestNotification();
      setTestMessage("Prueba programada. Recibirás el aviso en 10 segundos.");
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      console.error("Test notification failed during " + stage + ":", error);
      setErrorMessage(
        stage === "permission"
          ? "No se pudo solicitar el permiso: " + detail
          : "No se pudo programar el aviso: " + detail,
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveReminder = async () => {
    if (!isTimeValid) return;

    setIsSaving(true);
    setErrorMessage(null);
    try {
      if (await loadReminder()) {
        await cancelReminder();
        setReminder(null);
      }

      const scheduledReminder = await scheduleDailyReminder(hour, minute);
      if (!scheduledReminder) {
        setPermissionGranted(false);
        setErrorMessage("Activa las notificaciones para guardar el recordatorio.");
        return;
      }

      setReminder(scheduledReminder);
      setHourInput(String(hour).padStart(2, "0"));
      setMinuteInput(String(minute).padStart(2, "0"));
    } catch {
      setErrorMessage("No se pudo guardar el recordatorio. Inténtalo de nuevo.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleReminderToggle = async (enabled: boolean) => {
    if (enabled || !reminder) return;

    setIsSaving(true);
    setErrorMessage(null);
    try {
      await cancelReminder();
      setReminder(null);
    } catch {
      setErrorMessage("No se pudo apagar el recordatorio.");
    } finally {
      setIsSaving(false);
    }
  };

  const updateHourInput = (value: string) => {
    setHourInput(value.replace(/\D/g, "").slice(0, 2));
    setErrorMessage(null);
  };

  const updateMinuteInput = (value: string) => {
    setMinuteInput(value.replace(/\D/g, "").slice(0, 2));
    setErrorMessage(null);
  };

  return {
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
    timeValidationMessage,
    testMessage,
    updateHourInput,
    updateMinuteInput,
  };
}
