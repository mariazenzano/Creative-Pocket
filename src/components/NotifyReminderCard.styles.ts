import { StyleSheet } from "react-native";

import { theme } from "@/constants/theme";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  headingText: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.text.heading,
    fontWeight: "700",
  },
  description: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
    lineHeight: 18,
    flexShrink: 1,
  },
  statusTitle: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "600",
    flexShrink: 1,
  },
  permissionSection: {
    gap: theme.spacing.md,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  form: {
    gap: theme.spacing.md,
  },
  timeFields: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  timeField: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  fieldLabel: {
    color: theme.colors.textMuted,
    fontSize: theme.text.small,
  },
  timeInput: {
    minHeight: theme.sizes.touchTarget,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    color: theme.colors.text,
    fontSize: theme.text.body,
    backgroundColor: theme.colors.background,
  },
  button: {
    minHeight: theme.sizes.touchTarget,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primary,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: theme.text.body,
    fontWeight: "700",
  },
  activeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  activeInfo: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  error: {
    color: "#FF8A8A",
    fontSize: theme.text.small,
  },
  testSection: {
    gap: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  testButton: {
    minHeight: theme.sizes.touchTarget,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.primarySoft,
  },
  testButtonText: {
    color: theme.colors.primarySoft,
    fontSize: theme.text.body,
    fontWeight: "700",
  },
  success: {
    color: theme.colors.secondary,
    fontSize: theme.text.small,
  },
});
