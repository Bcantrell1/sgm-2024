import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
    darkMode: ["class"],
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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			neumorphic: '5px 5px 10px #0a0a0a, -5px -2px 10px #2a2a2a',
  			'neumorphic-inset': 'inset 2px 2px 5px #0a0a0a, inset -2px -2px 5px #2a2a2a',
  			'neumorphic-sm': '3px 3px 6px #0a0a0a, -3px -3px 6px #2a2a2a',
  			'neumorphic-text': '1px 1px 1px #0a0a0a, -1px -1px 1px #2a2a2a'
  		},
  		textShadow: {
  			'neu-text-raised': '2px 2px 3px #000000, -2px -2px 3px #3a3a3a, 0 0 5px rgba(183, 130, 28, 0.5)',
  			'neu-text-pressed': '-2px -2px 3px #000000, 2px 2px 3px #3a3a3a, 0 0 5px rgba(183, 130, 28, 0.5)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
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
      require("tailwindcss-animate")
],
};

export default config;