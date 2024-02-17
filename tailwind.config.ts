import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      backgroundImage: {
        'category-item-gradient': 'linear-gradient(45deg, #5033C3 0%, rgba(80, 51, 195, 0.20) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
