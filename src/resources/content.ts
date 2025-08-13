// types.ts (optional for clarity)
export type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Experience = {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
  images: Image[];
};

export type Skill = {
  title: string;
  description: string;
  images: Image[];
};

export type Institution = {
  name: string;
  description: string;
};

// -------------------- About --------------------
export const about = {
  title: "About Me",
  label: "About", // for Header buttons
  description: `Dynamic educational leader with a proven track record as Principal of School,
enhancing team skills and ensuring regulatory compliance. Adept at managing projects and
addressing challenges collaboratively. Passionate about solving issues and viewing challenges
as real-life opportunities.`,

  path: "/about",

  intro: {
    title: "Introduction",
    display: true,
    description:
      "I am Ashish Kumar Singh, a dedicated and passionate freelancer with expertise in technology, education, and leadership.",
    items: [
      "Freelancer & Tech Enthusiast",
      "Experienced Educational Leader",
      "Passionate about solving challenges",
    ],
  },

  work: {
    title: "Experience",
    display: true,
    experiences: [
      {
        company: "Heera Lal Public School, New Delhi",
        timeframe: "Mar 2023 - May 2024",
        role: "Head of School",
        achievements: [
          "Helped teachers develop and diversify instruction to better serve students at different skill levels and backgrounds",
          "Coordinated outreach events to bring in parents, family members, and community at large to support students",
          "Coordinated smooth mealtimes and student transitions",
          "Backed up instructors in handling disruptive students and implemented fair protocols to resolve situations",
        ],
        images: [] as Image[],
      },
    ] as Experience[],
  },

  studies: {
    title: "Education",
    display: true,
    institutions: [
      {
        name: "B.Tech in Information Technology",
        description: "From GGSIPU New Delhi, Expected in July 2029",
      },
    ] as Institution[],
  },

  technical: {
    title: "Technical Skills",
    display: true,
    skills: [
      {
        title: "Technology & Tools",
        description: "Accreditation oversight, Tech-related work, Regulatory compliance",
        images: [] as Image[],
      },
    ] as Skill[],
  },

  calendar: {
    display: false,
    link: "",
  },

  tableOfContent: {
    display: true,
    subItems: true,
  },

  avatar: {
    display: true,
  },
} as const;

// -------------------- Person --------------------
export const person = {
  name: "Ashish Kumar Singh",
  role: "Freelancer | Tech Enthusiast | Educational Leader",
  avatar: "/avatar.jpg", // Make sure this exists in public/
  location: "New Delhi, India",
  email: "ashish.jayshreeran@gmail.com",
  languages: ["Hindi (C1)", "English (C1)", "French (A2)"],
} as const;

// -------------------- Home --------------------
export const home = {
  title: "Home",
  description: "Welcome to my portfolio",
  path: "/",
  image: "/images/home-og.jpg",
  featured: { display: true, title: "Featured Project", href: "/projects" },
  headline: "Your headline here",
  subline: "Your subline here",
} as const;

// -------------------- Social --------------------
export const social = [
  {
    name: "GitHub",
    link: "https://github.com/ashish01-dev",
    icon: "github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashish-kumar-singh-9002a437a/",
    icon: "linkedin",
  },
  {
    name: "Email",
    link: "mailto:ashish.jayshreeran@gmail.com",
    icon: "mail",
  },
] as const;

// -------------------- Blog / Work / Gallery placeholders --------------------
export const blog = {
  title: "Blog",
  description: "Latest articles and updates",
  path: "/blog",
} as const;

export const work = {
  title: "Projects",
  path: "/projects",
} as const;

export const gallery = {
  title: "Gallery",
  path: "/gallery",
  images: [] as Image[],
} as const;
