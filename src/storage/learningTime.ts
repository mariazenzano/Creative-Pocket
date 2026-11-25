
import AsyncStorage from "@react-native-async-storage/async-storage";

const LEARNING_TIME_KEY = "@creative-pocket/learning-time";

// Estructura de cada sesión de aprendizaje
export type LearningTimeEntry = {
  nodeId: string;
  date: string;
  durationSeconds: number;
};

// Obtener la fecha local en formato YYYY-MM-DD
function getLocalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Comprobar que los datos tengan una estructura válida
function isValidEntry(entry: unknown): entry is LearningTimeEntry {
  if (typeof entry !== "object" || entry === null) {
    return false;
  }

  return (
    "nodeId" in entry &&
    typeof entry.nodeId === "string" &&
    "date" in entry &&
    typeof entry.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(entry.date) &&
    "durationSeconds" in entry &&
    typeof entry.durationSeconds === "number" &&
    Number.isFinite(entry.durationSeconds) &&
    entry.durationSeconds > 0
  );
}

// Recuperar todas las sesiones de aprendizaje
export async function getLearningTimeEntries(): Promise<LearningTimeEntry[]> {
  try {
    const storedEntries = await AsyncStorage.getItem(LEARNING_TIME_KEY);

    if (!storedEntries) {
      return [];
    }

    const parsedEntries: unknown = JSON.parse(storedEntries);

    if (
      Array.isArray(parsedEntries) &&
      parsedEntries.every(isValidEntry)
    ) {
      return parsedEntries;
    }

    return [];
  } catch (error) {
    console.error("Error al obtener el tiempo de aprendizaje:", error);
    return [];
  }
}

// Guardar una nueva sesión de aprendizaje
export async function saveLearningSession(
  nodeId: string,
  durationSeconds: number,
): Promise<void> {
  if (
    !nodeId ||
    !Number.isFinite(durationSeconds) ||
    durationSeconds <= 0
  ) {
    return;
  }

  try {
    const entries = await getLearningTimeEntries();

    const newEntry: LearningTimeEntry = {
      nodeId,
      date: getLocalDate(new Date()),
      durationSeconds: Math.floor(durationSeconds),
    };

    await AsyncStorage.setItem(
      LEARNING_TIME_KEY,
      JSON.stringify([...entries, newEntry]),
    );
  } catch (error) {
    console.error("Error al guardar el tiempo de aprendizaje:", error);
    throw error;
  }
}

// Obtener los minutos de aprendizaje de la semana actual
export async function getWeeklyLearningMinutes(): Promise<number> {
  const entries = await getLearningTimeEntries();

  const today = new Date();
  const dayOfWeek = today.getDay();

  // La semana comienza el lunes
  const daysSinceMonday = (dayOfWeek + 6) % 7;

  const monday = new Date(today);
  monday.setDate(today.getDate() - daysSinceMonday);

  const startDate = getLocalDate(monday);
  const endDate = getLocalDate(today);

  const weeklySeconds = entries
    .filter((entry) => entry.date >= startDate && entry.date <= endDate)
    .reduce((total, entry) => total + entry.durationSeconds, 0);

  return Math.floor(weeklySeconds / 60);
}
