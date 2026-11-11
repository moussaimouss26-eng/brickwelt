import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-bw py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-brick-red">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">Seite nicht gefunden</h1>
      <p className="mt-2 text-brick-black/60">
        Diese Seite konnte nicht gefunden werden.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-flex">
        Zur Startseite
      </Link>
    </div>
  );
}
