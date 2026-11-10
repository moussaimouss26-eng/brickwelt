import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brick: {
          red: "#E30613",
          yellow: "#FFD100",
          blue: "#006CB7",
          black: "#111111",
          cream: "#FAFAF8",
          soft: "#F3F6FA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brick: "0 12px 40px -18px rgba(17, 17, 17, 0.35)",
        lift: "0 18px 50px -20px rgba(227, 6, 19, 0.35)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(255,209,0,0.35), transparent), radial-gradient(ellipse 70% 50% at 80% 10%, rgba(0,108,183,0.22), transparent), radial-gradient(ellipse 60% 40% at 60% 80%, rgba(227,6,19,0.12), transparent)",
        studs:
          "radial-gradient(circle at 8px 8px, rgba(17,17,17,0.06) 2px, transparent 2.5px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "stud-pop": {
          "0%": { transform: "scale(0.92)" },
          "60%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "stud-pop": "stud-pop 0.45s ease-out both",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
