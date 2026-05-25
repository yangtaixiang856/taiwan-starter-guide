# Taiwan Starter Guide

Static production-ready MVP for an English-first Taiwan life guide serving international students, expats, foreign workers, and newcomers.

Open `index.html` directly in a browser. The site includes:

- Audience split for Study in Taiwan and Living in Taiwan for Expats
- Taiwan Cost of Living Calculator
- Taiwan Tax Estimator for Foreigners
- SEO-ready English guide hub with search, filters, answer blocks, and copy-link buttons
- Static SEO language editions at `/zh-hant/`, `/id/`, and `/vi/`
- Coming soon page for future migrant worker language editions
- Affiliate and financial-service disclosures
- Open Graph, Twitter Card, canonical tags, JSON-LD, FAQ schema, robots.txt, and sitemap.xml
- hreflang alternate links for English, Traditional Chinese, Indonesian, and Vietnamese homepage/guide pages
- Reading progress bar, back-to-top button, dark mode support, and newsletter CTA
- Netlify-ready deploy config, clean `public/` build output, and Netlify Forms for newsletter and beta feedback
- Playwright launch checks for page loading, internal links, images, mobile overflow, dark mode, language links, and placeholder text

This is an informational product prototype. Review official sources before publishing.
Before launch, replace `https://heroic-speculoos-e83aec.netlify.app/` in canonical, Open Graph, and sitemap URLs with the final production domain if different.

Deploy on Netlify with:

```bash
npm run build
```

Netlify should use:

- Build command: `npm run build`
- Publish directory: `public`

See `NETLIFY-DEPLOY.md` for the full deployment checklist.

Run the launch checks with:

```bash
npm install
npx playwright install
npm test
```

Hero image source: Wikimedia Commons, `Taipei skyline 2015.jpg`.
