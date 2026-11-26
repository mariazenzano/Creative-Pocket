import type { ActivityContent } from "../../../types/activity";

export const activity3d01: ActivityContent = {
  nodeId: "3d-01",
  type: "lesson",
  title: "Introducción al mundo 3D",
  introduction:
    "Explora el espacio tridimensional y descubre cómo se construyen objetos digitales mediante formas, materiales, iluminación y cámaras.",

  steps: [
    {
      id: "3d-01-step-01",
      type: "content",
      title: "¿Qué es el diseño 3D?",
      body: "El diseño 3D es una disciplina que permite crear y representar objetos, espacios y personajes digitales en tres dimensiones. Se utiliza en animación, videojuegos, arquitectura, publicidad, productos y experiencias interactivas. A diferencia de una imagen plana, los modelos tridimensionales tienen volumen y profundidad.",
      highlight:
        "El diseño 3D permite representar objetos digitales con volumen y profundidad.",
    },
    {
      id: "3d-01-step-02",
      type: "content",
      title: "Los ejes del espacio tridimensional",
      body: "El espacio 3D se organiza mediante tres ejes: X, Y y Z. Estos representan tres direcciones espaciales que permiten ubicar y transformar los objetos. Según el programa y la configuración utilizada, los ejes pueden representar ancho, profundidad y altura.",
      highlight:
        "Los ejes X, Y y Z permiten ubicar los objetos dentro del espacio tridimensional.",
    },
    {
      id: "3d-01-question-01",
      type: "question",
      prompt:
        "¿Cuántos ejes principales se utilizan para representar la posición de un objeto en el espacio 3D?",
      options: [
        {
          id: "3d-01-q1-option-01",
          label: "Dos",
          isCorrect: false,
        },
        {
          id: "3d-01-q1-option-02",
          label: "Tres",
          isCorrect: true,
        },
        {
          id: "3d-01-q1-option-03",
          label: "Cuatro",
          isCorrect: false,
        },
      ],
      explanation:
        "El espacio tridimensional utiliza tres ejes de coordenadas: X, Y y Z.",
    },
    {
      id: "3d-01-step-03",
      type: "content",
      title: "Transformaciones básicas",
      body: "Los objetos 3D pueden modificarse mediante tres transformaciones principales. La traslación cambia su posición, la rotación modifica su orientación y la escala altera su tamaño. Estas operaciones permiten organizar y ajustar los modelos dentro de una escena.",
      highlight:
        "Posición, rotación y escala son las transformaciones básicas de un objeto 3D.",
    },
    {
      id: "3d-01-question-02",
      type: "question",
      prompt:
        "Quieres girar un objeto para cambiar la dirección hacia la que está orientado. ¿Qué transformación necesitas?",
      options: [
        {
          id: "3d-01-q2-option-01",
          label: "Escala",
          isCorrect: false,
        },
        {
          id: "3d-01-q2-option-02",
          label: "Traslación",
          isCorrect: false,
        },
        {
          id: "3d-01-q2-option-03",
          label: "Rotación",
          isCorrect: true,
        },
      ],
      explanation:
        "La rotación modifica la orientación de un objeto alrededor de uno o varios ejes.",
    },
    {
      id: "3d-01-step-04",
      type: "content",
      title: "La interfaz de trabajo 3D",
      body: "Los programas de modelado 3D suelen incluir una vista de trabajo o viewport donde podemos observar e interactuar con la escena. También pueden tener paneles para gestionar objetos, materiales, propiedades, herramientas y cámaras. Conocer la interfaz facilita el proceso de creación.",
      highlight:
        "El viewport es el espacio donde observamos y manipulamos nuestra escena.",
    },
    {
      id: "3d-01-question-03",
      type: "question",
      prompt: "¿Para qué sirve principalmente el viewport en un programa 3D?",
      options: [
        {
          id: "3d-01-q3-option-01",
          label: "Para observar e interactuar con la escena",
          isCorrect: true,
        },
        {
          id: "3d-01-q3-option-02",
          label: "Para escribir únicamente documentos de texto",
          isCorrect: false,
        },
        {
          id: "3d-01-q3-option-03",
          label: "Para reproducir archivos de audio",
          isCorrect: false,
        },
      ],
      explanation:
        "El viewport permite visualizar la escena y manipular los objetos durante el proceso de trabajo.",
    },
    {
      id: "3d-01-step-05",
      type: "content",
      title: "De la escena al render",
      body: "Una escena 3D puede contener modelos, cámaras, luces y materiales. Cuando se procesa para generar una imagen o secuencia final, se realiza un render. Este proceso calcula cómo se representa visualmente la escena según su iluminación, materiales, cámara y configuración.",
      highlight:
        "El render convierte la información de una escena 3D en una representación visual final.",
    },
    {
      id: "3d-01-question-04",
      type: "question",
      prompt:
        "¿Qué proceso permite generar una imagen final a partir de una escena 3D?",
      options: [
        {
          id: "3d-01-q4-option-01",
          label: "Traslación",
          isCorrect: false,
        },
        {
          id: "3d-01-q4-option-02",
          label: "Renderizado",
          isCorrect: true,
        },
        {
          id: "3d-01-q4-option-03",
          label: "Recorte de imagen",
          isCorrect: false,
        },
      ],
      explanation:
        "El renderizado procesa los elementos de una escena para producir una imagen o secuencia visual.",
    },
  ],
};