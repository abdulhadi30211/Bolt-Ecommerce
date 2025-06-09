/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'bg-primary': '#f2efe8',
        'text-primary': '#1c1c1c',
        'heading': '#2d3a4a',
        'cta': '#2e4f46',
        'cta-text': '#f2efe8',
        'border': '#c8a96b',
        'highlight': '#e3c9c0',
      },
    },
  },
  plugins: [],
};