import Image from "next/image";
import type { Product } from "@/lib/types";

interface ProductArtProps {
  product: Product;
  className?: string;
  priority?: boolean;
}

/** Product photo when available; otherwise decorative SVG brick-art placeholder. */
export function ProductArt({ product, className = "", priority = false }: ProductArtProps) {
  const title = `${product.name} – Demo-Produktbild BrickWelt`;

  if (product.imageUrl) {
    return (
      <div className={`relative overflow-hidden bg-brick-soft ${className}`}>
        <Image
          src={product.imageUrl}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brick-black/50 shadow-sm">
          Demo-Foto · BrickWelt
        </span>
      </div>
    );
  }

  const [c1, c2, c3] = product.colors;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`g-${product.id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FAFAF8" />
          <stop offset="100%" stopColor="#E8EEF5" />
        </linearGradient>
        <pattern
          id={`studs-${product.id}`}
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="14" cy="14" r="3" fill="rgba(17,17,17,0.05)" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#g-${product.id})`} />
      <rect width="400" height="400" fill={`url(#studs-${product.id})`} />

      {/* Base plate */}
      <rect x="70" y="260" width="260" height="48" rx="8" fill={c1} />
      <circle cx="110" cy="284" r="10" fill="rgba(255,255,255,0.35)" />
      <circle cx="160" cy="284" r="10" fill="rgba(255,255,255,0.35)" />
      <circle cx="210" cy="284" r="10" fill="rgba(255,255,255,0.35)" />
      <circle cx="260" cy="284" r="10" fill="rgba(255,255,255,0.35)" />
      <circle cx="310" cy="284" r="10" fill="rgba(255,255,255,0.35)" />

      {/* Mid brick stack */}
      <rect x="110" y="190" width="180" height="70" rx="8" fill={c2} />
      <circle cx="145" cy="210" r="11" fill="rgba(255,255,255,0.4)" />
      <circle cx="200" cy="210" r="11" fill="rgba(255,255,255,0.4)" />
      <circle cx="255" cy="210" r="11" fill="rgba(255,255,255,0.4)" />

      {/* Top brick */}
      <rect x="145" y="120" width="110" height="70" rx="8" fill={c3} />
      <circle cx="175" cy="140" r="11" fill="rgba(255,255,255,0.45)" />
      <circle cx="225" cy="140" r="11" fill="rgba(255,255,255,0.45)" />

      {/* Accent studs */}
      <rect x="40" y="80" width="44" height="36" rx="6" fill={c1} opacity="0.85" />
      <circle cx="52" cy="90" r="6" fill="rgba(255,255,255,0.4)" />
      <circle cx="72" cy="90" r="6" fill="rgba(255,255,255,0.4)" />

      <rect x="316" y="70" width="44" height="36" rx="6" fill={c2} opacity="0.9" />
      <circle cx="328" cy="80" r="6" fill="rgba(255,255,255,0.4)" />
      <circle cx="348" cy="80" r="6" fill="rgba(255,255,255,0.4)" />

      <text
        x="200"
        y="350"
        textAnchor="middle"
        fill="#111"
        fillOpacity="0.45"
        fontSize="12"
        fontFamily="system-ui,sans-serif"
      >
        Demo-Illustration · BrickWelt
      </text>
    </svg>
  );
}
