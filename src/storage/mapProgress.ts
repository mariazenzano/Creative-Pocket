import AsyncStorage from "@react-native-async-storage/async-storage";

const COMPLETED_NODES_KEY = "@creative-pocket/completed-nodes";
const COMPLETION_DATES_KEY = "@creative-pocket/completion-dates";

// Get today's date in local format
function getLocalDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Get completion dates
async function getCompletionDates(): Promise<Record<string, string>> {
  try {
    const storedDates = await AsyncStorage.getItem(COMPLETION_DATES_KEY);

    if (!storedDates) {
      return {};
    }

    const parsedDates: unknown = JSON.parse(storedDates);

    if (
      typeof parsedDates === "object" &&
      parsedDates !== null &&
      !Array.isArray(parsedDates)
    ) {
      return parsedDates as Record<string, string>;
    }

    return {};
  } catch (error) {
    console.error("Error al obtener las fechas de finalización:", error);
    return {};
  }
}

// Get completed activities
export async function getCompletedNodeIds(): Promise<string[]> {
  try {
    const storedNodes = await AsyncStorage.getItem(COMPLETED_NODES_KEY);

    if (!storedNodes) {
      return [];
    }

    const parsedNodes: unknown = JSON.parse(storedNodes);

    if (
      Array.isArray(parsedNodes) &&
      parsedNodes.every((id) => typeof id === "string")
    ) {
      return parsedNodes;
    }

    return [];
  } catch (error) {
    console.error("Error al obtener el progreso:", error);
    return [];
  }
}

// Save completed activities
export async function saveCompletedNodeIds(nodeIds: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(COMPLETED_NODES_KEY, JSON.stringify(nodeIds));
  } catch (error) {
    console.error("Error al guardar el progreso:", error);
    throw error;
  }
}

// Get the number of activities completed today
export async function getDailyCompletedNodeCount(): Promise<number> {
  const [completedNodes, completionDates] = await Promise.all([
    getCompletedNodeIds(),
    getCompletionDates(),
  ]);

  const today = getLocalDate();

  return completedNodes.filter((nodeId) => completionDates[nodeId] === today)
    .length;
}

// Mark an activity as completed
export async function completeNode(nodeId: string): Promise<string[]> {
  const completedNodes = await getCompletedNodeIds();

  // Avoid counting the same activity more than once
  if (completedNodes.includes(nodeId)) {
    return completedNodes;
  }

  const updatedNodes = [...completedNodes, nodeId];

  const completionDates = await getCompletionDates();

  completionDates[nodeId] = getLocalDate();

  try {
    await AsyncStorage.setItem(
      COMPLETION_DATES_KEY,
      JSON.stringify(completionDates),
    );

    await saveCompletedNodeIds(updatedNodes);

    return updatedNodes;
  } catch (error) {
    console.error("Error al completar la actividad:", error);
    throw error;
  }
}
