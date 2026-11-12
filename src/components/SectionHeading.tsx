type Props = { num: string; title: string; description?: string };

export default function SectionHeading({ num, title, description }: Props) {
  return <div className="section-heading reveal"><span className="section-kicker"><i aria-hidden="true" />{num}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
