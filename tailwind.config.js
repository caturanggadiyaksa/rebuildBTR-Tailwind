/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    
    extend: {
      colors: {
        dark: '#0f172a',
        primary: '#b91c1c',
      },
      screens: {
        'sm': '440px',
        // => @media (min-width: 640px) { ... }

        'md': '668px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1336px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
