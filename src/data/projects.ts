export type Project = {
  title: string;
  description: string;
  github: string;
  tech: string;
};

export const projects: Project[] = [
  {
    title: "bare-budget",
    description: "A minimal personal budget app.",
    github: "https://github.com/sollazzo08/bare-budget",
    tech: "TypeScript",
  },
  {
    title: "spotify-clone",
    description: "Clone of Spotify's mobile app, using React Native + Expo.",
    github: "https://github.com/sollazzo08/spotify-clone",
    tech: "JavaScript",
  },
  {
    title: "weather-notification-service",
    description: "Small wrapper around the OpenWeatherAPI for weather updates.",
    github: "https://github.com/sollazzo08/weather-notifcation-service",
    tech: "Go",
  },
  {
    title: "tts-service",
    description: "Convert text to speech using ElevenLabs.",
    github: "https://github.com/sollazzo08/tts-service",
    tech: "Go",
  },
  {
    title: "portfolio-site",
    description: "My developer portfolio, featuring my projects and skills.",
    github: "https://github.com/sollazzo08/portfolio-site",
    tech: "TypeScript",
  },
  {
    title: "discord-bot",
    description: "A custom Discord bot that integrates with various services, including my weather API.",
    github: "https://github.com/sollazzo08/discord-bot",
    tech: "Go",
  },
  {
    title: "net-analyzer-cli",
    description: "Personal network analyzer CLI using Scapy.",
    github: "https://github.com/sollazzo08/net-analyzer-cli",
    tech: "Python",
  }
];
