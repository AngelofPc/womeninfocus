import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Equal, Globe, HeartHandshake, Lightbulb, Mail, MapPin, Phone, Users, Waypoints } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/Ui";
import { audiences, changePathway, mission, values, vision } from "@/content/v1";

export const metadata = {
  title: "About us",
  description: "Our vision, mission and approach to helping women and girls build knowledge, skills, confidence and opportunity.",
  openGraph: { title: "About Digital Women Impact Foundation", description: vision },
};

const valueIcons = [Waypoints, Equal, Users, BookOpen, Lightbulb, HeartHandshake];

export default function About() {
  return (
    <main id="main-content" className="interior-main v1-about">
      <PageIntro
        eyebrow="About the foundation"
        title="Advancing agency, equity, and opportunity for every woman"
        intro="A women- and girl-centred international organisation helping girls and women build the knowledge, confidence, skills, and opportunities to thrive in an evolving world."
      />

      <section className="section about-story">
        <div className="container about-story-grid">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Practical support centered on lived realities</h2>
          </div>
          <div>
            <p>
              Digital Women Impact Foundation brings together mentorship, education, skills development, technology and AI literacy, rights awareness, and advocacy. Our initiatives are shaped by the distinct needs of girls in school, women in rural communities, and women navigating corporate and professional careers.
            </p>
            <p>
              We provide the knowledge, tools, networks, and legal awareness that enable women and girls to make informed decisions, pursue viable opportunities, assert their rights, and lead within their communities and workplaces.
            </p>
            <Link href="/programmes" className="text-link">
              Explore our programmes <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-quote">
        <div className="container">
          <span className="eyebrow light">Our Vision</span>
          <blockquote>{vision}</blockquote>
          <span>Digital Women Impact Foundation</span>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story-grid">
          <div>
            <span className="eyebrow">Institutional rationale</span>
            <h2>Addressing structural barriers to progress</h2>
          </div>
          <div>
            <p>
              Systemic barriers to education, economic self-determination, technology access, and institutional leadership frequently leave women and girls without the tools and networks they need to direct their own lives. These barriers vary widely between communities and across life stages.
            </p>
            <p>
              As technological shifts reshape learning and employment globally, access to practical AI literacy, structured mentorship, and legal rights education becomes foundational. We prepare girls for future economies, reinforce women’s professional agency, and connect underserved communities to tangible opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container mission-grid">
          <div>
            <span className="eyebrow">Our Mission</span>
          </div>
          <div>
            <h2>Knowledge, confidence, and agency</h2>
            <p>{mission}</p>
          </div>
        </div>
      </section>

      <section className="section v1-change-section">
        <div className="container">
          <SectionHeading
            eyebrow="Theory of change"
            title="A structured pathway from access to agency"
            intro="When women and girls gain access to relevant knowledge, practical competencies, and supportive networks, they are equipped to make decisions, advocate for themselves, and achieve meaningful independence."
          />
          <ol className="v1-change-pathway">
            {changePathway.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <div className="v1-change-outcomes">
            <p>
              Greater confidence and agency empower women and girls to complete education, enter competitive employment, negotiate fair compensation, and lead within civic institutions.
            </p>
            <p>
              Over time, our interventions contribute to sustainable economic independence, digital self-reliance, and active participation in families, workplaces, and policymaking.
            </p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="Principles that guide our work"
          />
          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div className="value-card" key={v.title}>
                  <div className="value-head">
                    <span>0{i + 1}</span>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section v1-audience-section" id="who-we-serve">
        <div className="container">
          <SectionHeading
            eyebrow="Target groups"
            title="Supporting women across communities and life stages"
            intro="Our initiatives respond to distinct life situations, ensuring that guidance and resources are contextually relevant."
          />
          <div className="v1-audience-cards">
            {audiences.map((a, i) => (
              <div key={a.title}>
                <span className="eyebrow">Group 0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container founder-grid">
          <div className="founder-photo">
            <Image
              src="/images/research-table.jpg"
              alt="Amalachukwu Shalom Okafor leading policy research discussions"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span>Executive Leadership</span>
          </div>
          <div>
            <span className="eyebrow">Founder Profile</span>
            <h2>Amalachukwu Shalom Okafor</h2>
            <p className="founder-role">Legal Scholar & Research Leader</p>
            <p>
              Amalachukwu Shalom Okafor is a legal scholar and research leader with academic affiliations including Harvard University and the Massachusetts Institute of Technology (MIT). Her research spans constitutional law, governance systems, maternal healthcare equity, and rights-based regulatory frameworks.
            </p>
            <p>
              She has directed policy-driven research, authored comparative legal analyses, and published extensively on institutional accountability, gender equity, and public health transformation across Africa and the United States.
            </p>
            <a href="mailto:info@dwifoundation.org" className="text-link">
              Contact leadership <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section about-offices-section">
        <div className="container">
          <SectionHeading
            eyebrow="Global presence"
            title="Offices in Nigeria and the United States"
            intro="Digital Women Impact Foundation maintains operational presence in Nigeria and the United States, connecting grassroots community initiatives with international research and advocacy."
          />
          <div className="about-offices-grid">
            <div className="office-card">
              <span className="eyebrow">Nigeria Office</span>
              <h3>Enugu, Nigeria</h3>
              <address>
                <MapPin size={16} /> No. 2 Sir Arodiwe Street, New GRA, Trans Ekulu, Enugu, Enugu State, Nigeria
              </address>
              <div className="office-links">
                <a href="tel:+2348057324483">
                  <Phone size={15} /> +234 (0) 8057324483
                </a>
                <a href="mailto:info@dwifoundation.org">
                  <Mail size={15} /> info@dwifoundation.org
                </a>
              </div>
            </div>

            <div className="office-card">
              <span className="eyebrow">USA Office</span>
              <h3>Boston, Massachusetts</h3>
              <address>
                <MapPin size={16} /> 41 S. Waverly, Brighton, Boston, Massachusetts 021353
              </address>
              <div className="office-links">
                <a href="tel:+16174175038">
                  <Phone size={15} /> +1 (617) 417-5038
                </a>
                <a href="mailto:info@dwifoundation.org">
                  <Mail size={15} /> info@dwifoundation.org
                </a>
              </div>
            </div>
          </div>

          <div className="office-direct-bar">
            <div>
              <strong>Institutional Correspondence</strong>
              <span>General inquiries, institutional partnerships & media</span>
            </div>
            <div className="office-direct-links">
              <a href="mailto:info@dwifoundation.org">
                <Mail size={16} /> info@dwifoundation.org
              </a>
              <a href="https://www.dwifoundation.org" target="_blank" rel="noopener noreferrer">
                <Globe size={16} /> www.dwifoundation.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
