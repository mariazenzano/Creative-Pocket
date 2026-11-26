import type { ActivityContent } from "../../../types/activity";

export const wd04: ActivityContent = {
  nodeId: "wd-04",
  type: "challenge",
  title: "Diseño adaptable",
  introduction:
    "Enfrenta situaciones de diseño para diferentes pantallas y descubre cómo crear interfaces que se adapten a distintos dispositivos.",
  steps: [
    {
      id: "wd-04-step-01",
      type: "content",
      title: "¿Qué es el diseño responsive?",
      body: "El diseño responsive o adaptable busca que una página web se visualice y funcione correctamente en diferentes tamaños de pantalla. Una misma interfaz puede necesitar distintas distribuciones en un teléfono, una tableta o una computadora.",
      highlight:
        "Una página adaptable ofrece una experiencia adecuada en distintos dispositivos.",
    },
    {
      id: "wd-04-step-02",
      type: "content",
      title: "Diseñar para diferentes pantallas",
      body: "En una pantalla grande podemos disponer varios elementos en columnas, mientras que en una pantalla pequeña puede ser necesario apilarlos verticalmente. También debemos revisar tamaños de texto, imágenes, botones y espacios para evitar que el contenido se corte o resulte difícil de utilizar.",
      highlight:
        "Adaptar no significa simplemente reducir el tamaño de todo: significa reorganizar la interfaz.",
    },
    {
      id: "wd-04-question-01",
      type: "question",
      prompt:
        "Una página tiene tres columnas en computadora. En un teléfono, el contenido queda demasiado estrecho. ¿Qué solución sería adecuada?",
      options: [
        {
          id: "wd-04-q1-option-01",
          label: "Mantener siempre las tres columnas",
          isCorrect: false,
        },
        {
          id: "wd-04-q1-option-02",
          label: "Reorganizar las columnas para mostrarlas verticalmente",
          isCorrect: true,
        },
        {
          id: "wd-04-q1-option-03",
          label: "Ocultar todo el contenido principal",
          isCorrect: false,
        },
      ],
      explanation:
        "En pantallas pequeñas, apilar las columnas permite aprovechar mejor el espacio y mantener una lectura cómoda.",
    },
    {
      id: "wd-04-step-03",
      type: "content",
      title: "Media queries",
      body: "Las media queries son una herramienta de CSS que permite aplicar estilos dependiendo de características del dispositivo o de la ventana, como su ancho. Por ejemplo, podemos cambiar la distribución de una cuadrícula cuando la pantalla alcanza un determinado tamaño.",
      highlight:
        "Las media queries permiten adaptar los estilos según las condiciones de visualización.",
    },
    {
      id: "wd-04-question-02",
      type: "question",
      prompt:
        "¿Qué herramienta de CSS permite aplicar estilos diferentes según el ancho de pantalla?",
      options: [
        {
          id: "wd-04-q2-option-01",
          label: "Media queries",
          isCorrect: true,
        },
        {
          id: "wd-04-q2-option-02",
          label: "HTML semántico",
          isCorrect: false,
        },
        {
          id: "wd-04-q2-option-03",
          label: "Atributos alt",
          isCorrect: false,
        },
      ],
      explanation:
        "Las media queries permiten establecer condiciones para aplicar estilos específicos, por ejemplo, cuando el ancho de pantalla es menor que cierto valor.",
    },
    {
      id: "wd-04-step-04",
      type: "content",
      title: "Imágenes y elementos flexibles",
      body: "Las imágenes y los contenedores deben adaptarse al espacio disponible. Es habitual utilizar unidades relativas, límites de ancho y propiedades como max-width: 100% para evitar que una imagen sobrepase el espacio de su contenedor.",
      highlight:
        "Los elementos flexibles ayudan a evitar desbordamientos en pantallas pequeñas.",
    },
    {
      id: "wd-04-question-03",
      type: "question",
      prompt:
        "Una imagen se sale de los límites de su contenedor en un teléfono. ¿Qué solución CSS puede ayudar?",
      options: [
        {
          id: "wd-04-q3-option-01",
          label: "Asignarle siempre un ancho fijo de 1200px",
          isCorrect: false,
        },
        {
          id: "wd-04-q3-option-02",
          label: "Utilizar max-width: 100%",
          isCorrect: true,
        },
        {
          id: "wd-04-q3-option-03",
          label: "Aumentar el margen de la página",
          isCorrect: false,
        },
      ],
      explanation:
        "max-width: 100% limita el ancho de la imagen al de su contenedor, evitando que lo sobrepase.",
    },
    {
      id: "wd-04-step-05",
      type: "content",
      title: "Pruebas y accesibilidad",
      body: "Un diseño adaptable debe probarse en diferentes tamaños de pantalla. También debemos comprobar que los textos sean legibles, los botones puedan utilizarse cómodamente, los contrastes sean suficientes y las funciones principales sigan disponibles.",
      highlight:
        "Una interfaz adaptable debe ser funcional, legible y accesible.",
    },
    {
      id: "wd-04-question-04",
      type: "question",
      prompt:
        "Después de adaptar una página a teléfonos, ¿qué deberías comprobar?",
      options: [
        {
          id: "wd-04-q4-option-01",
          label: "Solamente que los colores sean iguales",
          isCorrect: false,
        },
        {
          id: "wd-04-q4-option-02",
          label: "Que todo el contenido esté reducido al mínimo",
          isCorrect: false,
        },
        {
          id: "wd-04-q4-option-03",
          label:
            "Que el contenido sea legible y las funciones se puedan utilizar",
          isCorrect: true,
        },
      ],
      explanation:
        "La adaptación debe mantener una buena experiencia de uso. No basta con que los elementos quepan: también deben ser comprensibles y funcionales.",
    },
  ],
};