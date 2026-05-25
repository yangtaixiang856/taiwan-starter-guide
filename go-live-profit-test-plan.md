# Taiwan Starter Guide Go-Live + Profit Test Plan

Last updated: 2026-05-24

## Goal

Get Taiwan Starter Guide live on Netlify, then test whether the site can become a small income project without making it look spammy or risky.

The first goal is not immediate income. The first goal is proof that real newcomers click, read, search, save, subscribe, or ask questions.

## What Is Ready Now

- Static site is ready for Netlify.
- Production folder: `public`
- Netlify build command: `npm run build`
- Netlify publish directory: `public`
- Fresh drag-and-drop deploy package: `taiwan-starter-guide-netlify-production.zip`
- Forms ready for Netlify Forms:
  - `newsletter`
  - `beta-feedback`
- Current production base URL used in SEO files:
  - `https://heroic-speculoos-e83aec.netlify.app/`

## Fastest Way To Go Live Today

Use this if you want to publish first and connect GitHub later.

1. Open Netlify.
2. Go to the current project or create a new project.
3. Use drag-and-drop deploy.
4. Upload `taiwan-starter-guide-netlify-production.zip`.
5. Open the Netlify URL.
6. Test:
   - homepage
   - guides
   - cost tool
   - tax tool
   - contact form
   - newsletter form
   - mobile view

This is the fastest beta path, but GitHub deploy is better for long-term updates.

## Better Long-Term Way: GitHub + Netlify

Use this when you are ready to make updates properly.

### Step 1: Prepare Git locally

Run these in Terminal:

```bash
cd ~/Documents/Codex/2026-05-19/codex-google
git init
git branch -M main
git add .
git commit -m "Prepare Taiwan Starter Guide for Netlify launch"
```

If Git asks for your name/email, run:

```bash
git config --global user.name "Your Name"
git config --global user.email "你的 GitHub email"
```

Use your real GitHub email or the GitHub private noreply email.

### Step 2: Create GitHub repository

Recommended repository name:

```text
taiwan-starter-guide
```

After GitHub gives you the repository URL, run:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 3: Connect Netlify

In Netlify:

- Add new project
- Import from GitHub
- Choose `taiwan-starter-guide`
- Build command: `npm run build`
- Publish directory: `public`
- Deploy

## After Deploy Checks

Open these URLs on the live Netlify site:

- `/`
- `/guides.html`
- `/tools/cost-of-living.html`
- `/tools/tax-estimator.html`
- `/contact.html`
- `/privacy.html`
- `/disclaimer.html`
- `/sources.html`
- `/how-we-verify.html`
- `/sitemap.xml`
- `/robots.txt`

Then test:

- Dark mode button
- Language switcher
- Guide search
- Guide card buttons
- Newsletter form
- Feedback form
- Mobile width around 390px

## Forms Setup

In Netlify dashboard:

1. Open the project.
2. Go to Forms.
3. Confirm these forms exist:
   - `newsletter`
   - `beta-feedback`
4. Open Form notifications.
5. Add email notification to your real email.

If form submissions appear in Netlify but not in email, the email notification setting is missing.

## Search Setup

After the live URL is stable:

1. Open Google Search Console.
2. Add the Netlify URL or custom domain.
3. Submit sitemap:

```text
https://heroic-speculoos-e83aec.netlify.app/sitemap.xml
```

If you change the Netlify project name or custom domain, update sitemap and canonical URLs first.

## Profit Test Strategy

Do not start with ads or financial affiliate links.

### First 30 Days

No display ads.

Track whether people actually care:

- visits
- pages that get traffic
- guide search keywords
- newsletter signups
- feedback messages
- outbound clicks to useful resources
- which pages friends say are actually useful

### First 90 Days

Do not rely on AdSense.

Only consider low-risk monetization if the site shows demand.

Good first categories:

- SIM / eSIM
- airport transport
- transport passes
- short-term accommodation
- family visit accommodation
- student arrival checklist products
- daily life products

Avoid for now:

- remittance affiliate
- credit cards
- loans
- investment
- insurance
- anything that makes the site look like a financial service provider

## When To Add Affiliate Tests

Start only when at least one of these happens:

- 1,000+ monthly visitors
- 3+ pages bring consistent traffic
- 50+ monthly clicks to SIM / transport / accommodation resources
- people ask where to buy something
- newsletter or feedback proves real newcomer demand

## First Affiliate Placement Ideas

Do not place random banners.

Put helpful blocks only where they match user intent:

- SIM/eSIM page: compare airport SIM, eSIM, long-term mobile plan options
- Transportation page: airport MRT, EasyCard/iPASS, transport pass resources
- Cost of living page: moving budget checklist, temporary stay, daily essentials
- Renting page: short-term stay warning and rental checklist, not aggressive booking ads

Every affiliate block needs disclosure:

```text
Disclosure: Some links may be affiliate links. If you use them, Taiwan Starter Guide may earn a small commission at no extra cost to you. We only include links that fit the guide topic and may help newcomers compare options.
```

## Weekly Beta Routine

Every week:

1. Check Netlify Forms.
2. Check Search Console.
3. Check analytics if installed.
4. List top 5 pages.
5. List top 5 guide searches or questions.
6. Improve one weak guide.
7. Share one useful page in a relevant group without hard selling.

## What Not To Do Yet

- Do not mass-post the site into every Facebook group.
- Do not add financial product recommendations.
- Do not add fake reviews.
- Do not create shallow AI pages just to chase SEO.
- Do not translate Indonesian / Vietnamese at scale without review.
- Do not apply for AdSense before the site has stronger content depth and traffic.

## Next Content Priorities

Best next pages for trust and monetization testing:

1. Job contract checklist
2. Salary records and payslips
3. Emergency contacts in Taiwan
4. Convenience store basics
5. What to prepare before moving to Taiwan
6. Where to verify official information
