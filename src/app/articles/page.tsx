import { PageIntro } from "@/components/Ui";
import { ArticleLibrary } from "@/components/ArticleLibrary";
import articles from "@/content/articles.json";

export const metadata = { title: "Research & insights" };

export default function Articles() {
  return <main id="main-content" className="interior-main"><PageIntro eyebrow="Published work" title={<>Research to read.<br /><em>Ideas to act on.</em></>} intro="Explore legal analysis, policy thinking, and research that asks what women need from the systems shaping their lives." /><ArticleLibrary articles={articles} /></main>;
}
