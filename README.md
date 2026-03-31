# Bryl Studio - Wix Specialist Portfolio

Professional portfolio website for Bryl Studio, a Wix specialist with 5+ years experience and 1000+ sites built.

## Features

- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Dark Theme**: Black background with green accents (#4ade80)
- **Performance Optimized**: Fast load times, clean code
- **SEO Ready**: Semantic HTML, meta tags included
- **Conversion Focused**: Clear CTAs, proof-based messaging

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **CSS-in-JS** - Inline styles (no external CSS files)

## Installation & Setup

1. Clone this repository
   ```bash
   git clone https://github.com/bryllemontesclaros/bryl-studio.git
   cd bryl-studio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run development server
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

4. Build for production
   ```bash
   npm run build
   ```
   Output will be in the `dist` folder

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Vercel auto-deploys on every push
4. Set custom domain in Vercel dashboard

### Deploy to GitHub Pages

```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

Then enable GitHub Pages in repo settings → select `dist` folder

## Customization

- **Email**: Change `montesclarosbrylle@gmail.com` in App.jsx
- **Colors**: Green color is `#4ade80` - search and replace throughout
- **Content**: Edit text directly in App.jsx components
- **Fonts**: Using Google Fonts (DM Serif Display, DM Mono, Outfit)

## File Structure

```
bryl-studio/
├── src/
│   └── main.jsx          # Entry point
├── App.jsx               # Main component
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── .gitignore
└── README.md
```

## Contact

Email: montesclarosbrylle@gmail.com
Location: Taguig, Philippines (UTC+8)

---

**© 2026 Bryl Studio • Wix Specialist**
