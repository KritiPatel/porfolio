export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  tech: string;
  description: string[];
  link?: string;
  linkLabel?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
