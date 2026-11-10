import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "technic",
    name: "Technic",
    description: "Komplexe Mechanik und realistische Modelle für Baumeister ab 9 Jahren.",
    color: "#E30613",
    accent: "#FFD100",
  },
  {
    slug: "star-wars",
    name: "Star Wars",
    description: "Raumschiffe, Helden und Szenen aus einer weit, weit entfernten Galaxis.",
    color: "#111111",
    accent: "#FFD100",
  },
  {
    slug: "city",
    name: "City",
    description: "Feuerwehr, Polizei und Alltag – baue deine eigene Stadt.",
    color: "#006CB7",
    accent: "#FFD100",
  },
  {
    slug: "architecture",
    name: "Architecture",
    description: "Ikonische Bauwerke der Welt als elegante Display-Sets.",
    color: "#5A5A5A",
    accent: "#E8E8E8",
  },
  {
    slug: "icons",
    name: "Icons",
    description: "Legendäre Designs und Sammlerstücke für Erwachsene.",
    color: "#E30613",
    accent: "#111111",
  },
  {
    slug: "creator",
    name: "Creator",
    description: "3-in-1 Kreativität – baue, baue um und entdecke neu.",
    color: "#FFD100",
    accent: "#E30613",
  },
  {
    slug: "harry-potter",
    name: "Harry Potter",
    description: "Hogwarts, Zauberei und magische Abenteuer zum Nachbauen.",
    color: "#740001",
    accent: "#D3A625",
  },
  {
    slug: "friends",
    name: "Friends",
    description: "Freundschaft, Abenteuer und bunte Geschichten aus Heartlake City.",
    color: "#E91E8C",
    accent: "#7ED957",
  },
  {
    slug: "ninjago",
    name: "NINJAGO",
    description: "Ninja-Action, Drachen und epische Kämpfe um Ninjago.",
    color: "#E30613",
    accent: "#00A651",
  },
  {
    slug: "duplo",
    name: "Duplo",
    description: "Große Steine für kleine Hände – sicheres Bauen ab 1,5 Jahren.",
    color: "#E30613",
    accent: "#006CB7",
  },
  {
    slug: "speed-champions",
    name: "Speed Champions",
    description: "Rennwagen und Sportwagen im Miniatur-Maßstab.",
    color: "#111111",
    accent: "#E30613",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
