import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Scale, Search, Users } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/Ui";

export const metadata = { title: "About us" };

const values = [
  { num: "01", icon: Search, title: "Evidence over opinion", text: "Every claim we make is grounded in data, legal analysis, and peer-reviewed research. We let the evidence lead." },
  { num: "02", icon: Scale, title: "Accountability", text: "We believe institutions must answer for systemic failures, especially when lives are at stake." },
  { num: "03", icon: Users, title: "Equity & inclusion", text: "Our work centres the experiences of women and vulnerable populations most affected by policy gaps." },
];

export default function About() {
  return <main id="main-content" className="interior-main"><PageIntro eyebrow="About Women in Focus" title={<>Independent inquiry.<br /><em>Collective progress.</em></>} intro="A research and advocacy platform focused on legal and policy analysis at the intersection of gender, public health, and governance." />
    <section className="section about-story"><div className="container about-story-grid"><div><span className="eyebrow">Who we are</span><h2>We follow the evidence <em>where it matters most.</em></h2></div><div><p>We examine systemic challenges—from maternal health to institutional accountability—using evidence-based research and comparative insights to inform policy, strengthen systems, and drive meaningful change.</p><p>Across every project, we connect careful analysis with the people and communities affected by the questions we ask.</p><Link href="/articles" className="text-link">Explore our research <ArrowUpRight size={18} /></Link></div></div></section>
    <section className="about-quote"><div className="container"><span className="quote-mark">“</span><blockquote>Accountability is not a luxury. It is the minimum standard we owe to every woman whose life depends on the systems we build.</blockquote><span>Women in Focus · Research & Advocacy</span></div></section>
    <section className="section founder-section"><div className="container founder-grid"><div className="founder-photo"><Image src="/images/research-table.jpg" alt="Collaborative research work in progress" fill sizes="(max-width: 900px) 100vw, 48vw" /><span>Behind the work</span></div><div><span className="eyebrow">Meet the founder</span><h2>Amalachukwu<br /><em>Shalom Okafor.</em></h2><p className="founder-role">Legal Scholar & Research Leader</p><p>Amalachukwu Shalom Okafor is a legal scholar and research leader with experience at institutions including Harvard University and the Massachusetts Institute of Technology (MIT). Her work spans law, policy, and technology, with a focus on governance systems, maternal health, and rights-based frameworks.</p><p>She has led complex research initiatives, developed policy-driven analysis, and published on issues of legal accountability, systemic reform, and public health.</p><a href="mailto:amalaokafor01@gmail.com" className="text-link">Get in touch <ArrowUpRight size={18} /></a></div></div></section>
    <section className="section mission-section"><div className="container mission-grid"><span className="eyebrow light">Our mission</span><div><h2>Rigorous research.<br />Clear analysis.<br /><em>Equitable outcomes.</em></h2><p>To produce rigorous research and clear policy analysis that advances accountability, strengthens institutions, and promotes equitable outcomes—particularly for women and vulnerable populations.</p></div></div></section>
    <section className="section values-section"><div className="container"><SectionHeading eyebrow="What drives us" title={<>Principles behind <em>the work.</em></>} /><div className="values-grid">{values.map(v => <div className="value-card" key={v.num}><div className="value-head"><span>{v.num}</span><v.icon size={25} strokeWidth={1.5} /></div><h3>{v.title}</h3><p>{v.text}</p></div>)}</div></div></section>
  </main>;
}
