import type { SkillCategory } from "@/types";

/**
 * ================================================================
 *  YOUR SKILLS — edit this file to update the Skills section.
 *
 *  Add a skill:      add a line  { name: "Docker", level: 70 },
 *                    inside the category you want.
 *  Change a level:   change the number (1–100). It controls the
 *                    width of the progress bar.
 *  Remove a skill:   delete its line.
 *  New category:     copy a whole { category: ..., skills: [...] }
 *                    block and change the text.
 *                    "icon" is the small tag shown on the card
 *                    (e.g. "UI", "API", "DB", "OPS").
 *
 *  Save the file and the site updates (npm run dev), or push to
 *  GitHub and Vercel redeploys automatically.
 * ================================================================
 */
export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "UI",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "DaisyUI", level: 82 },
      { name: "HTML5 & CSS3", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: "API",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 65 },
      { name: "REST APIs", level: 86 },
      { name: "JSON / Data Modeling", level: 88 },
    ],
  },
  {
    category: "Database",
    icon: "DB",
    skills: [
      { name: "PostgreSQL", level: 87 },
      { name: "NeonDB", level: 80 },
      { name: "ER Modeling (DrawSQL)", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "OPS",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vercel", level: 82 },
      { name: "React Router", level: 85 },
      { name: "BetterAuth / OAuth", level: 76 },
    ],
  },
];
