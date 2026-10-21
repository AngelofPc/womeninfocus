import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      {action && (
        <Link href={action.href} className="text-link">
          {action.label} <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  className?: string;
}) {
  return (
    <section className={`page-intro ${className}`}>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const content = (
    <>
      {children}
      <span className="arrow-circle">
        <ArrowRight size={16} />
      </span>
    </>
  );
  return external ? (
    <a className="arrow-link" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link className="arrow-link" href={href}>
      {content}
    </Link>
  );
}
