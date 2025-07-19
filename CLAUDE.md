# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build the site (includes type checking with `astro check`)
- `npm run preview` - Preview the built site
- `npm run astro` - Run Astro CLI commands

## Architecture Overview

This is a personal blog built with **Astro Micro**, a lightweight static site generator. The site is multilingual and uses TypeScript throughout.

### Key Technologies

- **Astro 5.x** - Static site generator with MDX support
- **Tailwind CSS** - Utility-first CSS framework
- **Pagefind** - Client-side search functionality
- **TypeScript** - Type safety throughout

### Project Structure

- `src/content/blog/` - Blog posts in MDX format, organized by language (`en/`, `zh-tw/`)
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layouts
- `src/pages/` - Route pages with dynamic routing for multilingual support
- `src/consts.ts` - Site configuration and metadata
- `src/types.ts` - TypeScript type definitions
- `src/content.config.ts` - Content collection schema using Zod

### Content Management

- Blog posts are stored in `src/content/blog/` with frontmatter schema validation
- Required frontmatter: `title`, `description`, `date`
- Optional frontmatter: `draft`, `tags`
- Posts support both `.md` and `.mdx` formats

### Routing

- Dynamic routing handles multilingual content via `[lang]/` pages
- Supported languages: English (`en`), Traditional Chinese (`zh-tw`)
- Site configuration in `src/consts.ts` defines metadata and social links

### Build Process

- Build command runs `astro check` for type validation before building
- Generates static files in `dist/`
- Includes sitemap generation and RSS feed
- Pagefind search index built during build process

### Site Configuration

- Site URL: `https://www.chihyang.blog/`
- Theme uses CSS custom properties for syntax highlighting
- Integrations: Tailwind, Sitemap, MDX, Pagefind
