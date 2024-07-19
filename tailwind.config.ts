import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

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
        'neu-light-green': 'hsl(160,90%,55%)',
        'neu-yellow': '#b7821c',
      },
      boxShadow: {
        'neumorphic': '5px 5px 10px #0a0a0a, -5px -2px 10px #2a2a2a',
        'neumorphic-inset': 'inset 2px 2px 5px #0a0a0a, inset -2px -2px 5px #2a2a2a',
        'neumorphic-sm': '3px 3px 6px #0a0a0a, -3px -3px 6px #2a2a2a',
        'neumorphic-text': '1px 1px 1px #0a0a0a, -1px -1px 1px #2a2a2a',
      },
      textShadow: {
				'neu-text-raised': '2px 2px 3px #000000, -2px -2px 3px #3a3a3a, 0 0 5px rgba(183, 130, 28, 0.5)',
				'neu-text-pressed': '-2px -2px 3px #000000, 2px 2px 3px #3a3a3a, 0 0 5px rgba(183, 130, 28, 0.5)',
			},
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      translate: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {
        '.text-neu-text-raised': {
          textShadow: theme('textShadow.neu-text-raised') as string,
        },
        '.text-neu-text-pressed': {
          textShadow: theme('textShadow.neu-text-pressed') as string,
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;