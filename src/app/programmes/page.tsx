import Link from "next/link";
import { ArrowUpRight, BookOpen, MessageCircle, Users } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/Ui";
import { focusAreas, learningTopics } from "@/content/v1";

export const metadata = {
  title: "Our work & programmes",
  description: "Our six focus areas and proposed African women’s learning community: education, mentorship, digital skills, responsible AI, rights and career development.",
  openGraph: { title: "Our work | Women in Focus", description: "Practical pathways for women and girls to learn, build confidence and pursue opportunity." },
};

const learningFormats = [
  { icon: Users, title: "Learn by participating", text: "The plan combines live workshops, expert clinics, peer circles and practical assignments—from preparing a CV with AI to practising a negotiation or pitching a business idea." },
  { icon: MessageCircle, title: "Build through shared practice", text: "Members would review each other’s CVs, pitches and negotiation scripts, experiment with digital tools, and contribute career experiences to an African case study library." },
  { icon: BookOpen, title: "Share knowledge in every direction", text: "Mentors, attorneys, HR professionals, AI practitioners and coaches would exchange knowledge with members. Members’ questions would shape the curriculum and a library of recordings, guides and templates." },
];
const accessPrinciples = [
  ["Learning that fits a phone", "Mobile access is central to the design, with messaging communities and learning materials that can be used without a desktop."],
  ["Options for limited connectivity", "Recorded audio, downloadable guides and offline resources are proposed to make participation easier where internet access is unreliable."],
  ["Local context and language", "African women’s lived experiences would inform the curriculum, with regional groups and language support introduced in phases."],
  ["A community with a voice", "Peer accountability, mentorship and member input would guide learning. Accessibility for disability, literacy and device constraints is part of programme planning."],
];

export default function Programmes() {
  return <main id="main-content" className="interior-main v1-programmes">
    <PageIntro eyebrow="Our work" title={<>Knowledge to act.<br /><em>Skills to move forward.</em></>} intro="Six connected focus areas guide our work with women and girls, from education and technology to rights, leadership and economic independence." />
    <section className="section v1-programme-areas"><div className="container"><SectionHeading eyebrow="Our thematic areas" title={<>Practical pathways.<br /><em>Relevant support.</em></>} intro="These areas set the direction for our programmes and partnerships. Each responds to a different barrier to participation and opportunity." /><div className="v1-programme-list">{focusAreas.map((area, i) => <article id={area.id} className="v1-programme-row" key={area.id}><span className="v1-programme-number">0{i + 1}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></div></section>

    <section className="section mission-section" id="learning-community"><div className="container mission-grid"><div><span className="eyebrow light">In development</span><span className="v1-programme-status">Proposed learning community</span></div><div><h2>Women learning.<br /><em>Africa moving.</em></h2><p>We are shaping an online learning community for women across Africa that connects practical AI and digital skills with negotiation, career development and responsible technology use.</p><p>The plan includes early- and mid-career professionals, job seekers, recent graduates, entrepreneurs, women returning to work or changing careers, and women in underserved or low-connectivity settings.</p><a href="mailto:amalaokafor01@gmail.com?subject=Women%20in%20Focus%20learning%20community" className="button button-outline-light">Express interest <ArrowUpRight size={18} /></a></div></div></section>

    <section className="section v1-learning-section"><div className="container"><SectionHeading eyebrow="Proposed learning themes" title={<>Useful skills.<br /><em>Real-world practice.</em></>} intro="Learning would connect everyday tools with the decisions women make about their careers, businesses and future." /><div className="v1-learning-grid">{learningTopics.map((topic, i) => <div key={topic.title}><span className="eyebrow">0{i + 1}</span><h3>{topic.title}</h3><p>{topic.text}</p></div>)}</div></div></section>

    <section className="section approach-section"><div className="container"><SectionHeading eyebrow="How the community would learn" title={<>With each other.<br /><em>Through practice.</em></>} intro="The community plan centres participation, shared practice and knowledge exchange. Mentorship would flow both ways: career experience shared alongside new digital skills." /><div className="pillar-grid v1-format-grid">{learningFormats.map((format, i) => <div className="pillar" key={format.title}><div className="pillar-top"><span>0{i + 1} / 03</span><format.icon size={28} strokeWidth={1.4} /></div><h3>{format.title}</h3><p>{format.text}</p></div>)}</div></div></section>

    <section className="section v1-access-section"><div className="container faq-layout"><div><span className="eyebrow">Access by design</span><h2>Designed around<br /><em>everyday realities.</em></h2><p className="v1-section-note">The community plan recognises limited bandwidth, device access and different learning needs. These principles guide how it would be delivered.</p></div><div className="faq-list">{accessPrinciples.map(([title, text]) => <details key={title} open><summary>{title}<span>+</span></summary><p>{text}</p></details>)}</div></div></section>

    <section className="section v1-legal-section"><div className="container about-story-grid"><div><span className="eyebrow">Legal literacy & responsible technology</span><h2>Understand your rights.<br /><em>Use tools with care.</em></h2></div><div><p>Attorneys and legal mentors would support learning on employment rights, contracts, online safety, data privacy and responsible AI. Proposed virtual clinics would offer space for questions and document preparation.</p><p>For entrepreneurs, the community plan includes legal awareness around business registration, intellectual property and online commerce. These are planned learning topics; clinic availability and delivery arrangements are still to be developed.</p></div></div></section>

    <section className="section v1-progression-section"><div className="container"><SectionHeading eyebrow="A proposed pathway" title={<>Start where you are.<br /><em>Keep growing.</em></>} intro="The community plan outlines progression from foundational skills to practice, leadership and mentoring, supported by a portfolio of work. Badges and certificates are proposed elements of the programme." /><ol className="v1-progression-list">{["Foundation", "Practitioner", "Leader", "Mentor"].map((step, i) => <li key={step}><span>0{i + 1}</span><h3>{step}</h3><ArrowUpRight size={24} aria-hidden="true" /></li>)}</ol><p className="v1-section-note">Programme development will consider how to track practical outcomes such as employment, income, business growth and confidence, alongside learning progress.</p></div></section>

    <section className="section community-section"><div className="container community-grid"><div><span className="eyebrow">Help shape what comes next</span><h2>Bring your experience.<br /><em>Build with us.</em></h2></div><div className="v1-partner-copy"><p>We welcome conversations with mentors, educators, legal networks, NGOs, universities and technology partners who share this direction.</p><a href="mailto:amalaokafor01@gmail.com?subject=Women%20in%20Focus%20partnership" className="button button-dark">Discuss a partnership <ArrowUpRight size={18} /></a><Link href="/forum" className="text-link">Explore community stories <ArrowUpRight size={18} /></Link></div></div></section>
  </main>;
}
