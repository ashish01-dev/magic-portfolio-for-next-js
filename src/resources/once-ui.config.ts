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

// UI style configuration
export const style = {
  brand: "#4F46E5",
  accent: "#F59E0B",
  neutral: "#6B7280",
  solid: "#111827",
  solidStyle: "filled",
  border: "rounded",
  surface: "#F3F4F6",
  transition: "0.3s",
  scaling: 1
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

// Background / UI effects
export const effects = {
  mask: { x: 0, y: 0, radius: 50, cursor: false },
  gradient: { display: true, opacity: 0.2, x: 0, y: 0, width: 100, height: 100, tilt: 0, colorStart: "#fff", colorEnd: "#000" },
  dots: { display: false, opacity: 0.1, size: 1, color: "#000" },
  grid: { display: false, opacity: 0.1, color: "#ccc", width: 100, height: 100 },
  lines: { display: false, opacity: 0.1, size: 1, thickness: 1, angle: 0, color: "#000" }
} as const;

// Additional data style options
export const dataStyle = {
  variant: "default",
  spacing: 8
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
