import type { ActivityContent } from "../../../types/activity";

export const av02: ActivityContent = {
  nodeId: "av-02",
  type: "exercise",
  title: "Fundamentos de fotografía",
  introduction:
    "Aprende cómo la luz, la exposición, el encuadre y la composición permiten construir imágenes con intención.",

  steps: [
    {
      id: "av-02-step-01",
      type: "content",
      title: "La fotografía como lenguaje visual",
      body: "La fotografía es una forma de comunicación visual que permite registrar, interpretar y transmitir momentos, ideas y emociones mediante imágenes. El fotógrafo toma decisiones sobre la luz, el encuadre, la composición y el momento de captura para construir una imagen con intención.",
      highlight:
        "Fotografiar no es solamente registrar lo que vemos: también es decidir cómo queremos mostrarlo.",
    },
    {
      id: "av-02-step-02",
      type: "content",
      title: "El triángulo de exposición",
      body: "La exposición determina cuánta luz recibe el sensor de la cámara. Se controla mediante tres elementos: apertura del diafragma, velocidad de obturación e ISO. La apertura regula la entrada de luz y afecta la profundidad de campo; la velocidad controla el tiempo de captura y el movimiento; y el ISO modifica la sensibilidad del sensor, influyendo también en el ruido de la imagen.",
      highlight:
        "Apertura, velocidad e ISO trabajan juntos para controlar la exposición.",
    },
    {
      id: "av-02-question-01",
      type: "question",
      prompt:
        "¿Qué elemento del triángulo de exposición controla principalmente el tiempo durante el cual la cámara registra la luz?",
      options: [
        {
          id: "av-02-q1-option-01",
          label: "La velocidad de obturación",
          isCorrect: true,
        },
        {
          id: "av-02-q1-option-02",
          label: "La apertura del diafragma",
          isCorrect: false,
        },
        {
          id: "av-02-q1-option-03",
          label: "El balance de blancos",
          isCorrect: false,
        },
      ],
      explanation:
        "La velocidad de obturación determina cuánto tiempo permanece abierto el obturador durante la captura de una fotografía.",
    },
    {
      id: "av-02-step-03",
      type: "content",
      title: "Enfoque y profundidad de campo",
      body: "El enfoque determina qué parte de la imagen aparece nítida. La profundidad de campo es la zona que se percibe enfocada delante y detrás del punto de enfoque. Puede ser reducida para destacar un sujeto sobre un fondo desenfocado o amplia para mantener más elementos nítidos.",
      highlight:
        "El enfoque permite decidir qué elemento recibe mayor atención visual.",
    },
    {
      id: "av-02-question-02",
      type: "question",
      prompt:
        "Quieres fotografiar un objeto y conseguir que el fondo aparezca desenfocado. ¿Qué resultado buscas?",
      options: [
        {
          id: "av-02-q2-option-01",
          label: "Mayor profundidad de campo",
          isCorrect: false,
        },
        {
          id: "av-02-q2-option-02",
          label: "Menor profundidad de campo",
          isCorrect: true,
        },
        {
          id: "av-02-q2-option-03",
          label: "Mayor saturación",
          isCorrect: false,
        },
      ],
      explanation:
        "Una profundidad de campo reducida permite mantener enfocado al sujeto mientras el fondo aparece más desenfocado.",
    },
    {
      id: "av-02-step-04",
      type: "content",
      title: "Encuadre y composición",
      body: "El encuadre define qué elementos aparecen dentro de una fotografía y cómo se distribuyen. La regla de los tercios divide la imagen en nueve partes mediante dos líneas horizontales y dos verticales. Ubicar elementos cerca de sus intersecciones puede ayudar a crear composiciones equilibradas y dinámicas.",
      highlight:
        "El encuadre determina qué mostramos y cómo organizamos lo que aparece en la imagen.",
    },
    {
      id: "av-02-question-03",
      type: "question",
      prompt: "¿En cuántas partes divide la imagen la regla de los tercios?",
      options: [
        {
          id: "av-02-q3-option-01",
          label: "Cuatro partes",
          isCorrect: false,
        },
        {
          id: "av-02-q3-option-02",
          label: "Seis partes",
          isCorrect: false,
        },
        {
          id: "av-02-q3-option-03",
          label: "Nueve partes",
          isCorrect: true,
        },
      ],
      explanation:
        "La regla de los tercios divide la imagen en nueve áreas iguales mediante dos líneas horizontales y dos verticales.",
    },
    {
      id: "av-02-step-05",
      type: "content",
      title: "La luz y su dirección",
      body: "La iluminación modifica la apariencia de los objetos y las personas. La luz frontal reduce algunas sombras; la luz lateral permite destacar volúmenes y texturas; y la luz posterior puede crear siluetas o separar al sujeto del fondo. La calidad de la luz también influye en la dureza de las sombras.",
      highlight:
        "La dirección y la calidad de la luz transforman la atmósfera de una fotografía.",
    },
    {
      id: "av-02-question-04",
      type: "question",
      prompt:
        "Quieres destacar la textura de un objeto mediante sombras y relieves. ¿Qué iluminación puede ayudarte?",
      options: [
        {
          id: "av-02-q4-option-01",
          label: "Luz lateral",
          isCorrect: true,
        },
        {
          id: "av-02-q4-option-02",
          label: "Luz frontal completamente uniforme",
          isCorrect: false,
        },
        {
          id: "av-02-q4-option-03",
          label: "Ausencia total de luz",
          isCorrect: false,
        },
      ],
      explanation:
        "La luz lateral produce sombras que permiten apreciar mejor los volúmenes y las texturas de una superficie.",
    },
  ],
};
