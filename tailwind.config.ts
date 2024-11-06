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
        primary: "#2D9F9F",
      },
    },
    backgroundImage: {
      "dot-blur": "radial-gradient(closest-side, #2d9f9f35, transparent)",
    },
  },
  plugins: [],
};
export default config;
