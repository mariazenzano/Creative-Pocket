import { StyleSheet } from "react-native";

import { colors, palette } from "../../constants/colors";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
    gap: theme.spacing.lg,
  },
  centered: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  loadingText: {
    color: colors.textMuted,
    fontSize: theme.text.body,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  backText: {
    color: colors.text,
    fontSize: theme.text.body,
  },
  heading: {
    alignItems: "flex-start",
    gap: theme.spacing.sm,
  },
  areaIcon: {
    width: 60,
    height: 60,
    borderRadius: theme.radius.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: theme.text.body * 1.5,
  },
  progressCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressNumber: {
    color: colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
  },
  progressLabel: {
    color: colors.textMuted,
    fontSize: theme.text.small,
    marginTop: theme.spacing.xs,
  },
  section: {
    gap: theme.spacing.md,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: theme.text.subtitle,
    fontWeight: "bold",
  },
  practiceCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  lockedCard: {
    opacity: 0.65,
  },
  practiceTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  practiceIcon: {
    width: 43,
    height: 43,
    borderRadius: theme.radius.md,
    backgroundColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  statusContainer: {
    alignItems: "flex-end",
  },
  completedStatus: {
    color: palette.secondary[200],
    fontSize: theme.text.caption,
    fontWeight: "bold",
  },
  availableStatus: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "bold",
  },
  practiceType: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "600",
  },
  practiceTitle: {
    color: colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
  practiceDescription: {
    color: colors.textMuted,
    fontSize: theme.text.small,
    lineHeight: theme.text.small * 1.5,
  },
  requirementsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xs,
  },
  requirementsText: {
    color: colors.textMuted,
    fontSize: theme.text.caption,
    flex: 1,
    lineHeight: theme.text.caption * 1.7,
  },
  practiceButton: {
    backgroundColor: palette.primary[100],
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm + theme.spacing.xs,
    marginTop: theme.spacing.xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  practiceButtonText: {
    color: palette.primary[500],
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
});
