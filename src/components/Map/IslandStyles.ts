import { StyleSheet } from "react-native";

import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    minHeight: 205,
    alignItems: "center",
    paddingBottom: 8,
  },

  pressed: {
    transform: [{ scale: 0.96 }, { translateY: 3 }],
  },

  locked: {
    opacity: 0.58,
  },

  groundShadow: {
    position: "absolute",
    top: 120,
    width: 126,
    height: 25,
    borderRadius: 70,
    backgroundColor: "#000000",
    opacity: 0.2,
  },

  islandBaseShadow: {
    position: "absolute",
    top: 42,
    width: 132,
    height: 91,
    borderRadius: 42,
    opacity: 0.55,
    transform: [{ scaleX: 1.08 }, { translateY: 8 }],
  },

  islandBase: {
    position: "absolute",
    top: 31,
    width: 132,
    height: 96,
    borderRadius: 45,
    transform: [{ scaleX: 1.06 }],
    opacity: 0.95,
  },

  islandSurface: {
    position: "absolute",
    top: 22,
    width: 140,
    height: 112,
    borderRadius: 48,
    backgroundColor: theme.colors.card,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    elevation: 12,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 9,
  },

  surfaceGlow: {
    position: "absolute",
    top: 5,
    width: 75,
    height: 5,
    borderRadius: 5,
    opacity: 0.12,
  },

  decorationLeft: {
    position: "absolute",
    left: 14,
    top: 24,
    opacity: 0.8,
  },

  decorationRight: {
    position: "absolute",
    right: 13,
    top: 26,
    opacity: 0.8,
  },

  decorationBottom: {
    position: "absolute",
    bottom: 12,
    right: 31,
    opacity: 0.75,
  },

  lightDot: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    opacity: 0.6,
  },

  lightDotLeft: {
    left: 34,
    bottom: 22,
  },

  lightDotRight: {
    right: 31,
    top: 17,
  },

  iconPlatformShadow: {
    width: 83,
    height: 83,
    borderRadius: 42,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.3,
  },

  iconPlatform: {
    position: "absolute",
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: theme.colors.background,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  statusBadge: {
    position: "absolute",
    top: -6,
    right: 4,
    width: 28,
    height: 28,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.background,
    elevation: 5,
  },

  information: {
    width: "100%",
    alignItems: "center",
    marginTop: 137,
  },

  regionTitle: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    maxWidth: 145,
  },

  statusText: {
    fontSize: 9,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginTop: 3,
  },

  progressContainer: {
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },

  progressBackground: {
    flex: 1,
    height: 6,
    borderRadius: 5,
    backgroundColor: theme.colors.border,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 5,
  },

  progressText: {
    color: theme.colors.textMuted,
    fontSize: 10,
    fontWeight: "700",
  },
});
