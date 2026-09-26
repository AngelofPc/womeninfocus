import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import articles from "@/content/articles.json";
import { ArticleActions } from "@/components/ArticleActions";

export function generateStaticParams() { return articles.map(a => ({ slug: a.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = articles.find(a => a.slug === slug); return { title: article?.title || "Article", description: article?.excerpt }; }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();
  return <main id="main-content" className="interior-main article-page"><div className="article-hero"><div className="container"><Link href="/articles" className="back-link"><ArrowLeft size={17} /> All insights</Link><div className="article-hero-inner"><span className="eyebrow light">{article.category} / Published work</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-hero-meta"><span>By {article.author}</span><i /><span>{new Date(article.date).toLocaleDateString("en-US", {month:"long",day:"numeric",year:"numeric"})}</span><i /><Clock3 size={16} /><span>{article.readTime}</span></div></div></div><div className="article-hero-decoration" aria-hidden="true" /></div><div className="container article-layout"><aside className="article-aside"><span>In this article</span><p>{article.category} / Women in Focus</p><a href="#article-body">Read article ↓</a><ArticleActions slug={article.slug} title={article.title} /></aside><div><div className="article-body" id="article-body" dangerouslySetInnerHTML={{ __html: article.body }} /><div className="article-end"><BookOpen size={24} /><div><strong>Continue the conversation</strong><p>Research moves forward when ideas are shared and challenged.</p></div><Link href="/forum" className="text-link">Join the discussion <ArrowUpRight size={18} /></Link></div><div className="article-back"><Link href="/articles"><ArrowLeft size={18} /> Back to all insights</Link><a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">View original publication <ArrowUpRight size={17} /></a></div></div></div></main>;
}
