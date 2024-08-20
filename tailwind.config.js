/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)', opacity: '1' },
          '30%': { opacity: '0.75' }, // Fully visible until 75% of the animation
          '75%': { opacity: '0.5' }, // Start fading out
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)', opacity: '1' },
          // '55%': { opacity: '1' }, // Fully visible until 75% of the animation
          // '75%': { opacity: '0.5' }, // Start fading out
          // '10%': { opacity: '0.5' }, // Start fading in
          // '25%': { opacity: '1' }, // Fully visible by 25%
          '100%': { transform: 'translateX(0%)', opacity: '1' }
        }
      },
      fontFamily: { 'league-spartan': ['"League Spartan"', 'sans-serif'] },
      colors: {
        background: '#FEFEFF',
        primary: '#DEEBF6',
        secondary: '#F4F4F4',
        text: '#020203'
      }
    }
  },
  plugins: []
}
