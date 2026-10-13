# Aflazur Rahaman — Portfolio (Next.js)

Next.js (App Router) + TypeScript + Tailwind CSS v4 + DaisyUI + lucide-react.
Same design and logic as the original React/Vite version.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run this before deploying to check for errors)
npm start        # serve the production build
```

## How to update your content

All content lives in `src/data/`. You never need to touch component code.

| What you want to change | File |
| --- | --- |
| **Skills** (add / remove / change level) | `src/data/skills.ts` |
| Name, intro, photo, resume link, contact, socials, about, education, experience, **projects** | `src/data/portfolioData.ts` |

### Add a skill
Open `src/data/skills.ts` and add one line inside a category:

```ts
{ name: "Docker", level: 70 },
```

`level` is 1–100 (the width of the progress bar). To add a whole new category, copy one
`{ category: ..., icon: ..., skills: [...] }` block.

### Add a project
Add a new object to `projects` in `src/data/portfolioData.ts` (copy an existing one and change the
text). Its `id` becomes the URL: `id: "my-app"` → `/projects/my-app`.

### Project images
- Local image: put it in `public/` and use `"/my-image.png"`.
- Remote image: add its hostname to `remotePatterns` in `next.config.ts`
  (only `images.unsplash.com` is allowed by default).

### Photo / resume
- Photo: replace `public/Aflazur.png` (or change `photo` in `portfolioData.ts`).
- Resume: `resumeUrl` is currently a Google Drive link. You can also put a PDF in `public/`
  (e.g. `public/aflazur-cv.pdf`) and set `resumeUrl: "/aflazur-cv.pdf"`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to <https://vercel.com/new>, import the repository.
3. Framework Preset will be detected as **Next.js**. Leave all settings as default and click **Deploy**.
4. After that, every `git push` to `main` redeploys automatically — so updating a skill is:
   edit `src/data/skills.ts` → commit → push → site updates in about a minute.

No environment variables are needed. `vercel.json` / `_redirects` are not needed in Next.js
(routing is built in).
