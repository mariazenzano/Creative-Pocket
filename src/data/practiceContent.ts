import type { PracticeContent } from "../types/practice";

export const practiceContents: PracticeContent[] = [
  {
    id: "daily-challenge",
    title: "Composición en equilibrio",
    description:
      "Pon a prueba tus conocimientos sobre composición, jerarquía visual y equilibrio.",
    duration: 15,
    baseXP: 10,
    bonusXPPerCorrectAnswer: 5,
    questions: [
      {
        id: "composition-01",
        prompt: "¿Qué busca conseguir el equilibrio visual en una composición?",
        options: [
          {
            id: "a",
            label: "Distribuir los elementos de forma armoniosa",
            isCorrect: true,
            explanation:
              "¡Correcto! El equilibrio visual permite distribuir los elementos para que la composición se perciba estable y organizada.",
          },
          {
            id: "b",
            label: "Colocar todos los elementos en el centro",
            isCorrect: false,
            explanation:
              "El equilibrio no exige centrar todos los elementos. Existen diferentes formas de distribuir el peso visual.",
          },
          {
            id: "c",
            label: "Utilizar únicamente colores neutros",
            isCorrect: false,
            explanation:
              "El color influye en el peso visual, pero el equilibrio no depende exclusivamente de los colores neutros.",
          },
          {
            id: "d",
            label: "Eliminar los espacios vacíos",
            isCorrect: false,
            explanation:
              "El espacio vacío también forma parte de la composición y ayuda a organizar los elementos.",
          },
        ],
      },
      {
        id: "composition-02",
        prompt: "¿Qué es la jerarquía visual?",
        options: [
          {
            id: "a",
            label: "El uso de una sola tipografía",
            isCorrect: false,
            explanation:
              "La tipografía puede ayudar a crear jerarquía, pero no es su definición.",
          },
          {
            id: "b",
            label: "La organización de elementos según su importancia",
            isCorrect: true,
            explanation:
              "¡Exacto! La jerarquía visual orienta la mirada y permite identificar qué información es más importante.",
          },
          {
            id: "c",
            label: "La repetición de todos los elementos",
            isCorrect: false,
            explanation:
              "La repetición puede generar consistencia, pero no define la jerarquía visual.",
          },
          {
            id: "d",
            label: "El uso exclusivo de imágenes",
            isCorrect: false,
            explanation:
              "La jerarquía puede construirse con texto, imágenes, color, tamaño y posición.",
          },
        ],
      },
      {
        id: "composition-03",
        prompt: "¿Qué recurso ayuda a destacar un elemento importante?",
        options: [
          {
            id: "a",
            label: "Usar el mismo tamaño para todo",
            isCorrect: false,
            explanation:
              "Cuando todos los elementos tienen el mismo tamaño, puede ser más difícil identificar prioridades.",
          },
          {
            id: "b",
            label: "Reducir el contraste de todos los elementos",
            isCorrect: false,
            explanation:
              "Reducir todo el contraste puede disminuir la claridad y hacer que los elementos pierdan protagonismo.",
          },
          {
            id: "c",
            label: "Crear contraste mediante tamaño o color",
            isCorrect: true,
            explanation:
              "¡Muy bien! El contraste permite diferenciar elementos y dirigir la atención hacia los más relevantes.",
          },
          {
            id: "d",
            label: "Eliminar la alineación",
            isCorrect: false,
            explanation:
              "La alineación ayuda a organizar la composición; eliminarla no garantiza destacar un elemento.",
          },
        ],
      },
      {
        id: "composition-04",
        prompt: "¿Para qué sirve el espacio negativo en un diseño?",
        options: [
          {
            id: "a",
            label: "Para rellenar todas las áreas vacías",
            isCorrect: false,
            explanation:
              "El espacio negativo no necesita rellenarse. Su función es permitir que los elementos respiren.",
          },
          {
            id: "b",
            label: "Para separar elementos y mejorar la legibilidad",
            isCorrect: true,
            explanation:
              "¡Correcto! El espacio negativo organiza la información, mejora la legibilidad y ayuda a destacar elementos.",
          },
          {
            id: "c",
            label: "Para ocultar información importante",
            isCorrect: false,
            explanation:
              "El espacio negativo debe mejorar la comunicación, no esconder información necesaria.",
          },
          {
            id: "d",
            label: "Para sustituir la jerarquía visual",
            isCorrect: false,
            explanation:
              "El espacio negativo complementa la jerarquía visual, pero no la sustituye.",
          },
        ],
      },
    ],
  },
];
