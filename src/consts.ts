import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Astro Micro",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://x.com/chihyang41",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ChihYang41",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/chih-yang-tsai-3780a9208",
  },
];
