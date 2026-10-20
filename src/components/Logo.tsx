export default function Logo() {
  return (
    <svg
      viewBox="0 0 400 126"
      width="150"
      height="47"
      role="img"
      aria-label="Le Canard Déchaîné"
    >
      <g transform="rotate(-4 200 63)">
        {/* speed lines */}
        <path d="M4 70 H34 M10 80 H40 M0 104 H40 M14 114 H52" stroke="#000" strokeWidth="5" />
        <path d="M30 6 H200 M20 44 H190" stroke="#000" strokeWidth="3" />
        {/* top block */}
        <polygon points="40,10 196,4 192,50 34,56" fill="#000" />
        {/* bottom block */}
        <polygon points="44,62 388,48 384,110 38,124" fill="#000" />
        <g
          fontFamily="var(--font-display), sans-serif"
          fontWeight="800"
          fill="#fff"
          textAnchor="middle"
          transform="skewX(-10)"
        >
          <text x="124" y="46" fontSize="44" letterSpacing="1">
            LE CANARD
          </text>
          <text x="232" y="112" fontSize="62" letterSpacing="2">
            DÉCHAÎNÉ
          </text>
        </g>
      </g>
    </svg>
  );
}
