import { V2ForumBoard } from "@/components/V2ForumBoard";

export const metadata = { title: "Discussion — Version 02", description: "Community discussion on women, work, negotiation, and AI." };

export default function V2Forum() {
  return <main id="main-content" className="v2-interior">
    <header className="v2-page-hero"><div className="v2-container"><span className="v2-label">Discussion</span><h1>What are women learning at work?</h1><p>A space for practical experiences with negotiation, career decisions, and new tools.</p></div></header>
    <section className="v2-interior-section v2-forum-section"><div className="v2-container"><V2ForumBoard /></div></section>
  </main>;
}
