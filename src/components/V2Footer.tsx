import Link from "next/link";

export function V2Footer() {
  return <footer className="v2-footer"><div className="v2-container">
    <div className="v2-footer-main"><div><strong>women<span>in</span>focus.</strong><p>Advancing women through research & technology.</p></div><a href="mailto:amalaokafor01@gmail.com">Let’s talk about the work <span>↗</span></a></div>
    <div className="v2-footer-bottom"><span>© {new Date().getFullYear()} Women in Focus</span><nav aria-label="Footer navigation"><Link href="/v2/about">About</Link><Link href="/v2/articles">Articles</Link><Link href="/v2/survey">Survey</Link><Link href="/v2/forum">Discussion</Link></nav><Link href="/">View version 1 ↗</Link></div>
    <div className="v2-photo-notice">Photography used with attribution for illustration; the people pictured are not presented as Women in Focus staff or participants.</div>
  </div></footer>;
}
