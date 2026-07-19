export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "facebook" | "whatsapp" | "email";
}

export interface Skill {
  name: string;
  level: number; // 1-100, used for the visual bar
}

export interface SkillCategory {
  category: string;
  icon: string; // emoji or short label used as a small tag
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  details?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  location: string;
  points: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  image: string;
  techStack: string[];
  description: string;
  longDescription: string;
  liveLink?: string;
  githubLink?: string;
  challenges: string[];
  improvements: string[];
  featured?: boolean;
}

export interface PortfolioData {
  name: string;
  designation: string[];
  tagline: string;
  heroIntro: string;
  photo: string;
  resumeUrl: string;
  email: string;
  phone: string;
  whatsapp?: string;
  location: string;
  socials: SocialLink[];
  about: {
    journey: string[];
    interests: string;
    funFact: string;
  };
  skills: SkillCategory[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
}
