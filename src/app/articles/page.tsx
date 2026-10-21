import { PageIntro } from "@/components/Ui";
import { ArticleLibrary } from "@/components/ArticleLibrary";
import articles from "@/content/articles.json";

export const metadata = {
  title: "Research & insights",
  description: "Published research on women’s negotiation, maternal health, rights and institutional accountability.",
  openGraph: {
    title: "Research & insights | Digital Women Impact Foundation",
    description: "Understanding the systems and barriers that shape women’s lives.",
  },
};

export default function Articles() {
  return (
    <main id="main-content" className="interior-main">
      <PageIntro
        eyebrow="Published Research & Policy"
        title="Rigorous research on rights, policy, and equity"
        intro="Our published studies and policy papers examine maternal healthcare justice, workplace negotiation patterns, constitutional protections, and institutional accountability across Africa and the United States."
      />
      <ArticleLibrary articles={articles} />
    </main>
  );
}
