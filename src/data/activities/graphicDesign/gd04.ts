import type { ActivityContent } from "../../../types/activity";

export const gd04: ActivityContent = {
  nodeId: "gd-04",
  type: "challenge",
  title: "Composición visual",
  introduction:
    "Pon a prueba tu criterio visual. Aprende a organizar elementos, equilibrar espacios y construir composiciones que comuniquen con claridad.",
  steps: [
    {
      id: "gd-04-step-01",
      type: "content",
      title: "El arte de organizar elementos",
      body: "La composición visual es la manera en que distribuimos y relacionamos los elementos dentro de un espacio. En diseño gráfico permite establecer un recorrido visual, organizar la información y dirigir la atención hacia los elementos más importantes.",
      highlight:
        "Componer significa tomar decisiones sobre dónde y cómo aparece cada elemento.",
    },
    {
      id: "gd-04-step-02",
      type: "content",
      title: "Equilibrio visual",
      body: "El equilibrio visual se consigue distribuyendo el peso de los elementos dentro de una composición. Puede ser simétrico, cuando los elementos se organizan de manera similar a ambos lados de un eje, o asimétrico, cuando se utilizan elementos diferentes que mantienen una sensación de estabilidad.",
      highlight:
        "Una composición equilibrada no siempre necesita ser simétrica.",
    },
    {
      id: "gd-04-question-01",
      type: "question",
      prompt:
        "Un cartel tiene una imagen grande en el lado izquierdo y varios textos pequeños en el derecho. ¿Qué puede ayudar a equilibrar la composición?",
      options: [
        {
          id: "gd-04-q1-option-01",
          label:
            "Distribuir los elementos considerando su tamaño y peso visual",
          isCorrect: true,
        },
        {
          id: "gd-04-q1-option-02",
          label: "Colocar todos los elementos en una sola esquina",
          isCorrect: false,
        },
        {
          id: "gd-04-q1-option-03",
          label: "Eliminar todos los espacios vacíos",
          isCorrect: false,
        },
      ],
      explanation:
        "El equilibrio asimétrico se consigue distribuyendo elementos de distinto tamaño y peso visual para mantener una composición estable.",
    },
    {
      id: "gd-04-step-03",
      type: "content",
      title: "Contraste y jerarquía",
      body: "El contraste permite diferenciar elementos mediante variaciones de tamaño, color, forma, textura o grosor. La jerarquía establece un orden de importancia para que el espectador identifique primero la información principal y después los detalles secundarios.",
      highlight:
        "El contraste diferencia; la jerarquía organiza la importancia.",
    },
    {
      id: "gd-04-question-02",
      type: "question",
      prompt:
        "En una composición todos los elementos tienen el mismo tamaño, color y peso. ¿Qué dificultad podría aparecer?",
      options: [
        {
          id: "gd-04-q2-option-01",
          label: "Una jerarquía visual demasiado evidente",
          isCorrect: false,
        },
        {
          id: "gd-04-q2-option-02",
          label: "Dificultad para identificar qué elemento es más importante",
          isCorrect: true,
        },
        {
          id: "gd-04-q2-option-03",
          label: "Un exceso de contraste entre los elementos",
          isCorrect: false,
        },
      ],
      explanation:
        "Cuando todos los elementos tienen la misma importancia visual, resulta más difícil reconocer cuál debe captar primero nuestra atención.",
    },
    {
      id: "gd-04-step-04",
      type: "content",
      title: "Espacio negativo",
      body: "El espacio negativo es el área libre que rodea o separa los elementos de una composición. No significa que sea un espacio desperdiciado: permite respirar visualmente, mejorar la legibilidad y destacar los elementos importantes.",
      highlight: "El espacio vacío también forma parte del diseño.",
    },
    {
      id: "gd-04-question-03",
      type: "question",
      prompt:
        "Un diseño tiene demasiados elementos amontonados. ¿Qué decisión podría mejorar su claridad?",
      options: [
        {
          id: "gd-04-q3-option-01",
          label: "Añadir más elementos decorativos",
          isCorrect: false,
        },
        {
          id: "gd-04-q3-option-02",
          label: "Reducir los márgenes y eliminar todos los espacios",
          isCorrect: false,
        },
        {
          id: "gd-04-q3-option-03",
          label:
            "Reorganizar los elementos y utilizar mejor el espacio negativo",
          isCorrect: true,
        },
      ],
      explanation:
        "El espacio negativo ayuda a separar elementos, mejorar la lectura y dar protagonismo a la información principal.",
    },
    {
      id: "gd-04-step-05",
      type: "content",
      title: "Recorrido visual",
      body: "El recorrido visual es el camino que sigue nuestra mirada al observar una composición. Podemos orientarlo mediante la ubicación de los elementos, las líneas, el contraste, el tamaño y la dirección de las imágenes. Una buena organización facilita que el espectador encuentre la información en el orden previsto.",
      highlight:
        "Una composición efectiva guía la mirada sin confundir al espectador.",
    },
    {
      id: "gd-04-question-04",
      type: "question",
      prompt:
        "Diseñas un anuncio y quieres que el espectador vea primero el título, después la imagen y finalmente los detalles. ¿Qué debes construir?",
      options: [
        {
          id: "gd-04-q4-option-01",
          label: "Una jerarquía y un recorrido visual claros",
          isCorrect: true,
        },
        {
          id: "gd-04-q4-option-02",
          label: "Una distribución aleatoria de los elementos",
          isCorrect: false,
        },
        {
          id: "gd-04-q4-option-03",
          label: "Una composición donde todos los textos destaquen igual",
          isCorrect: false,
        },
      ],
      explanation:
        "La jerarquía visual y la organización de los elementos permiten orientar la mirada y establecer el orden de lectura.",
    },
  ],
};
