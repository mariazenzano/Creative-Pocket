import { Circle, Ellipse, G, Path } from "react-native-svg";

type ElementProps = {
  x: number;
  y: number;
  scale: number;
};

export function Cloud({ x, y, scale }: ElementProps) {
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

export function FloatingIsland({ x, y, scale }: ElementProps) {
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

export function Star({ x, y, size }: { x: number; y: number; size: number }) {
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
