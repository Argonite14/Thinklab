# AI-THINKLABS Website

A modern, responsive website for AI-THINKLABS built with Next.js, TypeScript, and Tailwind CSS.

## Design Philosophy

This website draws inspiration from:
- **Claude (Anthropic)**: Warm, editorial aesthetic with parchment tones and serif typography
- **Apple**: Clean, spacious layouts with premium feel
- **Notion**: Thoughtful information architecture and user experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom warm color palette
- **Form Handling**: React Hook Form
- **Email**: EmailJS (client-side, no server required)
- **Icons**: Lucide React

## Pages

### Home (`/`)
- Hero section with value proposition
- Core features showcase
- Dark-themed capabilities section
- Call-to-action

### About (`/about/`)
- Company story and timeline
- Values and mission
- Team members
- Statistics

### Contact (`/contact/`)
- Contact form with validation
- Auto-reply email acknowledgment
- Office hours and location info
- Alternative contact methods

## Design System

### Colors
- **Primary**: Terracotta (`#c96442`) - warm brand accent
- **Background**: Parchment (`#f5f4ed`) - warm cream
- **Text**: Near Black (`#141413`) - warm dark
- **Neutrals**: Olive Gray, Stone Gray - warm-toned grays

### Typography
- **Headlines**: Georgia (serif) - editorial feel
- **Body**: System UI sans-serif - clean readability
- **Mono**: System monospace - for code/timeline

### Components
- **Buttons**: Rounded corners, ring shadows, warm colors
- **Cards**: Ivory background, cream borders, subtle shadows
- **Inputs**: Generous padding, rounded corners, warm focus states

## Getting Started

### Installation

```bash
# Navigate to project directory
cd thinklabs

# Install dependencies
npm install
```

### Environment Setup

No environment variables required for basic setup. For email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Configure credentials in `pages/contact/index.tsx`

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build for production
npm run build

# Output is in dist/ folder
```

## Deployment (GoDaddy)

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to GoDaddy `public_html/`
3. The `.htaccess` file in `public/` handles routing

See `DEPLOYMENT.md` for detailed instructions.

## Project Structure

```
thinklabs/
├── components/        # Reusable React components
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── Navigation.tsx
├── lib/             # Utilities and configs
│   └── emailjs.ts
├── pages/           # Next.js pages (routes)
│   ├── _app.tsx
│   ├── about/
│   ├── contact/
│   └── index.tsx
├── public/          # Static assets + .htaccess
├── styles/          # Global CSS
├── tailwind.config.js
└── next.config.js   # Static export config
```

## Customization

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'terracotta': '#c96442',
  'parchment': '#f5f4ed',
  // ... etc
}
```

### Adding Pages

1. Create folder in `pages/` (e.g., `pages/services/`)
2. Add `index.tsx` with your page component
3. Link from Navigation component

### Updating Contact Email

Edit `pages/contact/index.tsx` and update EmailJS credentials or replace with your own email service.

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Static HTML export - no server required
- Optimized images via Next.js Image component
- GZIP compression via .htaccess
- Cached static assets

## License

Private - AI-THINKLABS

## Credits

Design inspired by:
- [Claude](https://claude.ai) - Anthropic
- [Notion](https://notion.so)
- Apple Human Interface Guidelines
