"use client";

import Link from "next/link";
import { useState } from "react";

export function V2Nav() {
  const [open, setOpen] = useState(false);
  return <header className="v2-header" id="top">
    <div className="v2-container v2-header-inner">
      <Link href="/v2" className="v2-wordmark" aria-label="Women in Focus version two home">women<span>in</span>focus<span className="v2-wordmark-dot">.</span></Link>
      <nav className={`v2-nav ${open ? "is-open" : ""}`} aria-label="Version two navigation">
        <Link href="/v2/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/v2/articles" onClick={() => setOpen(false)}>Research</Link>
        <Link href="/v2/survey" onClick={() => setOpen(false)}>Survey</Link>
        <Link href="/v2/forum" onClick={() => setOpen(false)}>Discussion</Link>
        <Link href="/" className="v2-mobile-compare" onClick={() => setOpen(false)}>View version 1 ↗</Link>
      </nav>
      <div className="v2-header-actions"><Link href="/" className="v2-compare">View version 1 <span>↗</span></Link><a href="mailto:amalaokafor01@gmail.com" className="v2-contact">Contact us <span>↗</span></a><button type="button" className="v2-menu" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span>{open ? "×" : "+"}</span></button></div>
    </div>
  </header>;
}
