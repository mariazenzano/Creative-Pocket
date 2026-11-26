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
  resultContent: {
    flexGrow: 1,
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
    justifyContent: "center",
    gap: theme.spacing.md,
  },
  centered: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
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
    gap: theme.spacing.sm,
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
  eyebrow: {
    color: palette.primary[100],
    fontSize: theme.text.caption,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  progressInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionCounter: {
    color: colors.text,
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
  xpLabel: {
    color: palette.primary[100],
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
  progressTrack: {
    height: theme.spacing.sm,
    backgroundColor: colors.border,
    borderRadius: theme.radius.full,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: palette.primary[100],
    borderRadius: theme.radius.full,
  },
  questionCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  questionLabel: {
    color: colors.textMuted,
    fontSize: theme.text.caption,
    fontWeight: "bold",
  },
  questionText: {
    color: colors.text,
    fontSize: theme.text.subtitle,
    fontWeight: "bold",
    lineHeight: theme.text.subtitle * 1.4,
  },
  optionsContainer: {
    gap: theme.spacing.sm,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  optionLetter: {
    width: theme.spacing.xl,
    height: theme.spacing.xl,
    borderRadius: theme.radius.full,
    backgroundColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  optionLetterText: {
    color: colors.text,
    fontSize: theme.text.small,
    fontWeight: "bold",
  },
  optionText: {
    flex: 1,
    color: colors.text,
    fontSize: theme.text.body,
    lineHeight: theme.text.body * 1.4,
  },
  correctOption: {
    borderColor: palette.secondary[200],
  },
  incorrectOption: {
    borderColor: "#FF8D9B",
  },
  feedbackCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  feedbackTitle: {
    color: palette.primary[100],
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
  feedbackText: {
    color: colors.textMuted,
    fontSize: theme.text.body,
    lineHeight: theme.text.body * 1.5,
  },
  primaryButton: {
    backgroundColor: palette.primary[100],
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: theme.spacing.xxl + theme.spacing.sm,
  },
  primaryButtonText: {
    color: palette.primary[500],
    fontSize: theme.text.body,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.4,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: colors.text,
    fontSize: theme.text.body,
    fontWeight: "bold",
  },
  resultIcon: {
    width: 88,
    height: 88,
    alignSelf: "center",
    borderRadius: theme.radius.full,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  resultTitle: {
    color: colors.text,
    fontSize: theme.text.title,
    fontWeight: "bold",
    textAlign: "center",
  },
  scoreCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    alignItems: "center",
    gap: theme.spacing.md,
  },
  scoreNumber: {
    color: colors.text,
    fontSize: theme.text.display,
    fontWeight: "bold",
  },
  scoreLabel: {
    color: colors.textMuted,
    fontSize: theme.text.body,
  },
  percentageText: {
    color: palette.primary[100],
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
  rewardCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  rewardInformation: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  rewardNumber: {
    color: palette.primary[100],
    fontSize: theme.text.title,
    fontWeight: "bold",
  },
  rewardLabel: {
    color: colors.textMuted,
    fontSize: theme.text.small,
  },
  bestScoreCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.md,
  },
  bestScoreLabel: {
    color: colors.textMuted,
    fontSize: theme.text.body,
  },
  bestScoreNumber: {
    color: colors.text,
    fontSize: theme.text.heading,
    fontWeight: "bold",
  },
});
