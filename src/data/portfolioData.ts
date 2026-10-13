import type { PortfolioData } from "@/types";
import { skills } from "./skills";

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
  designation: [
    "Full Stack Developer",
    "Backend-Leaning Engineer",
    "Database Enthusiast",
  ],
  tagline: "I design the schema first, then build everything that talks to it.",
  heroIntro:
    "Computer Science student and full-stack developer who enjoys turning messy requirements into clean, well-modeled systems — from a normalized PostgreSQL schema to a polished React interface on top of it.",

  // EDIT: replace with a real photo path, e.g. "/photo.jpg" placed inside /public
  photo: "/Aflazur.png",

  // EDIT: replace with the real path to your resume, e.g. "/resume.pdf" placed inside /public
  resumeUrl:
    "https://drive.google.com/file/d/16PMSo36DIkxE5zWiKbWuFjpQNCa4qR7W/view?usp=sharing",

  // EDIT: your real contact details
  email: "mdaflazurrahaman2022@gmail.com",
  phone: "+8801879877653",
  whatsapp: "+8801879877653",
  location: "Dhaka, Bangladesh",

  // EDIT: your real social profile URLs
  socials: [
    { name: "GitHub", url: "https://github.com/aflazur", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aflazur-rahaman-bab6b439a",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter",
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/aflazur.rahaman.1",
      icon: "facebook",
    },
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

  // EDIT skills in src/data/skills.ts
  skills,

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
      id: "courier-logistics-platform",
      name: "Courier & Logistics Platform",
      tagline:
        "A full-stack courier platform: Next.js frontend on a TypeScript/Express/PostgreSQL API",
      image: "/Courier.png",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "SSLCommerz",
      ],
      description:
        "A full-stack courier platform with Customer, Courier and Admin roles, built with a Next.js App Router frontend and a TypeScript/Express/Prisma/PostgreSQL REST API, including an SSLCommerz payment flow.",
      longDescription:
        "This is a full-stack Courier & Logistics Platform: a Next.js 16 App Router frontend (strict TypeScript) on top of a real Express/PostgreSQL backend I built, with no mock data in the core workflows. Customers book shipments through a 3-step wizard and pay via SSLCommerz. Admins assign available couriers, manage users and hubs, and view reports with charts. Couriers update shipment status step by step, and every change is written to the shipment timeline and an admin audit log. Authentication follows a backend-for-frontend pattern: JWT access and refresh tokens are stored in httpOnly cookies and never exposed to client JavaScript. Next.js route handlers proxy API calls and refresh expired tokens, and middleware protects routes by role. Pages are Server Components by default, with small client islands for interactive parts. Lists keep search, filters, sorting and pagination in the URL so any view can be shared, and forms use React Hook Form with Zod validation that matches the backend rules. The backend is a layered Express + Prisma API (routes → controllers → services) with JWT auth, a shipment state machine that rejects illegal status transitions, transaction-safe courier assignment, audit logs, Redis caching and rate limiting, and automatic courier earnings on delivery.",
      liveLink: "https://courier-logistics-frontend-delta.vercel.app",
      githubLink: "https://github.com/aflazur/courier-logistics-frontend",
      backendLink: "https://github.com/aflazur/courier-logistics-backend",
      challenges: [
        "Keeping sessions secure and seamless: tokens live in httpOnly cookies, so I built a proxy route and middleware that refresh an expired access token before the page renders, which also prevented login redirect loops.",
        "Implementing the SSLCommerz payment flow, where the gateway posts back to the frontend and the backend must re-validate the payment before a shipment is marked as paid.",
        "Enforcing role-based access for three user types across middleware, navigation and the backend, while keeping most pages as Server Components.",
        "Designing the shipment lifecycle as a state machine and making courier assignment transaction-safe on the backend, so a shipment can't be double-assigned or jump to an invalid status.",
      ],
      improvements: [
        "Add real-time shipment tracking (WebSockets or server-sent events) instead of refresh-based updates.",
        "Add a backend endpoint for contact messages, and automated tests (unit tests plus Playwright end-to-end tests for the booking and payment flow).",
        "Add map-based tracking and route visualization for couriers.",
      ],
      featured: true,
    },
    {
      id: "rentnest",
      name: "RentNest",
      tagline:
        "A full-stack rental property marketplace for tenants, landlords and admins",
      image: "/RentNest.png",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Stripe",
      ],
      description:
        "A rental property marketplace where tenants search and request properties, landlords manage listings and approve requests, and admins oversee the platform, with Stripe Checkout for rent payments.",
      longDescription:
        "RentNest is a full-stack rental marketplace with three roles: Tenant, Landlord and Admin. The Next.js 16 App Router frontend lets visitors browse properties with filters (city, type, price range, bedrooms, category, search and pagination). Tenants send rental requests, pay through Stripe Checkout once a request is approved, and leave reviews. Landlords create, edit and delete their own listings and approve or reject incoming requests. Admins view platform overview stats, ban or unban users, and monitor all properties and rentals. Authentication uses JWT access and refresh tokens; the frontend proxies login and register through its own route handlers so session cookies are set on its own domain, and middleware protects each dashboard by role. Server state is handled with TanStack Query, and forms use React Hook Form with Zod. The backend is a modular Express + TypeScript API on PostgreSQL with a multi-file Prisma schema, Zod request validation, a global error handler, role-based access control and a rental lifecycle (PENDING → APPROVED → ACTIVE → COMPLETED) that reserves the property on approval, auto-rejects competing requests and marks the property as rented after payment.",
      liveLink: "https://rentnest-frontend.vercel.app",
      githubLink: "https://github.com/aflazur/rentnest-frontend",
      backendLink: "https://github.com/aflazur/rentnest-backend",
      challenges: [
        "Cross-domain authentication: with the frontend and backend on different Vercel domains, the browser blocks cross-site httpOnly cookies, so login and register go through Next.js route handlers that set the session cookies on the frontend's own domain.",
        "Wiring Stripe Checkout so that after payment the user lands on a proper success or cancel page in the frontend, while the backend still verifies the payment with Stripe before marking anything as paid.",
        "Keeping the rental lifecycle consistent: approving one request must reserve the property and auto-reject competing requests, and a successful payment must update the request and the property together.",
        "Enforcing role-based access for three user types in both the frontend (middleware and role-based dashboards) and the backend (authorization on every protected endpoint).",
      ],
      improvements: [
        "Add image upload for property photos and a map-based property search.",
        "Add messaging between tenants and landlords, and email notifications for request and payment updates.",
        "Support recurring monthly rent payments instead of a single payment per request.",
        "Add automated tests (API tests for the rental and payment flows, Playwright end-to-end tests for the frontend).",
      ],
      featured: true,
    },
    {
      id: "devpulse",
      name: "DevPulse",
      tagline: "A TypeScript/Express backend for tracking developer activity",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      techStack: [
        "Node.js",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "Vercel",
      ],
      description:
        "A backend service built with Node.js, TypeScript, and Express, deployed on Vercel with a PostgreSQL database.",
      longDescription:
        "DevPulse is a Node.js and TypeScript backend built on Express, designed around a clean REST API and a PostgreSQL database. The project involved structuring environment configuration and database connections so the service could run reliably both locally and in a serverless deployment on Vercel, including resolving connection pooling and environment-variable issues specific to serverless environments.",
      liveLink: "https://l2-assignment-2-alpha.vercel.app/",
      githubLink: "https://github.com/aflazur/DevPulse",
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
      id: "hero-io",
      name: "Hero.IO — App Store",
      tagline:
        "A responsive React app store to browse, search and install productivity apps",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      techStack: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Recharts",
        "React Toastify",
      ],
      description:
        "A responsive React application for browsing productivity apps, with search, rating charts and an install list that persists between visits.",
      longDescription:
        "Hero.IO is a front-end app store built with React 19, Vite and Tailwind CSS. App data is loaded through React Router loaders, and the home page highlights top apps and overall stats. The Apps page has live search by title. Each app has a details page with downloads, average rating, review count and a Recharts bar chart of the rating breakdown. Users can install an app (with a toast notification), and installed apps are saved in localStorage so they persist between visits. The Installation page lists them with sorting by downloads and an Uninstall action. The app also includes a loading bar, a custom 404 page and an error page for apps that don't exist.",
      liveLink: "https://bucolic-clafoutis-dc8064.netlify.app/",
      githubLink: "https://github.com/aflazur/Productive-Apps",
      challenges: [
        "Keeping the installed-apps state consistent across the details page and the Installation page using localStorage, including preventing the same app from being installed twice.",
        "Loading data with React Router loaders and handling edge cases such as an invalid app id, with a clear loading state and a friendly error page.",
        "Making the layout, cards and rating charts work smoothly on mobile, tablet and desktop screens.",
      ],
      improvements: [
        "Add a dark/light theme and advanced search filters (category, rating).",
        "Replace the static JSON data with a real API and add user authentication.",
        "Turn the app into a PWA and optimize performance for slower connections.",
      ],
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
      liveLink:
        "https://drawsql.app/draw?t=9cf3cc16-67a3-4089-b4d1-149480d1e51f&view=1",
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
