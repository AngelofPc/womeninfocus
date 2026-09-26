"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export function V2ArticleLibrary({ articles }: { articles: Article[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => {
    try { setSaved(JSON.parse(localStorage.getItem("wif-saved") || "[]")); } catch {}
  }, []);
  const categories = ["All", ...new Set(articles.map(article => article.category)), "Saved"];
  const shown = useMemo(() => articles.filter(article =>
    (category === "All" || (category === "Saved" ? saved.includes(article.slug) : article.category === category)) &&
    `${article.title} ${article.excerpt}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [articles, category, query, saved]);

  return <div className="v2-library">
    <div className="v2-library-tools">
      <div className="v2-library-tabs" role="group" aria-label="Filter research by category">
        {categories.map(item => <button key={item} type="button" className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <label className="v2-search"><span className="sr-only">Search research</span><input type="search" placeholder="Search publications" value={query} onChange={event => setQuery(event.target.value)} /><span aria-hidden="true">⌕</span></label>
    </div>
    <div className="v2-library-count">{shown.length} {shown.length === 1 ? "publication" : "publications"}</div>
    <div className="v2-library-list">{shown.map(article => <article key={article.slug} className="v2-library-item">
      <div className="v2-library-date">{new Date(article.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}<span>{article.category} / {article.readTime}</span></div>
      <div><Link href={`/v2/articles/${article.slug}`}><h2>{article.title}</h2></Link><p>{article.excerpt}</p><Link href={`/v2/articles/${article.slug}`} className="v2-text-link">Read publication <span>↗</span></Link></div>
    </article>)}</div>
    {shown.length === 0 && <div className="v2-empty"><h2>No publications found</h2><p>Try another term or category.</p><button type="button" onClick={() => { setCategory("All"); setQuery(""); }}>Clear filters</button></div>}
  </div>;
}
