//**AQUI SE  TIENEN LAS FUNCIONES QUE CALCULAN EL PROGRESO */
import type {
    MapNode,
    MapNodeStatus,
    Region,
    RegionId,
    RegionStatus,
} from "../types/map";
// Determina si una región está bloqueada, disponible o completada
export function getRegionStatus(
  region: Region,
  completedRegionIds: string[],
): RegionStatus {
  // Si ya completamos esta región, su estado será completed
  if (completedRegionIds.includes(region.id)) {
    return "completed";
  }

  // Si está abierta desde el inicio, podemos acceder a ella
  if (region.unlockRule.type === "open") {
    return "available";
  }

  // Comprobamos si completamos todas las regiones requeridas
  const hasCompletedRequirements = region.unlockRule.regionIds.every(
    (requiredId) => completedRegionIds.includes(requiredId),
  );

  return hasCompletedRequirements ? "available" : "locked";
}

// Obtener las regiones que el estudiante ya completó
export function getCompletedRegionIds(
  regions: Region[],
  nodes: MapNode[],
  completedNodeIds: string[],
): RegionId[] {
  return regions
    .filter((region) => {
      // Buscamos todas las actividades de la región
      const regionNodes = nodes.filter((node) => node.regionId === region.id);

      // La región debe tener actividades y todas deben estar completadas
      return (
        regionNodes.length > 0 &&
        regionNodes.every((node) => completedNodeIds.includes(node.id))
      );
    })
    .map((region) => region.id);
}
// Determina si una actividad está bloqueada, disponible o completada
export function getNodeStatus(
  node: MapNode,
  completedNodeIds: string[],
  regionStatus: RegionStatus,
): MapNodeStatus {
  // No podemos acceder a las actividades de una región bloqueada
  if (regionStatus === "locked") {
    return "locked";
  }

  // Si ya completamos la actividad, su estado será completed
  if (completedNodeIds.includes(node.id)) {
    return "completed";
  }

  // Comprobamos si completamos todas las actividades requeridas
  const hasCompletedRequirements = node.requiredNodeIds.every((requiredId) =>
    completedNodeIds.includes(requiredId),
  );

  return hasCompletedRequirements ? "available" : "locked";
}
