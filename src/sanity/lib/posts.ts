import { createClient } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import type { ComponentProps } from "react";
import type { PortableText } from "@portabletext/react";
import { BLOG_POST_QUERY, BLOG_POSTS_QUERY } from "./queries";

export type BlogImage = SanityImageSource & { alt?: string; caption?: string };
export type BlogPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  coverImage?: BlogImage;
};
export type BlogPost = BlogPostSummary & {
  body?: ComponentProps<typeof PortableText>["value"];
};

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const isSanityConfigured = Boolean(sanityProjectId && sanityDataset);

function getClient() {
  if (!sanityProjectId) return null;
  return createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: "2026-03-01",
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "published",
  });
}

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  const client = getClient();
  if (!client) return [];
  try {
    return await client.fetch<BlogPostSummary[]>(BLOG_POSTS_QUERY, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Sanity blog index could not be loaded", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const client = getClient();
  if (!client) return null;
  try {
    return await client.fetch<BlogPost | null>(BLOG_POST_QUERY, { slug }, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Sanity blog post could not be loaded", error);
    return null;
  }
}

export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}
