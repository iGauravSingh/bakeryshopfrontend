/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Libre Caslon Text', 'serif'],
        qoute: ['Qwitcher Grypen', 'cursive'],
        goodv: ['Great Vibes', 'cursive'],
        greatvibe: ['var(--font-greatvibe)']
      }
    },
  },
  plugins: [],
}
