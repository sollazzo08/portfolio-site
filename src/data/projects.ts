export type Project = {
  title: string;
  description: string;
  github: string;
  tech: string[];
};

export const projects: Project[] = [
  {
  title: "tx-normalizer",
  description: "A TypeScript library that transforms messy bank-exported CSV files into clean structured JSON transactions ready for budgeting apps and analytics.",
  github: "https://github.com/sollazzo08/tx-normalizer",
  tech: ["typescript", "nodejs", "zod"],
  },
  {
    title: "bare-budget",
    description: "A full-stack personal finance app built with Next.js, Node.js, and Postgres. Includes CSV transaction import, budgeting tools, categories, and a fully typed backend API.",
    github: "https://github.com/sollazzo08/bare-budget",
    tech: ["nodejs","express","nextjs","tailwind","postgres", "prisma", "docker"],
  },
  {
    title: "distill",
    description: "A cli tool that walks a codebase, extracts the essential project files, and generates an AI-friendly text snapshot. Perfect for sharing projects with LLMs without uploading the entire repo.",
    github: "https://github.com/sollazzo08/distill",
    tech: ["typescript", "cli"],
  },
  {
    title: "spotify-clone",
    description: "A React Native / Expo project that recreates the core look and feel of the Spotify mobile app. This project focuses on UI/UX replication",
    github: "https://github.com/sollazzo08/spotify-clone",
    tech: ["react-native", "expo", "typescript"],
  },
  {
    title: "weather-notification-service",
    description: "A lightweight microservice that fetches real-time weather updates using the OpenWeatherAPI, designed for easy integration.",
    github: "https://github.com/sollazzo08/weather-notification-service",
    tech: ["go"],
  },
  {
    title: "tts-service",
    description: "Convert text to speech using ElevenLabs.",
    github: "https://github.com/sollazzo08/tts-service",
    tech: ["go"],
  },
  {
    title: "portfolio-site",
    description: "My developer portfolio built with Next.js and Tailwind CSS, designed to showcase my projects, skills, and experience. The site is fully static and deployed on my Raspberry Pi using Nginx.",
    github: "https://github.com/sollazzo08/portfolio-site",
    tech: ["nextjs","typeScript","tailwind","nginx"],
  },
  {
    title: "discord-bot",
    description: "A custom Discord bot that integrates with various services, including my weather API.",
    github: "https://github.com/sollazzo08/discord-bot",
    tech: ["go"],
  },
  {
    title: "net-analyzer-cli",
    description: "Personal network analyzer CLI using Scapy.",
    github: "https://github.com/sollazzo08/net-analyzer-cli",
    tech: ["python"],
  }
];
