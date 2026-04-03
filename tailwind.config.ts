import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdfbd4",
        beige: "#ede8d0",
        primary: "#00674f",
        "primary-dim": "#005040",
        forest: "#2d6a4f",
        sage: "#87a878",
        ink: "#1a1a0e",
        charcoal: "#2c2c1e",
        muted: "#6b6b4e",
        "warm-gray": "#c4bfa8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "Courier New", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.85" }],
        "11xl": ["12rem", { lineHeight: "0.85" }],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(3deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(circle, #1a1a0e22 1px, transparent 1px)",
        "line-pattern":
          "repeating-linear-gradient(90deg, #1a1a0e08 0px, #1a1a0e08 1px, transparent 1px, transparent 60px)",
      },
      backgroundSize: {
        dots: "28px 28px",
      },
      boxShadow: {
        "green-glow": "0 0 40px rgba(0, 103, 79, 0.35)",
        "ink-hard": "4px 4px 0px #1a1a0e",
        "ink-hard-lg": "6px 6px 0px #1a1a0e",
      },
      fontWeight: {
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
};

export default config;
