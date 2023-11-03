import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {},
      fontFamily: {
        alice: ['Alice', 'serif'],
        pp: ['Poppins', 'sans-serif'],
      },
      animation: {}
    },
  },
  plugins: [],
}
export default config
