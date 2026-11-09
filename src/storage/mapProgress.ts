import AsyncStorage from "@react-native-async-storage/async-storage";

const COMPLETED_NODES_KEY = "@creative-pocket/completed-nodes";

// Obtener las actividades completadas
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

// Guardar las actividades completadas
export async function saveCompletedNodeIds(nodeIds: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(COMPLETED_NODES_KEY, JSON.stringify(nodeIds));
  } catch (error) {
    console.error("Error al guardar el progreso:", error);
    throw error;
  }
}

// Marcar una actividad como completada
export async function completeNode(nodeId: string): Promise<string[]> {
  const completedNodes = await getCompletedNodeIds();

  if (completedNodes.includes(nodeId)) {
    return completedNodes;
  }

  const updatedNodes = [...completedNodes, nodeId];

  await saveCompletedNodeIds(updatedNodes);

  return updatedNodes;
}
