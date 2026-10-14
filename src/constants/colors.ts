export const palette = {
  primary: {
    100: "#BAABFF", //[cite: 3]
    200: "#7557FF", //[cite: 3]
    300: "#3003FF", //[cite: 3]
    400: "#2400C8", //[cite: 3]
    500: "#19008E", //[cite: 3]
  },
  secondary: {
    100: "#AAE7FF", //[cite: 3]
    200: "#55CEFF", //[cite: 3]
    300: "#00B6FF", //[cite: 3]
    400: "#008DC6", //[cite: 3]
    500: "#00648C", //[cite: 3]
  },
  neutral: {
    100: "#FFFFFF", //[cite: 3]
    200: "#E8E8E8", //[cite: 3]
    300: "#D2D2D2", //[cite: 3]
    400: "#BBBBBB", //[cite: 3]
    500: "#A4A4A4", //[cite: 3]
    600: "#8E8E8E", //[cite: 3]
    800: "#09070F",
  },
};

export const colors = {
  background: palette.neutral[800], // Fondo general de pantalla
  card: palette.neutral[800], // Fondo de tarjetas
  primary: palette.primary[300], // Botones e interacciones principales
  primarySoft: palette.primary[200], // Fondos suaves / chips
  secondary: palette.secondary[300], // Botones secundarios / acentos
  secondarySoft: palette.secondary[200],
  text: palette.neutral[100], // Texto principal
  textMuted: palette.neutral[600], // Texto secundario y subtítulos
  border: "#2D2348", // Borde de contenedores e inputs
};
