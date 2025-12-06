import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b2d55',
          dark: '#07213f'
        },
        gold: '#c5a76a',
        stone: {
          light: '#f5f5f4',
          DEFAULT: '#e5e7eb',
          dark: '#6b7280'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans Pro"', 'Arial', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 6px 20px rgba(12, 26, 45, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
