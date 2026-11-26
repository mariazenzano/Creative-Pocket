import type { ActivityContent } from "../../../types/activity";

export const av01: ActivityContent = {
  nodeId: "av-01",
  type: "lesson",
  title: "Lenguaje audiovisual",
  introduction:
    "Descubre cómo las imágenes, los sonidos y el movimiento se combinan para contar historias y transmitir emociones.",

  steps: [
    {
      id: "av-01-step-01",
      type: "content",
      title: "¿Qué es el lenguaje audiovisual?",
      body: "El lenguaje audiovisual es un sistema de comunicación que combina imágenes y sonidos para transmitir ideas, emociones e historias. Está presente en películas, videos, anuncios, documentales y contenidos digitales. Cada decisión visual y sonora influye en cómo el espectador interpreta lo que observa.",
      highlight:
        "El lenguaje audiovisual comunica mediante la combinación de imagen y sonido.",
    },
    {
      id: "av-01-step-02",
      type: "content",
      title: "El plano y su función",
      body: "El plano es una unidad visual que representa una parte de la acción dentro de una producción audiovisual. El plano general muestra el entorno y la relación de los personajes con él; el plano medio presenta a una persona aproximadamente desde la cintura; y el primer plano destaca el rostro y sus expresiones.",
      highlight:
        "Cada tipo de plano permite mostrar información de una manera diferente.",
    },
    {
      id: "av-01-question-01",
      type: "question",
      prompt:
        "Quieres mostrar a un personaje y el entorno donde se encuentra. ¿Qué tipo de plano sería adecuado?",
      options: [
        {
          id: "av-01-q1-option-01",
          label: "Primer plano",
          isCorrect: false,
        },
        {
          id: "av-01-q1-option-02",
          label: "Plano general",
          isCorrect: true,
        },
        {
          id: "av-01-q1-option-03",
          label: "Plano detalle",
          isCorrect: false,
        },
      ],
      explanation:
        "El plano general permite observar al personaje dentro de su entorno y comprender mejor el espacio donde sucede la acción.",
    },
    {
      id: "av-01-step-03",
      type: "content",
      title: "Ángulos y movimientos de cámara",
      body: "El ángulo de cámara determina desde qué posición observamos una escena. Un ángulo normal sitúa la cámara aproximadamente a la altura del sujeto; el picado observa desde arriba y el contrapicado desde abajo. Los movimientos de cámara, como el paneo o el travelling, permiten acompañar la acción y revelar información.",
      highlight:
        "La posición y el movimiento de cámara modifican la percepción de una escena.",
    },
    {
      id: "av-01-question-02",
      type: "question",
      prompt:
        "En una escena quieres mostrar a un personaje desde una posición que lo haga parecer imponente. ¿Qué ángulo podrías utilizar?",
      options: [
        {
          id: "av-01-q2-option-01",
          label: "Contrapicado",
          isCorrect: true,
        },
        {
          id: "av-01-q2-option-02",
          label: "Picado",
          isCorrect: false,
        },
        {
          id: "av-01-q2-option-03",
          label: "Ángulo cenital",
          isCorrect: false,
        },
      ],
      explanation:
        "El contrapicado sitúa la cámara por debajo del sujeto y puede transmitir una sensación de grandeza, poder o importancia.",
    },
    {
      id: "av-01-step-04",
      type: "content",
      title: "La importancia del sonido",
      body: "El sonido complementa la imagen y aporta información que puede no estar presente visualmente. La música crea ambientes y emociones; los efectos sonoros representan acciones o elementos del entorno; y los diálogos permiten comunicar ideas mediante la voz de los personajes.",
      highlight:
        "El sonido no solo acompaña a la imagen: también construye significado.",
    },
    {
      id: "av-01-question-03",
      type: "question",
      prompt:
        "En un video se escucha el sonido de la lluvia aunque no aparezca en pantalla. ¿Qué función cumple ese sonido?",
      options: [
        {
          id: "av-01-q3-option-01",
          label: "Crear ambiente y aportar información sobre el entorno",
          isCorrect: true,
        },
        {
          id: "av-01-q3-option-02",
          label: "Reemplazar todos los elementos visuales",
          isCorrect: false,
        },
        {
          id: "av-01-q3-option-03",
          label: "Modificar el encuadre de la cámara",
          isCorrect: false,
        },
      ],
      explanation:
        "Los efectos sonoros ayudan a representar el ambiente y aportan información que complementa lo que vemos.",
    },
    {
      id: "av-01-step-05",
      type: "content",
      title: "Montaje y continuidad",
      body: "El montaje organiza los planos y sonidos para construir una secuencia comprensible. La continuidad busca mantener la coherencia entre las tomas, considerando la dirección de movimiento, la posición de los personajes y la relación temporal entre las acciones.",
      highlight:
        "El montaje transforma tomas individuales en una experiencia audiovisual coherente.",
    },
    {
      id: "av-01-question-04",
      type: "question",
      prompt: "¿Cuál es la función principal del montaje audiovisual?",
      options: [
        {
          id: "av-01-q4-option-01",
          label: "Aumentar la resolución de las imágenes",
          isCorrect: false,
        },
        {
          id: "av-01-q4-option-02",
          label: "Organizar imágenes y sonidos para construir una secuencia",
          isCorrect: true,
        },
        {
          id: "av-01-q4-option-03",
          label: "Cambiar automáticamente el formato del video",
          isCorrect: false,
        },
      ],
      explanation:
        "El montaje selecciona y organiza los planos y sonidos para construir el ritmo, la continuidad y el significado de una producción.",
    },
  ],
};
