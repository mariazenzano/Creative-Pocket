import { StyleSheet, Text, View } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";

import type { QuizQuestion } from "./questions";

type Props = { type: QuizQuestion["art"] };

const wheelColors = [
  "#FE3D41", "#FF7D25", "#FFC928", "#F3F238", "#B9E834", "#3BD36A",
  "#12C9A1", "#22B5EC", "#4266F5", "#7D48E9", "#B73BD9", "#E33591",
];

function ColorWheel() {
  return (
    <View style={styles.wheel}>
      {wheelColors.map((color, index) => {
        const angle = (index / wheelColors.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <Animated.View
            key={color}
            entering={ZoomIn.delay(index * 25).duration(300)}
            style={[
              styles.wheelSegment,
              {
                left: 66 + Math.cos(angle) * 43,
                top: 66 + Math.sin(angle) * 43,
                backgroundColor: color,
              },
            ]}
          />
        );
      })}
      <View style={styles.wheelCenter} />
    </View>
  );
}

export default function QuizQuestionArt({ type }: Props) {
  return (
    <Animated.View key={type} entering={ZoomIn.duration(400)} style={styles.panel}>
      {type === "colorWheel" && <ColorWheel />}

      {type === "contrast" && (
        <View style={styles.contrastRow}>
          <View style={[styles.contrastSample, styles.whiteSample]}>
            <Text style={[styles.sampleLetter, { color: "#11B88B" }]}>A</Text>
            <Text style={[styles.sampleCaption, { color: "#52646A" }]}>Verde / Blanco</Text>
          </View>
          <View style={[styles.contrastSample, styles.yellowSample]}>
            <Text style={[styles.sampleLetter, { color: "#FFFFFF" }]}>B</Text>
            <Text style={[styles.sampleCaption, { color: "#FFFFFF" }]}>Blanco / Amarillo</Text>
          </View>
        </View>
      )}

      {type === "typography" && (
        <View style={styles.typeSample}>
          <Text style={styles.largeT}>T</Text>
          <Text style={styles.typeCaption}>Serif · Remates decorativos</Text>
        </View>
      )}

      {type === "hierarchy" && (
        <View style={styles.hierarchySample}>
          <Text style={styles.headingSample}>TÍTULO GRANDE</Text>
          <Text style={styles.bodySample}>Texto secundario que describe el tema</Text>
          <Text style={styles.subheadingSample}>TÍTULO PEQUEÑO</Text>
          <Text style={styles.bodySample}>Texto de apoyo con menor jerarquía</Text>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  panel: {
    height: 156,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#302347",
    backgroundColor: "#17141F",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  wheel: { width: 144, height: 144, alignItems: "center", justifyContent: "center" },
  wheelSegment: { position: "absolute", width: 31, height: 31, borderRadius: 16 },
  wheelCenter: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#17141F",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.35)",
  },
  contrastRow: { flexDirection: "row", gap: 10 },
  contrastSample: {
    width: 114,
    height: 112,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  whiteSample: { backgroundColor: "#F5F1FF" },
  yellowSample: { backgroundColor: "#F3E900" },
  sampleLetter: { fontSize: 36, fontWeight: "800" },
  sampleCaption: { fontSize: 11, fontWeight: "700", textAlign: "center" },
  typeSample: { alignItems: "center" },
  largeT: { color: "#8F61FF", fontFamily: "serif", fontSize: 92, fontWeight: "700", lineHeight: 104 },
  typeCaption: { color: "#A9A4B1", fontSize: 13 },
  hierarchySample: {
    width: "82%",
    minHeight: 110,
    borderRadius: 12,
    backgroundColor: "#201D2A",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 12,
  },
  headingSample: { color: "#F4F0FA", fontSize: 16, fontWeight: "800" },
  subheadingSample: { color: "#D7D2E0", fontSize: 12, fontWeight: "700" },
  bodySample: { color: "#8F899A", fontSize: 10 },
});
