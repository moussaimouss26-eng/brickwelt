import type { Product } from "@/lib/types";
import { categories } from "./categories";

export const products: Product[] = [
  {
    id: "bw-1001",
    slug: "technisches-hypercar-rot",
    name: "Technisches Hypercar Rot",
    shortDescription: "Hochdetaillierter Sportwagen mit funktionierender Lenkung und V8-Motor.",
    description:
      "Baue ein atemberaubendes Hypercar mit authentischen Details: öffnungsfähige Türen, Federung und ein sichtbarer Motorblock. Ideal für Fans mechanischer Konstruktionen. Demo-Produkt von BrickWelt – kein offizielles Lizenzprodukt.",
    category: "technic",
    price: 189.99,
    originalPrice: 219.99,
    pieces: 1847,
    age: "18+",
    stock: 14,
    rating: 4.8,
    reviewCount: 126,
    isBestseller: true,
    isDeal: true,
    isGiftIdea: true,
    colors: ["#E30613", "#111111", "#C0C0C0"],
    specs: [
      { label: "Steine", value: "1.847" },
      { label: "Alter", value: "18+" },
      { label: "Maße (gebaut)", value: "ca. 42 × 18 × 12 cm" },
      { label: "Thema", value: "Technic" },
    ],
    tags: ["Sportwagen", "Erwachsene", "Display"],
  },
  {
    id: "bw-1002",
    slug: "raubvogel-jaeger-x",
    name: "Raubvogel-Jäger X",
    shortDescription: "Flinker Sternjäger mit ausklappbaren Flügeln und Pilot-Minifigur-Platz.",
    description:
      "Stelle dich dem galaktischen Abenteuer mit dem Raubvogel-Jäger X. Bewegliche Flügel, Cockpit und Display-Ständer inklusive. BrickWelt Demo-Set ohne offizielle Lizenzierung.",
    category: "star-wars",
    price: 64.99,
    originalPrice: 79.99,
    pieces: 562,
    age: "9+",
    stock: 32,
    rating: 4.7,
    reviewCount: 89,
    isBestseller: true,
    isDeal: true,
    colors: ["#111111", "#6B7280", "#FFD100"],
    specs: [
      { label: "Steine", value: "562" },
      { label: "Alter", value: "9+" },
      { label: "Figurenplätze", value: "1" },
      { label: "Thema", value: "Star Wars Style" },
    ],
    tags: ["Raumschiff", "Action"],
  },
  {
    id: "bw-1003",
    slug: "feuerwehrwache-hauptstrasse",
    name: "Feuerwehrwache Hauptstraße",
    shortDescription: "Große Feuerwache mit Leiterwagen, Hubschrauber-Pad und Alarmzentrale.",
    description:
      "Retten, löschen, helfen – die Feuerwehrwache Hauptstraße bringt Action in deine Stadt. Mit Garage, Schlauchturm und Einsatzfahrzeug. Demo-Katalogartikel von BrickWelt.",
    category: "city",
    price: 99.99,
    pieces: 943,
    age: "6+",
    stock: 21,
    rating: 4.6,
    reviewCount: 54,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E30613", "#006CB7", "#FFD100"],
    specs: [
      { label: "Steine", value: "943" },
      { label: "Alter", value: "6+" },
      { label: "Fahrzeuge", value: "2" },
      { label: "Thema", value: "City" },
    ],
    tags: ["Feuerwehr", "Stadt"],
  },
  {
    id: "bw-1004",
    slug: "skyline-berlin-skyline",
    name: "Skyline Berlin",
    shortDescription: "Elegante Skyline mit Brandenburger Tor, Fernsehturm und Reichstag.",
    description:
      "Ein stilvolles Display-Modell der Berliner Skyline – perfekt für Architektur-Fans und als Geschenkidee. Unabhängiges BrickWelt Demo-Produkt.",
    category: "architecture",
    price: 49.99,
    pieces: 678,
    age: "16+",
    stock: 18,
    rating: 4.9,
    reviewCount: 203,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#5A5A5A", "#E8E8E8", "#006CB7"],
    specs: [
      { label: "Steine", value: "678" },
      { label: "Alter", value: "16+" },
      { label: "Breite", value: "ca. 28 cm" },
      { label: "Thema", value: "Architecture" },
    ],
    tags: ["Berlin", "Display", "Sammler"],
  },
  {
    id: "bw-1005",
    slug: "klassiker-sportwagen-gelb",
    name: "Klassiker Sportwagen Gelb",
    shortDescription: "Ikonischer Roadster im Icons-Stil mit Vitrine-tauglichem Finish.",
    description:
      "Ein zeitloser Klassiker für Erwachsene: detailreiche Karosserie, Speichenräder und authentische Proportionen. BrickWelt Demo – keine Markenlizenz.",
    category: "icons",
    price: 159.99,
    originalPrice: 179.99,
    pieces: 1456,
    age: "18+",
    stock: 9,
    rating: 4.8,
    reviewCount: 167,
    isDeal: true,
    isGiftIdea: true,
    colors: ["#FFD100", "#111111", "#C0C0C0"],
    specs: [
      { label: "Steine", value: "1.456" },
      { label: "Alter", value: "18+" },
      { label: "Maßstab", value: "ca. 1:8" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Auto", "Erwachsene"],
  },
  {
    id: "bw-1006",
    slug: "abenteuer-wohnmobil-3in1",
    name: "Abenteuer-Wohnmobil 3-in-1",
    shortDescription: "Baue Wohnmobil, Strandhaus oder Surfbude – ein Set, drei Modelle.",
    description:
      "Maximale Kreativität mit drei Bauweisen. Ideal für Creator-Fans, die gerne umbauen. Demo-Artikel im BrickWelt Katalog.",
    category: "creator",
    price: 54.99,
    pieces: 787,
    age: "8+",
    stock: 40,
    rating: 4.5,
    reviewCount: 41,
    isNew: true,
    colors: ["#006CB7", "#FFD100", "#E30613"],
    specs: [
      { label: "Steine", value: "787" },
      { label: "Alter", value: "8+" },
      { label: "Modelle", value: "3" },
      { label: "Thema", value: "Creator" },
    ],
    tags: ["3-in-1", "Kreativ"],
  },
  {
    id: "bw-1007",
    slug: "zauberschloss-turm",
    name: "Zauberschloss-Turm",
    shortDescription: "Magischer Turm mit Bibliothek, Klassenzimmer und geheimen Räumen.",
    description:
      "Entdecke geheime Durchgänge und detailreiche Innenräume. Ein magisches Display für Fans von Zauberwelten. BrickWelt Demo ohne offizielle Lizenz.",
    category: "harry-potter",
    price: 119.99,
    originalPrice: 139.99,
    pieces: 1124,
    age: "10+",
    stock: 16,
    rating: 4.7,
    reviewCount: 98,
    isDeal: true,
    isBestseller: true,
    colors: ["#740001", "#D3A625", "#2F4F4F"],
    specs: [
      { label: "Steine", value: "1.124" },
      { label: "Alter", value: "10+" },
      { label: "Räume", value: "5" },
      { label: "Thema", value: "Harry Potter Style" },
    ],
    tags: ["Schloss", "Magie"],
  },
  {
    id: "bw-1008",
    slug: "herzsee-cafe",
    name: "Herzsee-Café",
    shortDescription: "Buntes Café mit Terrasse, Backstube und Freundschafts-Momenten.",
    description:
      "Backen, treffen, feiern – das Herzsee-Café ist der Treffpunkt für Friends-Abenteuer. Demo-Produkt von BrickWelt.",
    category: "friends",
    price: 44.99,
    pieces: 426,
    age: "6+",
    stock: 28,
    rating: 4.4,
    reviewCount: 37,
    isNew: true,
    isGiftIdea: true,
    colors: ["#E91E8C", "#7ED957", "#FFD100"],
    specs: [
      { label: "Steine", value: "426" },
      { label: "Alter", value: "6+" },
      { label: "Figurenplätze", value: "3" },
      { label: "Thema", value: "Friends" },
    ],
    tags: ["Café", "Freundschaft"],
  },
  {
    id: "bw-1009",
    slug: "drachenmeister-tempel",
    name: "Drachenmeister-Tempel",
    shortDescription: "Ninja-Tempel mit Drachen, Trainingsarena und versteckten Fallen.",
    description:
      "Trainiere wie ein echter Ninja und verteidige den Tempel vor Angreifern. Actionreiches NINJAGO-Style Demo-Set von BrickWelt.",
    category: "ninjago",
    price: 79.99,
    pieces: 812,
    age: "8+",
    stock: 22,
    rating: 4.6,
    reviewCount: 72,
    isBestseller: true,
    colors: ["#E30613", "#00A651", "#111111"],
    specs: [
      { label: "Steine", value: "812" },
      { label: "Alter", value: "8+" },
      { label: "Drachen", value: "1" },
      { label: "Thema", value: "NINJAGO Style" },
    ],
    tags: ["Ninja", "Tempel"],
  },
  {
    id: "bw-1010",
    slug: "grosse-bau-farm",
    name: "Große Bau-Farm",
    shortDescription: "Bauernhof mit Tieren, Traktor und großen Duplo-Steinen für Kleinkinder.",
    description:
      "Erste Bauerlebnisse für die Kleinsten: stabile Steine, liebevolle Tiere und viel Platz zum Spielen. BrickWelt Demo-Katalog.",
    category: "duplo",
    price: 59.99,
    pieces: 104,
    age: "2+",
    stock: 35,
    rating: 4.8,
    reviewCount: 61,
    isGiftIdea: true,
    colors: ["#E30613", "#006CB7", "#7ED957"],
    specs: [
      { label: "Steine", value: "104" },
      { label: "Alter", value: "2+" },
      { label: "Tiere", value: "4" },
      { label: "Thema", value: "Duplo" },
    ],
    tags: ["Kleinkind", "Farm"],
  },
  {
    id: "bw-1011",
    slug: "rennwagen-blitz-gt",
    name: "Rennwagen Blitz GT",
    shortDescription: "Flacher Speed-Racer mit Spoiler und Sammler-Präsentation.",
    description:
      "Hol dir Rennstrecken-Feeling nach Hause. Kompaktes Speed-Champions-Style Modell für Fans schneller Autos. Demo von BrickWelt.",
    category: "speed-champions",
    price: 24.99,
    originalPrice: 29.99,
    pieces: 298,
    age: "9+",
    stock: 50,
    rating: 4.5,
    reviewCount: 44,
    isDeal: true,
    isNew: true,
    colors: ["#006CB7", "#111111", "#E30613"],
    specs: [
      { label: "Steine", value: "298" },
      { label: "Alter", value: "9+" },
      { label: "Fahrerplatz", value: "1" },
      { label: "Thema", value: "Speed Champions Style" },
    ],
    tags: ["Rennen", "Auto"],
  },
  {
    id: "bw-1012",
    slug: "kran-schwerlast-xt",
    name: "Kran Schwerlast XT",
    shortDescription: "Funktionierender Mobilkran mit ausziehbarem Ausleger und Winde.",
    description:
      "Heb, schwenk und baue Baustellen-Szenen mit dem Schwerlast-Kran. Mechanisch anspruchsvolles Technic-Style Demo-Set.",
    category: "technic",
    price: 129.99,
    pieces: 1292,
    age: "11+",
    stock: 11,
    rating: 4.7,
    reviewCount: 58,
    isNew: true,
    colors: ["#FFD100", "#111111", "#E30613"],
    specs: [
      { label: "Steine", value: "1.292" },
      { label: "Alter", value: "11+" },
      { label: "Funktionen", value: "Winde, Ausleger" },
      { label: "Thema", value: "Technic" },
    ],
    tags: ["Baustelle", "Mechanik"],
  },
  {
    id: "bw-1013",
    slug: "mondbasis-patrouille",
    name: "Mondbasis-Patrouille",
    shortDescription: "Raumfähre und Mondrover für interstellare City-Missionen.",
    description:
      "Erkunde die Mondoberfläche mit Rover und Startplattform. Spannendes City-Weltraum-Abenteuer als BrickWelt Demo.",
    category: "city",
    price: 69.99,
    pieces: 654,
    age: "7+",
    stock: 19,
    rating: 4.3,
    reviewCount: 29,
    isNew: true,
    colors: ["#FFFFFF", "#006CB7", "#FFD100"],
    specs: [
      { label: "Steine", value: "654" },
      { label: "Alter", value: "7+" },
      { label: "Fahrzeuge", value: "2" },
      { label: "Thema", value: "City" },
    ],
    tags: ["Weltraum", "Rover"],
  },
  {
    id: "bw-1014",
    slug: "skyline-paris",
    name: "Skyline Paris",
    shortDescription: "Eiffelturm, Triumphbogen und Louvre als kompakte Skyline.",
    description:
      "Eine elegante Hommage an Paris – ideal als Schreibtisch-Display. Unabhängiges BrickWelt Architecture-Style Demo-Produkt.",
    category: "architecture",
    price: 44.99,
    pieces: 592,
    age: "16+",
    stock: 24,
    rating: 4.8,
    reviewCount: 141,
    isGiftIdea: true,
    colors: ["#5A5A5A", "#D4C4A8", "#006CB7"],
    specs: [
      { label: "Steine", value: "592" },
      { label: "Alter", value: "16+" },
      { label: "Breite", value: "ca. 26 cm" },
      { label: "Thema", value: "Architecture" },
    ],
    tags: ["Paris", "Display"],
  },
  {
    id: "bw-1015",
    slug: "botanik-orchidee",
    name: "Botanik Orchidee",
    shortDescription: "Elegante Orchidee zum Bauen – immer blühend, nie verwelkend.",
    description:
      "Dekoratives Pflanzen-Set für Erwachsene. Perfekt als Geschenk und stilvolles Interior-Statement. BrickWelt Icons-Style Demo.",
    category: "icons",
    price: 49.99,
    pieces: 608,
    age: "18+",
    stock: 27,
    rating: 4.9,
    reviewCount: 312,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E91E8C", "#7ED957", "#FFFFFF"],
    specs: [
      { label: "Steine", value: "608" },
      { label: "Alter", value: "18+" },
      { label: "Höhe", value: "ca. 39 cm" },
      { label: "Thema", value: "Icons / Botanik" },
    ],
    tags: ["Pflanzen", "Deko", "Geschenk"],
  },
  {
    id: "bw-1016",
    slug: "mittelalterburg-creator",
    name: "Mittelalterburg Creator",
    shortDescription: "Burg, Marktplatz oder Windmühle – drei mittelalterliche Welten.",
    description:
      "Versetze dich ins Mittelalter mit drei kreativen Bauoptionen. Creator-Style Demo-Katalogartikel von BrickWelt.",
    category: "creator",
    price: 89.99,
    originalPrice: 99.99,
    pieces: 1082,
    age: "9+",
    stock: 13,
    rating: 4.6,
    reviewCount: 47,
    isDeal: true,
    colors: ["#8B4513", "#808080", "#006CB7"],
    specs: [
      { label: "Steine", value: "1.082" },
      { label: "Alter", value: "9+" },
      { label: "Modelle", value: "3" },
      { label: "Thema", value: "Creator" },
    ],
    tags: ["Burg", "3-in-1"],
  },
  {
    id: "bw-1017",
    slug: "quidditch-arena-mini",
    name: "Zauber-Arena Mini",
    shortDescription: "Kompakte Arena mit Tribünen und fliegenden Elementen.",
    description:
      "Spannende Spielszenen in magischer Atmosphäre. Kleines Display mit großer Wirkung – BrickWelt Demo ohne Lizenzanspruch.",
    category: "harry-potter",
    price: 34.99,
    pieces: 312,
    age: "8+",
    stock: 30,
    rating: 4.4,
    reviewCount: 33,
    isNew: true,
    colors: ["#740001", "#1A472A", "#D3A625"],
    specs: [
      { label: "Steine", value: "312" },
      { label: "Alter", value: "8+" },
      { label: "Figurenplätze", value: "4" },
      { label: "Thema", value: "Harry Potter Style" },
    ],
    tags: ["Sport", "Magie"],
  },
  {
    id: "bw-1018",
    slug: "tierrettungsstation",
    name: "Tierrettungsstation",
    shortDescription: "Tierklinik mit Ambulanz, Pflegebereich und Outdoor-Gehege.",
    description:
      "Hilf Tieren in Not – mit Behandlungsraum und niedlichen Begleitern. Friends-Style Demo von BrickWelt.",
    category: "friends",
    price: 39.99,
    pieces: 378,
    age: "6+",
    stock: 26,
    rating: 4.5,
    reviewCount: 22,
    isGiftIdea: true,
    colors: ["#7ED957", "#E91E8C", "#FFFFFF"],
    specs: [
      { label: "Steine", value: "378" },
      { label: "Alter", value: "6+" },
      { label: "Tiere", value: "3" },
      { label: "Thema", value: "Friends" },
    ],
    tags: ["Tiere", "Klinik"],
  },
  {
    id: "bw-1019",
    slug: "blitzdrachen-bike",
    name: "Blitzdrachen-Bike",
    shortDescription: "Schnelles Ninja-Bike mit Drachenhelm und Waffenständer.",
    description:
      "Rase in den Kampf mit dem Blitzdrachen-Bike. Kompaktes Action-Set für NINJAGO-Style Fans. BrickWelt Demo.",
    category: "ninjago",
    price: 19.99,
    originalPrice: 24.99,
    pieces: 187,
    age: "7+",
    stock: 45,
    rating: 4.2,
    reviewCount: 19,
    isDeal: true,
    colors: ["#00A651", "#111111", "#FFD100"],
    specs: [
      { label: "Steine", value: "187" },
      { label: "Alter", value: "7+" },
      { label: "Fahrzeuge", value: "1" },
      { label: "Thema", value: "NINJAGO Style" },
    ],
    tags: ["Bike", "Action"],
  },
  {
    id: "bw-1020",
    slug: "regenbogen-zug",
    name: "Regenbogen-Zug",
    shortDescription: "Bunter Zug mit Waggons und großer Duplo-Lok für kleine Entdecker.",
    description:
      "Auf die Schienen, fertig, los! Der Regenbogen-Zug fördert Motorik und Fantasie. BrickWelt Duplo-Style Demo.",
    category: "duplo",
    price: 39.99,
    pieces: 70,
    age: "1,5+",
    stock: 33,
    rating: 4.7,
    reviewCount: 55,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E30613", "#FFD100", "#006CB7"],
    specs: [
      { label: "Steine", value: "70" },
      { label: "Alter", value: "1,5+" },
      { label: "Waggons", value: "2" },
      { label: "Thema", value: "Duplo" },
    ],
    tags: ["Zug", "Kleinkind"],
  },
  {
    id: "bw-1021",
    slug: "supersport-emerald",
    name: "Supersport Emerald",
    shortDescription: "Smaragdgrüner Supersportwagen mit Detail-Cockpit.",
    description:
      "Ein Highlight für Speed-Fans: scharfe Linien, große Felgen und Präsentationsplatte. BrickWelt Demo ohne Markenlizenz.",
    category: "speed-champions",
    price: 27.99,
    pieces: 275,
    age: "9+",
    stock: 38,
    rating: 4.6,
    reviewCount: 31,
    isNew: true,
    colors: ["#00A651", "#111111", "#C0C0C0"],
    specs: [
      { label: "Steine", value: "275" },
      { label: "Alter", value: "9+" },
      { label: "Fahrerplatz", value: "1" },
      { label: "Thema", value: "Speed Champions Style" },
    ],
    tags: ["Sportwagen", "Sammler"],
  },
  {
    id: "bw-1022",
    slug: "imperialer-frachter",
    name: "Imperialer Frachter",
    shortDescription: "Massives Raumschiff mit Laderaum und Laser-Türmen.",
    description:
      "Baue einen imposanten Frachter für deine Flotte. Detailreiches Display mit viel Spielfläche. BrickWelt Star-Wars-Style Demo.",
    category: "star-wars",
    price: 149.99,
    originalPrice: 169.99,
    pieces: 1540,
    age: "10+",
    stock: 7,
    rating: 4.8,
    reviewCount: 84,
    isDeal: true,
    isGiftIdea: true,
    colors: ["#6B7280", "#111111", "#E30613"],
    specs: [
      { label: "Steine", value: "1.540" },
      { label: "Alter", value: "10+" },
      { label: "Länge", value: "ca. 48 cm" },
      { label: "Thema", value: "Star Wars Style" },
    ],
    tags: ["Raumschiff", "Display"],
  },
  {
    id: "bw-1023",
    slug: "polizeistation-mitte",
    name: "Polizeistation Mitte",
    shortDescription: "Polizeirevier mit Zelle, Motorrad und Einsatzwagen.",
    description:
      "Halte Ordnung in der Stadt mit Revier, Garage und Hubschrauberlandeplatz. City-Style Demo von BrickWelt.",
    category: "city",
    price: 84.99,
    pieces: 798,
    age: "6+",
    stock: 17,
    rating: 4.5,
    reviewCount: 39,
    isBestseller: true,
    colors: ["#006CB7", "#FFFFFF", "#111111"],
    specs: [
      { label: "Steine", value: "798" },
      { label: "Alter", value: "6+" },
      { label: "Fahrzeuge", value: "2" },
      { label: "Thema", value: "City" },
    ],
    tags: ["Polizei", "Stadt"],
  },
  {
    id: "bw-1024",
    slug: "gelenkbus-stadtlinie",
    name: "Gelenkbus Stadtlinie",
    shortDescription: "Langer Stadtbus mit öffnungsfähigem Dach und Haltestelle.",
    description:
      "Bringe Pendler sicher durch die Stadt. Tolles Ergänzungsset für jede City-Anlage. BrickWelt Demo-Produkt.",
    category: "city",
    price: 29.99,
    pieces: 236,
    age: "5+",
    stock: 42,
    rating: 4.3,
    reviewCount: 18,
    isNew: true,
    colors: ["#FFD100", "#111111", "#006CB7"],
    specs: [
      { label: "Steine", value: "236" },
      { label: "Alter", value: "5+" },
      { label: "Fahrzeuge", value: "1" },
      { label: "Thema", value: "City" },
    ],
    tags: ["Bus", "Stadt"],
  },
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
