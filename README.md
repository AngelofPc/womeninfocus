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

## Content and interactions

- Home, About, Our Work, Research, Survey and Community pages are implemented.
- Our Work covers the six thematic areas and the proposed African women’s AI and career learning community. Planned workshops, clinics and certification are described as in development.
- Four public article pages are preserved in `src/content/articles.json`, including their full body text and source URLs. Three are linked from the source article index; the fourth negotiation study is discoverable in its public sitemap.
- The survey embeds the source Google Form and includes a direct link. The form takes about five minutes and includes required questions.
- Saved articles, likes and newly written community stories use browser `localStorage`. They are local to each browser until a shared backend is connected.
- The source site’s one visible discussion post and its three featured community quotes are carried over. The quotes are presented separately from the discussion feed.

## Images

The two photographs (`hero-research.jpg` and `research-table.jpg`) were generated with the built-in imagegen tool for this project. They depict fictional collaborators and do not represent the named founder or actual participants.

Hero prompt: “Authentic editorial portrait of three diverse African women researchers and advocates in a contemporary Lagos workspace, collaborating around papers and a laptop; premium documentary photography, warm daylight, people on the right with negative space on the left, no logos or readable text.”

Secondary prompt: “Candid overhead close-up of hands of diverse African women reviewing policy notes and data charts at a research workshop table in Lagos; premium editorial photography, warm ivory and plum palette, no identifiable faces, logos, or readable text.”
