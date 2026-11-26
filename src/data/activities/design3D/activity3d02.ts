import type { ActivityContent } from "../../../types/activity";

export const activity3d02: ActivityContent = {
  nodeId: "3d-02",
  type: "exercise",
  title: "Modelado de objetos",
  introduction:
    "Aprende cómo construir objetos tridimensionales utilizando geometría, primitivas y herramientas de edición.",

  steps: [
    {
      id: "3d-02-step-01",
      type: "content",
      title: "¿Qué es el modelado 3D?",
      body: "El modelado 3D es el proceso de crear representaciones digitales de objetos mediante geometría tridimensional. Un modelo puede representar objetos simples, productos, personajes o escenarios complejos. Para construirlo se utilizan diferentes herramientas y métodos de edición.",
      highlight:
        "Modelar es construir formas y volúmenes dentro de un espacio tridimensional.",
    },
    {
      id: "3d-02-step-02",
      type: "content",
      title: "Primitivas geométricas",
      body: "Las primitivas son formas básicas que sirven como punto de partida para crear modelos. Entre ellas encontramos cubos, esferas, cilindros, conos y planos. Podemos combinarlas, transformarlas y modificarlas para construir objetos más elaborados.",
      highlight:
        "Las primitivas permiten comenzar un modelo a partir de formas geométricas sencillas.",
    },
    {
      id: "3d-02-question-01",
      type: "question",
      prompt:
        "Quieres comenzar a modelar una caja sencilla. ¿Qué primitiva geométrica sería un buen punto de partida?",
      options: [
        {
          id: "3d-02-q1-option-01",
          label: "Un cubo",
          isCorrect: true,
        },
        {
          id: "3d-02-q1-option-02",
          label: "Una esfera",
          isCorrect: false,
        },
        {
          id: "3d-02-q1-option-03",
          label: "Un cono",
          isCorrect: false,
        },
      ],
      explanation:
        "El cubo es una primitiva adecuada para comenzar un modelo con forma de caja y después ajustar sus dimensiones.",
    },
    {
      id: "3d-02-step-03",
      type: "content",
      title: "Vértices, aristas y caras",
      body: "La geometría de una malla poligonal está formada por vértices, aristas y caras. Los vértices son puntos que definen la geometría; las aristas conectan dos vértices; y las caras son superficies delimitadas por aristas. Estos componentes permiten editar la forma de un modelo.",
      highlight:
        "Vértices, aristas y caras son los componentes básicos de una malla poligonal.",
    },
    {
      id: "3d-02-question-02",
      type: "question",
      prompt:
        "¿Qué componente de una malla representa una superficie delimitada por aristas?",
      options: [
        {
          id: "3d-02-q2-option-01",
          label: "Vértice",
          isCorrect: false,
        },
        {
          id: "3d-02-q2-option-02",
          label: "Cara",
          isCorrect: true,
        },
        {
          id: "3d-02-q2-option-03",
          label: "Eje",
          isCorrect: false,
        },
      ],
      explanation:
        "Una cara es una superficie formada por los vértices y aristas que delimitan una región de la malla.",
    },
    {
      id: "3d-02-step-04",
      type: "content",
      title: "Herramientas de modelado",
      body: "Las herramientas de modelado permiten modificar la geometría de un objeto. Extrude o extrusión genera nueva geometría a partir de una cara o región; Inset crea un contorno interior; y Bevel suaviza o bisela los bordes. Cada herramienta permite construir formas con mayor control.",
      highlight:
        "Las herramientas de edición permiten transformar primitivas en modelos más elaborados.",
    },
    {
      id: "3d-02-question-03",
      type: "question",
      prompt:
        "Quieres crear una nueva extensión a partir de una cara de un objeto. ¿Qué herramienta puedes utilizar?",
      options: [
        {
          id: "3d-02-q3-option-01",
          label: "Extrude",
          isCorrect: true,
        },
        {
          id: "3d-02-q3-option-02",
          label: "Render",
          isCorrect: false,
        },
        {
          id: "3d-02-q3-option-03",
          label: "Camera",
          isCorrect: false,
        },
      ],
      explanation:
        "Extrude o extrusión permite extender una cara o región y generar nueva geometría conectada al objeto original.",
    },
    {
      id: "3d-02-step-05",
      type: "content",
      title: "Topología y organización",
      body: "La topología describe cómo se organiza y conecta la geometría de un modelo. Una malla bien organizada facilita la edición, el suavizado y la deformación. Es importante evitar geometría innecesaria y mantener una estructura adecuada para el uso que tendrá el objeto.",
      highlight:
        "Una buena topología facilita el trabajo y mejora la calidad del modelo.",
    },
    {
      id: "3d-02-question-04",
      type: "question",
      prompt: "¿Por qué es importante mantener una topología organizada?",
      options: [
        {
          id: "3d-02-q4-option-01",
          label: "Porque elimina la necesidad de materiales",
          isCorrect: false,
        },
        {
          id: "3d-02-q4-option-02",
          label: "Porque facilita la edición y deformación del modelo",
          isCorrect: true,
        },
        {
          id: "3d-02-q4-option-03",
          label:
            "Porque convierte automáticamente el modelo en una fotografía",
          isCorrect: false,
        },
      ],
      explanation:
        "Una topología adecuada facilita la manipulación de la geometría y ayuda a conseguir deformaciones y superficies más controladas.",
    },
  ],
};