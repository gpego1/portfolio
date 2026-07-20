type Props = {
  num: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ num, title, description }: Props) {
  return (
    <div className="mb-14 max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-sm text-violet-glow">{num}</span>
        <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-violet-glow/60 to-transparent" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
}
