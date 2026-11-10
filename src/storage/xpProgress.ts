import AsyncStorage from "@react-native-async-storage/async-storage";

const XP_PROGRESS_KEY = "@creative-pocket/xp-progress";

// Estructura
type XPProgress = {
  totalXP: number;
  rewardedNodeIds: string[];
};

// Obtener el progreso de XP
export async function getXPProgress(): Promise<XPProgress> {
  try {
    const storedProgress = await AsyncStorage.getItem(XP_PROGRESS_KEY);

    if (!storedProgress) {
      return {
        totalXP: 0,
        rewardedNodeIds: [],
      };
    }

    const parsedProgress: unknown = JSON.parse(storedProgress);

    if (
      typeof parsedProgress === "object" &&
      parsedProgress !== null &&
      "totalXP" in parsedProgress &&
      "rewardedNodeIds" in parsedProgress &&
      typeof parsedProgress.totalXP === "number" &&
      Number.isFinite(parsedProgress.totalXP) &&
      parsedProgress.totalXP >= 0 &&
      Array.isArray(parsedProgress.rewardedNodeIds) &&
      parsedProgress.rewardedNodeIds.every(
        (id: unknown) => typeof id === "string",
      )
    ) {
      return {
        totalXP: parsedProgress.totalXP,
        rewardedNodeIds: parsedProgress.rewardedNodeIds,
      };
    }

    return {
      totalXP: 0,
      rewardedNodeIds: [],
    };
  } catch (error) {
    console.error("Error al obtener los XP:", error);
    return {
      totalXP: 0,
      rewardedNodeIds: [],
    };
  }
}

// Guardar el progreso de XP
async function saveXPProgress(progress: XPProgress): Promise<void> {
  await AsyncStorage.setItem(XP_PROGRESS_KEY, JSON.stringify(progress));
}

// Entregar XP por completar una actividad
export async function awardXPForNode(
  nodeId: string,
  xpAmount: number,
): Promise<number> {
  if (!Number.isFinite(xpAmount) || xpAmount <= 0) {
    return (await getXPProgress()).totalXP;
  }

  const progress = await getXPProgress();

  // Evitar recompensar dos veces la misma actividad
  if (progress.rewardedNodeIds.includes(nodeId)) {
    return progress.totalXP;
  }

  const updatedProgress: XPProgress = {
    totalXP: progress.totalXP + xpAmount,
    rewardedNodeIds: [...progress.rewardedNodeIds, nodeId],
  };

  await saveXPProgress(updatedProgress);

  return updatedProgress.totalXP;
}
// practica especial
export async function awardXPForPractice(
  practiceId: string,
  xpAmount: number,
): Promise<number> {
  return awardXPForNode(`practice:${practiceId}`, xpAmount);
}
