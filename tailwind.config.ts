import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        green: {
          400: '#4ade80', // Explicitly set green-400
        }
      }
    }
  },
  plugins: []
}
export default config