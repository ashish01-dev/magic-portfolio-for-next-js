export const siteConfig = {
  name: "Ashish Kumar Singh",
  description: "Freelancer | Tech Enthusiast | Educational Leader",
  socialLinks: {
    github: "https://github.com/ashish01-dev",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-singh-9002a437a/",
    email: "ashish.jayshreeran@gmail.com",
    location: "New Delhi, India"
  },
  theme: "dark",
  cms: false
} as const;

// --- Display toggles for sections ---
export const display = {
  showHome: true,
  showAbout: true,
  showWork: true,
  showBlog: true,
  showGallery: true
} as const;

// Base URL for your site
export const baseURL = "https://your-domain.com";

// Fonts used in the project
export const fonts = {
  heading: { variable: "font-heading-variable" },
  body: { variable: "font-body-variable" },
  label: { variable: "font-label-variable" },
  code: { variable: "font-code-variable" }
} as const;

// UI style configuration (colors from original template)
export const style = {
  brand: "cyan",                 // restored from template
  accent: "red",                 // restored from template
  neutral: "gray",               // restored from template
  solid: "contrast",             // restored from template
  solidStyle: "flat",            // restored from template
  border: "playful",             // restored from template
  surface: "translucent",        // restored from template
  transition: "all",             // restored from template
  scaling: "100"                 // restored from template
} as const;

// Schema and SEO config
export const schema = {
  type: "Person",
  name: "Ashish Kumar Singh",
  url: baseURL
} as const;

// Social links for SEO
export const sameAs = [
  "https://github.com/ashish01-dev",
  "https://www.linkedin.com/in/ashish-kumar-singh-9002a437a/",
  "mailto:ashish.jayshreeran@gmail.com"
] as const;

// Background / UI effects (original template colors restored)
export const effects = {
  mask: { x: 0, y: 0, radius: 50, cursor: false },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background"
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong"
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem"
  },
  lines: {
    display: false,
    opacity: 100,
    size: "16",
    thickness: 1,
    angle: 45,
    color: "neutral-alpha-weak"
  }
} as const;

// Additional data style options (original template)
export const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: { fill: "var(--neutral-on-background-weak)", fontSize: 11, line: false }
} as const;

// Mailchimp placeholder (if you plan to use later)
export const mailchimp = {
  apiKey: "",
  listId: ""
} as const;

// Protected routes (example)
export const protectedRoutes: string[] = [];

// Routes placeholder
export const routes = {
  "/": true,
  "/about": true,
  "/blog": true,
  "/work": true,
  "/gallery": true
};
