type Props = { className?: string; title?: string };

export default function BrandMark({ className, title = "GP" }: Props) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label={title}>
      <path d="M32 4 55 17.5v29L32 60 9 46.5v-29L32 4Z" fill="var(--color-bg)" stroke="var(--color-wire)" strokeWidth="2.4" strokeLinejoin="round" />
      <text x="32" y="39" fill="var(--color-text)" fontFamily="var(--font-display), Arial, sans-serif" fontSize="20" fontWeight="700" letterSpacing="-1.2" textAnchor="middle">GP</text>
      <g fill="var(--color-accent)">
        <circle cx="32" cy="4" r="2.5" />
        <circle cx="55" cy="17.5" r="2.5" />
        <circle cx="55" cy="46.5" r="2.5" />
        <circle cx="32" cy="60" r="2.5" />
        <circle cx="9" cy="46.5" r="2.5" />
        <circle cx="9" cy="17.5" r="2.5" />
      </g>
    </svg>
  );
}
