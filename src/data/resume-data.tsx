import ConsultlyLogo from "../images/logos/consultly.svg";
import ClevertechLogo from "../images/logos/clevertech.png";
import ParabolLogo from "../images/logos/parabol.svg";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Aashutosh Rathi",
  initials: "AR",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Full Stack Engineer",
  summary:
    "",
  avatarUrl: "https://avatars.githubusercontent.com/u/21199234?v=4",
  personalWebsiteUrl: "https://aashutosh.dev",
  contact: {
    email: "aashutoshrathi@gmail.com",
    tel: "+917737253979",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aashutoshrathi",
        icon: GithubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aashutoshrathi/",
        icon: LinkedinIcon,
      },
      {
        name: "X",
        url: "https://x.com/AashutoshRathi",
        icon: TwitterIcon,
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Information Technology Vadodara",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Regie",
      link: "https://regie.ai",
      badges: ["Remote", "Bengaluru"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Reliance Jio",
      link: "https://trueconnect.jio.com/",
      badges: ["Remote"],
      title: "Full Stack Engineer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2023",
      description:
        "Worked on and lead an REST API for easy sending of SMS. Created an internal portal for URL shortening service. Technologies: React, TypeScript, NestJS",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "MongoDB",
    "Postgres",
    "DevOps",
  ],
  projects: [
    {
      title: "Invoicify",
      techStack: [
        "Side Project",
        "TypeScript",
        "Electron",
        "MongoDB",
      ],
      description: "Invoicify is a desktop app to enable, quicker and customizable invoicing experience for businesses. It allows one to configure fields and their position on invoice.",
      logo: ConsultlyLogo,
      link: {
        label: "invoicify",
        href: "https://invoicify.twoam.dev/",
      },
    }
  ],
} as const;
