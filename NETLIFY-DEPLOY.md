# Netlify Beta Deploy Guide

Last updated: 2026-05-21

## What is ready

This site is ready for Netlify as a static site.

- Build command: `npm run build`
- Publish directory: `public`
- Config file: `netlify.toml`
- Newsletter form name: `newsletter`
- Feedback form name: `beta-feedback`

## Recommended deploy path

Use Git-based deploy instead of drag-and-drop.

1. Create a GitHub repository.
2. Upload this project folder to the repository.
3. In Netlify, choose **Add new project**.
4. Connect the GitHub repository.
5. Netlify should read `netlify.toml` automatically.
6. Confirm these settings:
   - Build command: `npm run build`
   - Publish directory: `public`
7. Deploy the site.

## Local preflight before pushing

Run these from the project root:

```bash
npm install
npx playwright install
npm test
```

If the browser test fails because Playwright browsers are missing, run `npx playwright install` again and retry.

## After deploy

Current beta URL:

`https://heroic-speculoos-e83aec.netlify.app`

Before wider sharing:

- Keep `https://heroic-speculoos-e83aec.netlify.app` in HTML, `sitemap.xml`, and `robots.txt` unless you change the Netlify project name or add a custom domain.
- Contact and local fallback email currently use `yangtaixiang856@gmail.com`. Replace it later if you create a branded email address.
- In Netlify dashboard, open **Forms** and confirm `newsletter` and `beta-feedback` were detected.
- In Netlify dashboard, enable email notifications for the forms so submissions are sent to your inbox.

## How to test on Netlify

After the first deploy:

- Open the homepage.
- Submit the newsletter form with your own email.
- Open Contact and submit beta feedback.
- Check Netlify dashboard -> Forms -> Verified submissions.
- Check your email notification settings if submissions appear in Netlify but not in your inbox.

## Important

Netlify Forms can store form submissions automatically, but email notification is a Netlify dashboard setting. The HTML form alone does not choose your notification recipient.
