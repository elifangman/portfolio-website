import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Eli Fangman",
  initials: "EF",
  url: "http://localhost:3000",
  location: "West Lafayette, IN (and San Francisco, CA)",
  locationLink: "https://www.google.com/maps/place/West+Lafayette,+IN",
  description:
    "Undergraduate builder focused on full-stack products and practical AI applications.",
  summary:
    "I am an undergraduate at Purdue University studying Mathematics with minors in Computer Science and Economics (Expected May 2028).",
  avatarUrl: "/Headshot.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fangmaneli@gmail.com",
    tel: "+1 (414) 559-4846",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/elifangman",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eli-fangman-58411221b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Beta Theta Pi",
      href: "#",
      badges: [],
      location: "West Lafayette, IN",
      title: "Vice President of Risk Management",
      logoUrl: "/Headshot.png",
      start: "",
      end: "Present",
      description:
        "Managed regulatory compliance, organized logistics for large events, and led organizational change to improve chapter operations.",
    },
  ],
  education: [
    {
      school: "Purdue University",
      href: "https://www.purdue.edu",
      degree:
        "Mathematics with minors in Computer Science and Economics (Expected May 2028)",
      logoUrl: "/purdue_logo.png",
      start: "",
      end: "May 2028",
    },
  ],
  projects: [
    {
      title: "Syntric",
      href: "#",
      dates: "",
      active: true,
      description:
        "Founded and developed a full-stack educational organizer using React, TypeScript, Supabase, and AI edge functions to parse PDF syllabi into structured JSONB data.",
      technologies: ["React", "TypeScript", "Supabase", "AI Edge Functions"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
