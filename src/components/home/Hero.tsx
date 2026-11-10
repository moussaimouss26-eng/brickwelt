import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getProductBySlug } from "@/data/products";

export function Hero() {
  const featured =
    getProductBySlug("hogwarts-schloss-71043") ??
    getProductBySlug("sagrada-familia-21065") ??
    getProductBySlug("disney-schloss-43222");

  return (
    <section className="relative overflow-hidden border-b border-black/5">
      <div className="absolute inset-0 bg-hero-mesh" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8px 8px, rgba(17,17,17,0.07) 2px, transparent 2.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-bw relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
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

        <div className="relative animate-fade-up [animation-delay:120ms]">
          {featured?.imageUrl ? (
            <Link
              href={`/produkte/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-brick"
            >
              <div className="relative aspect-square w-full bg-brick-soft">
                <Image
                  src={featured.imageUrl}
                  alt={`${featured.name} – Featured bei BrickWelt`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6 transition duration-500 group-hover:scale-105 sm:p-8"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 pb-5 pt-16 text-white">
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">
                  Featured Set
                </p>
                <p className="font-display text-xl font-extrabold sm:text-2xl">
                  {featured.name}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {featured.pieces.toLocaleString("de-DE")} Steine · ab {featured.age}
                </p>
              </div>
            </Link>
          ) : (
            <div className="aspect-square rounded-[2rem] bg-brick-soft" />
          )}
        </div>
      </div>
    </section>
  );
}
