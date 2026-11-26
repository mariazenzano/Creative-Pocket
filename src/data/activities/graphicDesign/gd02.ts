import type { ActivityContent } from "../../../types/activity";

export const gd02: ActivityContent = {
  nodeId: "gd-02",
  type: "exercise",
  title: "El mundo del color",
  introduction:
    "Explora cómo funcionan los colores, qué sensaciones transmiten y cómo combinarlos para crear composiciones visuales equilibradas.",
  steps: [
    {
      id: "gd-02-step-01",
      type: "content",
      title: "El color como herramienta de comunicación",
      body: "El color es uno de los recursos más importantes del diseño gráfico. Nos ayuda a destacar información, organizar elementos y transmitir sensaciones. Su significado puede cambiar según el contexto cultural y la forma en que se combina con otros colores.",
      highlight:
        "El color no solo decora: también comunica, diferencia y dirige la atención.",
    },
    {
      id: "gd-02-step-02",
      type: "content",
      title: "El círculo cromático",
      body: "El círculo cromático organiza los colores según sus relaciones. Los colores primarios tradicionales en el modelo artístico son rojo, amarillo y azul. Al mezclarlos obtenemos los secundarios: naranja, verde y violeta. Al combinar un primario con un secundario cercano aparecen los terciarios.",
      highlight:
        "El círculo cromático nos permite comprender cómo se relacionan los colores.",
    },
    {
      id: "gd-02-question-01",
      type: "question",
      prompt:
        "¿Cuáles son los tres colores primarios del modelo artístico tradicional RYB?",
      options: [
        {
          id: "gd-02-q1-option-01",
          label: "Rojo, amarillo y azul",
          isCorrect: true,
        },
        {
          id: "gd-02-q1-option-02",
          label: "Verde, naranja y violeta",
          isCorrect: false,
        },
        {
          id: "gd-02-q1-option-03",
          label: "Cian, magenta y negro",
          isCorrect: false,
        },
      ],
      explanation:
        "En el modelo tradicional RYB utilizado en las artes plásticas, los colores primarios son rojo, amarillo y azul. Los colores secundarios se obtienen al mezclar estos colores.",
    },
    {
      id: "gd-02-step-03",
      type: "content",
      title: "Temperatura del color",
      body: "Los colores también pueden clasificarse según su temperatura visual. Los cálidos, como rojos, naranjas y amarillos, suelen asociarse con energía, cercanía y dinamismo. Los fríos, como azules, verdes y violetas, pueden transmitir calma, tranquilidad o distancia.",
      highlight:
        "La temperatura del color ayuda a construir la atmósfera de una composición.",
    },
    {
      id: "gd-02-question-02",
      type: "question",
      prompt:
        "Estás diseñando un cartel para una actividad llena de energía y movimiento. ¿Qué grupo de colores podría ayudarte a transmitir esa sensación?",
      options: [
        {
          id: "gd-02-q2-option-01",
          label: "Azules y violetas suaves",
          isCorrect: false,
        },
        {
          id: "gd-02-q2-option-02",
          label: "Rojos, naranjas y amarillos",
          isCorrect: true,
        },
        {
          id: "gd-02-q2-option-03",
          label: "Grises y negros exclusivamente",
          isCorrect: false,
        },
      ],
      explanation:
        "Los rojos, naranjas y amarillos suelen transmitir energía, actividad y dinamismo. Son una opción adecuada cuando buscamos una composición visual intensa.",
    },
    {
      id: "gd-02-step-04",
      type: "content",
      title: "Armonías cromáticas",
      body: "Una armonía cromática es una combinación de colores que genera una relación visual. La armonía análoga utiliza colores cercanos en el círculo cromático. La complementaria combina colores opuestos, creando contraste. La monocromática utiliza variaciones de un mismo color mediante cambios de luminosidad y saturación.",
      highlight:
        "Combinar colores no es elegirlos al azar: es crear relaciones visuales con intención.",
    },
    {
      id: "gd-02-question-03",
      type: "question",
      prompt:
        "¿Qué caracteriza principalmente a una combinación de colores complementarios?",
      options: [
        {
          id: "gd-02-q3-option-01",
          label: "Utiliza diferentes tonos de un mismo color",
          isCorrect: false,
        },
        {
          id: "gd-02-q3-option-02",
          label: "Combina colores que están uno junto al otro",
          isCorrect: false,
        },
        {
          id: "gd-02-q3-option-03",
          label: "Combina colores opuestos en el círculo cromático",
          isCorrect: true,
        },
      ],
      explanation:
        "Los colores complementarios se encuentran en posiciones opuestas del círculo cromático. Su combinación genera un contraste visual marcado.",
    },
    {
      id: "gd-02-step-05",
      type: "content",
      title: "El color en una composición",
      body: "Al diseñar, debemos considerar la función de cada color. Podemos utilizar uno para destacar el elemento principal, otro para organizar la información y tonos neutros para equilibrar el conjunto. También es importante mantener suficiente contraste para facilitar la lectura.",
      highlight:
        "Una buena paleta de colores tiene intención, equilibrio y legibilidad.",
    },
    {
      id: "gd-02-question-04",
      type: "question",
      prompt:
        "Una aplicación utiliza texto amarillo sobre un fondo blanco. ¿Qué problema podría presentar esta combinación?",
      options: [
        {
          id: "gd-02-q4-option-01",
          label: "Un contraste insuficiente que dificulta la lectura",
          isCorrect: true,
        },
        {
          id: "gd-02-q4-option-02",
          label: "Demasiada profundidad visual",
          isCorrect: false,
        },
        {
          id: "gd-02-q4-option-03",
          label: "Una armonía complementaria",
          isCorrect: false,
        },
      ],
      explanation:
        "El amarillo claro sobre blanco tiene poco contraste, por lo que el texto puede resultar difícil de leer. La elección de colores también debe considerar la accesibilidad.",
    },
  ],
};
