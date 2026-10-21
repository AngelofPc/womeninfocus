import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen, MessagesSquare, MoveUpRight, Users, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import articles from "@/content/articles.json";
import { audiences, focusAreas } from "@/content/v1";

export const metadata = {
  title: "Digital Women Impact Foundation — Skills, confidence & opportunity",
  description: "Equipping women and girls with education, mentorship, digital and AI literacy, practical skills and rights awareness to shape their own futures.",
  openGraph: {
    title: "Digital Women Impact Foundation — Skills, confidence & opportunity",
    description: "Knowledge, skills and support for women and girls to shape their own futures.",
  },
};

const pillars = [
  {
    number: "01",
    tag: "Education & Guidance",
    icon: BookOpen,
    title: "Knowledge that opens doors",
    text: "Education, career guidance, and legal awareness help women and girls make informed decisions about their livelihoods, education, and health.",
  },
  {
    number: "02",
    tag: "Technology & Practice",
    icon: Wrench,
    title: "Skills to put into practice",
    text: "Digital tools, AI literacy, and practical workplace competencies create reliable pathways to sustainable employment and entrepreneurship.",
  },
  {
    number: "03",
    tag: "Networks & Mentorship",
    icon: Users,
    title: "Support to move forward",
    text: "Structured mentorship, peer circles, and professional networks turn emerging skills into lasting confidence, career progress, and leadership.",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="v1-home">
      <section className="home-hero">
        <Image
          src="/images/hero-research.jpg"
          alt="Women collaborating in a professional learning workshop"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-kicker">Education · Technology · Agency</span>
            <h1>Equipping women and girls to lead, innovate, and thrive.</h1>
            <p>
              Digital Women Impact Foundation builds practical pathways across Africa and beyond through digital and AI literacy, career mentorship, legal rights education, and evidence-driven policy.
            </p>
            <div className="hero-actions">
              <Link href="/programmes" className="button button-cream">
                Explore our programmes <ArrowUpRight size={17} />
              </Link>
              <Link href="/about" className="hero-secondary">
                Our mission & purpose <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band" id="our-approach">
        <div className="container intro-band-grid">
          <span className="intro-band-lead">Our Core Purpose</span>
          <p>
            Bridging education, emerging technology, and economic agency — with women and girls at the center of every initiative.
          </p>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our approach"
            title="Practical learning for sustainable agency"
            intro="Different life stages bring different barriers. Our approach equips women and girls with the knowledge, tools, and networks to navigate education, work, and leadership."
          />
          <div className="pillar-grid">
            {pillars.map((p) => (
              <div className="pillar" key={p.number}>
                <div className="pillar-top">
                  <span className="pillar-tag">{p.tag}</span>
                  <p.icon size={24} strokeWidth={1.5} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-section" id="our-focus" aria-labelledby="focus-title">
        <div className="container focus-masthead">
          <div>
            <span className="eyebrow">Programmatic areas</span>
            <h2 id="focus-title">Six connected thematic areas</h2>
          </div>
          <div className="focus-masthead-note">
            <p>
              Education opens doors. Digital capability accelerates growth. Rights, confidence, and community give women room to lead.
            </p>
            <Link href="/programmes" className="text-link">
              Explore all focus areas <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <ol className="focus-chapters">
          {focusAreas.map((area, i) => (
            <li className="focus-chapter" key={area.id}>
              <Link href={`/programmes#${area.id}`} className="focus-chapter-link" aria-labelledby={`focus-${area.id}`}>
                <div className="container focus-chapter-inner">
                  <span className="focus-chapter-number" aria-hidden="true">0{i + 1}</span>
                  <h3 id={`focus-${area.id}`}>{area.shortTitle}</h3>
                  <p>{area.text}</p>
                  <ArrowUpRight className="focus-chapter-arrow" size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <div className="container focus-colophon">
          <span>Digital Women Impact Foundation</span>
          <span>Knowledge · Confidence · Opportunity</span>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container impact-grid v1-audience-layout">
          <div>
            <span className="eyebrow light">Who we serve</span>
            <h2>Targeted support across key life stages</h2>
            <p>
              From secondary school and rural communities to corporate careers, Digital Women Impact Foundation recognizes the distinct support each stage of life demands.
            </p>
            <Link href="/about#who-we-serve" className="button button-outline-light">
              Meet our communities <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="v1-audience-list">
            {audiences.map((a, i) => (
              <div key={a.title}>
                <span className="v1-list-number">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-image-wrap">
            <Image
              src="/images/research-table.jpg"
              alt="Women in discussion reviewing research materials"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="story-image"
            />
            <span className="story-image-tag">
              Learning through collaboration & shared practice <MoveUpRight size={15} />
            </span>
          </div>
          <div className="story-copy">
            <span className="eyebrow">Strategic initiative</span>
            <h2>Pan-African Women’s Learning Community</h2>
            <p>
              Our flagship learning initiative connects practical AI and digital skills with negotiation, career development, and responsible technology adoption.
            </p>
            <ul>
              <li><span>01</span> Interactive workshops and peer-led learning circles</li>
              <li><span>02</span> Responsible AI, data privacy, and legal literacy</li>
              <li><span>03</span> Accessibility optimized for mobile and low-bandwidth environments</li>
            </ul>
            <Link href="/programmes#learning-community" className="button button-dark">
              Learn about the initiative <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section insight-section">
        <div className="container">
          <SectionHeading
            eyebrow="Evidence & insights"
            title="Grounding advocacy in rigorous research"
            intro="Explore our published research and policy analysis on workplace negotiation, maternal health equity, and institutional accountability."
            action={{ href: "/articles", label: "View all research" }}
          />
          <div className="insight-grid">
            <Link href={`/articles/${articles[0].slug}`} className="featured-insight">
              <div className="featured-insight-art">
                <span className="featured-insight-badge">Featured Policy Paper</span>
                <h4>{articles[0].title}</h4>
              </div>
              <div className="featured-insight-copy">
                <span className="article-label">Published Research · Jun 2026</span>
                <p>{articles[0].excerpt}</p>
                <span className="read-more">Read full paper <ArrowUpRight size={16} /></span>
              </div>
            </Link>
            <div className="insight-side">
              {articles.slice(1).map((a, i) => (
                <Link key={a.slug} href={`/articles/${a.slug}`} className="small-insight">
                  <span className="small-insight-num">0{i + 2} · {a.category}</span>
                  <h3>{a.title}</h3>
                  <span className="read-more">Read paper <ArrowUpRight size={15} /></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="v1-survey-callout">
            <div>
              <span className="eyebrow">Active empirical survey</span>
              <h3>How do women navigate workplace negotiation?</h3>
              <p>
                Our anonymous academic survey examines workplace experiences and the role AI tools can play in supporting women’s professional agency.
              </p>
            </div>
            <Link href="/survey" className="text-link">
              Participate in the survey <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section community-section">
        <div className="container community-grid">
          <div>
            <span className="eyebrow">Community perspectives</span>
            <h2>Shared experiences and collective progress</h2>
            <p>
              Exchange lessons, ask candid questions, and discover how women are navigating workplace change, negotiation, and technology.
            </p>
            <Link href="/forum" className="text-link">
              Explore community discussion <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="quote-card">
            <MessagesSquare size={24} strokeWidth={1.5} color="var(--rose)" />
            <blockquote>
              “Progress accelerates when women have the platforms, mentors, and networks to advocate for themselves and one another.”
            </blockquote>
            <span>Core Principle · Solidarity in Action</span>
          </div>
        </div>
      </section>
    </main>
  );
}
