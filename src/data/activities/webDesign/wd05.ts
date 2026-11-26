import type { ActivityContent } from "../../../types/activity";

export const wd05: ActivityContent = {
  nodeId: "wd-05",
  type: "project",
  title: "Tu primera página web",
  introduction:
    "Es momento de integrar lo aprendido. Planifica una página web sencilla, organizada y adaptable que presente información de manera clara.",
  steps: [
    {
      id: "wd-05-step-01",
      type: "content",
      title: "El reto: crear una página web",
      body: "Imagina que debes crear una página web personal para presentar el trabajo de una persona creativa. La página debe incluir su nombre, una breve presentación, una selección de proyectos y una sección de contacto. Tu objetivo es organizar la información para que cualquier visitante pueda comprenderla y recorrerla fácilmente.",
      highlight:
        "Un sitio web comienza con un propósito y una organización clara del contenido.",
    },
    {
      id: "wd-05-question-01",
      type: "question",
      prompt:
        "Antes de comenzar a construir tu página, ¿qué deberías organizar?",
      options: [
        {
          id: "wd-05-q1-option-01",
          label: "Las secciones y la información que tendrá el sitio",
          isCorrect: true,
        },
        {
          id: "wd-05-q1-option-02",
          label: "Todos los efectos y animaciones posibles",
          isCorrect: false,
        },
        {
          id: "wd-05-q1-option-03",
          label: "Únicamente los colores de fondo",
          isCorrect: false,
        },
      ],
      explanation:
        "Definir las secciones y organizar la información permite construir una estructura coherente antes de trabajar en su apariencia.",
    },
    {
      id: "wd-05-step-02",
      type: "content",
      title: "Construye la estructura con HTML",
      body: "Organiza tu página utilizando elementos semánticos. Puedes utilizar <header> para el encabezado, <nav> para la navegación, <main> para el contenido principal, <section> para agrupar información y <footer> para los datos finales. Dentro de estas secciones puedes incorporar títulos, párrafos, imágenes y enlaces.",
      highlight:
        "Una estructura HTML ordenada facilita la comprensión y el mantenimiento de la página.",
    },
    {
      id: "wd-05-question-02",
      type: "question",
      prompt:
        "Quieres crear una sección que reúna varios proyectos de un portafolio. ¿Qué elemento HTML sería adecuado?",
      options: [
        {
          id: "wd-05-q2-option-01",
          label: "<section>",
          isCorrect: true,
        },
        {
          id: "wd-05-q2-option-02",
          label: "<head>",
          isCorrect: false,
        },
        {
          id: "wd-05-q2-option-03",
          label: "<title>",
          isCorrect: false,
        },
      ],
      explanation:
        "La etiqueta <section> permite agrupar contenido relacionado dentro de una sección temática de la página.",
    },
    {
      id: "wd-05-step-03",
      type: "content",
      title: "Dale identidad con CSS",
      body: "Una vez organizada la estructura, define su apariencia visual. Selecciona una paleta de colores, establece una jerarquía tipográfica, configura los espacios y organiza los componentes. Procura mantener consistencia entre los botones, enlaces, títulos y demás elementos de la interfaz.",
      highlight:
        "El estilo visual debe reforzar el contenido y facilitar su lectura.",
    },
    {
      id: "wd-05-question-03",
      type: "question",
      prompt:
        "Tu página tiene títulos, botones y secciones con estilos muy diferentes entre sí. ¿Qué deberías hacer?",
      options: [
        {
          id: "wd-05-q3-option-01",
          label: "Añadir más colores para diferenciarlos",
          isCorrect: false,
        },
        {
          id: "wd-05-q3-option-02",
          label: "Establecer un sistema visual consistente",
          isCorrect: true,
        },
        {
          id: "wd-05-q3-option-03",
          label: "Eliminar todos los estilos CSS",
          isCorrect: false,
        },
      ],
      explanation:
        "Un sistema visual consistente permite mantener una identidad reconocible y una experiencia coherente en todas las secciones.",
    },
    {
      id: "wd-05-step-04",
      type: "content",
      title: "Adapta tu página a diferentes dispositivos",
      body: "Tu página también debe funcionar en teléfonos, tabletas y computadoras. Revisa la distribución de las secciones, el tamaño de las imágenes, la legibilidad de los textos y la facilidad para utilizar los controles. Puedes utilizar Flexbox y media queries para ajustar la presentación según el espacio disponible.",
      highlight:
        "Una página bien construida debe funcionar en más de un tamaño de pantalla.",
    },
    {
      id: "wd-05-question-04",
      type: "question",
      prompt:
        "Al abrir tu página en un teléfono, el menú ocupa demasiado espacio. ¿Qué decisión sería adecuada?",
      options: [
        {
          id: "wd-05-q4-option-01",
          label: "Mantenerlo igual aunque cubra el contenido",
          isCorrect: false,
        },
        {
          id: "wd-05-q4-option-02",
          label: "Eliminar toda la navegación",
          isCorrect: false,
        },
        {
          id: "wd-05-q4-option-03",
          label: "Adaptar la navegación al espacio disponible",
          isCorrect: true,
        },
      ],
      explanation:
        "La navegación debe adaptarse a las pantallas pequeñas para continuar siendo accesible y fácil de utilizar.",
    },
    {
      id: "wd-05-step-05",
      type: "content",
      title: "Tu primera experiencia web",
      body: "Ya conoces los principios necesarios para planificar tu primera página web. Revisa su estructura HTML, la presentación CSS, la navegación y la adaptación a distintos dispositivos. Antes de darla por terminada, prueba sus enlaces y comprueba que toda la información se visualice correctamente.",
      highlight:
        "Una buena página web combina estructura, diseño, funcionalidad y una experiencia pensada para las personas.",
    },
  ],
};