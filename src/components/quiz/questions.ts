export type QuizAnswer = {
  label: string;
  isCorrect: boolean;
};

export type QuizQuestion = {
  id: string;
  title: string;
  prompt: string;
  art: "colorWheel" | "contrast" | "typography" | "hierarchy";
  layout: "grid" | "list";
  answers: QuizAnswer[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "color-wheel",
    title: "Teoría del color",
    prompt: "¿Cuál es el color complementario directo del amarillo?",
    art: "colorWheel",
    layout: "grid",
    answers: [
      { label: "Azul", isCorrect: false },
      { label: "Morado / Violeta", isCorrect: true },
      { label: "Verde", isCorrect: false },
      { label: "Rojo", isCorrect: false },
    ],
  },
  {
    id: "contrast",
    title: "Contraste",
    prompt: "¿Qué combinación tiene peor legibilidad por bajo contraste?",
    art: "contrast",
    layout: "list",
    answers: [
      { label: "Opción A (Verde sobre blanco)", isCorrect: false },
      { label: "Opción B (Blanco sobre amarillo)", isCorrect: true },
      { label: "Ambas tienen excelente contraste", isCorrect: false },
    ],
  },
  {
    id: "typography",
    title: "Tipografía",
    prompt: "¿A qué clasificación pertenece esta familia tipográfica?",
    art: "typography",
    layout: "grid",
    answers: [
      { label: "Serif (Romana)", isCorrect: true },
      { label: "Sans-Serif", isCorrect: false },
      { label: "Slab Serif", isCorrect: false },
      { label: "Script", isCorrect: false },
    ],
  },
  {
    id: "hierarchy",
    title: "Jerarquía Visual",
    prompt: "¿Cuál de los bloques representa una correcta jerarquía tipográfica?",
    art: "hierarchy",
    layout: "list",
    answers: [
      { label: "El bloque superior (A)", isCorrect: true },
      { label: "El bloque inferior (B)", isCorrect: false },
      { label: "Ambos bloques son incorrectos", isCorrect: false },
    ],
  },
];
