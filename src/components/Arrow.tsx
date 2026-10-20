export default function Arrow({
  color = "#fff",
  size = 42,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg className="arrow" viewBox="0 0 42 42" width={size} height={size} aria-hidden>
      <circle cx="21" cy="21" r="20.25" fill="none" stroke={color} strokeWidth="1.2" />
      <path
        d="M14 28 L27 15 M17 14.5 H27.5 V25"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
}
