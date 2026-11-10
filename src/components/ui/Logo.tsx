import Link from "next/link";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="BrickWelt Startseite"
    >
      <svg
        width={compact ? 36 : 44}
        height={compact ? 36 : 44}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
        aria-hidden
      >
        <rect x="4" y="14" width="40" height="28" rx="4" fill="#E30613" />
        <rect x="8" y="8" width="10" height="8" rx="2" fill="#E30613" />
        <rect x="19" y="8" width="10" height="8" rx="2" fill="#FFD100" />
        <rect x="30" y="8" width="10" height="8" rx="2" fill="#006CB7" />
        <circle cx="13" cy="10" r="2.2" fill="#fff" fillOpacity="0.9" />
        <circle cx="24" cy="10" r="2.2" fill="#fff" fillOpacity="0.9" />
        <circle cx="35" cy="10" r="2.2" fill="#fff" fillOpacity="0.9" />
        <path
          d="M12 28h6v8h-6v-8zm9 0h6v8h-6v-8zm9 0h6v8h-6v-8z"
          fill="#111"
          fillOpacity="0.18"
        />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight text-brick-black sm:text-2xl">
        Brick<span className="text-brick-red">Welt</span>
      </span>
    </Link>
  );
}
