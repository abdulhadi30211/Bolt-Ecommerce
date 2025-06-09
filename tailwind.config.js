/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 💎 Premium Luxury Violet Theme
        'bg-primary': '#1E1B2E',      // Deep violet background
        'text-primary': '#EDE9FE',    // Soft violet text
        'heading': '#D6BBFB',         // Light lavender/violet
        'cta': '#7C3AED',             // Rich violet (Call-to-action)
        'cta-text': '#FFFFFF',        // White text on CTA
        'border': '#3F3A60',          // Subtle violet border
        'highlight': '#FACC15',       // Premium gold highlight
      },
    },
  },
  plugins: [],
};
