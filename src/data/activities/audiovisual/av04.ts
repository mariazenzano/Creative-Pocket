import type { ActivityContent } from "../../../types/activity";

export const av04: ActivityContent = {
  nodeId: "av-04",
  type: "challenge",
  title: "Edición y montaje",
  introduction:
    "Pon a prueba tus conocimientos sobre edición, ritmo, continuidad y sonido para construir una pieza audiovisual coherente.",

  steps: [
    {
      id: "av-04-step-01",
      type: "content",
      title: "¿Qué es la edición audiovisual?",
      body: "La edición audiovisual es el proceso de seleccionar, organizar y ajustar los materiales registrados durante una producción. Permite construir una secuencia, definir su duración, ordenar las acciones y comunicar una intención mediante imágenes y sonidos.",
      highlight:
        "Editar significa tomar decisiones para construir una experiencia audiovisual.",
    },
    {
      id: "av-04-step-02",
      type: "content",
      title: "La línea de tiempo",
      body: "La línea de tiempo es el espacio de trabajo donde se organizan los clips, pistas de audio, títulos y otros elementos según su duración y posición temporal. Generalmente permite trabajar con varias pistas para combinar imagen, sonido y recursos gráficos.",
      highlight:
        "La línea de tiempo permite organizar los elementos audiovisuales en el tiempo.",
    },
    {
      id: "av-04-question-01",
      type: "question",
      prompt:
        "En un programa de edición quieres colocar música debajo de un video. ¿Dónde puedes organizar ambos elementos?",
      options: [
        {
          id: "av-04-q1-option-01",
          label: "En la línea de tiempo, utilizando pistas",
          isCorrect: true,
        },
        {
          id: "av-04-q1-option-02",
          label: "Únicamente en el panel de exportación",
          isCorrect: false,
        },
        {
          id: "av-04-q1-option-03",
          label: "En el nombre del archivo",
          isCorrect: false,
        },
      ],
      explanation:
        "La línea de tiempo permite organizar clips de video y audio en pistas para construir la secuencia.",
    },
    {
      id: "av-04-step-03",
      type: "content",
      title: "Ritmo y transiciones",
      body: "El ritmo audiovisual depende de la duración de los planos, la frecuencia de los cortes y la relación entre imagen y sonido. Las transiciones conectan dos planos o escenas. Un corte directo cambia de una toma a otra, mientras que un fundido puede utilizarse para introducir o cerrar una secuencia.",
      highlight:
        "El ritmo determina cómo se percibe el tiempo y la energía de una producción.",
    },
    {
      id: "av-04-question-02",
      type: "question",
      prompt:
        "Un video necesita mostrar una secuencia dinámica y rápida. ¿Qué decisión puede ayudar a construir ese ritmo?",
      options: [
        {
          id: "av-04-q2-option-01",
          label: "Utilizar planos más cortos y cortes frecuentes",
          isCorrect: true,
        },
        {
          id: "av-04-q2-option-02",
          label: "Mantener una única imagen durante todo el video",
          isCorrect: false,
        },
        {
          id: "av-04-q2-option-03",
          label: "Eliminar todos los cambios entre planos",
          isCorrect: false,
        },
      ],
      explanation:
        "Los planos de menor duración y los cortes frecuentes pueden generar una sensación de rapidez y dinamismo.",
    },
    {
      id: "av-04-step-04",
      type: "content",
      title: "Continuidad audiovisual",
      body: "La continuidad busca que los cambios entre planos mantengan una relación lógica. Debemos prestar atención a la posición de los personajes, la dirección de sus movimientos, la iluminación y el sonido. Cuando estos aspectos cambian sin intención, el espectador puede percibir saltos o inconsistencias.",
      highlight:
        "La continuidad ayuda a que las escenas se perciban como parte de una misma acción.",
    },
    {
      id: "av-04-question-03",
      type: "question",
      prompt:
        "Un personaje aparece mirando hacia la derecha en un plano y, sin una razón narrativa, hacia la izquierda en el siguiente. ¿Qué podría afectar este cambio?",
      options: [
        {
          id: "av-04-q3-option-01",
          label: "La resolución del video",
          isCorrect: false,
        },
        {
          id: "av-04-q3-option-02",
          label: "La continuidad visual",
          isCorrect: true,
        },
        {
          id: "av-04-q3-option-03",
          label: "El formato del archivo de audio",
          isCorrect: false,
        },
      ],
      explanation:
        "Los cambios de dirección o posición sin una transición coherente pueden generar una ruptura de continuidad entre planos.",
    },
    {
      id: "av-04-step-05",
      type: "content",
      title: "Audio y exportación",
      body: "La edición también incluye ajustar niveles de audio, sincronizar sonidos y revisar que los diálogos sean comprensibles. Al finalizar, debemos elegir un formato de exportación y parámetros adecuados, como resolución, frecuencia de cuadros y calidad, según el medio donde se compartirá el video.",
      highlight:
        "Una buena edición también necesita una revisión técnica antes de exportarse.",
    },
    {
      id: "av-04-question-04",
      type: "question",
      prompt: "Antes de exportar un video, ¿qué deberías comprobar?",
      options: [
        {
          id: "av-04-q4-option-01",
          label: "Que solo exista una pista en la línea de tiempo",
          isCorrect: false,
        },
        {
          id: "av-04-q4-option-02",
          label: "Que el video tenga el mayor tamaño posible",
          isCorrect: false,
        },
        {
          id: "av-04-q4-option-03",
          label:
            "Que imagen, sonido, duración y parámetros de exportación sean correctos",
          isCorrect: true,
        },
      ],
      explanation:
        "Una revisión final permite detectar errores de sincronización, niveles de sonido, cortes y configuración de exportación.",
    },
  ],
};
