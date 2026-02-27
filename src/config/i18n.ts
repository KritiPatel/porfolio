export type Locale = "en" | "fr";

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  tech: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export interface Translations {
  nav: { items: NavItem[]; cta: string };
  hero: { greeting: string; cta1: string; cta2: string; scroll: string };
  about: { title: string; subtitle: string; summary: string; stats: { value: string; label: string }[] };
  skills: { title: string; subtitle: string; groups: SkillGroup[] };
  experience: { title: string; subtitle: string; items: ExperienceItem[] };
  projects: { title: string; subtitle: string; items: ProjectItem[] };
  education: { label: string; degree: string; field: string; school: string; location: string };
  resume: { title: string; subtitle: string; download: string; filename: string };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    or: string;
    sendEmail: string;
  };
  footer: { built: string };
}

export const personalInfo: Record<Locale, PersonalInfo> = {
  en: {
    name: "Kriti Patel",
    title: "Full Stack Developer",
    tagline: "MERN | React | Node.js | Next.js",
    email: "kritipatel1900@gmail.com",
    phone: "+1 (519) 564-0882",
    location: "Toronto, ON",
  },
  fr: {
    name: "Kriti Patel",
    title: "Développeuse Full Stack",
    tagline: "MERN | React | Node.js | Next.js",
    email: "kritipatel1900@gmail.com",
    phone: "+1 (519) 564-0882",
    location: "Toronto, ON",
  },
};

