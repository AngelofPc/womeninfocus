# Women in Focus

A responsive research and advocacy website built with Next.js. It adapts the public content at [amala.vercel.app](https://amala.vercel.app/) into a new editorial design.

A complete alternate, photography-led research journal site is available under `/v2` for client comparison. It has its own About, research archive, full article, survey, and discussion pages. Version links make it easy to switch between the two directions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production build, run `npm run build` and `npm run start`.

## Content and interactions

- Home, About, Research & Insights, Survey, and Community pages are implemented in both versions.
- Four public article pages are preserved in `src/content/articles.json`, including their full body text and source URLs. Three are linked from the source article index; the fourth negotiation study is discoverable in its public sitemap.
- The survey embeds the source Google Form and includes a direct link to it. The form itself says it takes about five minutes and has required questions; this site follows the form’s information where it differs from the source landing page.
- Saved articles, likes, and newly written community stories use browser `localStorage` shared by both versions. They are local to each browser until a shared backend is connected.
- The source site’s one visible discussion post and its three featured community quotes are carried over. The quotes are presented separately from the live discussion feed.

## Images

The original homepage’s two photographs (`hero-research.jpg` and `research-table.jpg`) were generated with the built-in imagegen tool for this project. They depict fictional research collaborators and do not represent the named founder or actual participants.

Version 2 uses real, credited photography:

- `v2-midwife.jpg`: Aisha, principal of Jigawa State School of Midwifery, photographed by Lindsay Mgbor / DFID in 2011. [Wikimedia Commons source](https://commons.wikimedia.org/wiki/File:A_new_generation_of_midwives_(7138904383).jpg), CC BY-SA 2.0. Resized for web presentation.
- `v2-conversation.jpg`: photo by Christina @ wocintechchat.com. [Unsplash source](https://unsplash.com/photos/two-women-sitting-beside-table-and-talking-LQ1t-8Ms5PY), Unsplash License. Used as an illustrative workplace image.

Hero prompt: “Authentic editorial portrait of three diverse African women researchers and advocates in a contemporary Lagos workspace, collaborating around papers and a laptop; premium documentary photography, warm daylight, people on the right with negative space on the left, no logos or readable text.”

Secondary prompt: “Candid overhead close-up of hands of diverse African women reviewing policy notes and data charts at a research workshop table in Lagos; premium editorial photography, warm ivory and plum palette, no identifiable faces, logos, or readable text.”
# womeninfocus
