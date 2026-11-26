import type { ActivityContent } from "../../../types/activity";

export const wd03: ActivityContent = {
  nodeId: "wd-03",
  type: "exercise",
  title: "Estilos con CSS",
  introduction:
    "Aprende cómo transformar una estructura HTML en una interfaz visual mediante colores, tipografías, espacios y distribución de elementos.",
  steps: [
    {
      id: "wd-03-step-01",
      type: "content",
      title: "¿Qué es CSS?",
      body: "CSS significa Cascading Style Sheets u hojas de estilo en cascada. Es el lenguaje utilizado para definir la presentación visual de un documento HTML. Permite controlar colores, tipografías, tamaños, fondos, bordes y la distribución de los elementos.",
      highlight:
        "HTML estructura el contenido y CSS define cómo se presenta visualmente.",
    },
    {
      id: "wd-03-step-02",
      type: "content",
      title: "Selectores y propiedades",
      body: "CSS utiliza selectores para identificar los elementos que queremos modificar. Después se aplican declaraciones formadas por una propiedad y un valor. Por ejemplo, color: red cambia el color del texto, mientras que font-size: 20px modifica su tamaño.",
      highlight:
        "Un selector identifica el elemento y las propiedades definen sus estilos.",
    },
    {
      id: "wd-03-question-01",
      type: "question",
      prompt: "¿Qué propiedad CSS permite cambiar el color del texto?",
      options: [
        {
          id: "wd-03-q1-option-01",
          label: "background",
          isCorrect: false,
        },
        {
          id: "wd-03-q1-option-02",
          label: "color",
          isCorrect: true,
        },
        {
          id: "wd-03-q1-option-03",
          label: "font-size",
          isCorrect: false,
        },
      ],
      explanation:
        "La propiedad color define el color del texto. La propiedad background se utiliza para configurar el fondo y font-size controla el tamaño de la letra.",
    },
    {
      id: "wd-03-step-03",
      type: "content",
      title: "El modelo de caja",
      body: "En CSS, cada elemento puede entenderse como una caja. El modelo de caja está compuesto por el contenido, el padding o espacio interno, el border o borde y el margin o espacio externo. Comprender estas partes permite controlar las dimensiones y separaciones de los elementos.",
      highlight:
        "El modelo de caja explica cómo se calcula y organiza el espacio de cada elemento.",
    },
    {
      id: "wd-03-question-02",
      type: "question",
      prompt:
        "Quieres aumentar el espacio entre el contenido de un elemento y su borde. ¿Qué propiedad debes utilizar?",
      options: [
        {
          id: "wd-03-q2-option-01",
          label: "margin",
          isCorrect: false,
        },
        {
          id: "wd-03-q2-option-02",
          label: "padding",
          isCorrect: true,
        },
        {
          id: "wd-03-q2-option-03",
          label: "border",
          isCorrect: false,
        },
      ],
      explanation:
        "Padding controla el espacio interno entre el contenido y el borde. Margin controla el espacio externo que separa un elemento de otros.",
    },
    {
      id: "wd-03-step-04",
      type: "content",
      title: "Organización con Flexbox",
      body: "Flexbox es un sistema de distribución que facilita la organización de elementos dentro de un contenedor. Permite alinearlos horizontal o verticalmente, distribuir el espacio disponible y controlar su separación. Propiedades como display: flex, justify-content y align-items ayudan a construir interfaces ordenadas.",
      highlight:
        "Flexbox facilita la alineación y distribución de elementos en una interfaz.",
    },
    {
      id: "wd-03-question-03",
      type: "question",
      prompt:
        "¿Qué propiedad de Flexbox permite distribuir los elementos sobre el eje principal?",
      options: [
        {
          id: "wd-03-q3-option-01",
          label: "justify-content",
          isCorrect: true,
        },
        {
          id: "wd-03-q3-option-02",
          label: "font-family",
          isCorrect: false,
        },
        {
          id: "wd-03-q3-option-03",
          label: "border-radius",
          isCorrect: false,
        },
      ],
      explanation:
        "justify-content controla cómo se distribuyen los elementos a lo largo del eje principal del contenedor Flexbox.",
    },
    {
      id: "wd-03-step-05",
      type: "content",
      title: "Consistencia visual",
      body: "Una interfaz consistente utiliza reglas visuales que se repiten de manera organizada. Mantener una escala tipográfica, una paleta de colores, espacios y estilos de botones ayuda a que las diferentes partes de un sitio se perciban como un mismo sistema.",
      highlight:
        "La consistencia visual hace que una interfaz sea más coherente y fácil de reconocer.",
    },
    {
      id: "wd-03-question-04",
      type: "question",
      prompt:
        "Una página utiliza botones con colores, formas y tamaños distintos sin una razón clara. ¿Qué debería mejorar?",
      options: [
        {
          id: "wd-03-q4-option-01",
          label: "La cantidad de elementos decorativos",
          isCorrect: false,
        },
        {
          id: "wd-03-q4-option-02",
          label: "La consistencia de sus estilos visuales",
          isCorrect: true,
        },
        {
          id: "wd-03-q4-option-03",
          label: "La cantidad de imágenes",
          isCorrect: false,
        },
      ],
      explanation:
        "Un sistema de estilos coherente ayuda a mantener una identidad visual reconocible y facilita la comprensión de los componentes.",
    },
  ],
};