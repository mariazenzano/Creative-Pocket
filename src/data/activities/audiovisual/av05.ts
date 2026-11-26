import type { ActivityContent } from "../../../types/activity";

export const av05: ActivityContent = {
  nodeId: "av-05",
  type: "project",
  title: "Tu primera pieza audiovisual",
  introduction:
    "Integra lo aprendido y planifica una pieza audiovisual breve que combine narrativa, fotografía, sonido y edición.",

  steps: [
    {
      id: "av-05-step-01",
      type: "content",
      title: "El reto: contar una historia",
      body: "Imagina que debes crear un video breve para presentar una iniciativa creativa. Tu pieza debe comunicar una idea, captar la atención y transmitir una emoción. Antes de grabar, define qué quieres contar, a quién te diriges y qué sensación quieres generar.",
      highlight:
        "Toda producción audiovisual comienza con una intención narrativa.",
    },
    {
      id: "av-05-question-01",
      type: "question",
      prompt:
        "¿Qué deberías definir antes de comenzar a grabar tu pieza audiovisual?",
      options: [
        {
          id: "av-05-q1-option-01",
          label: "El objetivo, el mensaje y el público",
          isCorrect: true,
        },
        {
          id: "av-05-q1-option-02",
          label: "Únicamente los efectos de transición",
          isCorrect: false,
        },
        {
          id: "av-05-q1-option-03",
          label: "El formato de exportación sin conocer el contenido",
          isCorrect: false,
        },
      ],
      explanation:
        "Definir el objetivo y el público permite orientar las decisiones narrativas, visuales y sonoras de la producción.",
    },
    {
      id: "av-05-step-02",
      type: "content",
      title: "Planifica las escenas",
      body: "Organiza tu idea mediante un guion sencillo. Divide la historia en planteamiento, desarrollo y desenlace. Después, utiliza un storyboard para representar los planos principales, los encuadres y las acciones que necesitarás registrar.",
      highlight:
        "Planificar las escenas ayuda a grabar con una intención clara.",
    },
    {
      id: "av-05-question-02",
      type: "question",
      prompt:
        "Ya tienes tu idea y necesitas visualizar los planos antes de grabar. ¿Qué recurso deberías preparar?",
      options: [
        {
          id: "av-05-q2-option-01",
          label: "Una lista de colores sin relación con las escenas",
          isCorrect: false,
        },
        {
          id: "av-05-q2-option-02",
          label: "Un storyboard",
          isCorrect: true,
        },
        {
          id: "av-05-q2-option-03",
          label: "Una configuración de exportación",
          isCorrect: false,
        },
      ],
      explanation:
        "El storyboard permite representar las escenas y planificar los encuadres antes de iniciar la grabación.",
    },
    {
      id: "av-05-step-03",
      type: "content",
      title: "Construye la propuesta visual y sonora",
      body: "Selecciona los tipos de plano, ángulos e iluminación que ayudarán a contar tu historia. Considera también la música, los efectos sonoros y los diálogos. La imagen y el sonido deben complementarse para reforzar el mensaje.",
      highlight:
        "La propuesta visual y sonora debe trabajar en conjunto para comunicar la historia.",
    },
    {
      id: "av-05-question-03",
      type: "question",
      prompt:
        "Tu video transmite una sensación de tranquilidad. ¿Qué decisión sonora podría reforzar esa intención?",
      options: [
        {
          id: "av-05-q3-option-01",
          label: "Incorporar sonidos y música coherentes con esa atmósfera",
          isCorrect: true,
        },
        {
          id: "av-05-q3-option-02",
          label: "Añadir sonidos aleatorios que distraigan",
          isCorrect: false,
        },
        {
          id: "av-05-q3-option-03",
          label: "Eliminar todos los sonidos sin revisar la propuesta",
          isCorrect: false,
        },
      ],
      explanation:
        "La música y los efectos sonoros pueden reforzar la atmósfera emocional y acompañar la intención narrativa.",
    },
    {
      id: "av-05-step-04",
      type: "content",
      title: "Edita y construye el ritmo",
      body: "Selecciona los mejores planos y organízalos en una línea de tiempo. Ajusta su duración, ordena las acciones y sincroniza el sonido. Revisa la continuidad y comprueba que cada escena aporte algo a la historia.",
      highlight:
        "La edición organiza los materiales para construir una experiencia coherente.",
    },
    {
      id: "av-05-question-04",
      type: "question",
      prompt:
        "Al revisar tu edición descubres que una escena no aporta información y hace que el video pierda ritmo. ¿Qué deberías hacer?",
      options: [
        {
          id: "av-05-q4-option-01",
          label: "Mantenerla aunque interrumpa la historia",
          isCorrect: false,
        },
        {
          id: "av-05-q4-option-02",
          label: "Añadir más transiciones para ocultarla",
          isCorrect: false,
        },
        {
          id: "av-05-q4-option-03",
          label: "Revisar su función y ajustar o eliminar el fragmento",
          isCorrect: true,
        },
      ],
      explanation:
        "Cada plano debe contribuir a la historia. Ajustar o eliminar fragmentos innecesarios puede mejorar el ritmo y la claridad narrativa.",
    },
    {
      id: "av-05-step-05",
      type: "content",
      title: "Tu primera producción",
      body: "Ya tienes una ruta para desarrollar tu pieza audiovisual. Revisa el mensaje, el guion, el storyboard, los planos, la iluminación, el sonido y el montaje. Finalmente, comprueba la calidad de reproducción y exporta el video en un formato apropiado para compartirlo.",
      highlight:
        "Una producción audiovisual efectiva combina creatividad, planificación y decisiones técnicas.",
    },
  ],
};
