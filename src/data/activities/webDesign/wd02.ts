import type { ActivityContent } from "../../../types/activity";

export const wd02: ActivityContent = {
  nodeId: "wd-02",
  type: "exercise",
  title: "Estructura con HTML",
  introduction:
    "Conoce el lenguaje que da estructura a las páginas web y descubre cómo organizar textos, imágenes, enlaces y secciones.",
  steps: [
    {
      id: "wd-02-step-01",
      type: "content",
      title: "¿Qué es HTML?",
      body: "HTML significa HyperText Markup Language o lenguaje de marcado de hipertexto. Se utiliza para definir la estructura y el significado del contenido de una página web. Mediante etiquetas podemos indicar qué elementos son títulos, párrafos, imágenes, enlaces y otras partes del documento.",
      highlight:
        "HTML organiza el contenido y proporciona significado a los elementos de una página.",
    },
    {
      id: "wd-02-step-02",
      type: "content",
      title: "Las etiquetas HTML",
      body: "HTML utiliza etiquetas que indican el tipo de elemento que queremos mostrar. Por ejemplo, <h1> representa un encabezado principal, <p> representa un párrafo y <a> permite crear un enlace. Muchas etiquetas tienen una apertura y un cierre que delimitan su contenido.",
      highlight:
        "Las etiquetas indican al navegador cómo está organizado el contenido.",
    },
    {
      id: "wd-02-question-01",
      type: "question",
      prompt:
        "¿Qué etiqueta se utiliza para crear el encabezado principal de una página?",
      options: [
        {
          id: "wd-02-q1-option-01",
          label: "<p>",
          isCorrect: false,
        },
        {
          id: "wd-02-q1-option-02",
          label: "<h1>",
          isCorrect: true,
        },
        {
          id: "wd-02-q1-option-03",
          label: "<img>",
          isCorrect: false,
        },
      ],
      explanation:
        "La etiqueta <h1> representa un encabezado de primer nivel y suele utilizarse para el título principal del contenido.",
    },
    {
      id: "wd-02-step-03",
      type: "content",
      title: "Organización del documento",
      body: "Un documento HTML tiene una estructura básica. <!DOCTYPE html> indica que se utiliza HTML moderno; <html> contiene el documento; <head> reúne información sobre la página, como su título y metadatos; y <body> contiene el contenido visible para el usuario.",
      highlight:
        "La estructura del documento permite que el navegador interprete correctamente la página.",
    },
    {
      id: "wd-02-question-02",
      type: "question",
      prompt:
        "¿En qué parte del documento HTML se coloca el contenido que normalmente ve el usuario?",
      options: [
        {
          id: "wd-02-q2-option-01",
          label: "Dentro de <head>",
          isCorrect: false,
        },
        {
          id: "wd-02-q2-option-02",
          label: "Dentro de <body>",
          isCorrect: true,
        },
        {
          id: "wd-02-q2-option-03",
          label: "Dentro de <!DOCTYPE>",
          isCorrect: false,
        },
      ],
      explanation:
        "El elemento <body> contiene el contenido visible de la página, como textos, imágenes, botones y enlaces.",
    },
    {
      id: "wd-02-step-04",
      type: "content",
      title: "Enlaces e imágenes",
      body: "Los enlaces permiten conectar una página con otros documentos o sitios. Se crean mediante la etiqueta <a> y utilizan el atributo href para indicar el destino. Las imágenes se incorporan con <img>, utilizando src para indicar el archivo y alt para proporcionar una descripción textual.",
      highlight:
        "Los atributos aportan información adicional y permiten configurar los elementos HTML.",
    },
    {
      id: "wd-02-question-03",
      type: "question",
      prompt:
        "¿Qué atributo de la etiqueta <a> indica a dónde debe dirigir un enlace?",
      options: [
        {
          id: "wd-02-q3-option-01",
          label: "src",
          isCorrect: false,
        },
        {
          id: "wd-02-q3-option-02",
          label: "alt",
          isCorrect: false,
        },
        {
          id: "wd-02-q3-option-03",
          label: "href",
          isCorrect: true,
        },
      ],
      explanation:
        "El atributo href contiene la dirección de destino a la que conduce el enlace.",
    },
    {
      id: "wd-02-step-05",
      type: "content",
      title: "HTML semántico",
      body: "El HTML semántico utiliza etiquetas que describen la función de cada sección. Por ejemplo, <header> representa un encabezado, <nav> una zona de navegación, <main> el contenido principal y <footer> el pie de página. Esto mejora la comprensión del documento y favorece su accesibilidad.",
      highlight:
        "Utilizar etiquetas según su significado produce documentos más claros y accesibles.",
    },
    {
      id: "wd-02-question-04",
      type: "question",
      prompt:
        "Estás creando el menú principal de navegación de un sitio. ¿Qué etiqueta semántica sería adecuada?",
      options: [
        {
          id: "wd-02-q4-option-01",
          label: "<nav>",
          isCorrect: true,
        },
        {
          id: "wd-02-q4-option-02",
          label: "<footer>",
          isCorrect: false,
        },
        {
          id: "wd-02-q4-option-03",
          label: "<article>",
          isCorrect: false,
        },
      ],
      explanation:
        "La etiqueta <nav> identifica una sección que contiene enlaces de navegación dentro de un sitio web.",
    },
  ],
};