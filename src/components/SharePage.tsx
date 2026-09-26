"use client";

import { ArrowUpRight } from "lucide-react";

export function SharePage() {
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title: "Women, Negotiation & AI Survey", url }); } catch {} }
    else { await navigator.clipboard.writeText(url); alert("Survey page link copied to clipboard."); }
  };
  return <button type="button" onClick={share} className="button button-cream">Share this page <ArrowUpRight size={18} /></button>;
}
