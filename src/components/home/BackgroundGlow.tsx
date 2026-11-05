import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

import { StyleSheet, View } from "react-native";

export default function BackgroundGlow() {
  return (
    <View pointerEvents="none" style={styles.container}>
      <Svg width="100%" height="100%">
        <Defs>
          <RadialGradient
            id="glow"
            cx="0"
            cy="0"
            r="380"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" stopColor="#6200EE" stopOpacity={0.55} />
            <Stop offset="45%" stopColor="#6200EE" stopOpacity={0.2} />
            <Stop offset="100%" stopColor="#6200EE" stopOpacity={0} />
          </RadialGradient>
        </Defs>

        <Rect x="0" y="0" width="100%" height="100%" fill="url(#glow)" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
});
