import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, BookOpen, HeartPulse, MessagesSquare, MoveUpRight, Users, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import articles from "@/content/articles.json";
import { audiences, focusAreas } from "@/content/v1";

export const metadata = {
  title: "Women in Focus — Skills, confidence & opportunity",
  description: "Equipping women and girls with education, mentorship, digital and AI literacy, practical skills and rights awareness to shape their own futures.",
  openGraph: { title: "Women in Focus — Skills, confidence & opportunity", description: "Knowledge, skills and support for women and girls to shape their own futures." },
};

const pillars = [
  { number: "01", icon: BookOpen, title: "Knowledge that opens doors", text: "Education, career guidance and rights awareness help women and girls make informed decisions about their lives." },
  { number: "02", icon: Wrench, title: "Skills to put into practice", text: "Digital tools, AI literacy and practical skills create pathways to work, enterprise and economic independence." },
  { number: "03", icon: Users, title: "Support to move forward", text: "Mentorship, peer learning and supportive networks help turn new skills into confidence, agency and opportunity." },
];

export default function Home() {
  return <main id="main-content" className="v1-home">
    <section className="home-hero">
      <Image src="/images/hero-research.jpg" alt="Women learning and working together at a table" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content"><div className="hero-copy"><span className="hero-kicker"><span className="kicker-line" /> Learning · Opportunity · Agency</span><h1>Her future.<br /><em>Her possibilities.</em></h1><p>We equip women and girls with the knowledge, skills, mentorship and confidence to learn, earn, lead and shape their own futures.</p><div className="hero-actions"><Link href="/programmes" className="button button-cream">Explore our work <ArrowUpRight size={18} /></Link><Link href="/about" className="hero-secondary">Discover our mission <ArrowRight size={18} /></Link></div></div></div>
      <div className="hero-bottom container"><span>For women and girls. At every stage.</span><a href="#our-approach" aria-label="Scroll to our approach"><ArrowDown size={18} /></a><Link href="/v2" className="version-link">View version 02 ↗</Link></div>
    </section>

    <section className="intro-band" id="our-approach"><div className="container intro-band-grid"><span className="eyebrow">The work starts here</span><p>With the right knowledge, tools and support, <em>possibility becomes something she can act on.</em></p><Asterisk className="intro-asterisk" size={76} strokeWidth={1} /></div></section>

    <section className="section approach-section"><div className="container"><SectionHeading eyebrow="Our approach" title={<>Practical learning.<br /><em>Lasting confidence.</em></>} intro="Different life stages bring different barriers. Our approach puts women and girls at the centre of the support they need." /><div className="pillar-grid">{pillars.map(p => <div className="pillar" key={p.number}><div className="pillar-top"><span>{p.number} / 03</span><p.icon size={28} strokeWidth={1.4} /></div><h3>{p.title}</h3><p>{p.text}</p></div>)}</div></div></section>

    <section className="section themes-section"><div className="container"><SectionHeading eyebrow="Our six focus areas" title={<>More ways to learn.<br /><em>More room to grow.</em></>} intro="Our work connects education, technology, economic opportunity and rights—with inclusion at every step." action={{ href: "/programmes", label: "Explore our focus areas" }} /><div className="theme-grid v1-focus-grid">{focusAreas.map((t, i) => <Link href={`/programmes#${t.id}`} className={`theme-card ${t.className} v1-focus-card`} key={t.id}><span className="theme-num">0{i + 1} / Focus area <ArrowUpRight size={16} /></span><div className="theme-glyph" aria-hidden="true"><span /><span /><span /></div><div><h3>{t.shortTitle}</h3><p>{t.text}</p></div></Link>)}</div></div></section>

    <section className="section impact-section"><div className="container impact-grid v1-audience-layout"><div><span className="eyebrow light">Who we serve</span><h2>Different journeys.<br /><em>A shared possibility.</em></h2><p>From school and rural communities to the workplace, Women in Focus recognises the knowledge, skills and support each stage of life calls for.</p><Link href="/about#who-we-serve" className="button button-outline-light">Meet our community <ArrowUpRight size={18} /></Link></div><div className="v1-audience-list">{audiences.map((a, i) => <div key={a.title}><span className="v1-list-number">0{i + 1}</span><h3>{a.title}</h3><p>{a.text}</p></div>)}</div></div></section>

    <section className="section story-section"><div className="container story-grid"><div className="story-image-wrap"><Image src="/images/research-table.jpg" alt="Women exchanging ideas and reviewing learning materials" fill sizes="(max-width: 900px) 100vw, 50vw" className="story-image" /><span className="story-image-tag">Learning grows through shared practice <MoveUpRight size={16} /></span></div><div className="story-copy"><span className="eyebrow">In development / Learning community</span><h2>Learn together.<br /><em>Move forward together.</em></h2><p>Our proposed African women’s learning community brings practical AI and digital skills together with negotiation, mentorship and career development.</p><ul><li><span>01</span> Practical workshops and peer learning</li><li><span>02</span> Responsible AI and legal awareness</li><li><span>03</span> Access designed around everyday realities</li></ul><Link href="/programmes#learning-community" className="button button-dark">Discover the community plan <ArrowUpRight size={18} /></Link></div></div></section>

    <section className="section insight-section"><div className="container"><SectionHeading eyebrow="Research & insights" title={<>Understanding the barriers.<br /><em>Informing the work.</em></>} intro="Explore our published thinking on workplace negotiation, maternal health, rights and institutional accountability." action={{ href: "/articles", label: "View all research" }} /><div className="insight-grid"><Link href={`/articles/${articles[0].slug}`} className="featured-insight"><div className="featured-insight-art"><span>Featured research</span><HeartPulse size={118} strokeWidth={0.8} /><span className="art-ring" /></div><div className="featured-insight-copy"><span className="article-label">Research <span>·</span> Jun 25, 2026</span><h3>{articles[0].title}</h3><p>{articles[0].excerpt}</p><span className="read-more">Read the research <ArrowUpRight size={18} /></span></div></Link><div className="insight-side">{articles.slice(1).map((a, i) => <Link key={a.slug} href={`/articles/${a.slug}`} className="small-insight"><span className="small-insight-num">0{i+2}</span><div><span className="article-label">{a.category} <span>·</span> {new Date(a.date).toLocaleDateString("en-US", {month:"short",day:"numeric",year:"numeric"})}</span><h3>{a.title}</h3><span className="read-more">Read article <ArrowUpRight size={17} /></span></div></Link>)}</div></div><div className="v1-survey-callout"><div><span className="eyebrow">Add your perspective</span><h3>How do women navigate negotiation at work?</h3><p>Our anonymous survey explores workplace experiences and the role AI could play in supporting women’s careers.</p></div><Link href="/survey" className="text-link">Take the five-minute survey <ArrowUpRight size={18} /></Link></div></div></section>

    <section className="section community-section"><div className="container community-grid"><div><span className="eyebrow">Shared experience</span><h2>Real stories.<br /><em>Shared strength.</em></h2><p>Exchange experiences, ask questions and share what you have learned about work, technology and advocating for yourself.</p><Link href="/forum" className="text-link">Explore the discussion <ArrowUpRight size={18} /></Link></div><div className="quote-card"><MessagesSquare size={26} strokeWidth={1.3} /><blockquote>“Progress is stronger when women support, mentor and create opportunities for one another.”</blockquote><span>Our core value <b>·</b> Solidarity</span></div></div></section>
  </main>;
}
