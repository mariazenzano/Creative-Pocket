import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";

type IslandNatureProps = {
  accentColor: string;
  variant: "graphic" | "web" | "audiovisual" | "3d";
};

export default function IslandNature({
  accentColor,
  variant,
}: IslandNatureProps) {
  return (
    <Svg
      width={150}
      height={170}
      viewBox="0 0 150 170"
      style={styles.container}
      pointerEvents="none"
    >
      {/* Sombras de los elementos */}
      <G opacity={0.3}>
        <Ellipse cx={17} cy={119} rx={11} ry={5} fill="#000000" />
        <Ellipse cx={133} cy={119} rx={10} ry={4} fill="#000000" />
      </G>

      {/* Vegetación de diseño gráfico */}
      {variant === "graphic" && (
        <G>
          {/* Árbol izquierdo */}
          <Path d="M 15 115 L 18 94 L 22 115 Z" fill="#55A878" />
          <Circle cx={18} cy={91} r={9} fill="#70C88F" />
          <Circle cx={11} cy={97} r={5} fill="#55A878" />
          <Circle cx={24} cy={98} r={5} fill="#46996D" />

          {/* Árbol derecho */}
          <Path d="M 126 115 L 131 94 L 136 115 Z" fill="#55A878" />
          <Circle cx={130} cy={91} r={9} fill="#70C88F" />
          <Circle cx={137} cy={98} r={5} fill="#46996D" />

          {/* Figuras geométricas flotantes */}
          <Rect
            x={5}
            y={76}
            width={8}
            height={8}
            rx={2}
            fill={accentColor}
            opacity={0.75}
            transform="rotate(20 9 80)"
          />
          <Circle
            cx={139}
            cy={75}
            r={5}
            stroke={accentColor}
            strokeWidth={2}
            fill="none"
          />
          <Path
            d="M 128 55 L 134 45 L 140 55 Z"
            fill={accentColor}
            opacity={0.65}
          />
        </G>
      )}

      {/* Vegetación de diseño web */}
      {variant === "web" && (
        <G>
          {/* Arbustos tecnológicos */}
          <Path d="M 8 114 Q 12 92 20 107 Q 26 91 30 114 Z" fill="#55A878" />
          <Circle cx={18} cy={98} r={5} fill="#70C88F" />

          <Path
            d="M 122 114 Q 126 92 133 106 Q 139 94 143 114 Z"
            fill="#55A878"
          />
          <Circle cx={133} cy={99} r={5} fill="#70C88F" />

          {/* Panel de código flotante */}
          <Rect
            x={5}
            y={65}
            width={19}
            height={15}
            rx={3}
            fill={accentColor}
            opacity={0.25}
          />
          <Path
            d="M 11 69 L 8 73 L 11 77 M 17 69 L 20 73 L 17 77"
            stroke={accentColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            fill="none"
          />

          {/* Ventana tecnológica */}
          <Rect
            x={127}
            y={65}
            width={17}
            height={14}
            rx={3}
            fill={accentColor}
            opacity={0.3}
          />
          <Path d="M 127 70 H 144" stroke={accentColor} strokeWidth={1.2} />
          <Circle cx={131} cy={68} r={1} fill={accentColor} />
          <Circle cx={135} cy={68} r={1} fill={accentColor} />
        </G>
      )}

      {/* Vegetación audiovisual */}
      {variant === "audiovisual" && (
        <G>
          {/* Árboles */}
          <Path d="M 12 115 L 17 96 L 22 115 Z" fill="#55A878" />
          <Circle cx={17} cy={94} r={8} fill="#70C88F" />
          <Circle cx={24} cy={101} r={4} fill="#46996D" />

          <Path d="M 126 115 L 131 96 L 136 115 Z" fill="#55A878" />
          <Circle cx={131} cy={94} r={8} fill="#70C88F" />

          {/* Aro de lente */}
          <Circle
            cx={11}
            cy={66}
            r={7}
            fill="none"
            stroke={accentColor}
            strokeWidth={2}
          />
          <Circle cx={11} cy={66} r={3} fill={accentColor} opacity={0.5} />

          {/* Símbolo de reproducción */}
          <Path
            d="M 130 57 L 142 64 L 130 71 Z"
            fill={accentColor}
            opacity={0.75}
          />

          {/* Tira de película */}
          <Rect
            x={125}
            y={82}
            width={17}
            height={9}
            rx={2}
            fill={accentColor}
            opacity={0.4}
          />
          <Path
            d="M 129 82 V 91 M 134 82 V 91 M 139 82 V 91"
            stroke={themeColor(accentColor)}
            strokeWidth={1}
          />
        </G>
      )}

      {/* Vegetación y cristales de diseño 3D */}
      {variant === "3d" && (
        <G>
          {/* Cristal izquierdo */}
          <Path
            d="M 8 111 L 13 91 L 21 83 L 27 108 L 20 115 Z"
            fill={accentColor}
            opacity={0.75}
          />
          <Path d="M 13 91 L 21 83 L 20 115 Z" fill="#FFFFFF" opacity={0.3} />

          {/* Cristal derecho */}
          <Path
            d="M 122 111 L 128 89 L 136 82 L 142 109 L 134 115 Z"
            fill={accentColor}
            opacity={0.7}
          />
          <Path
            d="M 128 89 L 136 82 L 134 115 Z"
            fill="#FFFFFF"
            opacity={0.25}
          />

          {/* Geometría flotante */}
          <Path
            d="M 10 62 L 17 56 L 24 62 L 17 68 Z"
            fill={accentColor}
            opacity={0.65}
          />
          <Path
            d="M 17 68 V 77 L 24 71 V 62"
            fill={accentColor}
            opacity={0.4}
          />

          <Path
            d="M 128 52 L 135 46 L 142 52 L 135 58 Z"
            fill={accentColor}
            opacity={0.65}
          />
        </G>
      )}

      {/* Rocas decorativas comunes */}
      <G>
        {/* Roca izquierda */}
        <Path d="M 4 126 L 9 117 L 17 119 L 22 127 Z" fill="#85849B" />
        <Path d="M 9 117 L 17 119 L 12 123 Z" fill="#AAA8BC" opacity={0.7} />

        {/* Roca derecha */}
        <Path d="M 123 127 L 128 117 L 137 119 L 144 127 Z" fill="#85849B" />
        <Path
          d="M 128 117 L 137 119 L 132 123 Z"
          fill="#AAA8BC"
          opacity={0.7}
        />
      </G>

      {/* Cristales y partículas de color */}
      <G>
        <Circle cx={35} cy={124} r={2.5} fill={accentColor} opacity={0.9} />
        <Circle cx={113} cy={125} r={2} fill={accentColor} opacity={0.9} />
        <Circle cx={28} cy={83} r={2} fill={accentColor} opacity={0.7} />
        <Circle cx={119} cy={82} r={2.5} fill={accentColor} opacity={0.7} />
      </G>
    </Svg>
  );
}

function themeColor(color: string) {
  return color;
}

const styles = {
  container: {
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
};
