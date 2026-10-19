/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070c',
          dark: '#080c14',
          surface: '#0d131f',
          surfaceHover: '#141c2e',
          border: '#1f293d',
          borderActive: '#00ffaa',
          emerald: '#10b981',
          green: '#00ff88',
          cyan: '#00e5ff',
          neon: '#00f0ff',
          amber: '#ffaa00',
          violet: '#a855f7',
          pink: '#ff007f',
          textMuted: '#94a3b8',
          textPrimary: '#f8fafc',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"DM Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyber-neon': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'cyber-green': '0 0 25px -5px rgba(0, 255, 136, 0.35)',
        'cyber-violet': '0 0 25px -5px rgba(168, 85, 247, 0.35)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
