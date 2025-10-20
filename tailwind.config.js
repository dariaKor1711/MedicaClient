/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        // Medica colors from Figma
        primary: {
          DEFAULT: '#2461FF',
          foreground: '#FFFFFF',
        },
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          90: '#D0F4FD',
          92: '#E9E9EB',
          96: '#F5F5F7',
        },
        azure: {
          57: '#2461FF',
          74: '#B4B9C6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1440px',
        },
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}


