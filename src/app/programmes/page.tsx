import Link from "next/link";
import { ArrowUpRight, BookOpen, MessageCircle, Users } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/Ui";
import { focusAreas, learningTopics } from "@/content/v1";

export const metadata = {
  title: "Our work & programmes",
  description: "Our six focus areas and proposed African women’s learning community: education, mentorship, digital skills, responsible AI, rights and career development.",
  openGraph: {
    title: "Our work | Digital Women Impact Foundation",
    description: "Practical pathways for women and girls to learn, build confidence and pursue opportunity.",
  },
};

const learningFormats = [
  {
    icon: Users,
    title: "Participatory Workshops & Clinics",
    text: "Interactive workshops, expert clinics, and structured peer circles focused on applied skills — from CV enhancement with AI to negotiation simulations and business pitching.",
  },
  {
    icon: MessageCircle,
    title: "Collaborative Practice & Case Studies",
    text: "Members review negotiation scripts, test digital workflows, and contribute real career experiences to an evolving repository of African workplace case studies.",
  },
  {
    icon: BookOpen,
    title: "Multi-directional Knowledge Exchange",
    text: "Experienced attorneys, executives, HR leaders, and AI practitioners exchange insights with members, continually refining curriculum guides, legal templates, and toolkits.",
  },
];

const accessPrinciples = [
  ["Mobile-First Architecture", "Learning experiences, messaging communities, and reference resources are structured to run smoothly on standard smartphones without requiring laptops."],
  ["Low-Bandwidth Optimization", "Downloadable audio briefs, text-based guides, and asynchronous learning resources ensure participation remains accessible in regions with limited connectivity."],
  ["Contextual & Regional Relevance", "Curriculum and case studies are grounded in African economic, legal, and workplace contexts, with localized cohorts and language support phased in over time."],
  ["Inclusive & Accountable Community", "Peer accountability circles, mentorship pairing, and accessibility accommodations for diverse literacy and device levels are integrated into program delivery."],
];

export default function Programmes() {
  return (
    <main id="main-content" className="interior-main v1-programmes">
      <PageIntro
        eyebrow="Programmes & Initiatives"
        title="Practical pathways to education, technology, and economic agency"
        intro="Six strategic thematic areas guide our interventions, connecting education, digital literacy, legal rights, and economic self-determination for women and girls."
      />

      <section className="section v1-programme-areas">
        <div className="container">
          <SectionHeading
            eyebrow="Thematic areas"
            title="Six thematic areas of intervention"
            intro="These areas define the strategic scope of our initiatives and institutional partnerships, addressing foundational barriers to female agency."
          />
          <div className="v1-programme-list">
            {focusAreas.map((area, i) => (
              <article id={area.id} className="v1-programme-row" key={area.id}>
                <span className="v1-programme-number">0{i + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-section" id="learning-community">
        <div className="container mission-grid">
          <div>
            <span className="eyebrow light">Strategic Initiative</span>
            <span className="v1-programme-status">In Development</span>
          </div>
          <div>
            <h2>Pan-African Women’s Learning Community</h2>
            <p>
              We are establishing a continent-wide learning collective for African women that combines practical artificial intelligence and digital capability with negotiation training, career progression, and responsible technology adoption.
            </p>
            <p>
              The community serves early- and mid-career professionals, job seekers, recent graduates, founders, and women returning to the workforce across both urban centers and low-connectivity environments.
            </p>
            <a
              href="mailto:info@dwifoundation.org?subject=Digital%20Women%20Impact%20Foundation%20learning%20community"
              className="button button-outline-light"
            >
              Express interest in joining <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section v1-learning-section">
        <div className="container">
          <SectionHeading
            eyebrow="Curriculum scope"
            title="Core curriculum and practical themes"
            intro="Learning modules connect everyday digital tools with critical professional and financial decisions."
          />
          <div className="v1-learning-grid">
            {learningTopics.map((topic, i) => (
              <div key={topic.title}>
                <span className="eyebrow">Module 0{i + 1}</span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery methodology"
            title="A participatory model built on shared practice"
            intro="The learning community centers reciprocal mentorship: seasoned career experience shared alongside emerging digital and AI proficiencies."
          />
          <div className="pillar-grid v1-format-grid">
            {learningFormats.map((format, i) => (
              <div className="pillar" key={format.title}>
                <div className="pillar-top">
                  <span className="pillar-tag">Track 0{i + 1}</span>
                  <format.icon size={24} strokeWidth={1.5} />
                </div>
                <h3>{format.title}</h3>
                <p>{format.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section v1-access-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">Accessibility principles</span>
            <h2>Program design centered on accessibility and inclusion</h2>
            <p className="v1-section-note">
              Our community architecture intentionally accounts for device constraints, data costs, and varied educational backgrounds.
            </p>
          </div>
          <div className="faq-list">
            {accessPrinciples.map(([title, text]) => (
              <details key={title} open>
                <summary>
                  {title}
                  <span>+</span>
                </summary>
                <p>{text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section v1-legal-section">
        <div className="container about-story-grid">
          <div>
            <span className="eyebrow">Rights & governance</span>
            <h2>Legal literacy and ethical technology adoption</h2>
          </div>
          <div>
            <p>
              Legal practitioners and technology governance mentors guide participants on workplace rights, employment agreements, intellectual property, data privacy, and responsible AI usage. Structured legal clinics offer guidance on contract review and business formation.
            </p>
            <p>
              For female entrepreneurs, legal training covers business registration, regulatory compliance, and cross-border digital commerce.
            </p>
          </div>
        </div>
      </section>

      <section className="section v1-progression-section">
        <div className="container">
          <SectionHeading
            eyebrow="Development framework"
            title="Structured progression from foundation to mentorship"
            intro="Participants advance through defined capability milestones supported by applied project portfolios, credentialing, and peer leadership roles."
          />
          <ol className="v1-progression-list">
            {["Foundation", "Practitioner", "Leader", "Mentor"].map((step, i) => (
              <li key={step}>
                <span>Stage 0{i + 1}</span>
                <h3>{step}</h3>
                <ArrowUpRight size={20} aria-hidden="true" />
              </li>
            ))}
          </ol>
          <p className="v1-section-note">
            Program impact is evaluated through tangible outcomes: employment access, income trajectory, negotiation success, and civic engagement.
          </p>
        </div>
      </section>

      <section className="section community-section">
        <div className="container community-grid">
          <div>
            <span className="eyebrow">Partnership opportunities</span>
            <h2>Collaborate with Digital Women Impact Foundation</h2>
          </div>
          <div className="v1-partner-copy">
            <p>
              We welcome strategic collaborations with academic institutions, technology companies, legal networks, philanthropic funds, and civil society organizations who share our commitment to expanding female opportunity.
            </p>
            <a
              href="mailto:info@dwifoundation.org?subject=Digital%20Women%20Impact%20Foundation%20partnership"
              className="button button-dark"
            >
              Initiate a partnership dialogue <ArrowUpRight size={17} />
            </a>
            <Link href="/forum" className="text-link">
              Explore community voices <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
