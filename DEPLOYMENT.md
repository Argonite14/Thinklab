# AI-THINKLABS Website Deployment Guide

## Overview
This is a Next.js 14 application configured for static export, designed to be hosted on GoDaddy (or any static hosting provider).

## Features
- **Home Page**: Hero section, features, capabilities, and CTA
- **About Page**: Company story, values, team, and stats
- **Contact Page**: Form with email acknowledgment using EmailJS
- **Design**: Warm, editorial aesthetic inspired by Claude/Anthropic
- **Responsive**: Mobile-first design with breakpoints

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- GoDaddy hosting account (or similar static hosting)

## Local Development

### 1. Install Dependencies
```bash
cd thinklabs
npm install
```

### 2. Configure EmailJS (for contact form)
1. Sign up at https://www.emailjs.com/
2. Create an Email Service:
   - Go to "Email Services" → "Add New Service"
   - Choose Gmail, Outlook, or another provider
   - Connect your email account
   - Copy the Service ID

3. Create Email Templates:
   
   **Template 1 - Contact Notification (sends to you):**
   ```
   Subject: New Contact Form Submission - {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   Phone: {{phone}}
   Company: {{company}}
   
   Message:
   {{message}}
   ```
   
   **Template 2 - Auto-Reply (sends to user):**
   ```
   Subject: Thank you for contacting AI-THINKLABS
   
   Hi {{to_name}},
   
   Thank you for reaching out to AI-THINKLABS. We've received your message and will get back to you within 24 hours.
   
   Best regards,
   The AI-THINKLABS Team
   ```

4. Update the credentials in `pages/contact/index.tsx`:
   - Replace `YOUR_SERVICE_ID` with your actual Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Contact template ID
   - Replace `YOUR_ACKNOWLEDGMENT_TEMPLATE_ID` with your Auto-Reply template ID
   - Replace `YOUR_PUBLIC_KEY` with your Public Key (found in Account → API Keys)

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## Building for Production

### 1. Build the Static Export
```bash
npm run build
```

This creates a `dist/` folder with the static HTML, CSS, and JavaScript files.

### 2. Verify the Build
The `dist/` folder should contain:
- `index.html` (Home page)
- `about/index.html` (About page)
- `contact/index.html` (Contact page)
- `_next/` folder (CSS, JS, and other assets)

## Deploying to GoDaddy

### Method 1: File Manager (Recommended for Beginners)

1. **Prepare Files:**
   - Ensure your build completed successfully
   - The `dist/` folder contains all necessary files

2. **Upload via GoDaddy File Manager:**
   - Log in to your GoDaddy account
   - Go to "My Products" → "Web Hosting" → "Manage"
   - Open "File Manager"
   - Navigate to `public_html/` (or your domain root)
   - Delete existing files (backup first if needed)
   - Upload all files from the `dist/` folder

3. **Important Notes:**
   - Upload the *contents* of the `dist/` folder, not the folder itself
   - Ensure `index.html` is in the root directory
   - Preserve the `_next/` folder structure

### Method 2: FTP/SFTP

1. **Get FTP Credentials:**
   - In GoDaddy hosting panel, find "FTP Users" or "SFTP"
   - Create or note your FTP username and password
   - Note the FTP hostname (usually something like `ftp.yourdomain.com`)

2. **Upload Using an FTP Client (FileZilla, Cyberduck):**
   ```
   Host: ftp.yourdomain.com (or SFTP if available)
   Username: your-ftp-username
   Password: your-ftp-password
   Port: 21 (FTP) or 22 (SFTP)
   ```

3. **Upload:**
   - Connect to your server
   - Navigate to `public_html/` or root directory
   - Upload all contents from `dist/` folder

### Method 3: Git Integration (If Available)

Some GoDaddy plans support Git deployment. Check your hosting plan features.

## Post-Deployment Checklist

- [ ] Home page loads correctly
- [ ] Navigation works (click all links)
- [ ] About page displays correctly
- [ ] Contact form submits (test with EmailJS configured)
- [ ] Auto-reply email is received
- [ ] Mobile responsiveness works
- [ ] No 404 errors in browser console

## Troubleshooting

### 404 Errors on Page Refresh
Add this `.htaccess` file to your `public/` folder (copied to `dist/` on build):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Or for Next.js static export, add to `next.config.js`:
```javascript
trailingSlash: true,
```

This is already configured in this project.

### Contact Form Not Working
1. Check browser console for errors
2. Verify EmailJS credentials are correct
3. Ensure EmailJS service is connected to your email
4. Test with browser's Network tab to see API responses

### Styles Not Loading
1. Check that `_next/` folder was uploaded correctly
2. Verify file permissions (644 for files, 755 for directories)
3. Clear browser cache

### Images Not Loading
- Ensure all images are in `public/` folder
- Use relative paths: `/images/logo.png`

## Custom Domain Setup (GoDaddy)

1. **Point Domain to Hosting:**
   - In GoDaddy Domain Manager, ensure domain points to your hosting
   - Or update nameservers if using external DNS

2. **SSL/HTTPS:**
   - GoDaddy typically provides free SSL
   - Enable in hosting panel under "SSL/TLS"

## Updating the Website

1. Make changes locally
2. Test with `npm run dev`
3. Rebuild with `npm run build`
4. Re-upload `dist/` contents to GoDaddy

## Customization

### Colors
Edit `tailwind.config.js` to update the color palette.

### Content
Edit pages in `pages/` directory:
- `pages/index.tsx` - Home page
- `pages/about/index.tsx` - About page
- `pages/contact/index.tsx` - Contact page

### Images
Add images to `public/images/` and reference with `/images/your-image.jpg`

## Support

For issues with:
- **Next.js**: https://nextjs.org/docs
- **EmailJS**: https://www.emailjs.com/docs/
- **GoDaddy Hosting**: https://www.godaddy.com/help
- **Tailwind CSS**: https://tailwindcss.com/docs

## Project Structure

```
thinklabs/
├── components/          # React components
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── Navigation.tsx
├── lib/                 # Utilities
│   └── emailjs.ts
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── about/
│   │   └── index.tsx   # About page
│   ├── contact/
│   │   └── index.tsx   # Contact page
│   └── index.tsx       # Home page
├── styles/
│   └── globals.css     # Global styles
├── .gitignore
├── DEPLOYMENT.md       # This file
├── next.config.js      # Next.js config
├── package.json
├── postcss.config.js
├── tailwind.config.js  # Tailwind config
└── tsconfig.json
```
