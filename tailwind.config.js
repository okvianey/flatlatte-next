/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#FAF7F4',          // fondo crema
        'text-default': '#525252',
        'accent': '#4e4e4e',
        'accent-green': '#007b5e',
        'whatsapp': '#5edb9d',
        'espresso': '#5C4033'
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [],
}
