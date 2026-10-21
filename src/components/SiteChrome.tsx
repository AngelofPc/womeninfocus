"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Our work" },
  { href: "/articles", label: "Research" },
  { href: "/survey", label: "Survey" },
  { href: "/forum", label: "Community" },
];

function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Digital Women Impact Foundation home">
    <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
    <span className="brand-name">digital women<span>impact</span>foundation<span className="brand-dot">.</span></span>
  </Link>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header" id="top">
    <div className="nav-shell">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} className={pathname === link.href || (link.href === "/articles" && pathname.startsWith("/articles/")) ? "active" : ""}>{link.label}</Link>)}</nav>
      <a className="header-action" href="mailto:info@dwifoundation.org">Get in touch <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={25} /> : <Menu size={25} />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} /></Link>)}<a href="mailto:info@dwifoundation.org" onClick={() => setOpen(false)}>Get in touch<ArrowUpRight size={18} /></a></nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div><span className="eyebrow light">Partner with us</span><h2>Invest in women. Transform communities.</h2><a className="button button-cream" href="mailto:info@dwifoundation.org">Start a conversation <ArrowUpRight size={17} /></a></div>
      <div className="footer-side"><Logo light /><p>Knowledge, skills, mentorship and opportunity for women and girls to shape their own futures.</p><div className="footer-social"><a href="https://linkedin.com/amalaokafor" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /></a><a href="https://x.com/amalaokafor" aria-label="X" target="_blank" rel="noopener noreferrer"><span className="x-icon">𝕏</span></a></div></div>
    </div>
    <div className="container footer-contact-grid">
      <div className="footer-contact-col">
        <span className="footer-col-label"><MapPin size={15} /> Nigeria Office</span>
        <address>No. 2 Sir Arodiwe Street, New GRA, Trans Ekulu, Enugu, Enugu State, Nigeria</address>
        <a href="tel:+2348057324483" className="footer-contact-link"><Phone size={14} /> +234 (0) 8057324483</a>
      </div>
      <div className="footer-contact-col">
        <span className="footer-col-label"><MapPin size={15} /> USA Office</span>
        <address>41 S. Waverly, Brighton, Boston, Massachusetts 021353</address>
        <a href="tel:+16174175038" className="footer-contact-link"><Phone size={14} /> +1 (617) 417-5038</a>
      </div>
      <div className="footer-contact-col">
        <span className="footer-col-label"><Mail size={15} /> Direct Contact</span>
        <a href="mailto:info@dwifoundation.org" className="footer-contact-link"><Mail size={14} /> info@dwifoundation.org</a>
        <a href="https://www.dwifoundation.org" className="footer-contact-link" target="_blank" rel="noopener noreferrer"><Globe size={14} /> www.dwifoundation.org</a>
      </div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Digital Women Impact Foundation. Built with intention.</span><nav aria-label="Footer navigation">{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav><a href="#top">Back to top ↑</a></div>
  </footer>;
}
