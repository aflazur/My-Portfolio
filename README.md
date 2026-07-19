# Aflazur — Personal Portfolio

## Live link : https://quiet-wisp-1b039e.netlify.app/

A production-ready personal portfolio built with **React + TypeScript + Vite**, styled with
**Tailwind CSS + DaisyUI**, and routed with **React Router**. All content (bio, skills,
education, experience, projects, contact info) lives in a single typed data file, so you can
update the entire site without touching any component code.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 + DaisyUI
- React Router v7
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## ✏️ Personalize Your Content

Everything you need to edit lives in **`src/data/portfolioData.ts`**. Look for the `EDIT:`
comments — these mark the fields you should fill in with your real information:

| Field | What to do |
|---|---|
| `photo` | Replace with your own photo. Put the image file in `public/` (e.g. `public/photo.jpg`) and set `photo: "/photo.jpg"`. |
| `resumeUrl` | Put your resume PDF in `public/resume.pdf` and keep `resumeUrl: "/resume.pdf"`. The button downloads it automatically. |
| `email`, `phone`, `whatsapp`, `location` | Your real contact details. |
| `socials` | Your real GitHub / LinkedIn / Twitter / Facebook URLs. |
| `education` | Your university/institution details. |
| `experience` | Add real jobs/internships. Leave the array empty (`[]`) to show the "open to opportunities" state. |
| `projects` | Add, remove, or edit projects. Each project automatically gets its own detail page at `/projects/:id`. |

No other files need to change for basic content updates — the whole site is data-driven.

### Adding a new project

Add a new object to the `projects` array in `portfolioData.ts` with a unique `id` — a card and a
full detail page (`/projects/your-id`) are generated automatically.


## Project Structure

```
src/
  components/     # Navbar, Hero, About, Skills, Education, Experience, Projects, ProjectCard, Contact, Footer
  pages/          # Home.tsx (all sections), ProjectDetail.tsx (per-project page)
  data/           # portfolioData.ts — EDIT THIS to personalize the site
  types/          # shared TypeScript interfaces
  index.css       # design tokens + global styles
```
