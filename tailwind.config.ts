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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-home': 'linear-gradient(to right, #ff5858, #f857a6);',
        'gradient-account': 'linear-gradient(to top, #ebf4f5, #e3e3e3);',
      },
      dropShadow: {
        '3xl': '2px 4px 6px rgb(0 0 0)',
      },
    },
  },
  plugins: [],
}
export default config
