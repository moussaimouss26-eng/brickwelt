import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "holzspielzeug",
    name: "Holzspielzeug",
    description: "Natürliche Hölzer, weiche Kanten und zeitloses Spielen für kleine Hände.",
    color: "#C4A574",
    accent: "#E8E0D4",
  },
  {
    slug: "kuscheltiere",
    name: "Kuscheltiere",
    description: "Weiche Begleiter zum Kuscheln, Träumen und Mitnehmen.",
    color: "#E8A0BF",
    accent: "#F7E8EE",
  },
  {
    slug: "bauen",
    name: "Bauen & Stecken",
    description: "Bunte Bausteine und Stapelspiele für kreative Bauideen.",
    color: "#E30613",
    accent: "#FFD100",
  },
  {
    slug: "puzzle",
    name: "Puzzle",
    description: "Motive zum Zusammensetzen – Konzentration und ruhige Momente.",
    color: "#2F6B4F",
    accent: "#C8D9C0",
  },
  {
    slug: "forschen",
    name: "Forschen & STEM",
    description: "Magnetik, Formen und erste Technik-Ideen für neugierige Köpfe.",
    color: "#006CB7",
    accent: "#FFD100",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
