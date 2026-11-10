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
  {
    id: "bw-1040",
    slug: "neuschwanstein-21063",
    name: "Schloss Neuschwanstein",
    shortDescription:
      "Bayerisches Märchenschloss als Architecture-Display – 3.455 Steine, Sommer-/Herbstlaub.",
    description:
      "Baue das ikonische Schloss Neuschwanstein mit Türmen, Hof und wechselbarem Baumlaub. Namensplatte und detailreiche Fassaden. BrickWelt Demo in Anlehnung an Set 21063 – kein offizieller LEGO®-Shop.",
    category: "architecture",
    price: 269.99,
    pieces: 3455,
    age: "18+",
    stock: 9,
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E8E0D4", "#8B9A7D", "#5A5A5A"],
    imageUrl: "/products/neuschwanstein-21063.jpg",
    specs: [
      { label: "Steine", value: "3.455" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "21063" },
      { label: "Maße (gebaut)", value: "ca. 31 × 46 × 20 cm" },
      { label: "Thema", value: "Architecture" },
    ],
    tags: ["Schloss", "Neuschwanstein", "Architecture", "21063"],
  },
  {
    id: "bw-1041",
    slug: "hogwarts-schloss-71043",
    name: "Hogwarts Schloss",
    shortDescription:
      "Episches Mikro-Hogwarts mit 6.020 Steinen – großes Schloss-Display für Harry-Potter-Fans.",
    description:
      "Das große Hogwarts-Schloss: Große Halle, Kammer des Schreckens, Hagrids Hütte, peitschende Weide und mehr. BrickWelt Demo in Anlehnung an Set 71043 – kein offizieller LEGO®-Shop.",
    category: "harry-potter",
    price: 469.99,
    pieces: 6020,
    age: "16+",
    stock: 7,
    rating: 4.9,
    reviewCount: 890,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#740001", "#5A5A5A", "#D3A625"],
    imageUrl: "/products/hogwarts-schloss-71043.jpg",
    specs: [
      { label: "Steine", value: "6.020" },
      { label: "Alter", value: "16+" },
      { label: "Set-Nr.", value: "71043" },
      { label: "Maße (gebaut)", value: "ca. 58 × 69 × 43 cm" },
      { label: "Thema", value: "Harry Potter" },
    ],
    tags: ["Hogwarts", "Schloss", "Harry Potter", "71043"],
  },
  {
    id: "bw-1042",
    slug: "disney-schloss-43222",
    name: "Disney Schloss",
    shortDescription:
      "Majestätisches Schloss mit 4.837 Steinen und 8 Prinzessinnen-Figuren – über 80 cm hoch.",
    description:
      "Disney-Schloss mit versteckten Szenen, Ballsaal und 8 Minifiguren. Spektakuläres Display. BrickWelt Demo in Anlehnung an Set 43222 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 399.99,
    pieces: 4837,
    age: "18+",
    stock: 6,
    rating: 4.8,
    reviewCount: 420,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#7EC8E3", "#E91E8C", "#FFD100"],
    imageUrl: "/products/disney-schloss-43222.jpg",
    specs: [
      { label: "Steine", value: "4.837" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "43222" },
      { label: "Maße (gebaut)", value: "ca. 80 × 59 × 33 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Disney", "Schloss", "Icons", "43222"],
  },
  {
    id: "bw-1043",
    slug: "eiffelturm-10307",
    name: "Eiffelturm",
    shortDescription:
      "Einer der höchsten LEGO-Sets ever: 10.001 Steine, fast 1,5 m hoch.",
    description:
      "Baue den Eiffelturm in 4 Segmenten mit Aussichtsplattformen und Esplanade. BrickWelt Demo in Anlehnung an Set 10307 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 629.99,
    pieces: 10001,
    age: "18+",
    stock: 5,
    rating: 4.7,
    reviewCount: 610,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#8B7355", "#C0C0C0", "#006CB7"],
    imageUrl: "/products/eiffelturm-10307.jpg",
    specs: [
      { label: "Steine", value: "10.001" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "10307" },
      { label: "Maße (gebaut)", value: "ca. 149 × 57 × 57 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Eiffelturm", "Paris", "Icons", "10307"],
  },
  {
    id: "bw-1044",
    slug: "titanic-10294",
    name: "Titanic",
    shortDescription:
      "Historischer Ozeanriese 1:200 – 9.090 Steine, über 135 cm lang.",
    description:
      "Detailliertes Titanic-Modell mit Querschnitt, Treppenhaus und drehenden Propellern. BrickWelt Demo in Anlehnung an Set 10294 – kein offizieller LEGO®-Shop.",
    category: "icons",
    price: 679.99,
    pieces: 9090,
    age: "18+",
    stock: 4,
    rating: 4.8,
    reviewCount: 980,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#111111", "#E8E8E8", "#006CB7"],
    imageUrl: "/products/titanic-10294.jpg",
    specs: [
      { label: "Steine", value: "9.090" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "10294" },
      { label: "Maße (gebaut)", value: "ca. 44 × 135 × 16 cm" },
      { label: "Thema", value: "Icons" },
    ],
    tags: ["Titanic", "Schiff", "Icons", "10294"],
  },
  {
    id: "bw-1045",
    slug: "millennium-falcon-75192",
    name: "Millennium Falcon",
    shortDescription:
      "Ultimativer Falcon mit 7.541 Steinen – Crew Classic & Sequel.",
    description:
      "Riesiger Millennium Falcon mit austauschbarer Crew, Dejarik und detailliertem Innenleben. BrickWelt Demo in Anlehnung an Set 75192 – kein offizieller LEGO®-Shop.",
    category: "star-wars",
    price: 849.99,
    pieces: 7541,
    age: "16+",
    stock: 3,
    rating: 4.9,
    reviewCount: 2100,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#6B7280", "#111111", "#FFD100"],
    imageUrl: "/products/millennium-falcon-75192.jpg",
    specs: [
      { label: "Steine", value: "7.541" },
      { label: "Alter", value: "16+" },
      { label: "Set-Nr.", value: "75192" },
      { label: "Maße (gebaut)", value: "ca. 21 × 84 × 60 cm" },
      { label: "Thema", value: "Star Wars" },
    ],
    tags: ["Star Wars", "Millennium Falcon", "75192"],
  },
  {
    id: "bw-1046",
    slug: "lamborghini-sian-42115",
    name: "Lamborghini Sián FKP 37",
    shortDescription:
      "Technic-Supercar 1:8 mit V12 und Flügeltüren – 3.696 Steine.",
    description:
      "Lamborghini Sián in Limettengrün: V12, 8-Gang, Allrad, Flügeltüren. BrickWelt Demo in Anlehnung an Set 42115 – kein offizieller LEGO®-Shop.",
    category: "technic",
    price: 449.99,
    originalPrice: 499.99,
    pieces: 3696,
    age: "18+",
    stock: 6,
    rating: 4.8,
    reviewCount: 740,
    isBestseller: true,
    isGiftIdea: true,
    isDeal: true,
    colors: ["#A8E010", "#111111", "#C9A227"],
    imageUrl: "/products/lamborghini-sian-42115.jpg",
    specs: [
      { label: "Steine", value: "3.696" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "42115" },
      { label: "Maße (gebaut)", value: "ca. 13 × 60 × 25 cm" },
      { label: "Thema", value: "Technic" },
    ],
    tags: ["Lamborghini", "Technic", "Supercar", "42115"],
  },
  {
    id: "bw-1047",
    slug: "ferrari-daytona-42143",
    name: "Ferrari Daytona SP3",
    shortDescription:
      "Roter Ferrari 1:8 mit V12 und Schmetterlingstüren – 3.778 Steine.",
    description:
      "Ferrari Daytona SP3 Ultimate Car: Lenkung, V12, 8-Gang, Targa-Dach. BrickWelt Demo in Anlehnung an Set 42143 – kein offizieller LEGO®-Shop.",
    category: "speed-champions",
    price: 449.99,
    pieces: 3778,
    age: "18+",
    stock: 5,
    rating: 4.9,
    reviewCount: 520,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E30613", "#111111", "#C0C0C0"],
    imageUrl: "/products/ferrari-daytona-42143.jpg",
    specs: [
      { label: "Steine", value: "3.778" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "42143" },
      { label: "Maße (gebaut)", value: "ca. 14 × 59 × 25 cm" },
      { label: "Thema", value: "Speed Champions" },
    ],
    tags: ["Ferrari", "Speed Champions", "42143"],
  },
  {
    id: "bw-1048",
    slug: "polizeistation-60316",
    name: "Polizeistation",
    shortDescription:
      "City-Polizeistation mit Hubschrauber und Streifenwagen – 668 Steine, ab 6.",
    description:
      "Dreistöckige Polizeistation, Gefängnis-Ausbruch, Hubschrauber und Müllwagen der Gauner. BrickWelt Demo in Anlehnung an Set 60316 – kein offizieller LEGO®-Shop.",
    category: "city",
    price: 64.99,
    originalPrice: 79.99,
    pieces: 668,
    age: "6+",
    stock: 22,
    rating: 4.6,
    reviewCount: 310,
    isNew: true,
    isGiftIdea: true,
    isDeal: true,
    colors: ["#006CB7", "#FFFFFF", "#111111"],
    imageUrl: "/products/polizeistation-60316.jpg",
    specs: [
      { label: "Steine", value: "668" },
      { label: "Alter", value: "6+" },
      { label: "Set-Nr.", value: "60316" },
      { label: "Maße (gebaut)", value: "ca. 27 × 28 × 24 cm" },
      { label: "Thema", value: "City" },
    ],
    tags: ["City", "Polizei", "60316"],
  },
  {
    id: "bw-1049",
    slug: "ninjago-city-gardens-71741",
    name: "NINJAGO City Gardens",
    shortDescription:
      "Fünf-Level-Ninja-Stadt mit 5.686 Steinen und 19 Figuren.",
    description:
      "NINJAGO City Gardens: Eisdiele, Nudelrestaurant, Kontrollraum und Museum. BrickWelt Demo in Anlehnung an Set 71741 – kein offizieller LEGO®-Shop.",
    category: "ninjago",
    price: 349.99,
    pieces: 5686,
    age: "14+",
    stock: 8,
    rating: 4.8,
    reviewCount: 650,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E30613", "#00A651", "#FFD100"],
    imageUrl: "/products/ninjago-city-gardens-71741.jpg",
    specs: [
      { label: "Steine", value: "5.686" },
      { label: "Alter", value: "14+" },
      { label: "Set-Nr.", value: "71741" },
      { label: "Maße (gebaut)", value: "ca. 74 × 41 × 31 cm" },
      { label: "Thema", value: "Ninjago" },
    ],
    tags: ["NINJAGO", "City", "71741"],
  },
  {
    id: "bw-1050",
    slug: "friends-restaurant-42655",
    name: "Friends Restaurant & Kochschule",
    shortDescription:
      "Zweistöckiges Restaurant mit Kochschule – 896 Steine, ab 8.",
    description:
      "Friends-Restaurant mit Küche, Terrasse, Scooter und 4 Mini-Dolls. BrickWelt Demo in Anlehnung an Set 42655 – kein offizieller LEGO®-Shop.",
    category: "friends",
    price: 79.99,
    pieces: 896,
    age: "8+",
    stock: 18,
    rating: 4.5,
    reviewCount: 90,
    isNew: true,
    isGiftIdea: true,
    colors: ["#E91E8C", "#7ED957", "#FFD100"],
    imageUrl: "/products/friends-restaurant-42655.jpg",
    specs: [
      { label: "Steine", value: "896" },
      { label: "Alter", value: "8+" },
      { label: "Set-Nr.", value: "42655" },
      { label: "Maße (gebaut)", value: "ca. 20 × 19 × 14 cm" },
      { label: "Thema", value: "Friends" },
    ],
    tags: ["Friends", "Restaurant", "42655"],
  },
  {
    id: "bw-1051",
    slug: "duplo-baumhaus-10993",
    name: "DUPLO Baumhaus 3-in-1",
    shortDescription:
      "Kreatives Baumhaus für Kleinkinder – 126 Teile, ab 3 Jahren.",
    description:
      "DUPLO 3-in-1 Baumhaus mit Rutsche, Garten und vielen Figuren. BrickWelt Demo in Anlehnung an Set 10993 – kein offizieller LEGO®-Shop.",
    category: "duplo",
    price: 89.99,
    originalPrice: 99.99,
    pieces: 126,
    age: "3+",
    stock: 25,
    rating: 4.7,
    reviewCount: 140,
    isNew: true,
    isGiftIdea: true,
    isDeal: true,
    colors: ["#00A651", "#E30613", "#FFD100"],
    imageUrl: "/products/duplo-baumhaus-10993.jpg",
    specs: [
      { label: "Steine", value: "126" },
      { label: "Alter", value: "3+" },
      { label: "Set-Nr.", value: "10993" },
      { label: "Maße (gebaut)", value: "ca. 43 × 54 × 22 cm" },
      { label: "Thema", value: "Duplo" },
    ],
    tags: ["Duplo", "Baumhaus", "10993"],
  },
  {
    id: "bw-1052",
    slug: "corvette-10321",
    name: "Corvette 1961",
    shortDescription:
      "Klassischer US-Roadster zum Ausstellen – 1.210 Steine, Hardtop oder Cabrio.",
    description:
      "Icons Corvette C1 mit öffnender Motorhaube, Lenkung und abnehmbarem Dach. BrickWelt Demo in Anlehnung an Set 10321 – kein offizieller LEGO®-Shop.",
    category: "speed-champions",
    price: 149.99,
    pieces: 1210,
    age: "18+",
    stock: 11,
    rating: 4.7,
    reviewCount: 280,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#E30613", "#111111", "#C0C0C0"],
    imageUrl: "/products/corvette-10321.jpg",
    specs: [
      { label: "Steine", value: "1.210" },
      { label: "Alter", value: "18+" },
      { label: "Set-Nr.", value: "10321" },
      { label: "Maße (gebaut)", value: "ca. 10 × 32 × 14 cm" },
      { label: "Thema", value: "Speed Champions" },
    ],
    tags: ["Corvette", "Auto", "10321"],
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
