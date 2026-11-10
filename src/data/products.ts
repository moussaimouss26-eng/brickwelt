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
