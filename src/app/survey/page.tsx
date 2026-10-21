import { ArrowUpRight, Check, Clock3, LockKeyhole, MessageCircleQuestion } from "lucide-react";
import { PageIntro } from "@/components/Ui";
import { SharePage } from "@/components/SharePage";

export const metadata = {
  title: "Women, Negotiation & AI Survey | Digital Women Impact Foundation",
  description: "An anonymous survey exploring workplace negotiation patterns and the role of artificial intelligence in supporting female career agency.",
};

const faqs = [
  [
    "Who is eligible to participate?",
    "Anyone who identifies as a woman and has workplace or professional experience — across all industries, career levels, and geographies. We especially encourage participation from women in Nigeria, across the African continent, and in the United States.",
  ],
  [
    "How is survey data stored and utilized?",
    "All submissions are strictly aggregated and anonymized for academic research and policy formulation. Findings inform peer-reviewed publications, institutional presentations, and leadership toolkits. Individual identifiers are never collected or shared.",
  ],
  [
    "Can this survey be shared with organizational networks?",
    "Yes. Expanding the respondent pool across diverse sectors directly strengthens the statistical validity of our research findings.",
  ],
  [
    "What specific areas does the survey examine?",
    "Questions address negotiation frequency, compensation discussions, promotion advocacy, institutional barriers, confidence dynamics, and perceptions of emerging AI decision-support tools.",
  ],
];

export default function Survey() {
  return (
    <main id="main-content" className="interior-main">
      <PageIntro
        eyebrow="Active Empirical Research"
        title="Women, Negotiation & AI Research Survey"
        intro="An anonymous academic study exploring how women navigate workplace negotiation, assert career value, and evaluate the potential of artificial intelligence tools in closing equity gaps."
      />

      <section className="section survey-overview">
        <div className="container">
          <div className="survey-feature-grid">
            <div>
              <Clock3 size={24} />
              <h3>5-Minute Survey</h3>
              <p>Concise, structured questions designed for thoughtful completion.</p>
            </div>
            <div>
              <LockKeyhole size={24} />
              <h3>Strictly Anonymous</h3>
              <p>No email addresses or identifying personal data are collected.</p>
            </div>
            <div>
              <MessageCircleQuestion size={24} />
              <h3>Actionable Focus</h3>
              <p>Covers compensation, promotion, leadership dynamics, and AI tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section survey-form-section">
        <div className="container survey-layout">
          <div>
            <span className="eyebrow">Participation details</span>
            <h2>Contribute your perspective to academic evidence</h2>
            <p>
              Your insights contribute directly to understanding and dismantling the structural barriers women encounter during workplace negotiation. Aggregated findings guide policy recommendations and curriculum design.
            </p>
            <ul>
              <li><Check size={18} /> Informs institutional policy recommendations</li>
              <li><Check size={18} /> Guides curriculum for female negotiation workshops</li>
              <li><Check size={18} /> Contributes to peer-reviewed research publications</li>
            </ul>
            <a
              className="button button-dark"
              href="https://forms.gle/ZPeKsAE1yHSarKVW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the survey questionnaire <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="survey-embed">
            <div className="survey-embed-top">
              <span>Women, Negotiation & AI Study Questionnaire</span>
              <span>Google Forms ↗</span>
            </div>
            <iframe
              src="https://forms.gle/ZPeKsAE1yHSarKVW8"
              title="Women, Negotiation & AI Survey Questionnaire"
              loading="lazy"
            />
            <p>
              Form experiencing display issues?{" "}
              <a href="https://forms.gle/ZPeKsAE1yHSarKVW8" target="_blank" rel="noopener noreferrer">
                Open questionnaire directly in a new browser tab.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">Methodology & Privacy</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="survey-share">
        <div className="container">
          <h2>Share this research initiative</h2>
          <p>Help ensure diverse workplace experiences are represented in this empirical study.</p>
          <SharePage />
        </div>
      </section>
    </main>
  );
}
