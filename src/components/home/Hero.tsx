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
        className="absolute inset-0 opacity-30"
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

        <div className="relative animate-fade-up [animation-delay:120ms] lg:-mr-4 xl:-mr-8">
          {featured?.imageUrl ? (
            <Link
              href={`/produkte/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_-28px_rgba(17,17,17,0.55)] ring-1 ring-black/10 sm:rounded-[2rem]"
              aria-label={`${featured.name} ansehen`}
            >
              {/* Atmospheric stage behind the castle */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 58%, #3a4a62 0%, #1a2230 55%, #0f141c 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 100%, rgba(211,166,37,0.22), transparent 55%)",
                }}
              />

              <div className="relative min-h-[22rem] w-full sm:min-h-[28rem] lg:min-h-[34rem] xl:min-h-[38rem]">
                <Image
                  src={featured.imageUrl}
                  alt={`${featured.name} – Featured bei BrickWelt`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-bottom p-2 transition duration-700 group-hover:scale-[1.04] sm:p-3 lg:p-4"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-5 pt-20 text-white sm:px-7 sm:pb-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brick-yellow">
                  Featured · Monumentales Set
                </p>
                <div className="mt-1 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl font-extrabold sm:text-3xl">
                      {featured.name}
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      {featured.pieces.toLocaleString("de-DE")} Steine · ab {featured.age} ·{" "}
                      {formatEUR(featured.price)}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-xl bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur transition group-hover:bg-white/25">
                    Details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
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
