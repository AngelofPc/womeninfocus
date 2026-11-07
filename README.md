# Digital Women Impact Foundation

A responsive NGO website built with Next.js, focused on equipping women and girls with knowledge, skills, mentorship, technology and opportunity.

Organisation content is adapted from the client’s Digital Women Impact Foundation Concept Note and Learning Community Blueprint. Published research and the survey are preserved from [amala.vercel.app](https://amala.vercel.app/). See [content sources](docs/v1-content-sources.md) for editorial decisions.

## Contact & Offices

- **Nigeria:** No. 2 Sir Arodiwe Street, New GRA, Trans Ekulu, Enugu, Enugu State, Nigeria (`+234 (0) 8057324483`)
- **United States:** 41 S. Waverly, Brighton, Boston, Massachusetts 021353 (`+1 (617) 417-5038`)
- **Email:** info@dwifoundation.org
- **Website:** [www.dwifoundation.org](https://www.dwifoundation.org)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production build, run `npm run build` and `npm run start`.

## Vercel deployment

Production ([www.dwifoundation.org](https://www.dwifoundation.org)) deploys from [AngelofPc/womeninfocus](https://github.com/AngelofPc/womeninfocus) on the `main` branch via Vercel’s GitHub integration. Vercel only builds what is **committed and pushed** to that branch — local-only files (for example `src/app/blog/`) will not appear in production.

| Setting | Value |
|--------|--------|
| **Root Directory** | `.` (repository root — this folder is the app, not a parent monorepo) |
| **Framework Preset** | Next.js |
| **Build Command** | `npm run build` (default) |
| **Install Command** | `npm install` (default) |
| **Output** | Default Next.js (do not set `output: 'export'` in `next.config.ts`) |

**Environment variables** (Project → Settings → Environment Variables) for the blog:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `pscfyir8`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `SANITY_API_READ_TOKEN` — only if the dataset is private (server-only, not `NEXT_PUBLIC_`)

After pushing blog changes to `main`, confirm Vercel starts a new Production deployment and the build log lists `/blog` under Routes. In [Sanity Manage](https://www.sanity.io/manage), add `https://www.dwifoundation.org` to **CORS origins** for project `pscfyir8`.

## Content and interactions

- Home, About, Our Work, Research, Blog, Survey and Community pages are implemented.
- Our Work covers the six thematic areas and the proposed African women’s AI and career learning community. Planned workshops, clinics and certification are described as in development.
- Four public article pages are preserved in `src/content/articles.json`, including their full body text and source URLs. Three are linked from the source article index; the fourth negotiation study is discoverable in its public sitemap.
- The survey embeds the source Google Form and includes a direct link. The form takes about five minutes and includes required questions.
- Saved articles, likes and newly written community stories use browser `localStorage`. They are local to each browser until a shared backend is connected.
- The source site’s one visible discussion post and its three featured community quotes are carried over. The quotes are presented separately from the discussion feed.

## Sanity blog

The public blog is at `/blog`. Content is edited in the standalone Sanity Studio in the sibling folder `../studio-dwif` (project `pscfyir8`, dataset `production`). Blog posts use the `dwifBlogPost` schema with a title, URL slug, excerpt, category, author, publication date, cover image and rich text body. Research at `/articles` remains separate.

Copy `.env.example` to `.env.local` in this app. `NEXT_PUBLIC_SANITY_PROJECT_ID` is already set to `pscfyir8`; confirm `NEXT_PUBLIC_SANITY_DATASET` if needed. If the dataset is private, set `SANITY_API_READ_TOKEN` server-side (never `NEXT_PUBLIC_`).

From `../studio-dwif`:

```bash
npm install
npx sanity login                    # use the Google/email that owns or is invited to pscfyir8 (DWIF), not another client org
npx sanity schemas deploy           # uploads dwifBlogPost to the Content Lake
npx sanity cors add http://localhost:3000 --credentials
npm run dev                         # Studio at http://localhost:3333
```

Sign in in the Studio, create a blog post, and **Publish**. Add your production site URL to CORS in [Sanity Manage](https://www.sanity.io/manage) when you deploy. Regenerate types after schema or GROQ changes: `npm run typegen` in `studio-dwif`.

The public `/blog` page shows a launch message until a published post is available. The site revalidates Sanity content about once a minute.

## Images

The two photographs (`hero-research.jpg` and `research-table.jpg`) were generated with the built-in imagegen tool for this project. They depict fictional collaborators and do not represent the named founder or actual participants.

Hero prompt: “Authentic editorial portrait of three diverse African women researchers and advocates in a contemporary Lagos workspace, collaborating around papers and a laptop; premium documentary photography, warm daylight, people on the right with negative space on the left, no logos or readable text.”

Secondary prompt: “Candid overhead close-up of hands of diverse African women reviewing policy notes and data charts at a research workshop table in Lagos; premium editorial photography, warm ivory and plum palette, no identifiable faces, logos, or readable text.”
