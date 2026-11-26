import type { ActivityContent } from "../../../types/activity";

export const activity3d04: ActivityContent = {
  nodeId: "3d-04",
  type: "challenge",
  title: "Iluminación y escenarios",
  introduction:
    "Pon a prueba tus conocimientos sobre iluminación, cámaras y composición para construir escenas 3D con intención visual.",

  steps: [
    {
      id: "3d-04-step-01",
      type: "content",
      title: "La iluminación en 3D",
      body: "La iluminación determina cómo se perciben los objetos dentro de una escena tridimensional. Permite revelar volúmenes, generar sombras, establecer ambientes y dirigir la atención. Su comportamiento depende del tipo de luz, su posición, intensidad y características.",
      highlight:
        "La iluminación transforma la apariencia y la atmósfera de una escena 3D.",
    },
    {
      id: "3d-04-step-02",
      type: "content",
      title: "Tipos de luces",
      body: "En los programas 3D podemos encontrar diferentes fuentes de luz. La luz puntual emite iluminación en varias direcciones desde una posición; la luz de área utiliza una superficie para generar iluminación y sombras más suaves; y la luz direccional representa rayos que viajan en una dirección determinada.",
      highlight:
        "Cada tipo de luz produce características diferentes en una escena.",
    },
    {
      id: "3d-04-question-01",
      type: "question",
      prompt:
        "Quieres iluminar un producto con sombras suaves y reflejos controlados. ¿Qué tipo de luz puede ser una buena opción?",
      options: [
        {
          id: "3d-04-q1-option-01",
          label: "Luz de área",
          isCorrect: true,
        },
        {
          id: "3d-04-q1-option-02",
          label: "Una fuente puntual muy pequeña en cualquier posición",
          isCorrect: false,
        },
        {
          id: "3d-04-q1-option-03",
          label: "Desactivar todas las luces",
          isCorrect: false,
        },
      ],
      explanation:
        "Las luces de área pueden generar sombras más suaves y una iluminación adecuada para representar productos.",
    },
    {
      id: "3d-04-step-03",
      type: "content",
      title: "Sombras y volumen",
      body: "Las sombras ayudan a comprender la relación entre los objetos y las fuentes de luz. También aportan profundidad y volumen. Su forma y suavidad dependen de factores como el tamaño de la fuente luminosa, su posición y la distancia entre los objetos.",
      highlight:
        "Las sombras aportan información espacial y ayudan a construir profundidad.",
    },
    {
      id: "3d-04-question-02",
      type: "question",
      prompt:
        "Una escena parece plana porque los objetos no muestran volumen. ¿Qué podrías mejorar?",
      options: [
        {
          id: "3d-04-q2-option-01",
          label: "Eliminar todas las sombras",
          isCorrect: false,
        },
        {
          id: "3d-04-q2-option-02",
          label: "Ajustar la iluminación para definir volúmenes y sombras",
          isCorrect: true,
        },
        {
          id: "3d-04-q2-option-03",
          label: "Cambiar únicamente el nombre de los objetos",
          isCorrect: false,
        },
      ],
      explanation:
        "Una iluminación bien organizada permite distinguir superficies, crear sombras y mejorar la percepción de profundidad.",
    },
    {
      id: "3d-04-step-04",
      type: "content",
      title: "La cámara y el encuadre",
      body: "La cámara virtual define desde qué posición se observa y captura una escena 3D. Su ubicación, orientación, distancia focal y encuadre influyen en la composición final. Antes de renderizar es importante comprobar que los objetos principales estén bien ubicados dentro de la imagen.",
      highlight:
        "La cámara define qué parte de la escena verá el espectador.",
    },
    {
      id: "3d-04-question-03",
      type: "question",
      prompt:
        "El objeto principal de tu escena aparece cortado en el render. ¿Qué deberías revisar?",
      options: [
        {
          id: "3d-04-q3-option-01",
          label: "La posición y el encuadre de la cámara",
          isCorrect: true,
        },
        {
          id: "3d-04-q3-option-02",
          label: "Únicamente el nombre del material",
          isCorrect: false,
        },
        {
          id: "3d-04-q3-option-03",
          label: "La cantidad de archivos guardados",
          isCorrect: false,
        },
      ],
      explanation:
        "Ajustar la posición y el encuadre de la cámara permite incluir correctamente los elementos importantes de la escena.",
    },
    {
      id: "3d-04-step-05",
      type: "content",
      title: "Construcción de escenarios",
      body: "Un escenario 3D integra modelos, materiales, iluminación y composición para crear un espacio visual. Los objetos deben relacionarse de forma coherente y la iluminación debe apoyar la intención de la escena. También es importante revisar el punto de vista antes de realizar el render final.",
      highlight:
        "Una escena bien construida combina todos sus elementos para comunicar una idea.",
    },
    {
      id: "3d-04-question-04",
      type: "question",
      prompt:
        "Una escena contiene buenos modelos, pero no comunica la atmósfera que buscas. ¿Qué deberías revisar?",
      options: [
        {
          id: "3d-04-q4-option-01",
          label: "Solamente la cantidad de polígonos",
          isCorrect: false,
        },
        {
          id: "3d-04-q4-option-02",
          label: "La iluminación, los materiales y la composición",
          isCorrect: true,
        },
        {
          id: "3d-04-q4-option-03",
          label: "El nombre del archivo del proyecto",
          isCorrect: false,
        },
      ],
      explanation:
        "La atmósfera depende de cómo se combinan la iluminación, los materiales, la cámara y la composición de la escena.",
    },
  ],
};