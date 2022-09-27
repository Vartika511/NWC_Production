/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',

  

      },
      fontfamily: {
          lora: "'Lora', serif",
          playfair: "'Playfair Display', serif",
          libe: "'Libre Baskerville', serif",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        beat: 'beat 1s ease-out infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.15)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};