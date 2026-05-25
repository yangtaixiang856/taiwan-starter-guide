# AGENTS.md

## Project Identity

This project is **Taiwan Starter Guide**, a practical Taiwan life guide website for:

- International students in Taiwan
- Expats in Taiwan
- White-collar foreign workers
- Newcomers to Taiwan

The site should feel like a real, helpful, trustworthy Taiwan guide platform, not a thin AI-generated template.

## Technical Rules

- Keep the project as **static HTML/CSS/JS**.
- Do not add heavy frameworks.
- Keep the site easy to deploy on Netlify.
- Preserve existing static structure, SEO metadata, sitemap, robots.txt, Netlify Forms, and public build workflow.
- Do not break existing UI behavior:
  - dark mode
  - language switcher
  - guide search
  - copy-link buttons
  - reading progress bar
  - back-to-top button
  - Netlify Forms for newsletter and feedback

## Language Strategy

- **English** is the first-stage primary SEO and public traffic language.
- **Traditional Chinese** is for local trust, owner review, schools, employers, Taiwanese friends, and source checking.
- **Indonesian and Vietnamese** currently exist as basic entry points only.
- Do not mass machine-translate Indonesian or Vietnamese content.
- Only expand Indonesian or Vietnamese when there is a real localization plan and preferably native-speaker review.

## Content Voice

Write in a tone that is:

- friendly
- practical
- trustworthy
- human
- specific
- not too official
- not overconfident

Avoid vague filler.

Bad:

> Bring required documents and check with the bank.

Better:

> Start with your employer payroll bank or your school's recommended branch. Bring your passport, ARC or resident certificate, Taiwan phone number, Chinese address, student or employment proof, and extra ID if you have it. If one branch refuses, ask what document is missing and try a larger branch near a university, business district, or your workplace.

## Guide Content Requirements

Every guide should include:

- clear title
- who this is for
- short answer
- practical steps
- realistic example
- common mistakes
- what to do next
- official sources to verify
- disclaimer if the topic is sensitive

For guide cards in `guides.html`, keep answers scannable but concrete. If a topic needs depth, create or link to an independent SEO page instead of leaving only a short summary card.

## Sensitive Topic Rules

Be conservative with:

- tax
- National Health Insurance
- immigration
- ARC / residency
- labor rights
- work permits
- banking
- remittance
- financial products

For these topics:

- Do not guarantee outcomes.
- Say that rules may change.
- Tell readers to check official sources.
- Clearly state that the content is information only.
- Do not present the site as legal, tax, immigration, labor, financial, or medical advice.
- Do not recommend financial services unless sources and legal context are checked.
- Avoid remittance affiliate or financial-product promotion unless confirmed safe and compliant.

## Practical Detail Standard

Content should answer the next real-life question a newcomer would ask.

Prefer specific details such as:

- which office, school unit, bank type, platform, or document to try first
- what documents to bring
- what phrase to say
- what to ask before paying
- what happens if the first attempt fails
- how to verify information
- what mistake costs people money or time

Use Taiwan-local examples where possible:

- 591, Rakuya, Tealit, school housing boards, Facebook rental groups
- employer payroll banks and school-recommended branches
- Taiwan phone number and Chinese address requirements
- EasyCard, MRT, buses, YouBike, convenience stores
- eTax, National Immigration Agency, NHIA, Ministry of Labor, Banking Bureau

## SEO And Structure Rules

When adding an independent page:

- use semantic HTML
- add a clear `<title>` and meta description
- add canonical URL
- add Open Graph tags
- add structured data when appropriate, such as Article, FAQPage, or BreadcrumbList
- add internal links from relevant guide cards and related guide sections
- update `sitemap.xml`
- update hreflang links if a real alternate language page exists

When adding guide cards:

- make sure guide search can find the new content
- update `data-tags` and `data-keywords`
- keep the card useful even before the reader opens a full page

## Verification Checklist After Changes

After every meaningful content or site change, check:

- no `href="#"`
- no empty links
- no `javascript:void(0)`
- no `TODO`
- no `localhost`
- no `127.0.0.1`
- no `lorem ipsum`
- no fake placeholder email or fake placeholder domain
- no broken internal links
- no missing images
- JSON-LD parses correctly
- `sitemap.xml` is updated if new pages are added
- guide search/index data is updated if guide content is added or renamed
- `public/` is rebuilt when preparing Netlify upload

If available, run the launch tests. If the full test suite cannot run, do a basic static check and clearly report what could not be run.

## Launch Checklist Rule

After adding or modifying content, update `launch-checklist.md` with:

- what was completed
- which pages were added or changed
- whether realistic examples were added
- which official sources still need human confirmation
- any remaining risk or manual review item

## Monetization Rules

First-stage monetization should stay low risk.

Prefer:

- SIM / eSIM
- transport passes
- airport pickup or travel support
- short-term accommodation
- family visit accommodation
- daily life products
- student arrival checklist products

Avoid early:

- remittance affiliate
- financial product promotion
- anything that may trigger Taiwan financial regulation concerns
- content that makes the site look like a financial service provider

AdSense should come later, after content depth and traffic improve.

## Editorial Priorities

Current priority is content depth and trust.

Useful next-page candidates include:

- SIM card or eSIM in Taiwan
- ARC / resident certificate basics
- NHI basics for foreigners
- student work permit basics
- cost of living in Taipei / New Taipei
- EasyCard and transportation
- job contract checklist
- salary records and payslips
- overtime and leave basics
- emergency contacts in Taiwan
- how to ask for help at school
- what to prepare before moving to Taiwan
- common mistakes foreigners make in Taiwan
- convenience store basics
- basic Chinese phrases for daily life
- where to verify official information

## Working Principle

Do not make the site bigger by adding shallow pages.

Make it more useful by adding concrete steps, Taiwan-specific examples, official sources, and clear next actions.

