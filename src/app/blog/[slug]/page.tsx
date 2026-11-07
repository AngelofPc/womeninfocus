import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Image } from "next-sanity/image";
import { formatBlogDate, getBlogPost } from "@/sanity/lib/posts";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Story not found" };
  const image = post.coverImage ? urlFor(post.coverImage)?.width(1200).height(630).url() : null;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.publishedAt, images: image ? [image] : [] },
  };
}

const richTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { _ref: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset) return null;
      const src = urlFor(value)?.width(1200).auto("format").url();
      if (!src) return null;
      return <figure><img src={src} alt={value.alt || ""} loading="lazy" /><figcaption>{value.caption}</figcaption></figure>;
    },
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => {
      const href = value?.href?.trim() || "";
      const internal = href.startsWith("/") && !href.startsWith("//");
      const external = /^https?:\/\//i.test(href) || /^mailto:/i.test(href);
      if (!internal && !external) return <>{children}</>;
      return <a href={href} rel={internal ? undefined : "noopener noreferrer"} target={internal || href.startsWith("mailto:") ? undefined : "_blank"}>{children}</a>;
    },
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const image = post.coverImage ? urlFor(post.coverImage)?.width(1600).height(950).url() : null;

  return (
    <main id="main-content" className="blog-main blog-article-page">
      <header className="blog-article-hero">
        <div className="container">
          <Link href="/blog" className="blog-back"><ArrowLeft size={17} /> All blog stories</Link>
          <span className="blog-meta">{post.category || "Stories"} <b>·</b> {formatBlogDate(post.publishedAt)}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <span className="blog-byline">By {post.author || "Digital Women Impact Foundation"}</span>
        </div>
      </header>
      {image && <figure className="blog-article-cover container"><Image src={image} alt={post.coverImage?.alt || ""} width={1600} height={950} sizes="(max-width: 800px) 100vw, 1280px" priority /><figcaption>{post.coverImage?.caption}</figcaption></figure>}
      <div className="container blog-article-layout">
        <aside className="blog-article-aside"><span className="eyebrow">From the blog</span><p>{post.category || "Stories"}</p><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time></aside>
        <article className="blog-article-body">{post.body && <PortableText value={post.body} components={richTextComponents} />}</article>
      </div>
      <div className="container blog-article-footer"><Link href="/blog" className="text-link"><ArrowLeft size={18} /> Back to the blog</Link><Link href="/programmes" className="text-link">Explore our work <ArrowUpRight size={18} /></Link></div>
    </main>
  );
}
