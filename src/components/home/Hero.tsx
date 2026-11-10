import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5">
      <div className="absolute inset-0 bg-hero-mesh" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 8px 8px, rgba(17,17,17,0.07) 2px, transparent 2.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-bw relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-xl bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brick-black shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brick-red" />
            BrickWelt · LEGO Sets kaufen
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brick-black text-balance sm:text-5xl lg:text-6xl">
            Entdecke deine Welt aus{" "}
            <span className="relative inline-block">
              <span className="relative z-10">LEGO!</span>
              <span className="absolute bottom-1 left-0 right-0 -z-0 h-3 bg-brick-yellow/80 sm:h-4" />
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-brick-black/70 sm:text-lg">
            Premium Auswahl an Sets für Deutschland – von Technic bis City.
            Angebote entdecken, Wunschlisten füllen, in EUR shoppen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/produkte" className="btn-primary">
              Jetzt entdecken <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/angebote" className="btn-secondary">
              Angebote ansehen
            </Link>
          </div>
          <p className="disclaimer mt-6 max-w-md">
            Unabhängiger Demo-Shop – nicht verbunden mit oder autorisiert durch die LEGO
            Group.
          </p>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square max-w-md lg:max-w-none">
            <svg
              viewBox="0 0 480 480"
              className="h-full w-full drop-shadow-2xl"
              role="img"
              aria-label="BrickWelt Hero Illustration mit bunten LEGO-ähnlichen Steinen"
            >
              <defs>
                <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#F0F4F8" />
                </linearGradient>
              </defs>
              <rect width="480" height="480" rx="40" fill="url(#heroBg)" />
              {/* Large red brick */}
              <g className="origin-center animate-stud-pop">
                <rect x="80" y="220" width="220" height="100" rx="14" fill="#E30613" />
                <circle cx="130" cy="250" r="18" fill="rgba(255,255,255,0.35)" />
                <circle cx="190" cy="250" r="18" fill="rgba(255,255,255,0.35)" />
                <circle cx="250" cy="250" r="18" fill="rgba(255,255,255,0.35)" />
              </g>
              {/* Yellow brick */}
              <g>
                <rect x="200" y="130" width="160" height="90" rx="14" fill="#FFD100" />
                <circle cx="240" cy="158" r="16" fill="rgba(255,255,255,0.45)" />
                <circle cx="300" cy="158" r="16" fill="rgba(255,255,255,0.45)" />
              </g>
              {/* Blue brick */}
              <g>
                <rect x="280" y="240" width="120" height="90" rx="14" fill="#006CB7" />
                <circle cx="320" cy="268" r="16" fill="rgba(255,255,255,0.4)" />
                <circle cx="360" cy="268" r="16" fill="rgba(255,255,255,0.4)" />
              </g>
              {/* Small black accent */}
              <rect x="100" y="150" width="70" height="55" rx="10" fill="#111" />
              <circle cx="122" cy="168" r="10" fill="rgba(255,255,255,0.25)" />
              <circle cx="148" cy="168" r="10" fill="rgba(255,255,255,0.25)" />
              <text
                x="240"
                y="400"
                textAnchor="middle"
                fill="#111"
                fillOpacity="0.35"
                fontSize="14"
                fontFamily="system-ui"
              >
                BrickWelt Illustration
              </text>
            </svg>
            <div className="absolute -bottom-3 -left-2 rounded-2xl bg-white px-4 py-3 shadow-brick sm:left-4">
              <p className="text-xs font-bold uppercase tracking-wide text-brick-black/50">
                Versand DE
              </p>
              <p className="font-display text-sm font-bold">Kostenlos ab 49 €</p>
            </div>
            <div className="absolute -right-2 top-8 rounded-2xl bg-brick-yellow px-4 py-3 shadow-brick sm:right-6">
              <p className="text-xs font-bold uppercase tracking-wide">Angebote</p>
              <p className="font-display text-sm font-bold">Bis −20%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
