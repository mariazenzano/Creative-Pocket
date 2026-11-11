# Creative Pocket

Creative Pocket es una aplicación móvil educativa para aprender las bases del diseño en general, especialmente diseño de interfaces (UI) y experiencia de usuario (UX). El aprendizaje se organiza en áreas, prácticas y actividades guiadas para avanzar paso a paso y aplicar los conceptos mediante ejercicios y retos.

La app también permite consultar el progreso, la experiencia obtenida (XP), un mapa de aprendizaje, el ranking por periodo, las notificaciones y el perfil.

## Cómo ejecutar la app

### Requisitos

- Node.js y npm
- Expo Go en un dispositivo móvil o un emulador/simulador compatible

### Instalación y arranque

```bash
npm install
npx expo start
```

Luego, usa las opciones de la terminal de Expo para abrir la app en Expo Go o en un emulador/simulador.

## Organización del código

El código de la aplicación está dentro de `src/`:

```text
src/
├── app/           Pantallas y rutas de Expo Router
│   └── (tabs)/    Pantallas principales con navegación por pestañas
├── components/   Componentes visuales reutilizables, agrupados por función
├── constants/    Colores y configuración del tema visual
├── data/         Contenido de prácticas, actividades, mapa y regiones
├── notifications/ Lógica y almacenamiento de notificaciones
├── storage/      Persistencia local del usuario y su progreso
├── types/        Tipos compartidos de TypeScript
└── utils/        Funciones auxiliares de la aplicación
```

- `src/app/` contiene las pantallas que Expo Router convierte en rutas.
- `src/components/` agrupa componentes de inicio, cursos, prácticas, mapa, perfil, notificaciones, ranking y otras funciones.
- `src/data/` contiene el contenido que muestran las prácticas y actividades.
- `src/storage/` y `src/notifications/` gestionan datos guardados localmente.
- `src/constants/theme.ts` y `src/constants/colors.ts` centralizan estilos compartidos.

## Comprobaciones

```bash
npx expo lint
npx tsc --noEmit
```
