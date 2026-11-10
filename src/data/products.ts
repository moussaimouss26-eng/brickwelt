import type { Product } from "@/lib/types";
import { categories } from "./categories";

export const products: Product[] = [
  {
    id: "bw-1025",
    slug: "gaozheng-lernbausteine-custom",
    name: "Gaozheng Lernbausteine Custom",
    shortDescription:
      "LEGO-kompatible Bildungs-Bausteine von Gaozheng Toys – OEM/ODM-Qualität für kreatives Lernen ab 6.",
    description:
      "Entdecke das Gaozheng Lernbausteine Custom Set: ABS-Kunststoffsteine, die mit gängigen Systemen kompatibel sind, ideal für Schule, Freizeit und Marken-Customizing. Hersteller mit 20 Jahren Export-Erfahrung, Sicherheitsstandards wie CE, EN71 und REACH. Flexible Sets für kreatives Bauen und Lernen. Demo-Produkt bei BrickWelt – in Anlehnung an Gaozheng Toys (OEM/ODM), kein offizielles LEGO®-Produkt.",
    category: "creator",
    price: 34.99,
    originalPrice: 44.99,
    pieces: 520,
    age: "6+",
    stock: 48,
    rating: 4.8,
    reviewCount: 37,
    isNew: true,
    isBestseller: true,
    isDeal: true,
    isGiftIdea: true,
    colors: ["#E30613", "#FFD100", "#006CB7"],
    imageUrl: "/products/gaozheng-lernbausteine.jpg",
    specs: [
      { label: "Steine", value: "ca. 520 (variabel / OEM)" },
      { label: "Alter", value: "6+" },
      { label: "Material", value: "ABS-Kunststoff" },
      { label: "Kompatibilität", value: "LEGO-kompatibel (System)" },
      { label: "Hersteller", value: "Gaozheng Toys · Chenghai" },
      { label: "Zertifikate", value: "CE, EN71, REACH u. a." },
      { label: "Thema", value: "Creator / Bildungs-Sets" },
    ],
    tags: ["Gaozheng", "OEM", "ODM", "Lernbausteine", "Bildung", "kompatibel"],
  },
  {
    id: "bw-1026",
    slug: "sagrada-familia-21065",
    name: "Sagrada Família",
    shortDescription:
      "Monumentales Architecture-Set mit 12.060 Steinen – Barcelonas Ikone als spektakuläres Display-Modell für Erwachsene.",
    description:
      "Baue eines der größten Architektur-Sets überhaupt: die Sagrada Família. Über 12.000 Steine, detailreiche Fassaden (Geburt, Passion, Herrlichkeit), Wirkung wie Buntglasfenster und elegante Namensplatte auf dem Sockel. Du folgst der realen Bauchronologie – von Apsis und Krypta bis zu den sechs Türmen. Maße gebaut ca. 62 × 47 × 39 cm. BrickWelt Demo-Katalogartikel in Anlehnung an Set 21065 – kein Verkauf über BrickWelt als offizieller LEGO®-Shop.",
    category: "architecture",
    price: 749.99,
    pieces: 12060,
    age: "18+",
    stock: 6,
    rating: 4.9,
    reviewCount: 214,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E8E0D4", "#8B9A7D", "#C4A574"],
    imageUrl: "/products/sagrada-familia-21065.jpg",
    specs: [
      { label: "Steine", value: "12.060" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "21065" },
      { label: "Maße (gebaut)", value: "ca. 62 × 47 × 39 cm" },
      { label: "Thema", value: "Architecture" },
      { label: "Highlight", value: "Größtes Architecture-Set · Display" },
    ],
    tags: ["Sagrada Familia", "Barcelona", "Gaudí", "Architecture", "Erwachsene", "Display", "21065"],
  },
  {
    id: "bw-1027",
    slug: "dragon-ball-shenron-goku-11390",
    name: "Dragon Ball: Shenron & Goku",
    shortDescription:
      "Ikonisches Icons-Display: Shenron über den sieben Dragon Balls, mit Goku auf der Wolke – 1.764 Steine für Fans ab 18.",
    description:
      "Erfülle dir den Wunsch: Baue Shenron, den ewigen Drachen, in spektakulärer Windung über den sieben Dragon Balls. Bewegliche Kopf- und Klauen-Posen, wellige Schuppen und die Minifigur Goku (Kind) auf der magischen Wolke zum Umsetzen. Perfektes Anime-Display für Regal oder Schreibtisch. Ca. 32 × 26 × 24 cm. BrickWelt Demo-Katalogartikel in Anlehnung an Set 11390 – kein offizieller LEGO®-Verkauf über BrickWelt.",
    category: "icons",
    price: 139.99,
    pieces: 1764,
    age: "18+",
    stock: 12,
    rating: 4.9,
    reviewCount: 86,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#1F8A4C", "#F5D547", "#E85D04"],
    imageUrl: "/products/dragon-ball-shenron-goku-11390.jpg",
    specs: [
      { label: "Steine", value: "1.764" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "11390" },
      { label: "Figuren", value: "1 (Goku)" },
      { label: "Maße (gebaut)", value: "ca. 32 × 26 × 24 cm" },
      { label: "Thema", value: "Icons · Dragon Ball" },
    ],
    tags: ["Dragon Ball", "Shenron", "Goku", "Anime", "Icons", "Display", "11390"],
  },
  {
    id: "bw-1028",
    slug: "quartier-venitien-11388",
    name: "Quartier Vénitien",
    shortDescription:
      "Kanal-Diorama mit Villa, Glasbläser-Werkstatt und astronomischer Uhr – 5.682 Steine, 17 Figuren.",
    description:
      "Reise nach Venedig: Baue ein detailreiches Icons-Diorama mit Luxusvilla, Glasbläser-Atelier, astronomischem Uhrturm, Gondel und Bogenbrücke. Modular trennbar, mit 17 Minifiguren. Ca. 48 × 63 × 31 cm. BrickWelt Demo in Anlehnung an Set 11388 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 499.99,
    pieces: 5682,
    age: "18+",
    stock: 8,
    rating: 5.0,
    reviewCount: 42,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#C4A574", "#1E6B8A", "#E8E0D4"],
    imageUrl: "/products/quartier-venitien-11388.jpg",
    specs: [
      { label: "Steine", value: "5.682" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "11388" },
      { label: "Figuren", value: "17" },
      { label: "Maße (gebaut)", value: "ca. 48 × 63 × 31 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Venedig", "Icons", "Diorama", "11388"],
  },
  {
    id: "bw-1029",
    slug: "playstation-72306",
    name: "PlayStation",
    shortDescription:
      "Nostalgische PS1-Konsole mit Controller und Spiele-Dioramen – 1.911 Steine für Erwachsene.",
    description:
      "Zock-Nostalgie in Steinen: Baue die originale PlayStation-Konsole und den Controller, entdecke Gran Turismo- und Ape Escape-Dioramen. Mit Open- und Power-Buttons. BrickWelt Demo in Anlehnung an Set 72306 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 159.99,
    pieces: 1911,
    age: "18+",
    stock: 15,
    rating: 4.7,
    reviewCount: 58,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#6B7280", "#111111", "#E30613"],
    imageUrl: "/products/playstation-72306.jpg",
    specs: [
      { label: "Steine", value: "1.911" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "72306" },
      { label: "Maße (gebaut)", value: "ca. 6 × 26 × 19 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["PlayStation", "Retro", "Gaming", "72306"],
  },
  {
    id: "bw-1030",
    slug: "godzilla-21375",
    name: "Godzilla",
    shortDescription:
      "König der Monster als posierbare Ideas-Figur – 5.363 Steine, Energie-Strahl inklusive.",
    description:
      "Baue Godzilla mit schuppiger Haut, Rückenplatten und beweglicher Pose. Kopf, Arme und Schwanz justierbar; Zunge gegen Energiestrahl tauschen. Monumentales Display. BrickWelt Demo in Anlehnung an Set 21375 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 399.99,
    pieces: 5363,
    age: "18+",
    stock: 7,
    rating: 4.8,
    reviewCount: 19,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#3D5A3D", "#111111", "#5A7A4A"],
    imageUrl: "/products/godzilla-21375.jpg",
    specs: [
      { label: "Steine", value: "5.363" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "21375" },
      { label: "Maße (gebaut)", value: "über 70 cm (mit Strahl)" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Godzilla", "Monster", "Ideas", "21375"],
  },
  {
    id: "bw-1031",
    slug: "downton-abbey-21373",
    name: "Downton Abbey",
    shortDescription:
      "Highclere-Schloss mit 13 Figuren und detaillierten Interieurs – 4.711 Steine Ideas-Set.",
    description:
      "Baue das ikonische Anwesen: Speisesaal, Halle, Bibliothek oben; Küche, Pantry und Carsons Büro unten. 13 Minifiguren aus Staffel 6. Abnehmbares Obergeschoss. BrickWelt Demo in Anlehnung an Set 21373 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 299.99,
    pieces: 4711,
    age: "18+",
    stock: 10,
    rating: 4.8,
    reviewCount: 67,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#8B7355", "#E8E0D4", "#5A5A5A"],
    imageUrl: "/products/downton-abbey-21373.jpg",
    specs: [
      { label: "Steine", value: "4.711" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "21373" },
      { label: "Figuren", value: "13" },
      { label: "Maße (gebaut)", value: "ca. 30 × 44 × 16 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Downton Abbey", "Ideas", "Architektur", "21373"],
  },
  {
    id: "bw-1032",
    slug: "van-gogh-nacht-21333",
    name: "Van Gogh – Sternennacht",
    shortDescription:
      "3D-Interpretation der Sternennacht mit Van-Gogh-Figur und Staffelei – 2.316 Steine.",
    description:
      "Baue Van Goghs Meisterwerk in 3D-Steinen: wirbelnde Wolken, Hügellandschaft, Wandhaken oder Standfuß. Inkl. Minifigur Van Gogh mit Pinsel, Palette und Staffelei. MoMA-Kollaboration. BrickWelt Demo in Anlehnung an Set 21333 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 169.99,
    pieces: 2316,
    age: "18+",
    stock: 11,
    rating: 4.8,
    reviewCount: 312,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#1B3A6B", "#F5D547", "#2E5A3C"],
    imageUrl: "/products/van-gogh-nacht-21333.jpg",
    specs: [
      { label: "Steine", value: "2.316" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "21333" },
      { label: "Figuren", value: "1" },
      { label: "Maße (gebaut)", value: "ca. 28 × 38 × 12 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Van Gogh", "Kunst", "Ideas", "21333"],
  },
  {
    id: "bw-1033",
    slug: "klimt-kuss-31221",
    name: "Klimt – Der Kuss",
    shortDescription:
      "Größtes LEGO Art-Werk: Der Kuss als goldenes Wandbild – 4.000 Steine.",
    description:
      "Art-Nouveau in Steinen: Klimts Der Kuss mit goldenen Metallelementen, Spiralen und Blumen. Belvedere-Kollaboration, Klimt-Signatur, Wandmontage. BrickWelt Demo in Anlehnung an Set 31221 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 299.99,
    pieces: 4000,
    age: "18+",
    stock: 9,
    rating: 4.8,
    reviewCount: 145,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#C9A227", "#E8D5A3", "#5C4033"],
    imageUrl: "/products/klimt-kuss-31221.jpg",
    specs: [
      { label: "Steine", value: "4.000" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "31221" },
      { label: "Maße (gebaut)", value: "ca. 60 × 54 × 4 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Klimt", "Kunst", "Art", "31221"],
  },
  {
    id: "bw-1034",
    slug: "minas-tirith-11377",
    name: "Minas Tirith",
    shortDescription:
      "Weiße Stadt Gondors im Hybrid-Maßstab – 8.278 Steine, 10 Figuren, Thronsaal.",
    description:
      "Baue Minas Tirith mit sieben Ebenen, Ecthelion-Turm und detaillierten Interieurs inkl. Thronsaal. 10 Minifiguren (Gandalf, Aragorn, Arwen u. a.) und Schattenfax. BrickWelt Demo in Anlehnung an Set 11377 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 649.99,
    pieces: 8278,
    age: "18+",
    stock: 5,
    rating: 4.4,
    reviewCount: 88,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E8E8E8", "#6B7280", "#5A5A5A"],
    imageUrl: "/products/minas-tirith-11377.jpg",
    specs: [
      { label: "Steine", value: "8.278" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "11377" },
      { label: "Figuren", value: "10" },
      { label: "Maße (gebaut)", value: "ca. 59 × 62 × 37 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Herr der Ringe", "Minas Tirith", "Tolkien", "11377"],
  },
  {
    id: "bw-1035",
    slug: "jack-sparrow-piratenschiff-10365",
    name: "Piratenschiff Jack Sparrow",
    shortDescription:
      "Verfluchtes Schiff mit 8 Figuren, Kanonen und Kapitänsquartier – 2.862 Steine.",
    description:
      "Segel setzen: detailliertes Piratenschiff mit zerrissenen schwarzen Segeln, drehbaren Kanonen, Ruder und abnehmbarer Wasserlinie. 8 Minifiguren inkl. Jack Sparrow und Barbossa. BrickWelt Demo in Anlehnung an Set 10365 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 349.99,
    pieces: 2862,
    age: "18+",
    stock: 8,
    rating: 4.7,
    reviewCount: 201,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#5C4033", "#111111", "#C0C0C0"],
    imageUrl: "/products/jack-sparrow-piratenschiff-10365.jpg",
    specs: [
      { label: "Steine", value: "2.862" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "10365" },
      { label: "Figuren", value: "8" },
      { label: "Maße (gebaut)", value: "ca. 64 × 64 × 23 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Piraten", "Jack Sparrow", "Icons", "10365"],
  },
  {
    id: "bw-1036",
    slug: "festtags-haus-11387",
    name: "Festtagshaus",
    shortDescription:
      "Verschneites Winterdorf-Haus mit Leuchtstein und Schlitten – 1.354 Steine.",
    description:
      "Winterdorf-Magie: spitze Dächer, Girlande, goldene Glocken, gemütliches Interieur mit Kamin und Phonograph. Leuchtender Weihnachtsbaum, Pferdeschlitten, Schneemann und 4 Figuren. BrickWelt Demo in Anlehnung an Set 11387 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 109.99,
    pieces: 1354,
    age: "18+",
    stock: 18,
    rating: 4.5,
    reviewCount: 33,
    isNew: true,
    isGiftIdea: true,
    colors: ["#E30613", "#FFFFFF", "#006400"],
    imageUrl: "/products/festtags-haus-11387.jpg",
    specs: [
      { label: "Steine", value: "1.354" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "11387" },
      { label: "Figuren", value: "4" },
      { label: "Maße (gebaut)", value: "ca. 21 × 28 × 14 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Weihnachten", "Winterdorf", "Icons", "11387"],
  },
  {
    id: "bw-1037",
    slug: "buddy-elf-40865",
    name: "Buddy der Elf",
    shortDescription:
      "Film-Hommage mit Zuckerstangen und Ahornsirup – 713 Steine, ab 12 Jahren.",
    description:
      "Weihnachtsklassiker zum Bauen: Buddy in Grün-Gelb auf Eisbasis, mit Papageitaucher, Zuckerstangen und Ahornsirup-Flasche. Fröhliches Regal-Display. BrickWelt Demo in Anlehnung an Set 40865 – kein offizieller LEGO®-Shop.",
    category: "creator",
    price: 39.99,
    pieces: 713,
    age: "12+",
    stock: 28,
    rating: 4.4,
    reviewCount: 21,
    isNew: true,
    isGiftIdea: true,
    colors: ["#00A651", "#FFD100", "#E30613"],
    imageUrl: "/products/buddy-elf-40865.jpg",
    specs: [
      { label: "Steine", value: "713" },
      { label: "Alter", value: "12+" },
      { label: "Set-Nr.", value: "40865" },
      { label: "Maße (gebaut)", value: "ca. 31 × 16 × 8 cm" },
      { label: "Thema", value: "Creator" },
    ],
    tags: ["Buddy", "Elf", "Weihnachten", "40865"],
  },
  {
    id: "bw-1038",
    slug: "mini-hogwarts-40975",
    name: "Mini-Hogwarts Schloss",
    shortDescription:
      "Mikro-Hogwarts mit Großer Halle und geheimen Kammern – 700 Steine, ab 10.",
    description:
      "Zauberschule im Kleinformat: Große Halle, Hauptturm, Ostflügel, Astronomieturm. Kammer des Schreckens und Raum mit Spiegel Nerhegeb. Harry und Hedwig über dem Schloss. BrickWelt Demo in Anlehnung an Set 40975 – kein offizieller LEGO®-Shop.",
    category: "harry-potter",
    price: 39.99,
    pieces: 700,
    age: "10+",
    stock: 35,
    rating: 4.4,
    reviewCount: 48,
    isNew: true,
    isGiftIdea: true,
    colors: ["#740001", "#5A5A5A", "#D3A625"],
    imageUrl: "/products/mini-hogwarts-40975.jpg",
    specs: [
      { label: "Steine", value: "700" },
      { label: "Alter", value: "10+" },
      { label: "Set-Nr.", value: "40975" },
      { label: "Figuren", value: "1" },
      { label: "Maße (gebaut)", value: "ca. 14 × 17 × 12 cm" },
      { label: "Thema", value: "Harry Potter" },
    ],
    tags: ["Harry Potter", "Hogwarts", "Mini", "40975"],
  },
  {
    id: "bw-1039",
    slug: "batmobile-batman-returns-76355",
    name: "Batmobile – Batman Returns",
    shortDescription:
      "Film-Batmobile mit Batmissile-Transformation und Display – 2.269 Steine, 18+.",
    description:
      "Ikonisches Fahrzeug aus Batman Returns: Cockpit-Haube, Armaturenbrett, Knopf für Batmissile-Umwandlung, Standfuß und Batman-Minifigur mit Cape. BrickWelt Demo in Anlehnung an Set 76355 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 209.99,
    pieces: 2269,
    age: "18+",
    stock: 12,
    rating: 3.9,
    reviewCount: 27,
    isNew: true,
    isBestseller: true,
    colors: ["#111111", "#6B7280", "#FFD100"],
    imageUrl: "/products/batmobile-batman-returns-76355.jpg",
    specs: [
      { label: "Steine", value: "2.269" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "76355" },
      { label: "Figuren", value: "1" },
      { label: "Maße (gebaut)", value: "ca. 10 × 45 × 17 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Batman", "Batmobile", "DC", "76355"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getBestsellers(limit = 8): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getDeals(limit = 8): Product[] {
  return products.filter((p) => p.isDeal).slice(0, limit);
}

export function getGiftIdeas(limit = 8): Product[] {
  return products.filter((p) => p.isGiftIdea).slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      categories.find((c) => c.slug === p.category)?.name.toLowerCase().includes(q)
  );
}

export function filterProducts(options: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
  sort?: "popularity" | "price-asc" | "price-desc" | "newest";
}): Product[] {
  let result = [...products];

  if (options.category) {
    result = result.filter((p) => p.category === options.category);
  }
  if (options.minPrice != null) {
    result = result.filter((p) => p.price >= options.minPrice!);
  }
  if (options.maxPrice != null) {
    result = result.filter((p) => p.price <= options.maxPrice!);
  }
  if (options.query) {
    const q = options.query.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  switch (options.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
      break;
    case "popularity":
    default:
      result.sort((a, b) => b.reviewCount * b.rating - a.reviewCount * a.rating);
      break;
  }

  return result;
}
