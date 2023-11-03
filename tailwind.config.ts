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
      colors: {
        white: "#ffffff",
        black: "#000000",
        green: "#04B90B",
        grey: "#777E90"
      },
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
