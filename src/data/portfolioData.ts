import type { PortfolioData } from "../types";

/**
 * ================================================================
 *  EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
 *  Every section on the site pulls from this single file, so you
 *  never need to touch component code to update your content.
 *
 *  Look for "EDIT:" comments — those are the fields you must fill
 *  in yourself (photo, resume, real contact info, social handles).
 * ================================================================
 */
const portfolioData: PortfolioData = {
  name: "Aflazur Rahaman",
  designation: ["Full Stack Developer", "Backend-Leaning Engineer", "Database Enthusiast"],
  tagline: "I design the schema first, then build everything that talks to it.",
  heroIntro:
    "Computer Science student and full-stack developer who enjoys turning messy requirements into clean, well-modeled systems — from a normalized PostgreSQL schema to a polished React interface on top of it.",

  // EDIT: replace with a real photo path, e.g. "/photo.jpg" placed inside /public
  photo: "/Aflazur.png",

  // EDIT: replace with the real path to your resume, e.g. "/resume.pdf" placed inside /public
  resumeUrl: "/aflazur-cv.pdf",

  // EDIT: your real contact details
  email: "mdaflazurrahaman2022@gmail.com",
  phone: "+8801879877653",
  whatsapp: "+8801879877653",
  location: "Dhaka, Bangladesh",

  // EDIT: your real social profile URLs
  socials: [
    { name: "GitHub", url: "https://github.com/aflazurrahaman40", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aflazur-rahaman-bab6b439a?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
    { name: "Facebook", url: "https://web.facebook.com/aflazur.rahaman.1", icon: "facebook" },
  ],

  about: {
    journey: [
      "My programming journey started in my Computer Science coursework — databases, operating systems, and networking labs that forced me to actually understand how systems work under the hood, not just how to make them run.",
      "That foundation pulled me toward full-stack development. I like starting a project from the data layer: sketching an ER diagram, normalizing tables, then building an Express/Node.js or Next.js API on top, and finishing with a React + TypeScript interface that consumes it cleanly.",
      "I've shipped projects across the stack — a Next.js app with MongoDB and Google OAuth, a TypeScript/Express backend deployed on Vercel with a PostgreSQL database, and pure SQL systems modeled end-to-end in an ERD tool before a single line of DDL was written.",
    ],
    interests:
      "Outside of coding, I enjoy following football, solving the occasional algorithmic puzzle for fun, and sketching out database diagrams for ideas that may never become real projects — just because I like the shape of a well-designed schema.",
    funFact:
      "I probably enjoy designing the ERD more than writing the frontend for it — ask me about normalization and I will not stop talking.",
  },

  skills: [
    {
      category: "Frontend",
      icon: "UI",
      skills: [
        { name: "React", level: 88 },
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
  ],

  education: [
    {
      institution: "Dhaka International University",
      degree: "B.Sc. in Computer Science & Engineering",
      field: "Computer Science",
      duration: "2024 — Present",
      location: "Dhaka, Bangladesh",
      details:
        "Coursework spans databases, operating systems, computer networks, information systems management, and software development — with hands-on assignments frequently delivered as deployed applications rather than just theory.",
    },
  ],

  experience: [
    // EDIT: Add real internships or jobs here. Leave the array empty ( [] )
    // if you don't have professional experience yet — the section will
    // then show a friendly "open to opportunities" message instead.
  ],

  projects: [
    {
      id: "devpulse",
      name: "DevPulse",
      tagline: "A TypeScript/Express backend for tracking developer activity",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      techStack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Vercel"],
      description:
        "A backend service built with Node.js, TypeScript, and Express, deployed on Vercel with a PostgreSQL database.",
      longDescription:
        "DevPulse is a Node.js and TypeScript backend built on Express, designed around a clean REST API and a PostgreSQL database. The project involved structuring environment configuration and database connections so the service could run reliably both locally and in a serverless deployment on Vercel, including resolving connection pooling and environment-variable issues specific to serverless environments.",
      liveLink: "https://l2-assignment-2-alpha.vercel.app/",
      githubLink: "https://github.com/aflazurrahaman40/L2-Assignment-2",
      challenges: [
        "Getting a persistent PostgreSQL connection to behave correctly inside Vercel's serverless functions, which spin up and tear down on every request.",
        "Managing environment variables safely across local development and production without leaking secrets into the repository.",
        "Structuring the Express + TypeScript project so routes, controllers, and database access stayed cleanly separated as the API grew.",
      ],
      improvements: [
        "Add automated tests around the API routes before extending the feature set further.",
        "Introduce a connection pooler (e.g. PgBouncer or Neon's built-in pooling) for more predictable performance under load.",
        "Add request validation and centralized error handling middleware.",
      ],
      featured: true,
    },
    {
      id: "football-ticket-booking",
      name: "Football Ticket Booking System",
      tagline: "A relational database system modeled end-to-end in PostgreSQL",
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
      techStack: ["PostgreSQL", "SQL (DDL/DML)", "DrawSQL", "ER Modeling"],
      description:
        "A database system for booking football match tickets, designed from an ER diagram through to a fully normalized PostgreSQL schema.",
      longDescription:
        "This project models a football ticket booking platform entirely at the database layer. It started with an entity-relationship diagram built in DrawSQL covering matches, stadiums, seats, customers, and bookings, then moved into PostgreSQL DDL to create a normalized schema, followed by a set of queries covering common operations such as seat availability checks, booking transactions, and reporting on ticket sales.",
      liveLink: "https://drawsql.app/draw?t=9cf3cc16-67a3-4089-b4d1-149480d1e51f&view=1",
      githubLink: "https://github.com/aflazurrahaman40/L2-Assignment-3",
      challenges: [
        "Modeling seat-level availability so double-booking the same seat for the same match is impossible at the schema level.",
        "Balancing normalization with query simplicity for reporting-style queries like revenue per match.",
        "Designing constraints and relationships that hold up under concurrent booking attempts.",
      ],
      improvements: [
        "Wrap booking creation in a proper transaction with row-level locking to fully prevent race conditions.",
        "Add a thin API layer on top of the schema so the system can be driven from a real frontend.",
        "Add indexes tuned for the most common query patterns once real usage data exists.",
      ],
    },
  ],
};

export default portfolioData;
