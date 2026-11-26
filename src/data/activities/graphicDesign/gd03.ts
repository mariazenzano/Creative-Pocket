import type { ActivityContent } from "../../../types/activity";

export const gd03: ActivityContent = {
  nodeId: "gd-03",
  type: "exercise",
  title: "Explora la tipografía",
  introduction:
    "Descubre cómo las letras, sus formas y sus características influyen en la personalidad y legibilidad de un diseño.",
  steps: [
    {
      id: "gd-03-step-01",
      type: "content",
      title: "¿Qué es la tipografía?",
      body: "La tipografía es el estudio y uso de las letras como recurso visual y comunicativo. En diseño gráfico permite organizar información, transmitir personalidad y facilitar la lectura. No se trata únicamente de elegir una letra bonita, sino de encontrar una que funcione para el mensaje y su contexto.",
      highlight:
        "La tipografía comunica tanto por lo que dice como por la forma en que lo dice.",
    },
    {
      id: "gd-03-step-02",
      type: "content",
      title: "Anatomía de las letras",
      body: "Las letras están construidas por diferentes partes. Algunas características son el asta, que forma el trazo principal; el ojo, que es el espacio interior de ciertas letras; la altura de x, que corresponde a la altura de las minúsculas sin ascendentes ni descendentes; y las ascendentes y descendentes, que sobresalen de esa altura.",
      highlight:
        "Conocer la anatomía tipográfica ayuda a reconocer y comparar diferentes familias de letras.",
    },
    {
      id: "gd-03-question-01",
      type: "question",
      prompt: "¿Qué característica describe la altura de x en una tipografía?",
      options: [
        {
          id: "gd-03-q1-option-01",
          label: "La altura de las letras mayúsculas",
          isCorrect: false,
        },
        {
          id: "gd-03-q1-option-02",
          label: "La altura de las minúsculas sin ascendentes ni descendentes",
          isCorrect: true,
        },
        {
          id: "gd-03-q1-option-03",
          label: "El grosor de los trazos verticales",
          isCorrect: false,
        },
      ],
      explanation:
        "La altura de x es la altura de las letras minúsculas que no tienen partes ascendentes ni descendentes, como la x, la a o la e.",
    },
    {
      id: "gd-03-step-03",
      type: "content",
      title: "Familias tipográficas",
      body: "Las tipografías pueden clasificarse en diferentes familias. Las serif tienen pequeños remates en los extremos de sus trazos. Las sans serif no presentan esos remates y suelen tener una apariencia más limpia. Las script imitan la escritura manual y las display están diseñadas para destacar en títulos o composiciones especiales.",
      highlight:
        "Cada familia tipográfica tiene características que pueden ayudar a construir una identidad visual.",
    },
    {
      id: "gd-03-question-02",
      type: "question",
      prompt:
        "Necesitas diseñar una interfaz digital con textos que deben leerse con facilidad. ¿Qué característica podría ser una buena elección?",
      options: [
        {
          id: "gd-03-q2-option-01",
          label: "Una tipografía decorativa con muchos adornos",
          isCorrect: false,
        },
        {
          id: "gd-03-q2-option-02",
          label: "Una tipografía legible y adecuada para pantalla",
          isCorrect: true,
        },
        {
          id: "gd-03-q2-option-03",
          label: "Una tipografía diferente para cada párrafo",
          isCorrect: false,
        },
      ],
      explanation:
        "En una interfaz, la legibilidad es fundamental. Una tipografía clara y adecuada para pantalla facilita la lectura y mejora la experiencia de uso.",
    },
    {
      id: "gd-03-step-04",
      type: "content",
      title: "Jerarquía tipográfica",
      body: "La jerarquía tipográfica organiza los textos según su importancia. Podemos establecer títulos, subtítulos y cuerpos de texto mediante diferencias de tamaño, peso, estilo y posición. Esto permite que el lector identifique rápidamente qué información debe observar primero.",
      highlight:
        "Una jerarquía clara guía la lectura y organiza la información.",
    },
    {
      id: "gd-03-question-03",
      type: "question",
      prompt:
        "En un cartel, el título debe destacar sobre la información secundaria. ¿Qué recurso ayuda a conseguirlo?",
      options: [
        {
          id: "gd-03-q3-option-01",
          label: "Utilizar el mismo tamaño en todos los textos",
          isCorrect: false,
        },
        {
          id: "gd-03-q3-option-02",
          label: "Aumentar el tamaño o peso del título",
          isCorrect: true,
        },
        {
          id: "gd-03-q3-option-03",
          label: "Eliminar todos los espacios entre textos",
          isCorrect: false,
        },
      ],
      explanation:
        "El tamaño y el peso tipográfico permiten establecer niveles de importancia y ayudan a dirigir la atención hacia el título.",
    },
    {
      id: "gd-03-step-05",
      type: "content",
      title: "Combinación de tipografías",
      body: "En un mismo diseño podemos combinar diferentes familias tipográficas para generar contraste y jerarquía. Una combinación efectiva suele utilizar una tipografía para títulos y otra para textos extensos. Es importante que ambas se complementen y no compitan por la atención.",
      highlight:
        "Combinar tipografías requiere equilibrio: cada una debe cumplir una función.",
    },
    {
      id: "gd-03-question-04",
      type: "question",
      prompt:
        "¿Qué deberías considerar al combinar dos tipografías en un mismo diseño?",
      options: [
        {
          id: "gd-03-q4-option-01",
          label: "Que ambas tengan exactamente la misma apariencia",
          isCorrect: false,
        },
        {
          id: "gd-03-q4-option-02",
          label: "Que sean diferentes y no tengan ninguna relación",
          isCorrect: false,
        },
        {
          id: "gd-03-q4-option-03",
          label: "Que se complementen y mantengan una jerarquía clara",
          isCorrect: true,
        },
      ],
      explanation:
        "Las tipografías pueden generar contraste, pero deben complementarse y mantener la coherencia visual del diseño.",
    },
  ],
};
