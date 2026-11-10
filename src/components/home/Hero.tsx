import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { formatEUR } from "@/lib/format";

export function Hero() {
  const featured =
    getProductBySlug("hogwarts-schloss-71043") ??
    getProductBySlug("sagrada-familia-21065") ??
    getProductBySlug("disney-schloss-43222");

  return (
    <section className="relative overflow-hidden border-b border-black/5">
      <div className="absolute inset-0 bg-hero-mesh" />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8px 8px, rgba(17,17,17,0.07) 2px, transparent 2.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-bw relative grid items-center gap-8 py-10 lg:grid-cols-[0.85fr_1.25fr] lg:gap-8 lg:py-14 xl:gap-10">
        <div className="animate-fade-up z-10 lg:pr-4">
          <p className="mb-4 inline-flex items-center gap-2 rounded-xl bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brick-black shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brick-red" />
            BrickWelt · LEGO Sets kaufen
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brick-black text-balance sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
            Entdecke deine Welt aus{" "}
            <span className="relative inline-block">
              <span className="relative z-10">LEGO!</span>
              <span className="absolute bottom-1 left-0 right-0 -z-0 h-3 bg-brick-yellow/80 sm:h-4" />
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base text-brick-black/70 sm:text-lg">
            Premium Auswahl für Deutschland – von Schlössern bis Technic.
            Angebote entdecken, Wunschlisten füllen, in EUR shoppen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/produkte" className="btn-primary">
              Jetzt entdecken <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={featured ? `/produkte/${featured.slug}` : "/angebote"}
              className="btn-secondary"
            >
              {featured ? featured.name : "Angebote ansehen"}
            </Link>
          </div>
          <p className="disclaimer mt-6 max-w-md">
            Unabhängiger Demo-Shop – nicht verbunden mit oder autorisiert durch die LEGO
            Group.
          </p>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms] lg:-mr-2 xl:-mr-6">
          {featured?.imageUrl ? (
            <Link
              href={`/produkte/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] bg-[#14181f] shadow-[0_28px_70px_-24px_rgba(15,20,28,0.65)] ring-1 ring-black/15"
              aria-label={`${featured.name} – Details`}
            >
              {/* Soft ambient glow behind the white plate */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 55% at 50% 18%, rgba(255,255,255,0.08), transparent 60%)",
                }}
              />

              {/* White product plate (top ~75%) */}
              <div className="relative mx-3 mt-3 overflow-hidden rounded-[1.35rem] bg-white sm:mx-4 sm:mt-4 sm:rounded-[1.5rem]">
                <div className="relative aspect-[5/4] w-full sm:aspect-[4/3] lg:aspect-[5/4] xl:min-h-[26rem]">
                  <Image
                    src={featured.imageUrl}
                    alt={`${featured.name} – Featured bei BrickWelt`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain object-center p-3 transition duration-700 group-hover:scale-[1.03] sm:p-4 lg:p-5"
                  />
                </div>
                {/* Soft fade from white plate into dark frame */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-white/40 to-[#14181f] sm:h-20" />
              </div>

              {/* Dark caption band */}
              <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 px-5 pb-5 pt-3 sm:px-7 sm:pb-7 sm:pt-2">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F0C94A]">
                    Featured · Monumentales Set
                  </p>
                  <p className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {featured.name}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-white/75">
                    {featured.pieces.toLocaleString("de-DE")} Steine · ab {featured.age} ·{" "}
                    {formatEUR(featured.price)}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/12 px-4 py-2.5 text-sm font-bold text-white ring-1 ring-white/15 backdrop-blur-sm transition group-hover:bg-white/20">
                  Details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ) : (
            <div className="min-h-[28rem] rounded-[2rem] bg-brick-soft" />
          )}
        </div>
      </div>
    </section>
  );
}
