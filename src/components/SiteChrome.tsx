"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Our insights" },
  { href: "/survey", label: "Survey" },
  { href: "/forum", label: "Community" },
];

function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Women in Focus home">
    <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
    <span className="brand-name">women<span>in</span>focus<span className="brand-dot">.</span></span>
  </Link>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname.startsWith("/v2")) return null;
  return <header className="site-header" id="top">
    <div className="nav-shell">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} className={pathname === link.href || (link.href === "/articles" && pathname.startsWith("/articles/")) ? "active" : ""}>{link.label}</Link>)}</nav>
      <Link href="/v2" className="header-version">View version 2 <ArrowUpRight size={16} /></Link>
      <a className="header-action" href="mailto:amalaokafor01@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={25} /> : <Menu size={25} />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} /></Link>)}<Link href="/v2" className="mobile-version" onClick={() => setOpen(false)}>View version 2<ArrowUpRight size={18} /></Link><a href="mailto:amalaokafor01@gmail.com" onClick={() => setOpen(false)}>Get in touch<ArrowUpRight size={18} /></a></nav>}
  </header>;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/v2")) return null;
  return <footer className="site-footer">
    <div className="container footer-top">
      <div><span className="eyebrow light">Stay connected</span><h2>Let’s make the evidence<br /><em>impossible to ignore.</em></h2><a className="button button-cream" href="mailto:amalaokafor01@gmail.com">Start a conversation <ArrowUpRight size={18} /></a></div>
      <div className="footer-side"><Logo light /><p>Advancing women through research & technology. Grounded in evidence. Committed to change.</p><div className="footer-social"><a href="https://linkedin.com/amalaokafor" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /></a><a href="https://x.com/amalaokafor" aria-label="X" target="_blank" rel="noopener noreferrer"><span className="x-icon">𝕏</span></a></div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Women in Focus. Built with intention.</span><nav aria-label="Footer navigation">{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav><a href="#top">Back to top ↑</a></div>
  </footer>;
}
