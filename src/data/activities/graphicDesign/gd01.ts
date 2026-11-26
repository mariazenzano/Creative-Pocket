import type { ActivityContent } from "../../../types/activity";

export const gd01: ActivityContent = {
  nodeId: "gd-01",
  type: "lesson",
  title: "Fundamentos del diseño",
  introduction:
    "Descubre cómo los elementos visuales trabajan juntos para comunicar ideas y transmitir mensajes.",

  steps: [
    {
      id: "gd-01-step-01",
      type: "content",
      title: "¿Qué es el diseño gráfico?",
      body: "El diseño gráfico es una disciplina que utiliza elementos visuales para comunicar ideas, mensajes e información. Está presente en carteles, revistas, aplicaciones, marcas y muchos otros medios.",
      highlight:
        "El diseño no consiste solamente en hacer algo bonito: busca comunicar un mensaje.",
    },
    {
      id: "gd-01-step-02",
      type: "content",
      title: "Los elementos visuales",
      body: "Para construir una composición podemos utilizar puntos, líneas, formas, colores, imágenes y tipografías. Cada elemento cumple una función y aporta información visual.",
      highlight:
        "Los elementos visuales son las herramientas que utilizamos para diseñar.",
    },
    {
      id: "gd-01-question-01",
      type: "question",
      prompt: "¿Cuál es el principal objetivo del diseño gráfico?",
      options: [
        {
          id: "gd-01-q1-option-01",
          label: "Decorar espacios sin transmitir información",
          isCorrect: false,
        },
        {
          id: "gd-01-q1-option-02",
          label: "Comunicar ideas mediante elementos visuales",
          isCorrect: true,
        },
        {
          id: "gd-01-q1-option-03",
          label: "Utilizar únicamente colores llamativos",
          isCorrect: false,
        },
      ],
      explanation:
        "El diseño gráfico utiliza recursos visuales para transmitir ideas, mensajes e información de manera clara.",
    },
    {
      id: "gd-01-question-02",
      type: "question",
      prompt:
        "¿Cuál de estas opciones reúne elementos que forman parte de una composición visual?",
      options: [
        {
          id: "gd-01-q2-option-01",
          label: "Puntos, líneas, formas y tipografías",
          isCorrect: true,
        },
        {
          id: "gd-01-q2-option-02",
          label: "Únicamente fotografías y videos",
          isCorrect: false,
        },
        {
          id: "gd-01-q2-option-03",
          label: "Solamente textos y números",
          isCorrect: false,
        },
      ],
      explanation:
        "Una composición visual puede combinar puntos, líneas, formas, colores, imágenes y tipografías para construir un mensaje.",
    },
    {
      id: "gd-01-step-03",
      type: "content",
      title: "Diseñar es tomar decisiones",
      body: "Cada decisión visual influye en cómo interpretamos un mensaje. La elección de colores, tamaños, formas y tipografías puede cambiar la manera en que una persona entiende una composición.",
      highlight:
        "Un buen diseño combina creatividad, intención y comunicación.",
    },
    {
      id: "gd-01-question-03",
      type: "question",
      prompt:
        "Debes diseñar un cartel para anunciar un evento. ¿Qué deberías definir primero?",
      options: [
        {
          id: "gd-01-q3-option-01",
          label: "Utilizar todos los colores disponibles",
          isCorrect: false,
        },
        {
          id: "gd-01-q3-option-02",
          label: "Elegir una tipografía decorativa",
          isCorrect: false,
        },
        {
          id: "gd-01-q3-option-03",
          label: "Definir el mensaje y a quién va dirigido",
          isCorrect: true,
        },
      ],
      explanation:
        "Antes de elegir los recursos visuales, debemos conocer qué queremos comunicar y quién recibirá el mensaje. Esto orienta todas las decisiones de diseño.",
    },
  ],
};
