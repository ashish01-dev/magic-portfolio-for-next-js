export const about = {
  title: "About Me",
  description: `Dynamic educational leader with a proven track record as Principal of School,
  enhancing team skills and ensuring regulatory compliance. Adept at managing projects and
  addressing challenges collaboratively. Passionate about solving issues and viewing challenges
  as real-life opportunities.`,

  path: "/about",

  intro: {
    title: "Introduction",
    display: true,
    description: "I am Ashish Kumar Singh, a dedicated and passionate freelancer with expertise in technology, education, and leadership.",
    items: [
      "Freelancer & Tech Enthusiast",
      "Experienced Educational Leader",
      "Passionate about solving challenges"
    ]
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
          "Developed and diversified instruction for students of varying skill levels",
          "Coordinated outreach events with parents and community members",
          "Ensured smooth student transitions and mealtime coordination",
          "Implemented fair protocols to handle disruptive behavior"
        ],
        images: [] // No images provided, keeping empty
      }
    ]
  },

  studies: {
    title: "Education",
    display: true,
    institutions: [
      {
        name: "Guru Gobind Singh Indraprastha University",
        description: "B.Tech in Information Technology (Expected July 2029)"
      }
    ]
  },

  technical: {
    title: "Technical Skills",
    display: true,
    skills: [
      {
        title: "Technology & Tools",
        description: "Accreditation oversight, Windows troubleshooting, Android custom ROM knowledge, Linux proficiency",
        images: []
      },
      {
        title: "Creative Software",
        description: "Adobe Photoshop, After Effects, Figma",
        images: []
      }
    ]
  },

  calendar: {
    display: false,
    link: "" // No calendar link, can be added later
  },

  tableOfContent: {
    display: true
  },

  avatar: {
    display: true
  }
} as const;

export const skills = [
  "Accreditation Oversight",
  "Tech-related Work",
  "Regulatory Compliance",
  "Windows Troubleshooting",
  "Android Custom ROM Knowledge",
  "Linux Proficiency",
  "Adobe Photoshop, After Effects, Figma"
] as const;

export const projects = {
  title: "Achievements & Certifications",
  items: [
    {
      name: "National Mathematics Olympiad",
      description: "Gold Medalist at National Level (3 times)"
    },
    {
      name: "National Science Olympiad",
      description: "Silver Medalist at State Level (2 times)"
    },
    {
      name: "BRICSMATH",
      description: "Certificate of Winner at International Level"
    },
    {
      name: "Kyokushin Karate",
      description: "Senior Orange Belt (Affiliated to International Karate Federation World Kyokushin India)"
    }
  ]
} as const;

export const languages = [
  { name: "Hindi", level: "Advanced (C1)" },
  { name: "English", level: "Advanced (C1)" },
  { name: "French", level: "Elementary (A2)" }
] as const;
