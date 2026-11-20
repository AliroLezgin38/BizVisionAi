import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      colors: {
        navy: { DEFAULT: "#111A36", soft: "#1E2A52" },
        brand: { DEFAULT: "#4361EE", 50: "#EEF1FE" },
        ink: "#141B34",
        muted: "#6B7385",
        surface: "#F6F7FB",
        line: "#E8EAF2",
        ai: { DEFAULT: "#F4F1FD", text: "#6D4AE0", line: "#E6DFFA" },
      },
      boxShadow: { card: "0 1px 2px rgba(17,26,54,.04)" },
    },
  },
  plugins: [],
} satisfies Config;
