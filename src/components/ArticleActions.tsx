"use client";

import { Bookmark, Download, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

export function ArticleActions({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => { try { setSaved((JSON.parse(localStorage.getItem("wif-saved") || "[]") as string[]).includes(slug)); } catch {} }, [slug]);
  const toggle = () => { const all: string[] = JSON.parse(localStorage.getItem("wif-saved") || "[]"); const next = all.includes(slug) ? all.filter(s => s !== slug) : [...all, slug]; localStorage.setItem("wif-saved", JSON.stringify(next)); setSaved(next.includes(slug)); };
  const share = async () => { if (navigator.share) { try { await navigator.share({ title, url: window.location.href }); } catch {} } else { await navigator.clipboard.writeText(window.location.href); alert("Article link copied to clipboard."); } };
  return <div className="article-aside-actions"><button type="button" onClick={toggle}><Bookmark size={17} fill={saved ? "currentColor" : "none"} /> {saved ? "Saved" : "Save article"}</button><button type="button" onClick={share}><Share2 size={17} /> Share article</button><button type="button" onClick={() => window.print()}><Download size={17} /> Save as PDF</button></div>;
}
