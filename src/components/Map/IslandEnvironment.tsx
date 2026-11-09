import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";

import type { RegionId } from "../../types/map";

type IslandEnvironmentProps = {
  regionId: RegionId;
  accentColor: string;
};

export default function IslandEnvironment({
  regionId,
  accentColor,
}: IslandEnvironmentProps) {
  return (
    <Svg
      width={150}
      height={170}
      viewBox="0 0 150 170"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
      pointerEvents="none"
    >
      {/* Sombras ambientales */}
      <Ellipse cx={75} cy={151} rx={67} ry={9} fill="#000000" opacity={0.12} />

      {/* Partículas flotantes */}
      <G opacity={0.65}>
        <Circle cx={17} cy={48} r={3} fill={accentColor} />
        <Circle cx={132} cy={35} r={2.5} fill={accentColor} />
        <Circle cx={127} cy={125} r={3} fill={accentColor} />
        <Circle cx={27} cy={132} r={2} fill={accentColor} />
      </G>

      {/* Ambiente de diseño gráfico */}
      {regionId === "graphic-design" && (
        <G>
          <Circle cx={18} cy={76} r={10} fill={accentColor} opacity={0.3} />
          <Rect
            x={118}
            y={66}
            width={15}
            height={15}
            rx={3}
            fill={accentColor}
            opacity={0.35}
            transform="rotate(18 125 73)"
          />
          <Path
            d="M 12 112 L 20 96 L 28 112 Z"
            fill={accentColor}
            opacity={0.45}
          />
          <Circle
            cx={133}
            cy={103}
            r={5}
            stroke={accentColor}
            strokeWidth={2}
            fill="none"
            opacity={0.7}
          />
        </G>
      )}

      {/* Ambiente de diseño web */}
      {regionId === "web-design" && (
        <G>
          <Rect
            x={8}
            y={67}
            width={21}
            height={16}
            rx={3}
            fill={accentColor}
            opacity={0.25}
          />
          <Path
            d="M 12 72 L 17 76 L 12 80 M 20 80 L 25 72"
            stroke={accentColor}
            strokeWidth={1.8}
            strokeLinecap="round"
            fill="none"
          />
          <Rect
            x={119}
            y={91}
            width={19}
            height={14}
            rx={3}
            fill={accentColor}
            opacity={0.3}
          />
          <Circle cx={124} cy={96} r={1.5} fill={accentColor} />
          <Circle cx={130} cy={96} r={1.5} fill={accentColor} />
          <Circle cx={135} cy={96} r={1.5} fill={accentColor} />
        </G>
      )}

      {/* Ambiente audiovisual */}
      {regionId === "audiovisual" && (
        <G>
          <Circle cx={19} cy={83} r={11} fill={accentColor} opacity={0.25} />
          <Circle
            cx={19}
            cy={83}
            r={5}
            fill="none"
            stroke={accentColor}
            strokeWidth={2}
          />
          <Path
            d="M 119 69 L 136 79 L 119 89 Z"
            fill={accentColor}
            opacity={0.4}
          />
          <Rect
            x={119}
            y={105}
            width={19}
            height={9}
            rx={2}
            fill={accentColor}
            opacity={0.35}
          />
          <Path
            d="M 123 105 V 114 M 128 105 V 114 M 133 105 V 114"
            stroke={accentColor}
            strokeWidth={1.5}
            opacity={0.8}
          />
        </G>
      )}

      {/* Ambiente de diseño 3D */}
      {regionId === "3d-design" && (
        <G>
          <Path
            d="M 12 87 L 23 80 L 34 87 L 23 94 Z"
            fill={accentColor}
            opacity={0.35}
          />
          <Path
            d="M 12 87 V 100 L 23 107 V 94 Z"
            fill={accentColor}
            opacity={0.5}
          />
          <Path
            d="M 23 94 L 34 87 V 100 L 23 107 Z"
            fill={accentColor}
            opacity={0.7}
          />
          <Path
            d="M 118 78 L 128 68 L 138 78 L 128 88 Z"
            fill={accentColor}
            opacity={0.4}
          />
          <Path
            d="M 128 88 V 101"
            stroke={accentColor}
            strokeWidth={2}
            opacity={0.7}
          />
          <Circle cx={128} cy={105} r={4} fill={accentColor} opacity={0.5} />
        </G>
      )}
    </Svg>
  );
}
