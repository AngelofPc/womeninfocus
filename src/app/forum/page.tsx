import { PageIntro } from "@/components/Ui";
import { ForumBoard } from "@/components/ForumBoard";

export const metadata = {
  title: "Community discussion",
  description: "Share experiences of work, learning, technology and advocating for yourself.",
  openGraph: {
    title: "Community | Digital Women Impact Foundation",
    description: "Learning from women’s shared experiences.",
  },
};

export default function Forum() {
  return (
    <main id="main-content" className="interior-main">
      <PageIntro
        eyebrow="Community Forum"
        title="Community voices and shared workplace experiences"
        intro="A constructive space to exchange lessons learned across career development, artificial intelligence adoption, workplace negotiation, and institutional equity."
      />
      <ForumBoard />
    </main>
  );
}
