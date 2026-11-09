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
        {/* Main sky gradient */}
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

        {/* Ambient light */}
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

        {/* Cloud volume */}
        <LinearGradient id="cloudGradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.2} />
          <Stop offset="1" stopColor={theme.colors.card} stopOpacity={0.7} />
        </LinearGradient>

        {/* Floating island */}
        <LinearGradient id="smallIslandGradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#9C8BD7" />
          <Stop offset="1" stopColor="#51427F" />
        </LinearGradient>
      </Defs>

      {/* Main sky */}
      <Path
        d={`M 0 0 H ${width} V ${height} H 0 Z`}
        fill="url(#worldGradient)"
      />

      {/* Atmospheric light layers */}
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

      {/* Distant clouds */}
      <G opacity={0.2}>
        <Cloud x={width * 0.2} y={230} scale={1} />
        <Cloud x={width * 0.82} y={470} scale={0.85} />
        <Cloud x={width * 0.15} y={790} scale={0.7} />
        <Cloud x={width * 0.83} y={1080} scale={1} />
        <Cloud x={width * 0.22} y={1330} scale={0.8} />
      </G>

      {/* Mid-distance clouds */}
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

      {/* Floating islands in the distance */}
      <G opacity={0.3}>
        <FloatingIsland x={width * 0.12} y={390} scale={0.75} />
        <FloatingIsland x={width * 0.85} y={850} scale={0.9} />
        <FloatingIsland x={width * 0.13} y={1250} scale={0.65} />
      </G>

      {/* Small distant particles */}
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

      {/* Glowing stars */}
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

      {/* Floating bubbles */}
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

/* Cloud made from overlapping soft shapes */
function Cloud({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <G>
      <Ellipse
        cx={x}
        cy={y + 9 * scale}
        rx={43 * scale}
        ry={10 * scale}
        fill="url(#cloudGradient)"
      />
      <Circle
        cx={x - 21 * scale}
        cy={y}
        r={13 * scale}
        fill="url(#cloudGradient)"
      />
      <Circle
        cx={x}
        cy={y - 8 * scale}
        r={19 * scale}
        fill="url(#cloudGradient)"
      />
      <Circle
        cx={x + 23 * scale}
        cy={y}
        r={14 * scale}
        fill="url(#cloudGradient)"
      />
      <Ellipse
        cx={x}
        cy={y + 4 * scale}
        rx={35 * scale}
        ry={9 * scale}
        fill="url(#cloudGradient)"
      />
    </G>
  );
}

/* Small floating island with a visible rocky underside */
function FloatingIsland({
  x,
  y,
  scale,
}: {
  x: number;
  y: number;
  scale: number;
}) {
  return (
    <G>
      <Ellipse
        cx={x}
        cy={y + 22 * scale}
        rx={40 * scale}
        ry={7 * scale}
        fill="#000000"
        opacity={0.18}
      />

      <Path
        d={`
          M ${x - 40 * scale} ${y}
          Q ${x} ${y - 19 * scale} ${x + 40 * scale} ${y}
          L ${x + 29 * scale} ${y + 12 * scale}
          L ${x + 10 * scale} ${y + 35 * scale}
          L ${x - 9 * scale} ${y + 24 * scale}
          L ${x - 29 * scale} ${y + 13 * scale}
          Z
        `}
        fill="url(#smallIslandGradient)"
      />

      <Path
        d={`
          M ${x - 40 * scale} ${y}
          Q ${x} ${y - 19 * scale} ${x + 40 * scale} ${y}
          Q ${x} ${y + 4 * scale} ${x - 40 * scale} ${y}
        `}
        fill="#A99AE1"
        opacity={0.7}
      />

      <Path
        d={`
          M ${x - 29 * scale} ${y + 13 * scale}
          L ${x - 9 * scale} ${y + 24 * scale}
          L ${x - 4 * scale} ${y + 36 * scale}
          L ${x - 17 * scale} ${y + 25 * scale}
          Z
        `}
        fill="#403463"
        opacity={0.6}
      />
    </G>
  );
}

/* Four-point decorative star */
function Star({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <Path
      d={`
        M ${x} ${y - size}
        L ${x} ${y + size}
        M ${x - size} ${y}
        L ${x + size} ${y}
      `}
      fill="none"
    />
  );
}

const styles = {
  background: {
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
};
