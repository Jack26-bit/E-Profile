// Test IDs for the portfolio page. Keys camelCase, values kebab-case.

export const NAV = {
  root: "nav-root",
  brand: "nav-brand",
  linkHero: "nav-link-hero",
  linkAbout: "nav-link-about",
  linkSkills: "nav-link-skills",
  linkProjects: "nav-link-projects",
  linkExperience: "nav-link-experience",
  linkContact: "nav-link-contact",
  cta: "nav-cta",
  resume: "nav-resume-cta",
};

export const HERO = {
  root: "hero-section",
  headline: "hero-headline",
  name: "hero-name",
  tagline: "hero-tagline",
  scrollIndicator: "hero-scroll-indicator",
};

export const ABOUT = {
  root: "about-section",
  pullQuote: "about-pull-quote",
  paragraph: "about-paragraph",
  resume: "about-resume-cta",
};

export const SKILLS = {
  root: "skills-section",
  band1: "skills-band-1",
  band2: "skills-band-2",
};

export const PROJECTS = {
  root: "projects-section",
  list: "projects-list",
  card: (slug) => `project-card-${slug}`,
  link: (slug) => `project-link-${slug}`,
};

export const EXPERIENCE = {
  root: "experience-section",
  item: (slug) => `experience-item-${slug}`,
  educationItem: (slug) => `education-item-${slug}`,
  achievementItem: (slug) => `achievement-item-${slug}`,
};

export const CONTACT = {
  root: "contact-section",
  email: "contact-email-cta",
  github: "contact-github-link",
  linkedin: "contact-linkedin-link",
  resume: "contact-resume-cta",
};

export const FOOTER = {
  root: "footer-root",
};
