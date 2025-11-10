import Badge from "./Badge";

const techVariantMap: Record<string, "green" | "yellow" | "blue" | "purple" | "gray" | "red"> = {
  nodejs: "green",
  express: "green",
  react: "blue",
  nextjs: "gray",
  mysql: "yellow",
  postgres: "blue",
  redis: "red",
};


export function TechBadge({ tech }: { tech: string }) {
  const key = tech.toLowerCase();
  const variant = techVariantMap[key] ?? "gray";

  return <Badge variant={variant}>{tech}</Badge>;
}
