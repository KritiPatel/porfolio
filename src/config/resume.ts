import type { Experience, Project, SkillCategory } from "@/types";

export const profileSummary =
  "Full-Stack Developer with 4 years of experience building and delivering scalable web and mobile products using the MERN stack and modern React frameworks. Strong in REST API design, authentication/authorization, performance optimization, and production deployments using Docker and CI/CD.";

export const experiences: Experience[] = [
  {
    company: "Blue Infinity Tech LLP",
    role: "MERN Full Stack Developer",
    period: "Aug 2023 — Jun 2025",
    location: "India",
    bullets: [
      "Built and maintained end-to-end web applications using React, Next.js, Node.js, and MongoDB/PostgreSQL, with SSR/SSG to improve SEO and initial page performance.",
      "Developed responsive, mobile-first UIs in React and React Native (Expo), reusing shared components to reduce duplicated UI work across platforms.",
      "Implemented complex state management with React Hooks and Redux Toolkit, improving consistency across multi-step user flows.",
      "Designed and documented RESTful APIs (Node.js/Express/Next.js) to support real-time data interactions across web and mobile clients.",
      "Implemented secure authentication/authorization with JWT, OAuth2 and NextAuth.js, including role-based access control (RBAC).",
      "Optimized MongoDB data models with indexing and aggregation pipelines to improve query performance and reporting workloads.",
      "Containerized services with Docker and deployed to AWS EC2, supported CI/CD with Jenkins to improve release reliability.",
    ],
  },
  {
    company: "Moweb Technologies Pvt. Ltd",
    role: "Associate Software Engineer",
    period: "Jan 2022 — Aug 2023",
    location: "India",
    bullets: [
      "Contributed to full-stack development of web applications using React, Node.js, and MongoDB, including dashboards and e-commerce features.",
      "Built and integrated REST APIs with Express.js and MongoDB, improving API response times through query optimization.",
      "Partnered with UI/UX designers to translate wireframes into responsive React UIs using Material UI and CSS-in-JS.",
      "Worked in Agile Scrum with Jira and Git, participating in estimation, sprint planning, code reviews, and stakeholder updates.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Super Play Suite",
    tech: "React Native, React.js, Node.js",
    description: [
      "Developed and optimized three gaming apps (Super Play, Super Quiz, Funzzy) plus web apps, a public website, and React-based admin panels.",
      "Implemented admin features for user management, reporting, question/tournament management, and content workflows.",
      "Integrated third-party services for rewards redemption, ads, authentication, profile/coin management, operator billing subscriptions, and in-app purchases.",
      "Supported successful Android + web launch by coordinating end-to-end delivery across mobile, web, and admin surfaces.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.funzzy",
    linkLabel: "Google Play",
  },
  {
    title: "Kabaloops",
    tech: "React, Stripe / PayPal / MoMo",
    description: [
      "Built product features for a music-industry platform where loop makers upload/manage loops, profiles, playlists, and rewards.",
      "Implemented and maintained multiple payment gateways to support global transactions and streamlined checkout flows.",
    ],
    link: "https://kabaloops.com",
    linkLabel: "Live Site",
  },
  {
    title: "Blutor",
    tech: "React.js",
    description: [
      "Developed core features including post uploads, monetization, chat, profile management, in-app browsing, analytics, and customizable public themes.",
      "Improved performance and UX through iterative delivery in Agile SDLC, increasing platform usability for creators.",
    ],
    link: "https://blutor.com",
    linkLabel: "Live Site",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: [
      "Next.js",
      "React",
      "React Native",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Webhooks",
      "JWT/OAuth2",
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Mongoose",
      "Aggregation Pipelines",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Docker", "AWS", "Azure (TFS)", "Vercel", "Jenkins", "CI/CD"],
  },
  {
    category: "Tools & Testing",
    icon: "🧪",
    skills: [
      "Jest",
      "React Testing Library",
      "Postman",
      "Git/GitHub",
      "Jira",
      "Agile/Scrum",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  field: "Information Technology",
  institution: "Government Engineering College, Modasa",
  location: "India",
};

export const personal = {
  name: "Kriti Patel",
  title: "Full Stack Developer",
  tagline: "MERN | React | Node.js | Next.js",
  email: "kritipatel1900@gmail.com",
  phone: "+1 (519) 564-0882",
  location: "Toronto, ON",
};
