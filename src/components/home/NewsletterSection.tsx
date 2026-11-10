import { NewsletterForm } from "./NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="container-bw py-16">
      <div className="relative overflow-hidden rounded-3xl bg-brick-black px-6 py-12 text-white sm:px-12">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brick-red/40 blur-2xl" />
        <div className="absolute -bottom-16 left-20 h-48 w-48 rounded-full bg-brick-blue/40 blur-2xl" />
        <div className="relative max-w-xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Angebote zuerst erfahren
          </h2>
          <p className="mt-3 text-white/70">
            Newsletter für LEGO Angebote Deutschland – Demo-Anmeldung, keine echte
            Speicherung.
          </p>
          <div className="mt-6 [&_input]:text-brick-black">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
