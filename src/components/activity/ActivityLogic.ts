
import { useCallback, useRef } from "react";
import { AppState } from "react-native";
import { useFocusEffect } from "expo-router";

import { saveLearningSession } from "../../storage/learningTime";
import type { MapNode } from "../../types/map";

export const PASSING_PERCENTAGE = 67;
export const XP_PER_CORRECT_ANSWER = 10;

export function getActivityLabel(type: MapNode["type"]): string {
  switch (type) {
    case "lesson":
      return "Lección";
    case "exercise":
      return "Ejercicio";
    case "challenge":
      return "Desafío";
    case "project":
      return "Proyecto";
    default:
      return "Actividad";
  }
}

export function useLearningTimer(nodeId: string) {
  const sessionStartRef = useRef<number | null>(null);
  const accumulatedTimeRef = useRef(0);
  const isAppActiveRef = useRef(true);
  const isSavingTimeRef = useRef(false);

  const startLearningTimer = useCallback(() => {
    if (
      sessionStartRef.current !== null ||
      !isAppActiveRef.current
    ) {
      return;
    }

    sessionStartRef.current = Date.now();
  }, []);

  const pauseLearningTimer = useCallback(() => {
    if (sessionStartRef.current === null) return;

    const elapsed = Math.floor(
      (Date.now() - sessionStartRef.current) / 1000
    );

    accumulatedTimeRef.current += elapsed;
    sessionStartRef.current = null;
  }, []);

  const saveLearningTime = useCallback(async () => {
    if (isSavingTimeRef.current) return;

    pauseLearningTimer();

    const durationSeconds = accumulatedTimeRef.current;
    if (durationSeconds <= 0) return;

    isSavingTimeRef.current = true;

    try {
      await saveLearningSession(nodeId, durationSeconds);
      accumulatedTimeRef.current = 0;
    } catch (error) {
      console.error(
        "No se pudo guardar el tiempo de aprendizaje:",
        error
      );
    } finally {
      isSavingTimeRef.current = false;
    }
  }, [nodeId, pauseLearningTimer]);

  useFocusEffect(
    useCallback(() => {
      isAppActiveRef.current = AppState.currentState === "active";

      if (isAppActiveRef.current) {
        startLearningTimer();
      }

      const subscription = AppState.addEventListener(
        "change",
        (nextAppState) => {
          if (nextAppState === "active") {
            isAppActiveRef.current = true;
            startLearningTimer();
          } else {
            isAppActiveRef.current = false;
            pauseLearningTimer();
          }
        }
      );

      return () => {
        subscription.remove();
        isAppActiveRef.current = false;
        void saveLearningTime();
      };
    }, [
      startLearningTimer,
      pauseLearningTimer,
      saveLearningTime,
    ])
  );
}
