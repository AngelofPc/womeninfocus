import { V2ArticleLibrary } from "@/components/V2ArticleLibrary";
import articles from "@/content/articles.json";

export const metadata = { title: "Research — Version 02", description: "Published research and policy analysis from Women in Focus." };

export default function V2Articles() {
  return <main id="main-content" className="v2-interior">
    <header className="v2-page-hero"><div className="v2-container"><span className="v2-label">Research archive</span><h1>Published work</h1><p>Legal analysis, policy research, and studies of the conditions shaping women’s health and working lives.</p></div></header>
    <section className="v2-interior-section v2-archive-section"><div className="v2-container"><V2ArticleLibrary articles={articles} /></div></section>
    <section className="v2-archive-note"><div className="v2-container"><span className="v2-label">About the archive</span><p>These articles preserve the substance of the original Women in Focus publications. Each article includes a link to its source.</p></div></section>
  </main>;
}
