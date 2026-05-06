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
  interests:
    "I enjoy building educational technology, exploring AI applications, and creating systems that make student workflows simpler and more effective.",
  personalSummarySections: [
    {
      title: "Wisconsin",
      description:
        "I was born and raised in Wisconsin and spent part of my childhood moving around the Milwaukee area. I moved to West Lafayette, IN in 2020 to attend Purdue University.",
      links: [],
    },
    {
      title: "Cambridge",
      description:
        "When I was a Freshman in high school, I learned that my family would be moving to Cambridge, MA. As a 14 year old, this was about the worst news in the world. However, after much resistance, I grew to love my new home and the people I met there.",
      links: [],
    },
    {
      title: "San Francisco",
      description:
        "Like clockwork, it was time for another move. This time, with some more age and prior moves under my belt, the transition was much smoother. While I haven't had much time to explore SF and the surrounding areas, I have already become quiete fond of it.",
      links: [],
    },
  ],
  personalInterestSections: [
    {
      title: "Sports",
      description: "Add sports you play, follow, or enjoy watching.",
      linkImageAspect: "square",
      links: [
        {
          label: "Milwaukee Bucks",
          href: "https://www.nba.com/bucks",
          image: "/mkebucks.jpg",
        },
        {
          label: "Green Bay Packers",
          href: "https://www.packers.com/",
          image: "/greenbaypackers.jpg",
          imageObjectFit: "contain",
        },
      ],
    },
    {
      title: "Hobbies",
      description:
        "Add hobbies and activities you spend time on outside of school/work.",
      links: [],
    },
    {
      title: "Movies/TV",
      description:
        "Add movie or TV poster images and link each one to its IMDb page.",
      links: [
        {
          label: "Good Will Hunting",
          href: "https://www.imdb.com/title/tt0119217/?newac=true",
          image: "goodwillhunting.jpg",
        },
        {
          label: "Breaking Bad",
          href: "https://www.imdb.com/title/tt0903747/",
          image: "/breakingbad.jpg",
        },
        {
          label: "The Godfather Part II",
          href: "https://www.imdb.com/title/tt0071562/",
          image: "/godfatherpartii.jpg",
        },
        {
          label: "Goodfellas",
          href: "https://www.imdb.com/title/tt0099685/?ref_=ls_t_20",
          image: "/goodfellas.jpg",
        }
      ],
    },
    {
      title: "Music",
      description:
        "Add artist/album/song artwork and link each one to Spotify pages.",
      linkImageAspect: "square",
      links: [
        {
          label: "The Beatles",
          href: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
          image: "/thebeatles.jpg",
        },
        {
          label: "Billy Joel",
          href: "https://open.spotify.com/artist/6zFYqv1mOsgBRQbae3JJ9e",
          image: "/billyjoel.jpg",
        },
        {
          label: "Red Hot Chili Peppers",
          href: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
          image: "/redhotchilipeppers.jpg",
        },
      ],
    },
  ],
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
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:fangmaneli@gmail.com",
        icon: Icons.email,
        label: "Email",
        navbar: true,
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
      logoUrl: "/Beta_Theta_Pi_Coat_of_Arms.png",
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
    {
      school: "Cambridge Rindge and Latin School",
      href: "https://crls.cpsd.us/",
      degree:
        "Graduated 2024",
      logoUrl: "/crls_logo.png",
      start: "September 2020",
      end: "May 2024",
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
