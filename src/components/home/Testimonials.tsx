import { Star } from "lucide-react";
import { demoTestimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-brick-soft py-16">
      <div className="container-bw">
        <h2 className="section-title">Was Kund:innen sagen</h2>
        <p className="section-sub">
          Platzhalter-Feedback zu Demo-Zwecken – keine echten Kundenstimmen.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {demoTestimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5" aria-label={`${t.rating} von 5 Sternen`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "fill-brick-yellow text-brick-yellow"
                        : "text-black/15"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-brick-black/80">{t.quote}</p>
              <footer className="mt-4 text-xs font-bold uppercase tracking-wide text-brick-black/45">
                {t.label}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
