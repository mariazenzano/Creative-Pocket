import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Path,
  RadialGradient,
  Stop,
} from "react-native-svg";

import { theme } from "../../constants/theme";
import { Cloud, FloatingIsland, Star } from "./MapBackgroundElements";

type MapBackgroundProps = {
  width: number;
  height: number;
};

export default function MapBackground({ width, height }: MapBackgroundProps) {
  return (
    <Svg
      pointerEvents="none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={styles.background}
    >
      <Defs>
        <LinearGradient id="worldGradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={theme.colors.background} />
          <Stop
            offset="0.35"
            stopColor={theme.colors.primarySoft}
            stopOpacity={0.3}
          />
          <Stop offset="0.7" stopColor={theme.colors.background} />
          <Stop offset="1" stopColor={theme.colors.background} />
        </LinearGradient>

        <RadialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
          <Stop
            offset="0"
            stopColor={theme.colors.primary}
            stopOpacity={0.32}
          />
          <Stop offset="1" stopColor={theme.colors.primary} stopOpacity={0} />
        </RadialGradient>

        <RadialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
          <Stop
            offset="0"
            stopColor={theme.colors.secondary}
            stopOpacity={0.24}
          />
          <Stop offset="1" stopColor={theme.colors.secondary} stopOpacity={0} />
        </RadialGradient>

        <LinearGradient id="cloudGradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.2} />
          <Stop offset="1" stopColor={theme.colors.card} stopOpacity={0.7} />
        </LinearGradient>

        <LinearGradient id="smallIslandGradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#9C8BD7" />
          <Stop offset="1" stopColor="#51427F" />
        </LinearGradient>
      </Defs>

      <Path
        d={`M 0 0 H ${width} V ${height} H 0 Z`}
        fill="url(#worldGradient)"
      />

      <Ellipse
        cx={width * 0.15}
        cy={190}
        rx={width * 0.48}
        ry={190}
        fill="url(#purpleGlow)"
      />

      <Ellipse
        cx={width * 0.88}
        cy={650}
        rx={width * 0.5}
        ry={230}
        fill="url(#blueGlow)"
      />

      <Ellipse
        cx={width * 0.18}
        cy={1150}
        rx={width * 0.48}
        ry={220}
        fill="url(#purpleGlow)"
      />

      <Ellipse
        cx={width * 0.85}
        cy={1390}
        rx={width * 0.45}
        ry={170}
        fill="url(#blueGlow)"
      />

      <G opacity={0.2}>
        <Cloud x={width * 0.2} y={230} scale={1} />
        <Cloud x={width * 0.82} y={470} scale={0.85} />
        <Cloud x={width * 0.15} y={790} scale={0.7} />
        <Cloud x={width * 0.83} y={1080} scale={1} />
        <Cloud x={width * 0.22} y={1330} scale={0.8} />
      </G>

      <G opacity={0.11}>
        <Ellipse
          cx={width * 0.78}
          cy={570}
          rx={width * 0.28}
          ry={25}
          fill="url(#cloudGradient)"
        />
        <Ellipse
          cx={width * 0.2}
          cy={980}
          rx={width * 0.3}
          ry={30}
          fill="url(#cloudGradient)"
        />
        <Ellipse
          cx={width * 0.85}
          cy={1280}
          rx={width * 0.32}
          ry={28}
          fill="url(#cloudGradient)"
        />
      </G>

      <G opacity={0.3}>
        <FloatingIsland x={width * 0.12} y={390} scale={0.75} />
        <FloatingIsland x={width * 0.85} y={850} scale={0.9} />
        <FloatingIsland x={width * 0.13} y={1250} scale={0.65} />
      </G>

      <G opacity={0.6}>
        <Circle
          cx={width * 0.12}
          cy={490}
          r={3}
          fill={theme.colors.secondary}
        />
        <Circle cx={width * 0.88} cy={300} r={4} fill={theme.colors.primary} />
        <Circle
          cx={width * 0.78}
          cy={1120}
          r={3}
          fill={theme.colors.secondary}
        />
        <Circle cx={width * 0.18} cy={890} r={4} fill={theme.colors.primary} />
        <Circle
          cx={width * 0.9}
          cy={1320}
          r={3}
          fill={theme.colors.secondary}
        />
        <Circle cx={width * 0.43} cy={350} r={2} fill="#FFFFFF" />
        <Circle cx={width * 0.62} cy={740} r={2.5} fill="#FFFFFF" />
        <Circle cx={width * 0.32} cy={1180} r={2} fill="#FFFFFF" />
      </G>

      <G
        stroke={theme.colors.secondary}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.55}
      >
        <Star x={width * 0.7} y={180} size={9} />
        <Star x={width * 0.3} y={700} size={8} />
        <Star x={width * 0.84} y={1190} size={8} />
        <Star x={width * 0.14} y={1080} size={6} />
      </G>

      <G
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth={1.5}
        opacity={0.25}
      >
        <Circle cx={width * 0.08} cy={650} r={7} />
        <Circle cx={width * 0.91} cy={980} r={5} />
        <Circle cx={width * 0.35} cy={1380} r={6} />
        <Circle cx={width * 0.72} cy={410} r={5} />
      </G>
    </Svg>
  );
}

const styles = {
  background: {
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
};
