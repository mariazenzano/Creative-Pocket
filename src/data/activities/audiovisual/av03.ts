import type { ActivityContent } from "../../../types/activity";

export const av03: ActivityContent = {
  nodeId: "av-03",
  type: "exercise",
  title: "Narrativa y guion",
  introduction:
    "Descubre cómo transformar una idea en una historia audiovisual mediante personajes, conflictos, estructura y recursos narrativos.",

  steps: [
    {
      id: "av-03-step-01",
      type: "content",
      title: "Contar historias con imágenes",
      body: "La narrativa audiovisual organiza imágenes, sonidos y acciones para contar una historia. Puede presentar hechos reales o ficticios y busca generar una experiencia en el espectador. Para construirla necesitamos una idea, personajes, acciones y una secuencia de acontecimientos.",
      highlight:
        "Una historia audiovisual necesita una idea y una forma de desarrollarla.",
    },
    {
      id: "av-03-step-02",
      type: "content",
      title: "Personajes y conflicto",
      body: "Los personajes participan en los acontecimientos de una historia. El protagonista suele ser quien impulsa la acción, mientras que otros personajes pueden acompañarlo o representar obstáculos. El conflicto es el problema o desafío que genera tensión y permite que la historia avance.",
      highlight:
        "El conflicto proporciona una razón para que la historia se desarrolle.",
    },
    {
      id: "av-03-question-01",
      type: "question",
      prompt:
        "¿Qué función cumple principalmente el conflicto en una historia?",
      options: [
        {
          id: "av-03-q1-option-01",
          label: "Generar un problema o desafío que impulse la acción",
          isCorrect: true,
        },
        {
          id: "av-03-q1-option-02",
          label: "Describir únicamente el escenario",
          isCorrect: false,
        },
        {
          id: "av-03-q1-option-03",
          label: "Eliminar la participación de los personajes",
          isCorrect: false,
        },
      ],
      explanation:
        "El conflicto introduce un desafío que impulsa las decisiones de los personajes y permite que la historia avance.",
    },
    {
      id: "av-03-step-03",
      type: "content",
      title: "La estructura narrativa",
      body: "Una estructura narrativa tradicional se organiza en tres momentos: planteamiento, desarrollo y desenlace. El planteamiento presenta a los personajes y la situación inicial; el desarrollo muestra cómo evoluciona el conflicto; y el desenlace presenta la resolución o conclusión de la historia.",
      highlight:
        "Planteamiento, desarrollo y desenlace organizan el recorrido de una historia.",
    },
    {
      id: "av-03-question-02",
      type: "question",
      prompt:
        "En una historia, el protagonista descubre un problema que debe resolver. ¿En qué parte de la estructura suele desarrollarse esta situación?",
      options: [
        {
          id: "av-03-q2-option-01",
          label: "Únicamente en el desenlace",
          isCorrect: false,
        },
        {
          id: "av-03-q2-option-02",
          label: "En el desarrollo",
          isCorrect: true,
        },
        {
          id: "av-03-q2-option-03",
          label: "Después de los créditos",
          isCorrect: false,
        },
      ],
      explanation:
        "El desarrollo presenta la evolución del conflicto y las acciones que realizan los personajes para enfrentarlo.",
    },
    {
      id: "av-03-step-04",
      type: "content",
      title: "Del argumento al guion",
      body: "El argumento resume los acontecimientos principales de una historia. El guion desarrolla esos acontecimientos de manera organizada e incluye escenas, acciones, diálogos y, según el formato, indicaciones visuales y sonoras. Es una guía para planificar la producción audiovisual.",
      highlight:
        "El guion convierte una idea narrativa en una propuesta organizada para producirla.",
    },
    {
      id: "av-03-question-03",
      type: "question",
      prompt: "¿Qué información puede contener un guion audiovisual?",
      options: [
        {
          id: "av-03-q3-option-01",
          label: "Únicamente el título de la producción",
          isCorrect: false,
        },
        {
          id: "av-03-q3-option-02",
          label: "Solo una lista de colores",
          isCorrect: false,
        },
        {
          id: "av-03-q3-option-03",
          label: "Escenas, acciones y diálogos",
          isCorrect: true,
        },
      ],
      explanation:
        "El guion organiza las escenas, acciones y diálogos necesarios para desarrollar la historia audiovisual.",
    },
    {
      id: "av-03-step-05",
      type: "content",
      title: "Storyboard: visualizar la historia",
      body: "El storyboard es una secuencia de ilustraciones que representa visualmente las escenas de una producción. Ayuda a planificar encuadres, acciones, movimientos de cámara y transiciones antes de grabar. No necesita ser una ilustración detallada: su objetivo es comunicar cómo se desarrollará visualmente cada momento.",
      highlight:
        "El storyboard permite anticipar visualmente una producción antes de realizarla.",
    },
    {
      id: "av-03-question-04",
      type: "question",
      prompt: "¿Para qué sirve principalmente un storyboard?",
      options: [
        {
          id: "av-03-q4-option-01",
          label: "Para visualizar y planificar las escenas de una producción",
          isCorrect: true,
        },
        {
          id: "av-03-q4-option-02",
          label: "Para corregir automáticamente el sonido",
          isCorrect: false,
        },
        {
          id: "av-03-q4-option-03",
          label: "Para reemplazar la edición final",
          isCorrect: false,
        },
      ],
      explanation:
        "El storyboard permite organizar visualmente las escenas y anticipar cómo se desarrollará la producción.",
    },
  ],
};
