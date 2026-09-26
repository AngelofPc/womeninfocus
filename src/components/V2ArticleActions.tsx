"use client";

import { useEffect, useState } from "react";

export function V2ArticleActions({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    try { setSaved((JSON.parse(localStorage.getItem("wif-saved") || "[]") as string[]).includes(slug)); } catch {}
  }, [slug]);
  const toggleSaved = () => {
    try {
      const all: string[] = JSON.parse(localStorage.getItem("wif-saved") || "[]");
      const next = saved ? all.filter(item => item !== slug) : [...new Set([...all, slug])];
      localStorage.setItem("wif-saved", JSON.stringify(next));
      setSaved(!saved);
    } catch {}
  };
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title, url: window.location.href }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 2500); } catch {}
    }
  };
  return <div className="v2-reader-actions">
    <button type="button" onClick={toggleSaved} aria-pressed={saved}>{saved ? "Saved ✓" : "Save article"}</button>
    <button type="button" onClick={share}>{copied ? "Link copied ✓" : "Share article"}</button>
    <button type="button" onClick={() => window.print()}>Print / PDF</button>
  </div>;
}
