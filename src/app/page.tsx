import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, ChartNoAxesCombined, HeartPulse, MessagesSquare, MoveUpRight, ScanSearch, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import articles from "@/content/articles.json";

const pillars = [
  { number: "01", icon: ScanSearch, title: "Research that reveals", text: "We study the systems behind unequal outcomes, from workplace negotiation and AI to maternal health and public policy." },
  { number: "02", icon: ChartNoAxesCombined, title: "Analysis that connects", text: "We bring legal reasoning, data, and lived experience together to understand what needs to change." },
  { number: "03", icon: Sparkles, title: "Advocacy that moves", text: "We turn insight into frameworks, conversations, and recommendations that people and institutions can act on." },
];

const themes = [
  { num: "01", title: "Women & negotiation", text: "Why women negotiate less, what happens when they do, and how to change the default.", className: "theme-one" },
  { num: "02", title: "AI & career equity", text: "Exploring whether AI tools close opportunity gaps or quietly reproduce them.", className: "theme-two" },
  { num: "03", title: "Maternal health & rights", text: "Examining the legal and policy systems that shape maternal health outcomes.", className: "theme-three" },
  { num: "04", title: "Policy & systemic change", text: "Moving from individual strategies to institutional accountability and reform.", className: "theme-four" },
];

export default function Home() {
  return <main id="main-content">
    <section className="home-hero">
      <Image src="/images/hero-research.jpg" alt="Women researchers collaborating at a table" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content"><div className="hero-copy"><span className="hero-kicker"><span className="kicker-line" /> Research · Policy · Advocacy</span><h1>Evidence for a world where <em>women can thrive.</em></h1><p>We study the systems shaping women’s lives and turn insight into action. From career equity to maternal health, our work connects research, lived experience, and policy.</p><div className="hero-actions"><Link href="/about" className="button button-cream">Discover our mission <ArrowUpRight size={18} /></Link><Link href="/articles" className="hero-secondary">Explore our research <ArrowRight size={18} /></Link></div></div></div>
      <div className="hero-bottom container"><span>Independent research. Meaningful change.</span><a href="#our-approach" aria-label="Scroll to our approach"><ArrowDown size={18} /></a><Link href="/v2" className="version-link">View version 02 ↗</Link></div>
    </section>

    <section className="intro-band" id="our-approach"><div className="container intro-band-grid"><span className="eyebrow">The work starts here</span><p>Progress begins when we ask <em>better questions</em>—and insist on answers grounded in evidence.</p><Asterisk className="intro-asterisk" size={76} strokeWidth={1} /></div></section>

    <section className="section approach-section"><div className="container"><SectionHeading eyebrow="Our approach" title={<>Research with purpose.<br /><em>Change with people.</em></>} intro="We believe rigorous inquiry can help build fairer systems for women, wherever they live and work." /><div className="pillar-grid">{pillars.map(p => <div className="pillar" key={p.number}><div className="pillar-top"><span>{p.number} / 03</span><p.icon size={28} strokeWidth={1.4} /></div><h3>{p.title}</h3><p>{p.text}</p></div>)}</div></div></section>

    <section className="section themes-section"><div className="container"><SectionHeading eyebrow="What we focus on" title={<>The questions driving<br /><em>our work.</em></>} intro="Our research spans the places where policy, technology, and women’s everyday experiences meet." /><div className="theme-grid">{themes.map(t => <div className={`theme-card ${t.className}`} key={t.num}><span className="theme-num">{t.num} / Focus area</span><div className="theme-glyph" aria-hidden="true"><span /><span /><span /></div><div><h3>{t.title}</h3><p>{t.text}</p></div></div>)}</div></div></section>

    <section className="section impact-section"><div className="container impact-grid"><div><span className="eyebrow light">Our growing community</span><h2>Every number<br />represents <em>a voice.</em></h2><p>Evidence grows stronger when more perspectives are heard. Our research is built with the people whose experiences it seeks to understand.</p><Link href="/survey" className="button button-outline-light">Add your perspective <ArrowUpRight size={18} /></Link></div><div className="impact-stats"><div><strong>500<span>+</span></strong><span>Survey responses</span></div><div><strong>5</strong><span>Countries represented</span></div><div><strong>4<span>+</span></strong><span>Publications</span></div></div></div></section>

    <section className="section insight-section"><div className="container"><SectionHeading eyebrow="Latest thinking" title={<>Ideas worth <em>sharing.</em></>} intro="Read our analysis on workplace negotiation, maternal health, legal accountability, and the systems shaping women’s lives." action={{ href: "/articles", label: "View all insights" }} /><div className="insight-grid"><Link href={`/articles/${articles[0].slug}`} className="featured-insight"><div className="featured-insight-art"><span>Featured research</span><HeartPulse size={118} strokeWidth={0.8} /><span className="art-ring" /></div><div className="featured-insight-copy"><span className="article-label">Research <span>·</span> Jun 25, 2026</span><h3>{articles[0].title}</h3><p>{articles[0].excerpt}</p><span className="read-more">Read the research <ArrowUpRight size={18} /></span></div></Link><div className="insight-side">{articles.slice(1).map((a, i) => <Link key={a.slug} href={`/articles/${a.slug}`} className="small-insight"><span className="small-insight-num">0{i+2}</span><div><span className="article-label">{a.category} <span>·</span> {new Date(a.date).toLocaleDateString("en-US", {month:"short",day:"numeric",year:"numeric"})}</span><h3>{a.title}</h3><span className="read-more">Read article <ArrowUpRight size={17} /></span></div></Link>)}</div></div></div></section>

    <section className="section story-section"><div className="container story-grid"><div className="story-image-wrap"><Image src="/images/research-table.jpg" alt="Research collaborators reviewing notes and data together" fill sizes="(max-width: 900px) 100vw, 50vw" className="story-image" /><span className="story-image-tag">Ideas become impact together <MoveUpRight size={16} /></span></div><div className="story-copy"><span className="eyebrow">Participate in the research</span><h2>Your experience can <em>shape what comes next.</em></h2><p>How do women navigate negotiation at work? What could AI do to make the playing field fairer? Our anonymous, five-minute survey helps us understand the realities behind the data.</p><ul><li><span>01</span> Informs policy recommendations</li><li><span>02</span> Shapes future AI tools</li><li><span>03</span> Contributes to open research</li></ul><Link href="/survey" className="button button-dark">Take the survey <ArrowUpRight size={18} /></Link></div></div></section>

    <section className="section community-section"><div className="container community-grid"><div><span className="eyebrow">Community voices</span><h2>Real stories.<br /><em>Shared strength.</em></h2><p>A place to exchange experiences, strategies, and encouragement without needing an account.</p><Link href="/forum" className="text-link">Join the discussion <ArrowUpRight size={18} /></Link></div><div className="quote-card"><MessagesSquare size={26} strokeWidth={1.3} /><blockquote>“I finally asked for a raise after three years. The key was having market data ready.”</blockquote><span>Community voice <b>·</b> Salary negotiation</span></div></div></section>
  </main>;
}
