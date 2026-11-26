import type { ActivityContent } from "../../../types/activity";

export const activity3d03: ActivityContent = {
  nodeId: "3d-03",
  type: "exercise",
  title: "Materiales y texturas",
  introduction:
    "Descubre cómo dar apariencia y personalidad a tus modelos mediante materiales, superficies, colores y texturas.",

  steps: [
    {
      id: "3d-03-step-01",
      type: "content",
      title: "¿Qué son los materiales 3D?",
      body: "Los materiales determinan cómo se representa visualmente la superficie de un objeto. Permiten definir propiedades como el color, la rugosidad, la transparencia y la manera en que una superficie refleja la luz. Un mismo modelo puede adquirir apariencias muy diferentes al cambiar su material.",
      highlight:
        "Los materiales definen cómo se ve y cómo responde una superficie a la luz.",
    },
    {
      id: "3d-03-step-02",
      type: "content",
      title: "Propiedades de una superficie",
      body: "Entre las propiedades habituales de los materiales encontramos el color base, que define su apariencia principal; la rugosidad, que controla qué tan difusa es la reflexión; y la propiedad metálica, que permite representar superficies con comportamiento metálico. Estas características se combinan para construir diferentes apariencias.",
      highlight:
        "Color, rugosidad y propiedades metálicas ayudan a definir la apariencia de un material.",
    },
    {
      id: "3d-03-question-01",
      type: "question",
      prompt:
        "Quieres representar una superficie muy pulida y brillante. ¿Qué característica del material deberías considerar?",
      options: [
        {
          id: "3d-03-q1-option-01",
          label: "Una rugosidad elevada",
          isCorrect: false,
        },
        {
          id: "3d-03-q1-option-02",
          label: "Una rugosidad baja",
          isCorrect: true,
        },
        {
          id: "3d-03-q1-option-03",
          label: "Eliminar el color base",
          isCorrect: false,
        },
      ],
      explanation:
        "Una rugosidad baja produce reflejos más definidos y una apariencia más pulida en muchos modelos de sombreado.",
    },
    {
      id: "3d-03-step-03",
      type: "content",
      title: "Texturas y mapas",
      body: "Las texturas son imágenes o datos que aportan información visual a la superficie de un modelo. Pueden utilizarse para definir colores, relieves aparentes, rugosidad y otros detalles. Los mapas de textura permiten controlar estas características mediante información distribuida sobre la superficie.",
      highlight:
        "Las texturas permiten incorporar detalles sin tener que modelar cada elemento geométricamente.",
    },
    {
      id: "3d-03-question-02",
      type: "question",
      prompt:
        "Quieres añadir el patrón de madera a una mesa 3D. ¿Qué recurso puede ayudarte?",
      options: [
        {
          id: "3d-03-q2-option-01",
          label: "Una textura de madera",
          isCorrect: true,
        },
        {
          id: "3d-03-q2-option-02",
          label: "Una cámara adicional",
          isCorrect: false,
        },
        {
          id: "3d-03-q2-option-03",
          label: "Una transformación de escala",
          isCorrect: false,
        },
      ],
      explanation:
        "Una textura de madera puede aportar el patrón visual característico de ese material sobre la superficie del objeto.",
    },
    {
      id: "3d-03-step-04",
      type: "content",
      title: "Mapeo UV",
      body: "El mapeo UV permite relacionar las coordenadas de una superficie tridimensional con una imagen bidimensional. Este proceso determina cómo se distribuye una textura sobre el modelo. Un mapeo adecuado ayuda a evitar deformaciones y permite controlar la ubicación de los detalles.",
      highlight:
        "El mapeo UV conecta la superficie 3D con la información de una textura 2D.",
    },
    {
      id: "3d-03-question-03",
      type: "question",
      prompt: "¿Para qué sirve principalmente el mapeo UV?",
      options: [
        {
          id: "3d-03-q3-option-01",
          label: "Para modificar la posición de la cámara",
          isCorrect: false,
        },
        {
          id: "3d-03-q3-option-02",
          label:
            "Para distribuir una textura sobre la superficie de un modelo",
          isCorrect: true,
        },
        {
          id: "3d-03-q3-option-03",
          label: "Para cambiar la cantidad de polígonos automáticamente",
          isCorrect: false,
        },
      ],
      explanation:
        "El mapeo UV permite establecer cómo se proyecta y distribuye una imagen sobre la geometría tridimensional.",
    },
    {
      id: "3d-03-step-05",
      type: "content",
      title: "Coherencia de materiales",
      body: "Al asignar materiales debemos considerar el contexto del objeto, la iluminación y la intención visual. Los materiales necesitan comportarse de forma coherente con lo que representan. También conviene mantener una dirección visual consistente cuando una escena contiene varios objetos.",
      highlight:
        "Un material bien elegido ayuda a comunicar qué es un objeto y de qué está hecho.",
    },
    {
      id: "3d-03-question-04",
      type: "question",
      prompt:
        "Estás creando una botella de vidrio transparente. ¿Qué característica debería tener su material?",
      options: [
        {
          id: "3d-03-q4-option-01",
          label: "Una apariencia opaca sin transparencia",
          isCorrect: false,
        },
        {
          id: "3d-03-q4-option-02",
          label: "Una apariencia de transparencia o transmisión de luz",
          isCorrect: true,
        },
        {
          id: "3d-03-q4-option-03",
          label: "Una superficie completamente mate y sin reflejos",
          isCorrect: false,
        },
      ],
      explanation:
        "Un material que representa vidrio necesita propiedades de transparencia o transmisión para simular cómo la luz atraviesa su superficie.",
    },
  ],
};