const skillGroupsEN: SkillGroup[] = [
  { category: "Frontend", icon: "🖥️", skills: ["Next.js", "React", "React Native", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Material UI", "HTML5/CSS3"] },
  { category: "Backend", icon: "⚙️", skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Webhooks", "JWT/OAuth2"] },
  { category: "Database", icon: "🗄️", skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"] },
  { category: "DevOps & Cloud", icon: "☁️", skills: ["Docker", "AWS", "Azure", "Vercel", "Jenkins", "CI/CD"] },
  { category: "Tools & Testing", icon: "🧪", skills: ["Jest", "React Testing Library", "Postman", "Git/GitHub", "Jira"] },
];

const skillGroupsFR: SkillGroup[] = [
  { category: "Frontend", icon: "🖥️", skills: ["Next.js", "React", "React Native", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Material UI", "HTML5/CSS3"] },
  { category: "Backend", icon: "⚙️", skills: ["Node.js", "Express.js", "NestJS", "API REST", "Webhooks", "JWT/OAuth2"] },
  { category: "Base de données", icon: "🗄️", skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"] },
  { category: "DevOps & Cloud", icon: "☁️", skills: ["Docker", "AWS", "Azure", "Vercel", "Jenkins", "CI/CD"] },
  { category: "Outils & Tests", icon: "🧪", skills: ["Jest", "React Testing Library", "Postman", "Git/GitHub", "Jira"] },
];

const experienceEN: ExperienceItem[] = [
  {
    company: "Blue Infinity Tech LLP",
    role: "MERN Full Stack Developer",
    period: "Aug 2023 — Jun 2025",
    location: "India",
    bullets: [
      "Built end-to-end web apps with React, Next.js, Node.js, MongoDB/PostgreSQL with SSR/SSG for SEO.",
      "Developed mobile-first UIs in React and React Native (Expo) with shared components across platforms.",
      "Designed RESTful APIs and implemented JWT, OAuth2, NextAuth.js with role-based access control.",
      "Optimized MongoDB with indexing and aggregation pipelines; containerized with Docker on AWS EC2.",
    ],
  },
  {
    company: "Moweb Technologies Pvt. Ltd",
    role: "Associate Software Engineer",
    period: "Jan 2022 — Aug 2023",
    location: "India",
    bullets: [
      "Contributed to web applications using React, Node.js, and MongoDB including dashboards and e-commerce.",
      "Built REST APIs with Express.js, improved response times through query optimization.",
      "Translated UI/UX wireframes into responsive React interfaces with Material UI.",
    ],
  },
];

const experienceFR: ExperienceItem[] = [
  {
    company: "Blue Infinity Tech LLP",
    role: "Développeuse Full Stack MERN",
    period: "Août 2023 — Juin 2025",
    location: "Inde",
    bullets: [
      "Création d'applications web complètes avec React, Next.js, Node.js, MongoDB/PostgreSQL avec SSR/SSG.",
      "Développement d'interfaces mobile-first en React et React Native (Expo) avec composants partagés.",
      "Conception d'API RESTful et implémentation de JWT, OAuth2, NextAuth.js avec contrôle d'accès basé sur les rôles.",
      "Optimisation MongoDB avec indexation et pipelines d'agrégation ; conteneurisation Docker sur AWS EC2.",
    ],
  },
  {
    company: "Moweb Technologies Pvt. Ltd",
    role: "Ingénieure logicielle associée",
    period: "Jan 2022 — Août 2023",
    location: "Inde",
    bullets: [
      "Contribution à plus de 10 applications web avec React, Node.js et MongoDB.",
      "Construction d'API REST avec Express.js, amélioration des temps de réponse par optimisation des requêtes.",
      "Traduction de maquettes UI/UX en interfaces React responsives avec Material UI.",
    ],
  },
];

const projectsEN: ProjectItem[] = [
  {
    title: "Super Play Suite",
    tech: "React Native · React · Node.js",
    description: "Three gaming apps + web platform + admin panels with third-party integrations for rewards, ads, billing, and in-app purchases.",
    link: "https://play.google.com/store/apps/details?id=com.funzzy",
    linkLabel: "Google Play",
  },
  {
    title: "Kabaloops",
    tech: "React · Stripe · PayPal · MoMo",
    description: "Music-industry platform for loop makers with profiles, playlists, rewards, and multiple payment gateway integrations.",
    link: "https://kabaloops.com",
    linkLabel: "Live Site",
  },
  {
    title: "Blutor",
    tech: "React.js",
    description: "Creator platform with post uploads, monetization, chat, analytics, and customizable public themes.",
    link: "https://blutor.com",
    linkLabel: "Live Site",
  },
];

const projectsFR: ProjectItem[] = [
  {
    title: "Super Play Suite",
    tech: "React Native · React · Node.js",
    description: "Trois applications de jeux + plateforme web + panneaux d'administration avec intégrations tierces pour récompenses, publicités et achats in-app.",
    link: "https://play.google.com/store/apps/details?id=com.funzzy",
    linkLabel: "Google Play",
  },
  {
    title: "Kabaloops",
    tech: "React · Stripe · PayPal · MoMo",
    description: "Plateforme musicale pour créateurs de boucles avec profils, playlists, récompenses et intégrations de paiement multiples.",
    link: "https://kabaloops.com",
    linkLabel: "Site Web",
  },
  {
    title: "Blutor",
    tech: "React.js",
    description: "Plateforme pour créateurs avec publications, monétisation, chat, analytique et thèmes publics personnalisables.",
    link: "https://blutor.com",
    linkLabel: "Site Web",
  },
];

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      items: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Let's Talk",
    },
    hero: { greeting: "Hello, I'm", cta1: "View My Work", cta2: "Contact Me", scroll: "Scroll" },
    about: {
      title: "About Me",
      subtitle: "Who I am and what I do",
      summary: "Full-Stack Developer with 4 years of experience building scalable web and mobile products using the MERN stack and modern React frameworks. Strong in REST API design, authentication, performance optimization, and production deployments with Docker and CI/CD.",
      stats: [
        { value: "4+", label: "Years Experience" },
        { value: "10+", label: "Projects Shipped" },
        { value: "25+", label: "Technologies" },
      ],
    },
    skills: { title: "Tech Stack", subtitle: "Technologies I work with daily", groups: skillGroupsEN },
    experience: { title: "Experience", subtitle: "Where I've been building things", items: experienceEN },
    projects: { title: "Projects", subtitle: "Things I've built and shipped", items: projectsEN },
    education: { label: "Education", degree: "B.E. Information Technology", field: "Information Technology", school: "Government Engineering College, Modasa", location: "India" },
    resume: { title: "Resume", subtitle: "Download my latest resume", download: "Download Resume (PDF)", filename: "Kriti_Patel_Resume.pdf" },
    contact: {
      title: "Get in Touch",
      subtitle: "Interested in working together? Let's connect.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      or: "or",
      sendEmail: "Send me an email",
    },
    footer: { built: "Built with Next.js" },
  },
  fr: {
    nav: {
      items: [
        { label: "À propos", href: "#about" },
        { label: "Compétences", href: "#skills" },
        { label: "Expérience", href: "#experience" },
        { label: "Projets", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Contactez-moi",
    },
    hero: { greeting: "Bonjour, je suis", cta1: "Voir mes projets", cta2: "Me contacter", scroll: "Défiler" },
    about: {
      title: "À propos",
      subtitle: "Qui je suis et ce que je fais",
      summary: "Développeuse Full-Stack avec 4 ans d'expérience dans la création de produits web et mobiles évolutifs avec le stack MERN et des frameworks React modernes. Expertise en conception d'API REST, authentification, optimisation de performances et déploiements avec Docker et CI/CD.",
      stats: [
        { value: "4+", label: "Ans d'expérience" },
        { value: "10+", label: "Projets livrés" },
        { value: "25+", label: "Technologies" },
      ],
    },
    skills: { title: "Compétences", subtitle: "Technologies que j'utilise au quotidien", groups: skillGroupsFR },
    experience: { title: "Expérience", subtitle: "Où j'ai construit des choses", items: experienceFR },
    projects: { title: "Projets", subtitle: "Ce que j'ai construit et livré", items: projectsFR },
    education: { label: "Formation", degree: "Licence en ingénierie informatique", field: "Technologies de l'information", school: "Government Engineering College, Modasa", location: "Inde" },
    resume: { title: "CV", subtitle: "Téléchargez mon CV à jour", download: "Télécharger le CV (PDF)", filename: "Kriti_Patel_Resume.pdf" },
    contact: {
      title: "Contact",
      subtitle: "Intéressé par une collaboration ? Connectons-nous.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      or: "ou",
      sendEmail: "Envoyez-moi un email",
    },
    footer: { built: "Créé avec Next.js" },
  },
};
