/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          light: '#B9C59D',
          DEFAULT: '#708238',
          dark: '#4E5D26',
        },
        grape: '#7A3E65',
        wine: '#5C1E32',
      },
      backgroundImage: {
        'olive-lava': 'linear-gradient(-45deg, #708238, #B9C59D, #7A3E65, #5C1E32)',
      },
      animation: {
        lava: 'lavaMotion 15s ease infinite',
      },
      keyframes: {
        lavaMotion: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
