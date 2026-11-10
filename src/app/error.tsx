"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-bw py-24 text-center">
      <h1 className="font-display text-2xl font-bold">Etwas ist schiefgelaufen</h1>
      <p className="mt-2 text-brick-black/60">Bitte versuche es erneut.</p>
      <button type="button" className="btn-primary mt-8" onClick={reset}>
        Nochmal laden
      </button>
    </div>
  );
}
