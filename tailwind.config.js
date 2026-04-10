/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'near-black': '#141413',
        'terracotta': '#c96442',
        'coral': '#d97757',

        // Secondary & Accent
        'error-crimson': '#b53333',
        'focus-blue': '#3898ec',

        // Surface & Background
        'parchment': '#f5f4ed',
        'ivory': '#faf9f5',
        'warm-sand': '#e8e6dc',
        'dark-surface': '#30302e',
        'deep-dark': '#141413',

        // Neutrals & Text
        'charcoal-warm': '#4d4c48',
        'olive-gray': '#5e5d59',
        'stone-gray': '#87867f',
        'dark-warm': '#3d3d3a',
        'warm-silver': '#b0aea5',

        // Semantic & Accent
        'border-cream': '#f0eee6',
        'border-warm': '#e8e6dc',
        'border-dark': '#30302e',
        'ring-warm': '#d1cfc5',
        'ring-subtle': '#dedc01',
        'ring-deep': '#c2c0b6',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.10', fontWeight: '500' }],
        'section': ['3.25rem', { lineHeight: '1.20', fontWeight: '500' }],
        'sub-lg': ['2.3rem', { lineHeight: '1.30', fontWeight: '500' }],
        'sub': ['2rem', { lineHeight: '1.10', fontWeight: '500' }],
        'sub-sm': ['1.6rem', { lineHeight: '1.20', fontWeight: '500' }],
        'feature': ['1.3rem', { lineHeight: '1.20', fontWeight: '500' }],
        'body-serif': ['1.06rem', { lineHeight: '1.60', fontWeight: '400' }],
        'body-lg': ['1.25rem', { lineHeight: '1.60', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.60', fontWeight: '400' }],
        'body-sm': ['0.94rem', { lineHeight: '1.60', fontWeight: '400' }],
        'caption': ['0.88rem', { lineHeight: '1.43', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.25', fontWeight: '400', letterSpacing: '0.12px' }],
        'overline': ['0.63rem', { lineHeight: '1.60', fontWeight: '400', letterSpacing: '0.5px' }],
        'micro': ['0.6rem', { lineHeight: '1.60', fontWeight: '400', letterSpacing: '0.096px' }],
      },
      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
      },
      borderRadius: {
        'sm': '4px',
        'button': '8px',
        'input': '12px',
        'card': '16px',
        'tag': '24px',
        'media': '32px',
      },
      boxShadow: {
        'whisper': 'rgba(0,0,0,0.05) 0px 4px 24px',
        'ring-warm': '0px 0px 0px 1px #d1cfc5',
        'ring-subtle': '0px 0px 0px 1px #dedc01',
        'ring-deep': '0px 0px 0px 1px #c2c0b6',
        'ring-terracotta': '0px 0px 0px 1px #c96442',
      },
    },
  },
  plugins: [],
}
