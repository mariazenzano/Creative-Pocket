import type { MapNodeType } from "./map";

// Respuestas disponibles
export type ActivityOption = {
  id: string;
  label: string;
  isCorrect: boolean;
};

// Sección informativa
export type ContentStep = {
  id: string;
  type: "content";
  title: string;
  body: string;
  highlight?: string;
};

// Pregunta
export type QuestionStep = {
  id: string;
  type: "question";
  prompt: string;
  options: ActivityOption[];
  explanation: string;
};

// Tipos
export type ActivityStep = ContentStep | QuestionStep;

// Contenido educativo
export type ActivityContent = {
  nodeId: string;
  type: MapNodeType;
  title: string;
  introduction: string;
  steps: ActivityStep[];
};
