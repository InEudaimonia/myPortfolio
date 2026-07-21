import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
        dmSans: ['dmSans', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
