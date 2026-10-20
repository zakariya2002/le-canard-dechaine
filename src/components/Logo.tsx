export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const ink = inverted ? "#fff" : "#000";
  const paper = inverted ? "#000" : "#fff";
  return (
    <svg
      viewBox="0 0 150 50"
      width="150"
      height="50"
      role="img"
      aria-label="Les Acharnés"
    >
      <g transform="rotate(-6 75 25)">
        <rect x="10" y="4" width="34" height="17" fill={ink} />
        <text
          x="27"
          y="18"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="700"
          fontSize="16"
          fill={paper}
        >
          LES
        </text>
        <line x1="2" y1="40" x2="148" y2="36" stroke={ink} strokeWidth="1.5" />
        <rect x="22" y="22" width="122" height="20" fill={ink} />
        <text
          x="83"
          y="38"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="700"
          fontSize="19"
          letterSpacing="0.5"
          fill={paper}
        >
          ACHARNÉS
        </text>
      </g>
    </svg>
  );
}
