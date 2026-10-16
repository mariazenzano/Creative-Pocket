import { Pressable, StyleSheet, View } from "react-native";
import { palette } from "../constants/colors";

import { theme } from "@/constants/theme";
import { LuCircleArrowLeft } from "react-icons/lu";

type Props = { onPress: () => void };

export default function HeroFlecha({ onPress }: Props) {
  return (
    <View style={styles.contenedor}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.flecha, pressed && styles.pressed]}
      >
        <LuCircleArrowLeft size={45} color={palette.primary[300]} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 0,
    paddingVertical: theme.spacing.md,
  },
  brillo: {
    shadowColor: palette.primary[100],
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  flecha: {
    padding: 4,
  },
});
