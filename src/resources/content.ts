export const about = {
  title: "About Me",
  description: `Dynamic educational leader with a proven track record as Principal of School,
  enhancing team skills and ensuring regulatory compliance. Adept at managing projects and
  addressing challenges collaboratively. Passionate about solving issues and viewing challenges
  as real-life opportunities.`,
} as const;

export const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Guru Gobind Singh Indraprastha University, New Delhi",
    period: "Expected July 2029",
  }
] as const;

export const skills = [
  "Accreditation Oversight",
  "Tech-related Work",
  "Regulatory Compliance",
  "Windows Troubleshooting",
  "Android Custom ROM Knowledge",
  "Linux Proficiency",
  "Adobe Photoshop, After Effects, Figma"
] as const;

export const experience = [
  {
    role: "Head of School",
    company: "Heera Lal Public School, New Delhi",
    period: "Mar 2023 - May 2024",
    details: [
      "Developed and diversified instruction for students of varying skill levels.",
      "Coordinated outreach events with parents and community members.",
      "Ensured smooth student transitions and mealtime coordination.",
      "Implemented fair protocols to handle disruptive behavior."
    ]
  }
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
