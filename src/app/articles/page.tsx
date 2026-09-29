import { PageIntro } from "@/components/Ui";
import { ArticleLibrary } from "@/components/ArticleLibrary";
import articles from "@/content/articles.json";

export const metadata = { title: "Research & insights", description: "Published research on women’s negotiation, maternal health, rights and institutional accountability.", openGraph: { title: "Research & insights | Women in Focus", description: "Understanding the systems and barriers that shape women’s lives." } };

export default function Articles() {
  return <main id="main-content" className="interior-main"><PageIntro eyebrow="Published work" title={<>Research to read.<br /><em>Ideas to act on.</em></>} intro="Our research explores workplace negotiation, maternal health, rights and institutional accountability—bringing evidence to the barriers that shape women’s lives." /><ArticleLibrary articles={articles} /></main>;
}
