import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        toggleRocketButton: {
          "0%": { right: "0rem" },
          "100%": { right: "5rem" },
        }
      },
      animation:{
        "fade-in-out": "fade 6s linear forwards",
        "toggle-rocket-button": "toggleRocketButton .2s linear forwards",
        "untoggle-rocket-button": "toggleRocketButton .2s linear reverse forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        'tech-card': 'repeat(auto-fill, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
