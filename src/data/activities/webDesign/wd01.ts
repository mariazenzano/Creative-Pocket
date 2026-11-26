import type { ActivityContent } from "../../../types/activity";

export const wd01: ActivityContent = {
  nodeId: "wd-01",
  type: "lesson",
  title: "Fundamentos del diseño web",
  introduction:
    "Descubre cómo se planifican y construyen las páginas web, combinando estructura, apariencia visual y experiencia de usuario.",
  steps: [
    {
      id: "wd-01-step-01",
      type: "content",
      title: "¿Qué es el diseño web?",
      body: "El diseño web es el proceso de planificar y crear la apariencia, organización y experiencia de un sitio web. Considera aspectos como la distribución de los elementos, los colores, la tipografía, la navegación y la facilidad de uso. Su objetivo es presentar información y permitir que las personas interactúen con ella.",
      highlight:
        "Diseñar para la web significa crear experiencias visuales y funcionales para las personas.",
    },
    {
      id: "wd-01-step-02",
      type: "content",
      title: "Las partes de una página web",
      body: "Una página web puede organizarse en distintas secciones. El encabezado suele contener el logotipo y la navegación; el contenido principal presenta la información más importante; y el pie de página reúne datos complementarios, enlaces o información de contacto. Cada sección cumple una función dentro de la experiencia.",
      highlight:
        "Una estructura clara ayuda a encontrar la información y comprender cómo navegar.",
    },
    {
      id: "wd-01-question-01",
      type: "question",
      prompt: "¿Cuál es uno de los principales objetivos del diseño web?",
      options: [
        {
          id: "wd-01-q1-option-01",
          label: "Crear páginas visualmente atractivas sin importar su uso",
          isCorrect: false,
        },
        {
          id: "wd-01-q1-option-02",
          label: "Crear experiencias digitales claras y funcionales",
          isCorrect: true,
        },
        {
          id: "wd-01-q1-option-03",
          label: "Utilizar la mayor cantidad posible de efectos",
          isCorrect: false,
        },
      ],
      explanation:
        "El diseño web busca combinar apariencia y funcionalidad para que las personas puedan comprender, recorrer e interactuar con un sitio.",
    },
    {
      id: "wd-01-step-03",
      type: "content",
      title: "Diseño y desarrollo web",
      body: "El diseño web define cómo se verá y cómo se utilizará una página. El desarrollo web se encarga de construir su funcionamiento mediante tecnologías como HTML, CSS y JavaScript. Ambas áreas trabajan juntas para convertir una propuesta visual en una experiencia digital funcional.",
      highlight:
        "El diseño define la experiencia; el desarrollo la convierte en una realidad funcional.",
    },
    {
      id: "wd-01-question-02",
      type: "question",
      prompt:
        "¿Qué tecnología se utiliza principalmente para definir la estructura y el contenido de una página web?",
      options: [
        {
          id: "wd-01-q2-option-01",
          label: "HTML",
          isCorrect: true,
        },
        {
          id: "wd-01-q2-option-02",
          label: "CSS",
          isCorrect: false,
        },
        {
          id: "wd-01-q2-option-03",
          label: "Photoshop",
          isCorrect: false,
        },
      ],
      explanation:
        "HTML organiza el contenido de una página mediante elementos como títulos, párrafos, imágenes y enlaces.",
    },
    {
      id: "wd-01-step-04",
      type: "content",
      title: "La experiencia de usuario",
      body: "La experiencia de usuario, conocida como UX, considera cómo una persona percibe e interactúa con un producto digital. En una página web implica facilitar la navegación, mantener una organización comprensible, ofrecer información clara y reducir las dificultades durante su uso.",
      highlight:
        "Una página web debe estar pensada para las personas que la utilizan.",
    },
    {
      id: "wd-01-question-03",
      type: "question",
      prompt:
        "Una página tiene botones difíciles de encontrar y una navegación confusa. ¿Qué aspecto necesita mejorar principalmente?",
      options: [
        {
          id: "wd-01-q3-option-01",
          label: "La cantidad de colores",
          isCorrect: false,
        },
        {
          id: "wd-01-q3-option-02",
          label: "La experiencia de usuario",
          isCorrect: true,
        },
        {
          id: "wd-01-q3-option-03",
          label: "El tamaño del archivo de imagen",
          isCorrect: false,
        },
      ],
      explanation:
        "La navegación y la facilidad para encontrar acciones son parte fundamental de la experiencia de usuario.",
    },
    {
      id: "wd-01-step-05",
      type: "content",
      title: "Planificar antes de diseñar",
      body: "Antes de construir una página web conviene definir su objetivo, identificar a quién está dirigida y organizar la información. Los bocetos y wireframes permiten visualizar la distribución de los elementos antes de trabajar en su apariencia final.",
      highlight:
        "Una buena página comienza con una idea clara y una estructura bien planificada.",
    },
    {
      id: "wd-01-question-04",
      type: "question",
      prompt: "¿Para qué sirve principalmente un wireframe?",
      options: [
        {
          id: "wd-01-q4-option-01",
          label: "Para definir la estructura y distribución de una interfaz",
          isCorrect: true,
        },
        {
          id: "wd-01-q4-option-02",
          label: "Para programar todas las funciones de una página",
          isCorrect: false,
        },
        {
          id: "wd-01-q4-option-03",
          label: "Para reemplazar el contenido de una página web",
          isCorrect: false,
        },
      ],
      explanation:
        "Un wireframe es una representación esquemática que permite organizar contenidos y elementos de una interfaz antes de desarrollar su diseño visual.",
    },
  ],
};