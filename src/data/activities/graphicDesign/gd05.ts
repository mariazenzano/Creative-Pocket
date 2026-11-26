import type { ActivityContent } from "../../../types/activity";

export const gd05: ActivityContent = {
  nodeId: "gd-05",
  type: "project",
  title: "Diseña tu primer cartel",
  introduction:
    "Llegó el momento de aplicar lo aprendido. Planifica un cartel que comunique un mensaje claro mediante el color, la tipografía y la composición visual.",
  steps: [
    {
      id: "gd-05-step-01",
      type: "content",
      title: "El reto: comunicar una idea",
      body: "Imagina que debes crear un cartel para promocionar un evento creativo dirigido a estudiantes universitarios. Tu objetivo será captar su atención, comunicar la información principal y generar interés por participar. Antes de diseñar, necesitas comprender qué estás comunicando y a quién.",
      highlight:
        "Todo proyecto de diseño comienza con un objetivo de comunicación.",
    },
    {
      id: "gd-05-question-01",
      type: "question",
      prompt: "Antes de comenzar tu cartel, ¿qué deberías definir?",
      options: [
        {
          id: "gd-05-q1-option-01",
          label: "El mensaje principal y el público al que va dirigido",
          isCorrect: true,
        },
        {
          id: "gd-05-q1-option-02",
          label: "La cantidad de elementos decorativos",
          isCorrect: false,
        },
        {
          id: "gd-05-q1-option-03",
          label: "Una tipografía diferente para cada palabra",
          isCorrect: false,
        },
      ],
      explanation:
        "Definir el mensaje y el público permite tomar decisiones visuales coherentes con el propósito del cartel.",
    },
    {
      id: "gd-05-step-02",
      type: "content",
      title: "Construye una dirección visual",
      body: "Una vez definido el objetivo, establece una dirección visual. Elige una paleta cromática que acompañe el mensaje, selecciona tipografías legibles y determina qué sensación quieres transmitir. Los colores y las letras deben trabajar juntos para construir una identidad coherente.",
      highlight:
        "Cada recurso visual debe tener una razón para estar en tu composición.",
    },
    {
      id: "gd-05-question-02",
      type: "question",
      prompt:
        "Tu cartel promociona un festival creativo y juvenil. ¿Qué criterio deberías seguir al elegir los colores?",
      options: [
        {
          id: "gd-05-q2-option-01",
          label:
            "Elegir colores al azar para utilizar la mayor cantidad posible",
          isCorrect: false,
        },
        {
          id: "gd-05-q2-option-02",
          label:
            "Seleccionar una paleta que refuerce el mensaje y mantenga buena legibilidad",
          isCorrect: true,
        },
        {
          id: "gd-05-q2-option-03",
          label: "Utilizar únicamente colores que estén de moda",
          isCorrect: false,
        },
      ],
      explanation:
        "La paleta debe responder al concepto del proyecto y permitir que la información se comprenda con facilidad.",
    },
    {
      id: "gd-05-step-03",
      type: "content",
      title: "Organiza la información",
      body: "Un cartel necesita una jerarquía clara. El título o nombre del evento debe destacar; la fecha, el lugar y los datos importantes deben ser fáciles de encontrar. Puedes utilizar diferencias de tamaño, peso tipográfico, posición y espacio negativo para organizar la lectura.",
      highlight:
        "El espectador debe comprender rápidamente qué anuncia tu cartel y dónde encontrar los detalles.",
    },
    {
      id: "gd-05-question-03",
      type: "question",
      prompt:
        "¿Cuál sería una organización adecuada para la información de tu cartel?",
      options: [
        {
          id: "gd-05-q3-option-01",
          label:
            "Destacar el título y organizar los datos secundarios en otro nivel",
          isCorrect: true,
        },
        {
          id: "gd-05-q3-option-02",
          label: "Colocar todos los textos con el mismo tamaño",
          isCorrect: false,
        },
        {
          id: "gd-05-q3-option-03",
          label: "Ocultar la fecha y el lugar entre elementos decorativos",
          isCorrect: false,
        },
      ],
      explanation:
        "Una jerarquía tipográfica permite identificar primero la información principal y después los detalles complementarios.",
    },
    {
      id: "gd-05-step-04",
      type: "content",
      title: "Equilibra tu composición",
      body: "Distribuye los elementos dentro del formato del cartel. Considera el equilibrio visual, los márgenes, el espacio negativo y el recorrido de la mirada. Evita saturar el diseño y comprueba que cada elemento tenga suficiente espacio para cumplir su función.",
      highlight:
        "Una composición bien organizada permite que el mensaje destaque sin competir con elementos innecesarios.",
    },
    {
      id: "gd-05-question-04",
      type: "question",
      prompt:
        "Al revisar tu cartel notas que la información está amontonada y cuesta leerla. ¿Qué deberías hacer?",
      options: [
        {
          id: "gd-05-q4-option-01",
          label: "Añadir más textos y recursos decorativos",
          isCorrect: false,
        },
        {
          id: "gd-05-q4-option-02",
          label: "Reducir todos los elementos hasta que sean muy pequeños",
          isCorrect: false,
        },
        {
          id: "gd-05-q4-option-03",
          label:
            "Reorganizar la información, mejorar los espacios y revisar la jerarquía",
          isCorrect: true,
        },
      ],
      explanation:
        "Reorganizar los elementos y recuperar el espacio negativo ayuda a mejorar la legibilidad y el equilibrio visual.",
    },
    {
      id: "gd-05-step-05",
      type: "content",
      title: "Tu primer proyecto de diseño",
      body: "Ya tienes los criterios necesarios para desarrollar tu cartel. Recuerda revisar el mensaje, la paleta cromática, las tipografías, la jerarquía y la composición. Un buen proyecto no depende de utilizar muchos recursos, sino de tomar decisiones visuales que respondan a un propósito.",
      highlight:
        "Diseñar es transformar una idea en un mensaje visual con intención.",
    },
  ],
};
