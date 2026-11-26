import type { ActivityContent } from "../types/activity";

// Educational content for activities
export const activityContents: ActivityContent[] = [
  // =====================================
  // REGION 1: GRAPHIC DESIGN
  // =====================================
  {
    nodeId: "gd-01",
    type: "lesson",
    title: "Fundamentos del diseño",
    introduction:
      "Descubre cómo los elementos visuales trabajan juntos para comunicar ideas y transmitir mensajes.",

    steps: [
      {
        id: "gd-01-step-01",
        type: "content",
        title: "¿Qué es el diseño gráfico?",
        body: "El diseño gráfico es una disciplina que utiliza elementos visuales para comunicar ideas, mensajes e información. Está presente en carteles, revistas, aplicaciones, marcas y muchos otros medios.",
        highlight:
          "El diseño no consiste solamente en hacer algo bonito: busca comunicar un mensaje.",
      },
      {
        id: "gd-01-step-02",
        type: "content",
        title: "Los elementos visuales",
        body: "Para construir una composición podemos utilizar puntos, líneas, formas, colores, imágenes y tipografías. Cada elemento cumple una función y aporta información visual.",
        highlight:
          "Los elementos visuales son las herramientas que utilizamos para diseñar.",
      },

      {
        id: "gd-01-question-01",
        type: "question",
        prompt: "¿Cuál es el principal objetivo del diseño gráfico?",
        options: [
          {
            id: "gd-01-q1-option-01",
            label: "Decorar espacios sin transmitir información",
            isCorrect: false,
          },
          {
            id: "gd-01-q1-option-02",
            label: "Comunicar ideas mediante elementos visuales",
            isCorrect: true,
          },
          {
            id: "gd-01-q1-option-03",
            label: "Utilizar únicamente colores llamativos",
            isCorrect: false,
          },
        ],
        explanation:
          "El diseño gráfico utiliza recursos visuales para transmitir ideas, mensajes e información de manera clara.",
      },

      {
        id: "gd-01-question-02",
        type: "question",
        prompt:
          "¿Cuál de estas opciones reúne elementos que forman parte de una composición visual?",
        options: [
          {
            id: "gd-01-q2-option-01",
            label: "Puntos, líneas, formas y tipografías",
            isCorrect: true,
          },
          {
            id: "gd-01-q2-option-02",
            label: "Únicamente fotografías y videos",
            isCorrect: false,
          },
          {
            id: "gd-01-q2-option-03",
            label: "Solamente textos y números",
            isCorrect: false,
          },
        ],
        explanation:
          "Una composición visual puede combinar puntos, líneas, formas, colores, imágenes y tipografías para construir un mensaje.",
      },

      {
        id: "gd-01-step-03",
        type: "content",
        title: "Diseñar es tomar decisiones",
        body: "Cada decisión visual influye en cómo interpretamos un mensaje. La elección de colores, tamaños, formas y tipografías puede cambiar la manera en que una persona entiende una composición.",
        highlight:
          "Un buen diseño combina creatividad, intención y comunicación.",
      },

      // QUESTION 3: APPLICATION
      {
        id: "gd-01-question-03",
        type: "question",
        prompt:
          "Debes diseñar un cartel para anunciar un evento. ¿Qué deberías definir primero?",
        options: [
          {
            id: "gd-01-q3-option-01",
            label: "Utilizar todos los colores disponibles",
            isCorrect: false,
          },
          {
            id: "gd-01-q3-option-02",
            label: "Elegir una tipografía decorativa",
            isCorrect: false,
          },
          {
            id: "gd-01-q3-option-03",
            label: "Definir el mensaje y a quién va dirigido",
            isCorrect: true,
          },
        ],
        explanation:
          "Antes de elegir los recursos visuales, debemos conocer qué queremos comunicar y quién recibirá el mensaje. Esto orienta todas las decisiones de diseño.",
      },
    ],
  },

  {
    nodeId: "gd-02",
    type: "exercise",
    title: "El mundo del color",
    introduction:
      "Explora cómo funcionan los colores, qué sensaciones transmiten y cómo combinarlos para crear composiciones visuales equilibradas.",

    steps: [
      {
        id: "gd-02-step-01",
        type: "content",
        title: "El color como herramienta de comunicación",
        body: "El color es uno de los recursos más importantes del diseño gráfico. Nos ayuda a destacar información, organizar elementos y transmitir sensaciones. Su significado puede cambiar según el contexto cultural y la forma en que se combina con otros colores.",
        highlight:
          "El color no solo decora: también comunica, diferencia y dirige la atención.",
      },
      {
        id: "gd-02-step-02",
        type: "content",
        title: "El círculo cromático",
        body: "El círculo cromático organiza los colores según sus relaciones. Los colores primarios tradicionales en el modelo artístico son rojo, amarillo y azul. Al mezclarlos obtenemos los secundarios: naranja, verde y violeta. Al combinar un primario con un secundario cercano aparecen los terciarios.",
        highlight:
          "El círculo cromático nos permite comprender cómo se relacionan los colores.",
      },
      {
        id: "gd-02-question-01",
        type: "question",
        prompt:
          "¿Cuáles son los tres colores primarios del modelo artístico tradicional RYB?",
        options: [
          {
            id: "gd-02-q1-option-01",
            label: "Rojo, amarillo y azul",
            isCorrect: true,
          },
          {
            id: "gd-02-q1-option-02",
            label: "Verde, naranja y violeta",
            isCorrect: false,
          },
          {
            id: "gd-02-q1-option-03",
            label: "Cian, magenta y negro",
            isCorrect: false,
          },
        ],
        explanation:
          "En el modelo tradicional RYB utilizado en las artes plásticas, los colores primarios son rojo, amarillo y azul. Los colores secundarios se obtienen al mezclar estos colores.",
      },
      {
        id: "gd-02-step-03",
        type: "content",
        title: "Temperatura del color",
        body: "Los colores también pueden clasificarse según su temperatura visual. Los cálidos, como rojos, naranjas y amarillos, suelen asociarse con energía, cercanía y dinamismo. Los fríos, como azules, verdes y violetas, pueden transmitir calma, tranquilidad o distancia.",
        highlight:
          "La temperatura del color ayuda a construir la atmósfera de una composición.",
      },
      {
        id: "gd-02-question-02",
        type: "question",
        prompt:
          "Estás diseñando un cartel para una actividad llena de energía y movimiento. ¿Qué grupo de colores podría ayudarte a transmitir esa sensación?",
        options: [
          {
            id: "gd-02-q2-option-01",
            label: "Azules y violetas suaves",
            isCorrect: false,
          },
          {
            id: "gd-02-q2-option-02",
            label: "Rojos, naranjas y amarillos",
            isCorrect: true,
          },
          {
            id: "gd-02-q2-option-03",
            label: "Grises y negros exclusivamente",
            isCorrect: false,
          },
        ],
        explanation:
          "Los rojos, naranjas y amarillos suelen transmitir energía, actividad y dinamismo. Son una opción adecuada cuando buscamos una composición visual intensa.",
      },
      {
        id: "gd-02-step-04",
        type: "content",
        title: "Armonías cromáticas",
        body: "Una armonía cromática es una combinación de colores que genera una relación visual. La armonía análoga utiliza colores cercanos en el círculo cromático. La complementaria combina colores opuestos, creando contraste. La monocromática utiliza variaciones de un mismo color mediante cambios de luminosidad y saturación.",
        highlight:
          "Combinar colores no es elegirlos al azar: es crear relaciones visuales con intención.",
      },
      {
        id: "gd-02-question-03",
        type: "question",
        prompt:
          "¿Qué caracteriza principalmente a una combinación de colores complementarios?",
        options: [
          {
            id: "gd-02-q3-option-01",
            label: "Utiliza diferentes tonos de un mismo color",
            isCorrect: false,
          },
          {
            id: "gd-02-q3-option-02",
            label: "Combina colores que están uno junto al otro",
            isCorrect: false,
          },
          {
            id: "gd-02-q3-option-03",
            label: "Combina colores opuestos en el círculo cromático",
            isCorrect: true,
          },
        ],
        explanation:
          "Los colores complementarios se encuentran en posiciones opuestas del círculo cromático. Su combinación genera un contraste visual marcado.",
      },
      {
        id: "gd-02-step-05",
        type: "content",
        title: "El color en una composición",
        body: "Al diseñar, debemos considerar la función de cada color. Podemos utilizar uno para destacar el elemento principal, otro para organizar la información y tonos neutros para equilibrar el conjunto. También es importante mantener suficiente contraste para facilitar la lectura.",
        highlight:
          "Una buena paleta de colores tiene intención, equilibrio y legibilidad.",
      },
      {
        id: "gd-02-question-04",
        type: "question",
        prompt:
          "Una aplicación utiliza texto amarillo sobre un fondo blanco. ¿Qué problema podría presentar esta combinación?",
        options: [
          {
            id: "gd-02-q4-option-01",
            label: "Un contraste insuficiente que dificulta la lectura",
            isCorrect: true,
          },
          {
            id: "gd-02-q4-option-02",
            label: "Demasiada profundidad visual",
            isCorrect: false,
          },
          {
            id: "gd-02-q4-option-03",
            label: "Una armonía complementaria",
            isCorrect: false,
          },
        ],
        explanation:
          "El amarillo claro sobre blanco tiene poco contraste, por lo que el texto puede resultar difícil de leer. La elección de colores también debe considerar la accesibilidad.",
      },
    ],
  },

  {
    nodeId: "gd-03",
    type: "exercise",
    title: "Explora la tipografía",
    introduction:
      "Descubre cómo las letras, sus formas y sus características influyen en la personalidad y legibilidad de un diseño.",

    steps: [
      {
        id: "gd-03-step-01",
        type: "content",
        title: "¿Qué es la tipografía?",
        body: "La tipografía es el estudio y uso de las letras como recurso visual y comunicativo. En diseño gráfico permite organizar información, transmitir personalidad y facilitar la lectura. No se trata únicamente de elegir una letra bonita, sino de encontrar una que funcione para el mensaje y su contexto.",
        highlight:
          "La tipografía comunica tanto por lo que dice como por la forma en que lo dice.",
      },
      {
        id: "gd-03-step-02",
        type: "content",
        title: "Anatomía de las letras",
        body: "Las letras están construidas por diferentes partes. Algunas características son el asta, que forma el trazo principal; el ojo, que es el espacio interior de ciertas letras; la altura de x, que corresponde a la altura de las minúsculas sin ascendentes ni descendentes; y las ascendentes y descendentes, que sobresalen de esa altura.",
        highlight:
          "Conocer la anatomía tipográfica ayuda a reconocer y comparar diferentes familias de letras.",
      },
      {
        id: "gd-03-question-01",
        type: "question",
        prompt:
          "¿Qué característica describe la altura de x en una tipografía?",
        options: [
          {
            id: "gd-03-q1-option-01",
            label: "La altura de las letras mayúsculas",
            isCorrect: false,
          },
          {
            id: "gd-03-q1-option-02",
            label:
              "La altura de las minúsculas sin ascendentes ni descendentes",
            isCorrect: true,
          },
          {
            id: "gd-03-q1-option-03",
            label: "El grosor de los trazos verticales",
            isCorrect: false,
          },
        ],
        explanation:
          "La altura de x es la altura de las letras minúsculas que no tienen partes ascendentes ni descendentes, como la x, la a o la e.",
      },
      {
        id: "gd-03-step-03",
        type: "content",
        title: "Familias tipográficas",
        body: "Las tipografías pueden clasificarse en diferentes familias. Las serif tienen pequeños remates en los extremos de sus trazos. Las sans serif no presentan esos remates y suelen tener una apariencia más limpia. Las script imitan la escritura manual y las display están diseñadas para destacar en títulos o composiciones especiales.",
        highlight:
          "Cada familia tipográfica tiene características que pueden ayudar a construir una identidad visual.",
      },
      {
        id: "gd-03-question-02",
        type: "question",
        prompt:
          "Necesitas diseñar una interfaz digital con textos que deben leerse con facilidad. ¿Qué característica podría ser una buena elección?",
        options: [
          {
            id: "gd-03-q2-option-01",
            label: "Una tipografía decorativa con muchos adornos",
            isCorrect: false,
          },
          {
            id: "gd-03-q2-option-02",
            label: "Una tipografía legible y adecuada para pantalla",
            isCorrect: true,
          },
          {
            id: "gd-03-q2-option-03",
            label: "Una tipografía diferente para cada párrafo",
            isCorrect: false,
          },
        ],
        explanation:
          "En una interfaz, la legibilidad es fundamental. Una tipografía clara y adecuada para pantalla facilita la lectura y mejora la experiencia de uso.",
      },
      {
        id: "gd-03-step-04",
        type: "content",
        title: "Jerarquía tipográfica",
        body: "La jerarquía tipográfica organiza los textos según su importancia. Podemos establecer títulos, subtítulos y cuerpos de texto mediante diferencias de tamaño, peso, estilo y posición. Esto permite que el lector identifique rápidamente qué información debe observar primero.",
        highlight:
          "Una jerarquía clara guía la lectura y organiza la información.",
      },
      {
        id: "gd-03-question-03",
        type: "question",
        prompt:
          "En un cartel, el título debe destacar sobre la información secundaria. ¿Qué recurso ayuda a conseguirlo?",
        options: [
          {
            id: "gd-03-q3-option-01",
            label: "Utilizar el mismo tamaño en todos los textos",
            isCorrect: false,
          },
          {
            id: "gd-03-q3-option-02",
            label: "Aumentar el tamaño o peso del título",
            isCorrect: true,
          },
          {
            id: "gd-03-q3-option-03",
            label: "Eliminar todos los espacios entre textos",
            isCorrect: false,
          },
        ],
        explanation:
          "El tamaño y el peso tipográfico permiten establecer niveles de importancia y ayudan a dirigir la atención hacia el título.",
      },
      {
        id: "gd-03-step-05",
        type: "content",
        title: "Combinación de tipografías",
        body: "En un mismo diseño podemos combinar diferentes familias tipográficas para generar contraste y jerarquía. Una combinación efectiva suele utilizar una tipografía para títulos y otra para textos extensos. Es importante que ambas se complementen y no compitan por la atención.",
        highlight:
          "Combinar tipografías requiere equilibrio: cada una debe cumplir una función.",
      },
      {
        id: "gd-03-question-04",
        type: "question",
        prompt:
          "¿Qué deberías considerar al combinar dos tipografías en un mismo diseño?",
        options: [
          {
            id: "gd-03-q4-option-01",
            label: "Que ambas tengan exactamente la misma apariencia",
            isCorrect: false,
          },
          {
            id: "gd-03-q4-option-02",
            label: "Que sean diferentes y no tengan ninguna relación",
            isCorrect: false,
          },
          {
            id: "gd-03-q4-option-03",
            label: "Que se complementen y mantengan una jerarquía clara",
            isCorrect: true,
          },
        ],
        explanation:
          "Las tipografías pueden generar contraste, pero deben complementarse y mantener la coherencia visual del diseño.",
      },
    ],
  },

  {
    nodeId: "gd-04",
    type: "challenge",
    title: "Composición visual",
    introduction:
      "Pon a prueba tu criterio visual. Aprende a organizar elementos, equilibrar espacios y construir composiciones que comuniquen con claridad.",

    steps: [
      {
        id: "gd-04-step-01",
        type: "content",
        title: "El arte de organizar elementos",
        body: "La composición visual es la manera en que distribuimos y relacionamos los elementos dentro de un espacio. En diseño gráfico permite establecer un recorrido visual, organizar la información y dirigir la atención hacia los elementos más importantes.",
        highlight:
          "Componer significa tomar decisiones sobre dónde y cómo aparece cada elemento.",
      },
      {
        id: "gd-04-step-02",
        type: "content",
        title: "Equilibrio visual",
        body: "El equilibrio visual se consigue distribuyendo el peso de los elementos dentro de una composición. Puede ser simétrico, cuando los elementos se organizan de manera similar a ambos lados de un eje, o asimétrico, cuando se utilizan elementos diferentes que mantienen una sensación de estabilidad.",
        highlight:
          "Una composición equilibrada no siempre necesita ser simétrica.",
      },
      {
        id: "gd-04-question-01",
        type: "question",
        prompt:
          "Un cartel tiene una imagen grande en el lado izquierdo y varios textos pequeños en el derecho. ¿Qué puede ayudar a equilibrar la composición?",
        options: [
          {
            id: "gd-04-q1-option-01",
            label:
              "Distribuir los elementos considerando su tamaño y peso visual",
            isCorrect: true,
          },
          {
            id: "gd-04-q1-option-02",
            label: "Colocar todos los elementos en una sola esquina",
            isCorrect: false,
          },
          {
            id: "gd-04-q1-option-03",
            label: "Eliminar todos los espacios vacíos",
            isCorrect: false,
          },
        ],
        explanation:
          "El equilibrio asimétrico se consigue distribuyendo elementos de distinto tamaño y peso visual para mantener una composición estable.",
      },
      {
        id: "gd-04-step-03",
        type: "content",
        title: "Contraste y jerarquía",
        body: "El contraste permite diferenciar elementos mediante variaciones de tamaño, color, forma, textura o grosor. La jerarquía establece un orden de importancia para que el espectador identifique primero la información principal y después los detalles secundarios.",
        highlight:
          "El contraste diferencia; la jerarquía organiza la importancia.",
      },
      {
        id: "gd-04-question-02",
        type: "question",
        prompt:
          "En una composición todos los elementos tienen el mismo tamaño, color y peso. ¿Qué dificultad podría aparecer?",
        options: [
          {
            id: "gd-04-q2-option-01",
            label: "Una jerarquía visual demasiado evidente",
            isCorrect: false,
          },
          {
            id: "gd-04-q2-option-02",
            label: "Dificultad para identificar qué elemento es más importante",
            isCorrect: true,
          },
          {
            id: "gd-04-q2-option-03",
            label: "Un exceso de contraste entre los elementos",
            isCorrect: false,
          },
        ],
        explanation:
          "Cuando todos los elementos tienen la misma importancia visual, resulta más difícil reconocer cuál debe captar primero nuestra atención.",
      },
      {
        id: "gd-04-step-04",
        type: "content",
        title: "Espacio negativo",
        body: "El espacio negativo es el área libre que rodea o separa los elementos de una composición. No significa que sea un espacio desperdiciado: permite respirar visualmente, mejorar la legibilidad y destacar los elementos importantes.",
        highlight: "El espacio vacío también forma parte del diseño.",
      },
      {
        id: "gd-04-question-03",
        type: "question",
        prompt:
          "Un diseño tiene demasiados elementos amontonados. ¿Qué decisión podría mejorar su claridad?",
        options: [
          {
            id: "gd-04-q3-option-01",
            label: "Añadir más elementos decorativos",
            isCorrect: false,
          },
          {
            id: "gd-04-q3-option-02",
            label: "Reducir los márgenes y eliminar todos los espacios",
            isCorrect: false,
          },
          {
            id: "gd-04-q3-option-03",
            label:
              "Reorganizar los elementos y utilizar mejor el espacio negativo",
            isCorrect: true,
          },
        ],
        explanation:
          "El espacio negativo ayuda a separar elementos, mejorar la lectura y dar protagonismo a la información principal.",
      },
      {
        id: "gd-04-step-05",
        type: "content",
        title: "Recorrido visual",
        body: "El recorrido visual es el camino que sigue nuestra mirada al observar una composición. Podemos orientarlo mediante la ubicación de los elementos, las líneas, el contraste, el tamaño y la dirección de las imágenes. Una buena organización facilita que el espectador encuentre la información en el orden previsto.",
        highlight:
          "Una composición efectiva guía la mirada sin confundir al espectador.",
      },
      {
        id: "gd-04-question-04",
        type: "question",
        prompt:
          "Diseñas un anuncio y quieres que el espectador vea primero el título, después la imagen y finalmente los detalles. ¿Qué debes construir?",
        options: [
          {
            id: "gd-04-q4-option-01",
            label: "Una jerarquía y un recorrido visual claros",
            isCorrect: true,
          },
          {
            id: "gd-04-q4-option-02",
            label: "Una distribución aleatoria de los elementos",
            isCorrect: false,
          },
          {
            id: "gd-04-q4-option-03",
            label: "Una composición donde todos los textos destaquen igual",
            isCorrect: false,
          },
        ],
        explanation:
          "La jerarquía visual y la organización de los elementos permiten orientar la mirada y establecer el orden de lectura.",
      },
    ],
  },

  {
    nodeId: "gd-05",
    type: "project",
    title: "Diseña tu primer cartel",
    introduction:
      "Llegó el momento de aplicar lo aprendido. Planifica un cartel que comunique un mensaje claro mediante el color, la tipografía y la composición visual.",

    steps: [
      {
        id: "gd-05-step-01",
        type: "content",
        title: "El reto: comunicar una idea",
        body: "Imagina que debes crear un cartel para promocionar un evento creativo dirigido a estudiantes universitarios. Tu objetivo será captar su atención, comunicar la información principal y generar interés por participar. Antes de diseñar, necesitas comprender qué estás comunicando y a quién.",
        highlight:
          "Todo proyecto de diseño comienza con un objetivo de comunicación.",
      },
      {
        id: "gd-05-question-01",
        type: "question",
        prompt: "Antes de comenzar tu cartel, ¿qué deberías definir?",
        options: [
          {
            id: "gd-05-q1-option-01",
            label: "El mensaje principal y el público al que va dirigido",
            isCorrect: true,
          },
          {
            id: "gd-05-q1-option-02",
            label: "La cantidad de elementos decorativos",
            isCorrect: false,
          },
          {
            id: "gd-05-q1-option-03",
            label: "Una tipografía diferente para cada palabra",
            isCorrect: false,
          },
        ],
        explanation:
          "Definir el mensaje y el público permite tomar decisiones visuales coherentes con el propósito del cartel.",
      },
      {
        id: "gd-05-step-02",
        type: "content",
        title: "Construye una dirección visual",
        body: "Una vez definido el objetivo, establece una dirección visual. Elige una paleta cromática que acompañe el mensaje, selecciona tipografías legibles y determina qué sensación quieres transmitir. Los colores y las letras deben trabajar juntos para construir una identidad coherente.",
        highlight:
          "Cada recurso visual debe tener una razón para estar en tu composición.",
      },
      {
        id: "gd-05-question-02",
        type: "question",
        prompt:
          "Tu cartel promociona un festival creativo y juvenil. ¿Qué criterio deberías seguir al elegir los colores?",
        options: [
          {
            id: "gd-05-q2-option-01",
            label:
              "Elegir colores al azar para utilizar la mayor cantidad posible",
            isCorrect: false,
          },
          {
            id: "gd-05-q2-option-02",
            label:
              "Seleccionar una paleta que refuerce el mensaje y mantenga buena legibilidad",
            isCorrect: true,
          },
          {
            id: "gd-05-q2-option-03",
            label: "Utilizar únicamente colores que estén de moda",
            isCorrect: false,
          },
        ],
        explanation:
          "La paleta debe responder al concepto del proyecto y permitir que la información se comprenda con facilidad.",
      },
      {
        id: "gd-05-step-03",
        type: "content",
        title: "Organiza la información",
        body: "Un cartel necesita una jerarquía clara. El título o nombre del evento debe destacar; la fecha, el lugar y los datos importantes deben ser fáciles de encontrar. Puedes utilizar diferencias de tamaño, peso tipográfico, posición y espacio negativo para organizar la lectura.",
        highlight:
          "El espectador debe comprender rápidamente qué anuncia tu cartel y dónde encontrar los detalles.",
      },
      {
        id: "gd-05-question-03",
        type: "question",
        prompt:
          "¿Cuál sería una organización adecuada para la información de tu cartel?",
        options: [
          {
            id: "gd-05-q3-option-01",
            label:
              "Destacar el título y organizar los datos secundarios en otro nivel",
            isCorrect: true,
          },
          {
            id: "gd-05-q3-option-02",
            label: "Colocar todos los textos con el mismo tamaño",
            isCorrect: false,
          },
          {
            id: "gd-05-q3-option-03",
            label: "Ocultar la fecha y el lugar entre elementos decorativos",
            isCorrect: false,
          },
        ],
        explanation:
          "Una jerarquía tipográfica permite identificar primero la información principal y después los detalles complementarios.",
      },
      {
        id: "gd-05-step-04",
        type: "content",
        title: "Equilibra tu composición",
        body: "Distribuye los elementos dentro del formato del cartel. Considera el equilibrio visual, los márgenes, el espacio negativo y el recorrido de la mirada. Evita saturar el diseño y comprueba que cada elemento tenga suficiente espacio para cumplir su función.",
        highlight:
          "Una composición bien organizada permite que el mensaje destaque sin competir con elementos innecesarios.",
      },
      {
        id: "gd-05-question-04",
        type: "question",
        prompt:
          "Al revisar tu cartel notas que la información está amontonada y cuesta leerla. ¿Qué deberías hacer?",
        options: [
          {
            id: "gd-05-q4-option-01",
            label: "Añadir más textos y recursos decorativos",
            isCorrect: false,
          },
          {
            id: "gd-05-q4-option-02",
            label: "Reducir todos los elementos hasta que sean muy pequeños",
            isCorrect: false,
          },
          {
            id: "gd-05-q4-option-03",
            label:
              "Reorganizar la información, mejorar los espacios y revisar la jerarquía",
            isCorrect: true,
          },
        ],
        explanation:
          "Reorganizar los elementos y recuperar el espacio negativo ayuda a mejorar la legibilidad y el equilibrio visual.",
      },
      {
        id: "gd-05-step-05",
        type: "content",
        title: "Tu primer proyecto de diseño",
        body: "Ya tienes los criterios necesarios para desarrollar tu cartel. Recuerda revisar el mensaje, la paleta cromática, las tipografías, la jerarquía y la composición. Un buen proyecto no depende de utilizar muchos recursos, sino de tomar decisiones visuales que respondan a un propósito.",
        highlight:
          "Diseñar es transformar una idea en un mensaje visual con intención.",
      },
    ],
  },

  {
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
  },

  {
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
  },

  {
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
  },

  {
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
  },

  {
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
  },

  {
    nodeId: "av-01",
    type: "lesson",
    title: "Lenguaje audiovisual",
    introduction:
      "Descubre cómo las imágenes, los sonidos y el movimiento se combinan para contar historias y transmitir emociones.",

    steps: [
      {
        id: "av-01-step-01",
        type: "content",
        title: "¿Qué es el lenguaje audiovisual?",
        body: "El lenguaje audiovisual es un sistema de comunicación que combina imágenes y sonidos para transmitir ideas, emociones e historias. Está presente en películas, videos, anuncios, documentales y contenidos digitales. Cada decisión visual y sonora influye en cómo el espectador interpreta lo que observa.",
        highlight:
          "El lenguaje audiovisual comunica mediante la combinación de imagen y sonido.",
      },
      {
        id: "av-01-step-02",
        type: "content",
        title: "El plano y su función",
        body: "El plano es una unidad visual que representa una parte de la acción dentro de una producción audiovisual. El plano general muestra el entorno y la relación de los personajes con él; el plano medio presenta a una persona aproximadamente desde la cintura; y el primer plano destaca el rostro y sus expresiones.",
        highlight:
          "Cada tipo de plano permite mostrar información de una manera diferente.",
      },
      {
        id: "av-01-question-01",
        type: "question",
        prompt:
          "Quieres mostrar a un personaje y el entorno donde se encuentra. ¿Qué tipo de plano sería adecuado?",
        options: [
          {
            id: "av-01-q1-option-01",
            label: "Primer plano",
            isCorrect: false,
          },
          {
            id: "av-01-q1-option-02",
            label: "Plano general",
            isCorrect: true,
          },
          {
            id: "av-01-q1-option-03",
            label: "Plano detalle",
            isCorrect: false,
          },
        ],
        explanation:
          "El plano general permite observar al personaje dentro de su entorno y comprender mejor el espacio donde sucede la acción.",
      },
      {
        id: "av-01-step-03",
        type: "content",
        title: "Ángulos y movimientos de cámara",
        body: "El ángulo de cámara determina desde qué posición observamos una escena. Un ángulo normal sitúa la cámara aproximadamente a la altura del sujeto; el picado observa desde arriba y el contrapicado desde abajo. Los movimientos de cámara, como el paneo o el travelling, permiten acompañar la acción y revelar información.",
        highlight:
          "La posición y el movimiento de cámara modifican la percepción de una escena.",
      },
      {
        id: "av-01-question-02",
        type: "question",
        prompt:
          "En una escena quieres mostrar a un personaje desde una posición que lo haga parecer imponente. ¿Qué ángulo podrías utilizar?",
        options: [
          {
            id: "av-01-q2-option-01",
            label: "Contrapicado",
            isCorrect: true,
          },
          {
            id: "av-01-q2-option-02",
            label: "Picado",
            isCorrect: false,
          },
          {
            id: "av-01-q2-option-03",
            label: "Ángulo cenital",
            isCorrect: false,
          },
        ],
        explanation:
          "El contrapicado sitúa la cámara por debajo del sujeto y puede transmitir una sensación de grandeza, poder o importancia.",
      },
      {
        id: "av-01-step-04",
        type: "content",
        title: "La importancia del sonido",
        body: "El sonido complementa la imagen y aporta información que puede no estar presente visualmente. La música crea ambientes y emociones; los efectos sonoros representan acciones o elementos del entorno; y los diálogos permiten comunicar ideas mediante la voz de los personajes.",
        highlight:
          "El sonido no solo acompaña a la imagen: también construye significado.",
      },
      {
        id: "av-01-question-03",
        type: "question",
        prompt:
          "En un video se escucha el sonido de la lluvia aunque no aparezca en pantalla. ¿Qué función cumple ese sonido?",
        options: [
          {
            id: "av-01-q3-option-01",
            label: "Crear ambiente y aportar información sobre el entorno",
            isCorrect: true,
          },
          {
            id: "av-01-q3-option-02",
            label: "Reemplazar todos los elementos visuales",
            isCorrect: false,
          },
          {
            id: "av-01-q3-option-03",
            label: "Modificar el encuadre de la cámara",
            isCorrect: false,
          },
        ],
        explanation:
          "Los efectos sonoros ayudan a representar el ambiente y aportan información que complementa lo que vemos.",
      },
      {
        id: "av-01-step-05",
        type: "content",
        title: "Montaje y continuidad",
        body: "El montaje organiza los planos y sonidos para construir una secuencia comprensible. La continuidad busca mantener la coherencia entre las tomas, considerando la dirección de movimiento, la posición de los personajes y la relación temporal entre las acciones.",
        highlight:
          "El montaje transforma tomas individuales en una experiencia audiovisual coherente.",
      },
      {
        id: "av-01-question-04",
        type: "question",
        prompt: "¿Cuál es la función principal del montaje audiovisual?",
        options: [
          {
            id: "av-01-q4-option-01",
            label: "Aumentar la resolución de las imágenes",
            isCorrect: false,
          },
          {
            id: "av-01-q4-option-02",
            label: "Organizar imágenes y sonidos para construir una secuencia",
            isCorrect: true,
          },
          {
            id: "av-01-q4-option-03",
            label: "Cambiar automáticamente el formato del video",
            isCorrect: false,
          },
        ],
        explanation:
          "El montaje selecciona y organiza los planos y sonidos para construir el ritmo, la continuidad y el significado de una producción.",
      },
    ],
  },

  {
    nodeId: "av-02",
    type: "exercise",
    title: "Fundamentos de fotografía",
    introduction:
      "Aprende cómo la luz, la exposición, el encuadre y la composición permiten construir imágenes con intención.",

    steps: [
      {
        id: "av-02-step-01",
        type: "content",
        title: "La fotografía como lenguaje visual",
        body: "La fotografía es una forma de comunicación visual que permite registrar, interpretar y transmitir momentos, ideas y emociones mediante imágenes. El fotógrafo toma decisiones sobre la luz, el encuadre, la composición y el momento de captura para construir una imagen con intención.",
        highlight:
          "Fotografiar no es solamente registrar lo que vemos: también es decidir cómo queremos mostrarlo.",
      },
      {
        id: "av-02-step-02",
        type: "content",
        title: "El triángulo de exposición",
        body: "La exposición determina cuánta luz recibe el sensor de la cámara. Se controla mediante tres elementos: apertura del diafragma, velocidad de obturación e ISO. La apertura regula la entrada de luz y afecta la profundidad de campo; la velocidad controla el tiempo de captura y el movimiento; y el ISO modifica la sensibilidad del sensor, influyendo también en el ruido de la imagen.",
        highlight:
          "Apertura, velocidad e ISO trabajan juntos para controlar la exposición.",
      },
      {
        id: "av-02-question-01",
        type: "question",
        prompt:
          "¿Qué elemento del triángulo de exposición controla principalmente el tiempo durante el cual la cámara registra la luz?",
        options: [
          {
            id: "av-02-q1-option-01",
            label: "La velocidad de obturación",
            isCorrect: true,
          },
          {
            id: "av-02-q1-option-02",
            label: "La apertura del diafragma",
            isCorrect: false,
          },
          {
            id: "av-02-q1-option-03",
            label: "El balance de blancos",
            isCorrect: false,
          },
        ],
        explanation:
          "La velocidad de obturación determina cuánto tiempo permanece abierto el obturador durante la captura de una fotografía.",
      },
      {
        id: "av-02-step-03",
        type: "content",
        title: "Enfoque y profundidad de campo",
        body: "El enfoque determina qué parte de la imagen aparece nítida. La profundidad de campo es la zona que se percibe enfocada delante y detrás del punto de enfoque. Puede ser reducida para destacar un sujeto sobre un fondo desenfocado o amplia para mantener más elementos nítidos.",
        highlight:
          "El enfoque permite decidir qué elemento recibe mayor atención visual.",
      },
      {
        id: "av-02-question-02",
        type: "question",
        prompt:
          "Quieres fotografiar un objeto y conseguir que el fondo aparezca desenfocado. ¿Qué resultado buscas?",
        options: [
          {
            id: "av-02-q2-option-01",
            label: "Mayor profundidad de campo",
            isCorrect: false,
          },
          {
            id: "av-02-q2-option-02",
            label: "Menor profundidad de campo",
            isCorrect: true,
          },
          {
            id: "av-02-q2-option-03",
            label: "Mayor saturación",
            isCorrect: false,
          },
        ],
        explanation:
          "Una profundidad de campo reducida permite mantener enfocado al sujeto mientras el fondo aparece más desenfocado.",
      },
      {
        id: "av-02-step-04",
        type: "content",
        title: "Encuadre y composición",
        body: "El encuadre define qué elementos aparecen dentro de una fotografía y cómo se distribuyen. La regla de los tercios divide la imagen en nueve partes mediante dos líneas horizontales y dos verticales. Ubicar elementos cerca de sus intersecciones puede ayudar a crear composiciones equilibradas y dinámicas.",
        highlight:
          "El encuadre determina qué mostramos y cómo organizamos lo que aparece en la imagen.",
      },
      {
        id: "av-02-question-03",
        type: "question",
        prompt: "¿En cuántas partes divide la imagen la regla de los tercios?",
        options: [
          {
            id: "av-02-q3-option-01",
            label: "Cuatro partes",
            isCorrect: false,
          },
          {
            id: "av-02-q3-option-02",
            label: "Seis partes",
            isCorrect: false,
          },
          {
            id: "av-02-q3-option-03",
            label: "Nueve partes",
            isCorrect: true,
          },
        ],
        explanation:
          "La regla de los tercios divide la imagen en nueve áreas iguales mediante dos líneas horizontales y dos verticales.",
      },
      {
        id: "av-02-step-05",
        type: "content",
        title: "La luz y su dirección",
        body: "La iluminación modifica la apariencia de los objetos y las personas. La luz frontal reduce algunas sombras; la luz lateral permite destacar volúmenes y texturas; y la luz posterior puede crear siluetas o separar al sujeto del fondo. La calidad de la luz también influye en la dureza de las sombras.",
        highlight:
          "La dirección y la calidad de la luz transforman la atmósfera de una fotografía.",
      },
      {
        id: "av-02-question-04",
        type: "question",
        prompt:
          "Quieres destacar la textura de un objeto mediante sombras y relieves. ¿Qué iluminación puede ayudarte?",
        options: [
          {
            id: "av-02-q4-option-01",
            label: "Luz lateral",
            isCorrect: true,
          },
          {
            id: "av-02-q4-option-02",
            label: "Luz frontal completamente uniforme",
            isCorrect: false,
          },
          {
            id: "av-02-q4-option-03",
            label: "Ausencia total de luz",
            isCorrect: false,
          },
        ],
        explanation:
          "La luz lateral produce sombras que permiten apreciar mejor los volúmenes y las texturas de una superficie.",
      },
    ],
  },

  {
    nodeId: "av-03",
    type: "exercise",
    title: "Narrativa y guion",
    introduction:
      "Descubre cómo transformar una idea en una historia audiovisual mediante personajes, conflictos, estructura y recursos narrativos.",

    steps: [
      {
        id: "av-03-step-01",
        type: "content",
        title: "Contar historias con imágenes",
        body: "La narrativa audiovisual organiza imágenes, sonidos y acciones para contar una historia. Puede presentar hechos reales o ficticios y busca generar una experiencia en el espectador. Para construirla necesitamos una idea, personajes, acciones y una secuencia de acontecimientos.",
        highlight:
          "Una historia audiovisual necesita una idea y una forma de desarrollarla.",
      },
      {
        id: "av-03-step-02",
        type: "content",
        title: "Personajes y conflicto",
        body: "Los personajes participan en los acontecimientos de una historia. El protagonista suele ser quien impulsa la acción, mientras que otros personajes pueden acompañarlo o representar obstáculos. El conflicto es el problema o desafío que genera tensión y permite que la historia avance.",
        highlight:
          "El conflicto proporciona una razón para que la historia se desarrolle.",
      },
      {
        id: "av-03-question-01",
        type: "question",
        prompt:
          "¿Qué función cumple principalmente el conflicto en una historia?",
        options: [
          {
            id: "av-03-q1-option-01",
            label: "Generar un problema o desafío que impulse la acción",
            isCorrect: true,
          },
          {
            id: "av-03-q1-option-02",
            label: "Describir únicamente el escenario",
            isCorrect: false,
          },
          {
            id: "av-03-q1-option-03",
            label: "Eliminar la participación de los personajes",
            isCorrect: false,
          },
        ],
        explanation:
          "El conflicto introduce un desafío que impulsa las decisiones de los personajes y permite que la historia avance.",
      },
      {
        id: "av-03-step-03",
        type: "content",
        title: "La estructura narrativa",
        body: "Una estructura narrativa tradicional se organiza en tres momentos: planteamiento, desarrollo y desenlace. El planteamiento presenta a los personajes y la situación inicial; el desarrollo muestra cómo evoluciona el conflicto; y el desenlace presenta la resolución o conclusión de la historia.",
        highlight:
          "Planteamiento, desarrollo y desenlace organizan el recorrido de una historia.",
      },
      {
        id: "av-03-question-02",
        type: "question",
        prompt:
          "En una historia, el protagonista descubre un problema que debe resolver. ¿En qué parte de la estructura suele desarrollarse esta situación?",
        options: [
          {
            id: "av-03-q2-option-01",
            label: "Únicamente en el desenlace",
            isCorrect: false,
          },
          {
            id: "av-03-q2-option-02",
            label: "En el desarrollo",
            isCorrect: true,
          },
          {
            id: "av-03-q2-option-03",
            label: "Después de los créditos",
            isCorrect: false,
          },
        ],
        explanation:
          "El desarrollo presenta la evolución del conflicto y las acciones que realizan los personajes para enfrentarlo.",
      },
      {
        id: "av-03-step-04",
        type: "content",
        title: "Del argumento al guion",
        body: "El argumento resume los acontecimientos principales de una historia. El guion desarrolla esos acontecimientos de manera organizada e incluye escenas, acciones, diálogos y, según el formato, indicaciones visuales y sonoras. Es una guía para planificar la producción audiovisual.",
        highlight:
          "El guion convierte una idea narrativa en una propuesta organizada para producirla.",
      },
      {
        id: "av-03-question-03",
        type: "question",
        prompt: "¿Qué información puede contener un guion audiovisual?",
        options: [
          {
            id: "av-03-q3-option-01",
            label: "Únicamente el título de la producción",
            isCorrect: false,
          },
          {
            id: "av-03-q3-option-02",
            label: "Solo una lista de colores",
            isCorrect: false,
          },
          {
            id: "av-03-q3-option-03",
            label: "Escenas, acciones y diálogos",
            isCorrect: true,
          },
        ],
        explanation:
          "El guion organiza las escenas, acciones y diálogos necesarios para desarrollar la historia audiovisual.",
      },
      {
        id: "av-03-step-05",
        type: "content",
        title: "Storyboard: visualizar la historia",
        body: "El storyboard es una secuencia de ilustraciones que representa visualmente las escenas de una producción. Ayuda a planificar encuadres, acciones, movimientos de cámara y transiciones antes de grabar. No necesita ser una ilustración detallada: su objetivo es comunicar cómo se desarrollará visualmente cada momento.",
        highlight:
          "El storyboard permite anticipar visualmente una producción antes de realizarla.",
      },
      {
        id: "av-03-question-04",
        type: "question",
        prompt: "¿Para qué sirve principalmente un storyboard?",
        options: [
          {
            id: "av-03-q4-option-01",
            label: "Para visualizar y planificar las escenas de una producción",
            isCorrect: true,
          },
          {
            id: "av-03-q4-option-02",
            label: "Para corregir automáticamente el sonido",
            isCorrect: false,
          },
          {
            id: "av-03-q4-option-03",
            label: "Para reemplazar la edición final",
            isCorrect: false,
          },
        ],
        explanation:
          "El storyboard permite organizar visualmente las escenas y anticipar cómo se desarrollará la producción.",
      },
    ],
  },

  {
    nodeId: "av-04",
    type: "challenge",
    title: "Edición y montaje",
    introduction:
      "Pon a prueba tus conocimientos sobre edición, ritmo, continuidad y sonido para construir una pieza audiovisual coherente.",

    steps: [
      {
        id: "av-04-step-01",
        type: "content",
        title: "¿Qué es la edición audiovisual?",
        body: "La edición audiovisual es el proceso de seleccionar, organizar y ajustar los materiales registrados durante una producción. Permite construir una secuencia, definir su duración, ordenar las acciones y comunicar una intención mediante imágenes y sonidos.",
        highlight:
          "Editar significa tomar decisiones para construir una experiencia audiovisual.",
      },
      {
        id: "av-04-step-02",
        type: "content",
        title: "La línea de tiempo",
        body: "La línea de tiempo es el espacio de trabajo donde se organizan los clips, pistas de audio, títulos y otros elementos según su duración y posición temporal. Generalmente permite trabajar con varias pistas para combinar imagen, sonido y recursos gráficos.",
        highlight:
          "La línea de tiempo permite organizar los elementos audiovisuales en el tiempo.",
      },
      {
        id: "av-04-question-01",
        type: "question",
        prompt:
          "En un programa de edición quieres colocar música debajo de un video. ¿Dónde puedes organizar ambos elementos?",
        options: [
          {
            id: "av-04-q1-option-01",
            label: "En la línea de tiempo, utilizando pistas",
            isCorrect: true,
          },
          {
            id: "av-04-q1-option-02",
            label: "Únicamente en el panel de exportación",
            isCorrect: false,
          },
          {
            id: "av-04-q1-option-03",
            label: "En el nombre del archivo",
            isCorrect: false,
          },
        ],
        explanation:
          "La línea de tiempo permite organizar clips de video y audio en pistas para construir la secuencia.",
      },
      {
        id: "av-04-step-03",
        type: "content",
        title: "Ritmo y transiciones",
        body: "El ritmo audiovisual depende de la duración de los planos, la frecuencia de los cortes y la relación entre imagen y sonido. Las transiciones conectan dos planos o escenas. Un corte directo cambia de una toma a otra, mientras que un fundido puede utilizarse para introducir o cerrar una secuencia.",
        highlight:
          "El ritmo determina cómo se percibe el tiempo y la energía de una producción.",
      },
      {
        id: "av-04-question-02",
        type: "question",
        prompt:
          "Un video necesita mostrar una secuencia dinámica y rápida. ¿Qué decisión puede ayudar a construir ese ritmo?",
        options: [
          {
            id: "av-04-q2-option-01",
            label: "Utilizar planos más cortos y cortes frecuentes",
            isCorrect: true,
          },
          {
            id: "av-04-q2-option-02",
            label: "Mantener una única imagen durante todo el video",
            isCorrect: false,
          },
          {
            id: "av-04-q2-option-03",
            label: "Eliminar todos los cambios entre planos",
            isCorrect: false,
          },
        ],
        explanation:
          "Los planos de menor duración y los cortes frecuentes pueden generar una sensación de rapidez y dinamismo.",
      },
      {
        id: "av-04-step-04",
        type: "content",
        title: "Continuidad audiovisual",
        body: "La continuidad busca que los cambios entre planos mantengan una relación lógica. Debemos prestar atención a la posición de los personajes, la dirección de sus movimientos, la iluminación y el sonido. Cuando estos aspectos cambian sin intención, el espectador puede percibir saltos o inconsistencias.",
        highlight:
          "La continuidad ayuda a que las escenas se perciban como parte de una misma acción.",
      },
      {
        id: "av-04-question-03",
        type: "question",
        prompt:
          "Un personaje aparece mirando hacia la derecha en un plano y, sin una razón narrativa, hacia la izquierda en el siguiente. ¿Qué podría afectar este cambio?",
        options: [
          {
            id: "av-04-q3-option-01",
            label: "La resolución del video",
            isCorrect: false,
          },
          {
            id: "av-04-q3-option-02",
            label: "La continuidad visual",
            isCorrect: true,
          },
          {
            id: "av-04-q3-option-03",
            label: "El formato del archivo de audio",
            isCorrect: false,
          },
        ],
        explanation:
          "Los cambios de dirección o posición sin una transición coherente pueden generar una ruptura de continuidad entre planos.",
      },
      {
        id: "av-04-step-05",
        type: "content",
        title: "Audio y exportación",
        body: "La edición también incluye ajustar niveles de audio, sincronizar sonidos y revisar que los diálogos sean comprensibles. Al finalizar, debemos elegir un formato de exportación y parámetros adecuados, como resolución, frecuencia de cuadros y calidad, según el medio donde se compartirá el video.",
        highlight:
          "Una buena edición también necesita una revisión técnica antes de exportarse.",
      },
      {
        id: "av-04-question-04",
        type: "question",
        prompt: "Antes de exportar un video, ¿qué deberías comprobar?",
        options: [
          {
            id: "av-04-q4-option-01",
            label: "Que solo exista una pista en la línea de tiempo",
            isCorrect: false,
          },
          {
            id: "av-04-q4-option-02",
            label: "Que el video tenga el mayor tamaño posible",
            isCorrect: false,
          },
          {
            id: "av-04-q4-option-03",
            label:
              "Que imagen, sonido, duración y parámetros de exportación sean correctos",
            isCorrect: true,
          },
        ],
        explanation:
          "Una revisión final permite detectar errores de sincronización, niveles de sonido, cortes y configuración de exportación.",
      },
    ],
  },

  {
    nodeId: "av-05",
    type: "project",
    title: "Tu primera pieza audiovisual",
    introduction:
      "Integra lo aprendido y planifica una pieza audiovisual breve que combine narrativa, fotografía, sonido y edición.",

    steps: [
      {
        id: "av-05-step-01",
        type: "content",
        title: "El reto: contar una historia",
        body: "Imagina que debes crear un video breve para presentar una iniciativa creativa. Tu pieza debe comunicar una idea, captar la atención y transmitir una emoción. Antes de grabar, define qué quieres contar, a quién te diriges y qué sensación quieres generar.",
        highlight:
          "Toda producción audiovisual comienza con una intención narrativa.",
      },
      {
        id: "av-05-question-01",
        type: "question",
        prompt:
          "¿Qué deberías definir antes de comenzar a grabar tu pieza audiovisual?",
        options: [
          {
            id: "av-05-q1-option-01",
            label: "El objetivo, el mensaje y el público",
            isCorrect: true,
          },
          {
            id: "av-05-q1-option-02",
            label: "Únicamente los efectos de transición",
            isCorrect: false,
          },
          {
            id: "av-05-q1-option-03",
            label: "El formato de exportación sin conocer el contenido",
            isCorrect: false,
          },
        ],
        explanation:
          "Definir el objetivo y el público permite orientar las decisiones narrativas, visuales y sonoras de la producción.",
      },
      {
        id: "av-05-step-02",
        type: "content",
        title: "Planifica las escenas",
        body: "Organiza tu idea mediante un guion sencillo. Divide la historia en planteamiento, desarrollo y desenlace. Después, utiliza un storyboard para representar los planos principales, los encuadres y las acciones que necesitarás registrar.",
        highlight:
          "Planificar las escenas ayuda a grabar con una intención clara.",
      },
      {
        id: "av-05-question-02",
        type: "question",
        prompt:
          "Ya tienes tu idea y necesitas visualizar los planos antes de grabar. ¿Qué recurso deberías preparar?",
        options: [
          {
            id: "av-05-q2-option-01",
            label: "Una lista de colores sin relación con las escenas",
            isCorrect: false,
          },
          {
            id: "av-05-q2-option-02",
            label: "Un storyboard",
            isCorrect: true,
          },
          {
            id: "av-05-q2-option-03",
            label: "Una configuración de exportación",
            isCorrect: false,
          },
        ],
        explanation:
          "El storyboard permite representar las escenas y planificar los encuadres antes de iniciar la grabación.",
      },
      {
        id: "av-05-step-03",
        type: "content",
        title: "Construye la propuesta visual y sonora",
        body: "Selecciona los tipos de plano, ángulos e iluminación que ayudarán a contar tu historia. Considera también la música, los efectos sonoros y los diálogos. La imagen y el sonido deben complementarse para reforzar el mensaje.",
        highlight:
          "La propuesta visual y sonora debe trabajar en conjunto para comunicar la historia.",
      },
      {
        id: "av-05-question-03",
        type: "question",
        prompt:
          "Tu video transmite una sensación de tranquilidad. ¿Qué decisión sonora podría reforzar esa intención?",
        options: [
          {
            id: "av-05-q3-option-01",
            label: "Incorporar sonidos y música coherentes con esa atmósfera",
            isCorrect: true,
          },
          {
            id: "av-05-q3-option-02",
            label: "Añadir sonidos aleatorios que distraigan",
            isCorrect: false,
          },
          {
            id: "av-05-q3-option-03",
            label: "Eliminar todos los sonidos sin revisar la propuesta",
            isCorrect: false,
          },
        ],
        explanation:
          "La música y los efectos sonoros pueden reforzar la atmósfera emocional y acompañar la intención narrativa.",
      },
      {
        id: "av-05-step-04",
        type: "content",
        title: "Edita y construye el ritmo",
        body: "Selecciona los mejores planos y organízalos en una línea de tiempo. Ajusta su duración, ordena las acciones y sincroniza el sonido. Revisa la continuidad y comprueba que cada escena aporte algo a la historia.",
        highlight:
          "La edición organiza los materiales para construir una experiencia coherente.",
      },
      {
        id: "av-05-question-04",
        type: "question",
        prompt:
          "Al revisar tu edición descubres que una escena no aporta información y hace que el video pierda ritmo. ¿Qué deberías hacer?",
        options: [
          {
            id: "av-05-q4-option-01",
            label: "Mantenerla aunque interrumpa la historia",
            isCorrect: false,
          },
          {
            id: "av-05-q4-option-02",
            label: "Añadir más transiciones para ocultarla",
            isCorrect: false,
          },
          {
            id: "av-05-q4-option-03",
            label: "Revisar su función y ajustar o eliminar el fragmento",
            isCorrect: true,
          },
        ],
        explanation:
          "Cada plano debe contribuir a la historia. Ajustar o eliminar fragmentos innecesarios puede mejorar el ritmo y la claridad narrativa.",
      },
      {
        id: "av-05-step-05",
        type: "content",
        title: "Tu primera producción",
        body: "Ya tienes una ruta para desarrollar tu pieza audiovisual. Revisa el mensaje, el guion, el storyboard, los planos, la iluminación, el sonido y el montaje. Finalmente, comprueba la calidad de reproducción y exporta el video en un formato apropiado para compartirlo.",
        highlight:
          "Una producción audiovisual efectiva combina creatividad, planificación y decisiones técnicas.",
      },
    ],
  },

  {
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
  },

  {
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
  },

  {
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
  },

  {
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
  },

  {
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
  },
];
