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
        'neu-base': '#1a1a1a',
        'neu-light': '#2a2a2a',
        'neu-dark': '#0a0a0a',
        'neu-green': '#4CAF50',
      },
      boxShadow: {
        'neumorphic': '5px 5px 10px #0a0a0a, -5px -5px 10px #2a2a2a',
        'neumorphic-inset': 'inset 2px 2px 5px #0a0a0a, inset -2px -2px 5px #2a2a2a',
        'neumorphic-sm': '3px 3px 6px #0a0a0a, -3px -3px 6px #2a2a2a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
