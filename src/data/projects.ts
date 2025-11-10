export type Project = {
  title: string;
  description: string;
  github: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "bare-budget",
    description: "A simple personal budgeting app for tracking income, expenses, and savings with a minimal, no-frills approach.",
    github: "https://github.com/sollazzo08/bare-budget",
    tech: ["nodejs","express","nextjs","tailwind","postgres", "prisma", "docker"],
  },
  {
    title: "spotify-clone",
    description: "A mobile Spotify clone built with React Native and Expo, featuring music playback, playlists, and a sleek UI.",
    github: "https://github.com/sollazzo08/spotify-clone",
    tech: ["react-native", "expo", "typescript"],
  },
  {
    title: "weather-notification-service",
    description: "A lightweight microservice that fetches real-time weather updates using the OpenWeatherAPI, designed for easy integration.",
    github: "https://github.com/sollazzo08/weather-notifcation-service",
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
    description: "My developer portfolio, featuring my projects and skills.",
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
