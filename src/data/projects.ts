export type Project = {
  slug: string; // used for routing (/products/[slug])
  title: string; // project title
  description: string; // short project description
  github: string; // github link
  tech: string[]; // list of tech used
  overview?: string; // blog-style long form content for showcase page
  screenshots?: string[]; // list of image paths for vertical gallery
};

export const projects: Project[] = [
  {
    slug: "bare-budget",
    title: "bare-budget",
    description:
      "A full-stack personal finance app built with Next.js, Node.js, and Postgres. Includes CSV transaction import, budgeting tools, categories, and a fully typed backend API.",
    github: "https://github.com/sollazzo08/bare-budget",
    tech: [
      "nodejs",
      "express",
      "nextjs",
      "tailwind",
      "postgres",
      "prisma",
      "docker",
    ],
    overview: `
BareBudget is a full-stack budgeting platform that helps users understand their spending trends over time.

Features:
- CSV import + automated merchant cleanup
- Category assignment & budget tracking
- End-to-end TypeScript safety with Zod + Prisma
- Clean dashboard UI

Inspired by tools like Mint— but simplified and custom-built for developer control.
    `.trim(),
    screenshots: [
      "/project-screenshots/bare-budget/overview-page.png",
      "/project-screenshots/bare-budget/accounts-page.png",
      "/project-screenshots/bare-budget/transactions-page.png",
      "/project-screenshots/bare-budget/budgets-page.png",
      "/project-screenshots/bare-budget/bills-subscriptions-page.png",
    ],
  },
  {
    slug: "tx-normalizer",
    title: "tx-normalizer",
    description:
      "A TypeScript library that transforms messy bank-exported CSV files into clean structured JSON transactions ready for budgeting apps and analytics.",
    github: "https://github.com/sollazzo08/tx-normalizer",
    tech: ["typescript", "nodejs", "zod"],
    overview: `
tx-normalizer is my custom CSV parser and normalization layer for banking data.

It takes raw CSV lines from any bank export → validates + transforms them into a consistent JSON transaction model, so apps like BareBudget always receive clean structured data.

The result: fewer parsing bugs and a simple interface for analytics or budgeting intelligence.
    `.trim(),
    screenshots: [],
  },
  {
    slug: "distill",
    title: "distill",
    description:
      "A CLI tool that scans a codebase, distills the most important files, and generates an AI-friendly snapshot for sharing with developers or LLMs.",
    github: "https://github.com/sollazzo08/distill",
    tech: ["typescript", "cli"],
    overview: `
distill is a simple CLI that walks a project repo → extracts the essential files → outputs a compressed, AI-readable text bundle.

Perfect when you want to share code insights with an LLM without uploading an entire repository.
    `.trim(),
  },
  {
    slug: "spotify-clone",
    title: "spotify-clone",
    description:
      "A React Native / Expo build focused on UI/UX replication of the Spotify mobile layout.",
    github: "https://github.com/sollazzo08/spotify-clone",
    tech: ["react-native", "expo", "typescript"],
  },
  {
    slug: "weather-notification-service",
    title: "weather-notification-service",
    description:
      "A lightweight Go microservice for fetching and delivering real-time weather updates.",
    github: "https://github.com/sollazzo08/weather-notification-service",
    tech: ["go"],
  },
  {
    slug: "tts-service",
    title: "tts-service",
    description:
      "Convert text to speech using ElevenLabs. A backend service designed for integration.",
    github: "https://github.com/sollazzo08/tts-service",
    tech: ["go"],
  },
  {
    slug: "portfolio-site",
    title: "portfolio-site",
    description:
      "My developer portfolio built with Next.js and Tailwind CSS, deployed on my Raspberry Pi with Nginx.",
    github: "https://github.com/sollazzo08/portfolio-site",
    tech: ["nextjs", "typeScript", "tailwind", "nginx"],
  },
  {
    slug: "discord-bot",
    title: "discord-bot",
    description:
      "A custom Discord bot that integrates with multiple APIs such as my weather service.",
    github: "https://github.com/sollazzo08/discord-bot",
    tech: ["go"],
  },
  {
    slug: "net-analyzer-cli",
    title: "net-analyzer-cli",
    description:
      "A Python CLI for inspecting network traffic using Scapy—just for fun and learning!",
    github: "https://github.com/sollazzo08/net-analyzer-cli",
    tech: ["python"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
