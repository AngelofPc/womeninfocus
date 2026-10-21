"use client";

import Link from "next/link";
import { ArrowUpRight, Bookmark, Search, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string;
};

const tabs = ["All", "Research", "Policy", "Negotiation", "Saved"];

export function ArticleLibrary({ articles }: { articles: Article[] }) {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    try {
      setSaved(JSON.parse(localStorage.getItem("wif-saved") || "[]"));
    } catch {}
  }, []);

  const toggleSave = (slug: string) => {
    const next = saved.includes(slug) ? saved.filter((s) => s !== slug) : [...saved, slug];
    setSaved(next);
    localStorage.setItem("wif-saved", JSON.stringify(next));
  };

  const share = async (article: Article) => {
    const url = `${window.location.origin}/articles/${article.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      alert("Article link copied to clipboard.");
    }
  };

  const shown = articles.filter(
    (a) =>
      (tab === "All" || (tab === "Saved" ? saved.includes(a.slug) : a.category === tab)) &&
      `${a.title} ${a.excerpt}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="section library-section">
      <div className="container">
        <div className="library-toolbar">
          <div className="filter-tabs" role="tablist" aria-label="Article categories">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className={tab === t ? "selected" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="article-search">
            <Search size={16} />
            <span className="sr-only">Search research papers</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search research papers..."
            />
          </label>
        </div>

        <div className="library-count">
          Showing {shown.length} {shown.length === 1 ? "publication" : "publications"}
        </div>

        <div className="article-list">
          {shown.map((a) => (
            <article className="library-article" key={a.slug}>
              <div className="article-meta">
                <span>{a.category}</span>
                <i />
                <span>
                  {new Date(a.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <i />
                <span>{a.readTime}</span>
              </div>
              <Link href={`/articles/${a.slug}`}>
                <h2>{a.title}</h2>
              </Link>
              <p>{a.excerpt}</p>
              <div className="article-row-bottom">
                <Link href={`/articles/${a.slug}`} className="text-link">
                  Read full research paper <ArrowUpRight size={17} />
                </Link>
                <div className="article-tools">
                  <button
                    onClick={() => toggleSave(a.slug)}
                    type="button"
                    aria-label={saved.includes(a.slug) ? "Remove saved paper" : "Save paper"}
                    className={saved.includes(a.slug) ? "saved" : ""}
                  >
                    <Bookmark size={16} fill={saved.includes(a.slug) ? "currentColor" : "none"} />
                  </button>
                  <button onClick={() => share(a)} type="button" aria-label="Share paper">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!shown.length && (
          <div className="empty-state">
            <h3>No publications found</h3>
            <p>Try adjusting your search criteria or topic filter.</p>
            <button
              type="button"
              onClick={() => {
                setTab("All");
                setQuery("");
              }}
            >
              Show all publications
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
