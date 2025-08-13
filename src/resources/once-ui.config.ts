// once-ui.config.ts

// --- Site config ---
export const siteConfig = {
  name: "Ashish Kumar Singh",
  description: "Freelancer | Tech Enthusiast | Educational Leader",
  socialLinks: {
    github: "https://github.com/ashish01-dev",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-singh-9002a437a/",
    email: "ashish.jayshreeran@gmail.com",
  },
  // Theme options: 'light', 'dark', or 'system'
  theme: "system",

  // Use local content (no CMS)
  cms: false
} as const;

// --- Display toggles for UI sections ---
export const display = {
  location: true,
  time: true,
  themeSwitcher: true
} as const;

// Base URL for your site
export const baseURL = "https://your-domain.com";

// --- Fonts ---
import { Geist, Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  heading,
  body,
  label,
  code
};

// --- UI style configuration (from original template) ---
export const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | custom
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100" // 90 | 95 | 100 | 105 | 110
};

// --- Schema and SEO config ---
export const schema = {
  logo: "",
  type: "Organization",
  name: "Ashish Kumar Singh",
  description: siteConfig.description,
  email: "ashish.jayshreeran@gmail.com",
} as const;

// Social links for SEO
export const sameAs = {
  github: siteConfig.socialLinks.github,
  linkedin: siteConfig.socialLinks.linkedin,
  email: siteConfig.socialLinks.email
} as const;

// --- UI effects (original template values) ---
export const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    size: "16",
    thickness: 1,
    angle: 45,
    color: "neutral-alpha-weak",
  },
};

// Additional data style options
export const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

// --- Mailchimp placeholder ---
export const mailchimp = {
  action: "",
  effects: effects
} as const;

// --- Protected routes ---
export const protectedRoutes: string[] = [];

// --- Routes placeholder ---
export const routes = {
  "/": true,
  "/about": true,
  "/blog": true,
  "/work": true,
  "/gallery": true
};
