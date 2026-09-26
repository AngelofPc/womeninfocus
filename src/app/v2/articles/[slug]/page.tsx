import Link from "next/link";
import { notFound } from "next/navigation";
import { V2ArticleActions } from "@/components/V2ArticleActions";
import articles from "@/content/articles.json";

export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  return { title: article ? `${article.title} — Version 02` : "Publication", description: article?.excerpt };
}

export default async function V2Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const index = articles.findIndex(item => item.slug === slug);
  const next = articles[(index + 1) % articles.length];
  return <main id="main-content" className="v2-interior v2-reader">
    <header className="v2-reader-hero"><div className="v2-container"><Link href="/v2/articles" className="v2-back">← All publications</Link><div className="v2-reader-heading"><span className="v2-label">{article.category} / Published work</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="v2-reader-meta"><span>{article.author}</span><span>{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span><span>{article.readTime}</span></div></div></div></header>
    <div className="v2-container v2-reader-layout"><aside className="v2-reader-side"><span className="v2-label">Publication details</span><p>{article.category}<br />Women in Focus</p><V2ArticleActions slug={article.slug} title={article.title} /><a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="v2-source-link">View original publication ↗</a></aside><div><article className="v2-reader-body" dangerouslySetInnerHTML={{ __html: article.body }} /><div className="v2-reader-end"><span className="v2-label">Keep reading</span><Link href={`/v2/articles/${next.slug}`}><h2>{next.title}</h2><span>Next publication ↗</span></Link></div><div className="v2-reader-last"><Link href="/v2/articles">← Back to the archive</Link><Link href="/v2/forum">Join the discussion ↗</Link></div></div></div>
  </main>;
}
