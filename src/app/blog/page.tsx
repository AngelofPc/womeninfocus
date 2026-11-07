import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Image } from "next-sanity/image";
import { formatBlogDate, getBlogPosts } from "@/sanity/lib/posts";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, perspectives and updates from Digital Women Impact Foundation on women, learning, opportunity and community.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "The Blog | Digital Women Impact Foundation", description: "Ideas and stories from our work with women and girls." },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const [featured, ...more] = posts;
  const featuredImage = featured?.coverImage ? urlFor(featured.coverImage)?.width(1440).height(900).url() : null;

  return (
    <main id="main-content" className="blog-main">
      <header className="blog-masthead">
        <div className="container blog-masthead-grid">
          <div>
            <span className="eyebrow light">From the foundation / Blog</span>
            <h1>Stories of change.<br /><em>Ideas for what’s next.</em></h1>
          </div>
          <p>Perspectives from our work at the intersection of learning, technology, rights and opportunity for women and girls.</p>
        </div>
      </header>

      {featured ? (
        <>
          <section className="blog-feature container" aria-labelledby="blog-feature-title">
            <div className="blog-feature-visual">
              {featuredImage ? (
                <Image src={featuredImage} alt={featured.coverImage?.alt || ""} width={1440} height={900} sizes="(max-width: 800px) 100vw, 55vw" priority />
              ) : (
                <div className="blog-feature-letter" aria-hidden="true">DWIF<span>.</span></div>
              )}
              <span className="blog-feature-label">Latest from the blog</span>
            </div>
            <div className="blog-feature-copy">
              <span className="blog-meta">{featured.category || "Stories"} <b>·</b> {formatBlogDate(featured.publishedAt)}</span>
              <h2 id="blog-feature-title"><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
              <p>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="text-link">Read the story <ArrowUpRight size={18} /></Link>
            </div>
          </section>
          {more.length > 0 && (
            <section className="blog-archive container" aria-labelledby="blog-more-title">
              <div className="blog-section-heading"><span className="eyebrow">More from the blog</span><h2 id="blog-more-title">Keep reading</h2></div>
              <ol className="blog-post-list">{more.map((post, index) => (
                <li key={post._id}><Link href={`/blog/${post.slug}`}>
                  <span className="blog-list-index">{String(index + 2).padStart(2, "0")}</span>
                  <span><span className="blog-meta">{post.category || "Stories"} <b>·</b> {formatBlogDate(post.publishedAt)}</span><strong>{post.title}</strong><span className="blog-list-excerpt">{post.excerpt}</span></span>
                  <ArrowUpRight size={24} strokeWidth={1.5} aria-hidden="true" />
                </Link></li>
              ))}</ol>
            </section>
          )}
        </>
      ) : (
        <section className="blog-empty container">
          <span className="blog-empty-number" aria-hidden="true">01 /</span>
          <div><span className="eyebrow">Our next chapter</span><h2>New stories are coming.</h2><p>We’re preparing this space for perspectives, practical ideas and news from the foundation. Until then, explore the research behind our work.</p><Link href="/articles" className="text-link">Read our research <ArrowUpRight size={18} /></Link></div>
        </section>
      )}

      <aside className="blog-endnote"><div className="container"><span className="eyebrow">Beyond the page</span><p>Meaningful change grows through knowledge shared and action taken together.</p><Link href="/programmes" className="text-link">Explore our work <ArrowUpRight size={18} /></Link></div></aside>
    </main>
  );
}
