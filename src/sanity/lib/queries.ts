import { defineQuery } from "next-sanity";

const publishedPost = '_type == "dwifBlogPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()';

export const BLOG_POSTS_QUERY = defineQuery(`
  *[${publishedPost}] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, category, author, publishedAt,
    coverImage { alt, caption, asset, crop, hotspot }
  }
`);

export const BLOG_POST_QUERY = defineQuery(`
  *[${publishedPost} && slug.current == $slug][0] {
    _id, title, "slug": slug.current, excerpt, category, author, publishedAt,
    coverImage { alt, caption, asset, crop, hotspot }, body
  }
`);
