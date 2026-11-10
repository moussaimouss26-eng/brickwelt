export default function Loading() {
  return (
    <div className="container-bw py-20">
      <div className="h-8 w-48 animate-pulse rounded-lg bg-brick-soft" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] animate-pulse rounded-2xl bg-brick-soft" />
        ))}
      </div>
    </div>
  );
}
