import type { ActivityContent } from "../../../types/activity";

export const activity3d05: ActivityContent = {
  nodeId: "3d-05",
  type: "project",
  title: "Tu primera creación 3D",
  introduction:
    "Integra lo aprendido y planifica un objeto tridimensional con geometría, materiales, iluminación y una presentación visual.",

  steps: [
    {
      id: "3d-05-step-01",
      type: "content",
      title: "El reto: crear un objeto 3D",
      body: "Imagina que debes crear un objeto sencillo para una presentación digital. Puede ser una lámpara, una taza, un pequeño mueble o un producto imaginario. Tu objetivo será construir su geometría, definir su apariencia y presentarlo mediante una escena iluminada.",
      highlight:
        "Un proyecto 3D comienza con una idea que puede transformarse en volumen.",
    },
    {
      id: "3d-05-question-01",
      type: "question",
      prompt: "Antes de comenzar a modelar, ¿qué deberías definir?",
      options: [
        {
          id: "3d-05-q1-option-01",
          label: "El objeto, su propósito y sus características principales",
          isCorrect: true,
        },
        {
          id: "3d-05-q1-option-02",
          label: "Únicamente la configuración del render",
          isCorrect: false,
        },
        {
          id: "3d-05-q1-option-03",
          label: "La cantidad de luces sin conocer el objeto",
          isCorrect: false,
        },
      ],
      explanation:
        "Definir el objeto y sus características permite elegir las formas, herramientas y recursos necesarios para modelarlo.",
    },
    {
      id: "3d-05-step-02",
      type: "content",
      title: "Construye la geometría",
      body: "Comienza con primitivas que se aproximen a la forma del objeto. Utiliza transformaciones para ajustar su posición, rotación y escala. Después, modifica sus vértices, aristas y caras para obtener una geometría más cercana al resultado que buscas.",
      highlight:
        "Construir un modelo es un proceso gradual: comienza con formas sencillas y añade detalles.",
    },
    {
      id: "3d-05-question-02",
      type: "question",
      prompt:
        "Estás modelando una taza. ¿Qué combinación de recursos podría ayudarte a construir su forma?",
      options: [
        {
          id: "3d-05-q2-option-01",
          label:
            "Una primitiva cilíndrica y herramientas de edición de geometría",
          isCorrect: true,
        },
        {
          id: "3d-05-q2-option-02",
          label: "Únicamente una cámara",
          isCorrect: false,
        },
        {
          id: "3d-05-q2-option-03",
          label: "Una textura sin geometría",
          isCorrect: false,
        },
      ],
      explanation:
        "Un cilindro puede servir como base para el cuerpo de una taza, mientras que las herramientas de modelado permiten modificar su forma y construir detalles.",
    },
    {
      id: "3d-05-step-03",
      type: "content",
      title: "Define materiales y texturas",
      body: "Cuando el modelo tenga su forma principal, selecciona los materiales que representen su superficie. Puedes definir colores, rugosidad y propiedades metálicas o transparentes. Si necesitas detalles adicionales, incorpora texturas para enriquecer la apariencia del objeto.",
      highlight:
        "Los materiales y las texturas ayudan a que el modelo comunique su identidad visual.",
    },
    {
      id: "3d-05-question-03",
      type: "question",
      prompt:
        "Tu objeto representa una pieza de metal pulido. ¿Qué propiedades deberías considerar?",
      options: [
        {
          id: "3d-05-q3-option-01",
          label: "Una apariencia metálica y una rugosidad adecuada",
          isCorrect: true,
        },
        {
          id: "3d-05-q3-option-02",
          label: "Una textura de papel sin propiedades metálicas",
          isCorrect: false,
        },
        {
          id: "3d-05-q3-option-03",
          label: "Eliminar todos los materiales",
          isCorrect: false,
        },
      ],
      explanation:
        "Las propiedades metálicas y la rugosidad permiten representar la apariencia de una superficie metálica y controlar sus reflejos.",
    },
    {
      id: "3d-05-step-04",
      type: "content",
      title: "Prepara la escena",
      body: "Organiza una escena sencilla para presentar tu objeto. Coloca una cámara que permita observarlo claramente y añade iluminación que destaque su volumen y materiales. El fondo y los elementos complementarios deben acompañar al objeto sin quitarle protagonismo.",
      highlight:
        "Una buena presentación permite apreciar las características más importantes del modelo.",
    },
    {
      id: "3d-05-question-04",
      type: "question",
      prompt:
        "Al revisar tu escena, el objeto se ve oscuro y sus detalles no se distinguen. ¿Qué deberías ajustar?",
      options: [
        {
          id: "3d-05-q4-option-01",
          label: "La iluminación y la posición de la cámara",
          isCorrect: true,
        },
        {
          id: "3d-05-q4-option-02",
          label: "Únicamente el nombre del objeto",
          isCorrect: false,
        },
        {
          id: "3d-05-q4-option-03",
          label: "La cantidad de carpetas del proyecto",
          isCorrect: false,
        },
      ],
      explanation:
        "Ajustar la iluminación y la cámara permite revelar los detalles, mejorar la lectura de los materiales y presentar correctamente el modelo.",
    },
    {
      id: "3d-05-step-05",
      type: "content",
      title: "Tu primera creación",
      body: "Has recorrido los principios necesarios para planificar una creación tridimensional. Revisa la geometría, la topología, los materiales, las texturas, la iluminación y el encuadre. Finalmente, configura el render y guarda tu proyecto para conservar tanto la escena editable como su presentación final.",
      highlight:
        "Una creación 3D integra técnica y creatividad para transformar una idea en una representación visual.",
    },
  ],
};