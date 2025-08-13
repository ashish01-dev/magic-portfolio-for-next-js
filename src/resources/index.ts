// src/resources/index.ts

// Re-export items from content.ts that actually exist
export {
  person,
  social,
  home,
  about,
  // blog, work, gallery removed since they don't exist in content.ts
} from "./content";

// Re-export config and utilities
export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  effects,
  dataStyle,
} from "./once-ui.config";
