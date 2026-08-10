/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './**/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Design System: The Joyful Archivist Palette
        // ----------------------------------------------------
        // Base surfaces and background
        'background': '#fbf9f8',
        'surface': '#fbf9f8',
        'surface-bright': '#fbf9f8',
        'surface-dim': '#dcd9d9',
        
        // Tonal containers for modular depth (No-Line separation)
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f6f3f2',
        'surface-container': '#f0eded',
        'surface-container-high': '#eae8e7',
        'surface-container-highest': '#e4e2e1',
        'surface-variant': '#e4e2e1',
        
        // Brand & Accents (High-energy berries)
        'primary': '#b10048',
        'primary-container': '#df005d',
        'primary-fixed': '#ffd9de',
        'primary-fixed-dim': '#ffb2bf',
        'inverse-primary': '#ffb2bf',
        'surface-tint': '#bc004d',
        
        // Secondary Accents (Warm brick-reds)
        'secondary': '#bb001b',
        'secondary-container': '#e02830',
        'secondary-fixed': '#ffdad7',
        'secondary-fixed-dim': '#ffb3ad',
        
        // Tertiary Accents (Deep plums and soft fixed-rose for chips)
        'tertiary': '#ad1054',
        'tertiary-container': '#cf316c',
        'tertiary-fixed': '#ffd9e0',
        'tertiary-fixed-dim': '#ffb1c3',
        
        // Outlines and structure (for high contrast / accessibility)
        'outline': '#906f73',
        'outline-variant': '#e4bdc2',
        
        // Text & Content Contrast
        'on-background': '#1b1c1c',
        'on-surface': '#1b1c1c',
        'on-surface-variant': '#5c3f44',
        'inverse-on-surface': '#f3f0f0',
        'on-primary': '#ffffff',
        'on-primary-container': '#fff4f4',
        'on-primary-fixed': '#3f0015',
        'on-primary-fixed-variant': '#900039',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#fffbff',
        'on-secondary-fixed': '#410004',
        'on-secondary-fixed-variant': '#930013',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#fff5f5',
        'on-tertiary-fixed': '#3f0019',
        'on-tertiary-fixed-variant': '#8f0042',
        
        // Feedback & Validation States
        'error': '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
      },
      borderRadius: {
        // Playful, friendly, and organic rounded geometry
        'DEFAULT': '1rem',      // 16px
        'md': '1.5rem',         // 24px
        'lg': '2rem',           // 32px
        'xl': '3rem',           // 48px
        'full': '9999px',       // Pill / River-stone shape
      },
      fontFamily: {
        // High-contrast, poster-like typography scale
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Lexend"', 'sans-serif'],
        label: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        // Ambient soft shadows tinted with on_surface to prevent visual noise
        'soft': '0 18px 60px -34px rgba(27, 28, 28, 0.26)',
        'rose': '0 22px 60px -28px rgba(223, 0, 93, 0.36)',
        'ambient-diffused': '0 40px 80px -24px rgba(27, 28, 28, 0.06)',
      },
      animation: {
        // Micro-animations for dynamic feedback
        'reveal': 'reveal 0.42s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.015)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
    },
  },
  plugins: [],
}
