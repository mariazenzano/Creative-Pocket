import { colors } from "./colors";
export const theme = {
  colors,
  // Spacing: select a frame with auto layout → Design panel → Auto layout → Gap and Padding.
  // No auto layout? Select an element, hold Alt (Option on Mac) and hover another one to see the distance.
  spacing: {
    xs: 4, // smallest gap: an icon and its text
    sm: 8, // gap between lines inside a card
    md: 16, // gap between items in a row
    lg: 24, // gap between blocks of the screen
    xl: 32,
    xxl: 40, // biggest gap: padding of the whole screen
  },
  // Radius: select a box or button → Design panel → Corner radius.
  radius: {
    sm: 8, // chips and small buttons
    md: 12, // buttons and inputs
    lg: 16,
    max1: 30,
    max2: 40, // cards
    full: 999, // circles and pills: leave it as is
  },
  sizes: {
    touchTarget: 44,
    iconTiny: 12,
    iconSmall: 24,
    iconMedium: 28,
    iconLarge: 56,
    avatarSmall: 40,
    avatar: 48,
    rankMarker: 24,
    listRow: 64,
    rankingHeader: 112,
    podium: 226,
    podiumColumn: 112,
    podiumFirst: 136,
    podiumSecond: 112,
    podiumThird: 98,
  },
  // Text sizes: select a text → Design panel → Typography → Font size.
  text: {
    display: 32, // biggest text: a big number or hero title
    title: 24, // screen title
    subtitle: 20, // section title
    heading: 16, // card title
    body: 14, // normal text
    small: 12, // secondary text
    caption: 10,
    mini: 6, // smallest text: tags and hints
  },
};
