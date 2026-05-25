# Taiwan Starter Guide Content Depth Plan

Last reviewed: 2026-05-22

Purpose: Move Taiwan Starter Guide from beta MVP toward a deeper, more trustworthy, SEO-ready static site.

Scope of this plan: This is a planning document only. Do not add new production pages until the owner confirms the plan.

Highest-priority rules:

- Keep the site static HTML/CSS/JS.
- English remains the first-stage public SEO language.
- Traditional Chinese supports local trust, owner review, school or employer review, and Taiwanese friends checking accuracy.
- Indonesian and Vietnamese remain basic entry points for now. Do not mass machine-translate.
- Do not fake authority.
- Do not make unsupported legal, tax, visa, labor, health-insurance, banking, remittance, or financial claims.
- Use official sources for sensitive topics.
- Keep monetization low risk and do not add affiliate links before traffic and trust signals exist.

## Current Project Snapshot

The site is already past a basic MVP. It has a working homepage, English guide library, language switcher, dark mode, Netlify Forms, tools, sitemap, sources page, and Playwright launch checks.

Current English guide cards in `guides.html`: 21.

Current independent English SEO pages:

1. `guides/taiwan-tax-for-foreigners.html`
2. `guides/183-day-tax-rule.html`
3. `guides/arc-resident-certificate.html`
4. `guides/nhi-for-foreigners.html`
5. `guides/renting-room-in-taiwan.html`
6. `guides/opening-bank-account-in-taiwan.html`
7. `guides/sim-card-esim-taiwan.html`
8. `guides/cost-of-living-taipei-new-taipei.html`
9. `guides/easycard-transportation-taiwan.html`
10. `guides/work-permit-international-students.html`

Current Traditional Chinese deep pages:

1. `zh-hant/guides/renting-room-in-taiwan.html`
2. `zh-hant/guides/opening-bank-account-in-taiwan.html`

Current tools:

1. `tools/cost-of-living.html`
2. `tools/tax-estimator.html`
3. `zh-hant/tools/cost-of-living.html`
4. `zh-hant/tools/tax-estimator.html`

Important correction from earlier plans: SIM/eSIM, Taipei and New Taipei cost of living, EasyCard/transportation, ARC, NHI, and international student work permit are no longer missing. They already exist as independent English SEO pages. The next step is to deepen them carefully where useful, then create new pages for remaining summary-only topics.

## Current Guide Card Audit

### Full SEO Page Exists

| Guide card | Full page | Current depth | Notes |
| --- | --- | --- | --- |
| SIM / eSIM | `guides/sim-card-esim-taiwan.html` | Good beta depth | Low-risk page. Can be strengthened for arrival scenarios and outbound click testing later. |
| ARC / resident certificate | `guides/arc-resident-certificate.html` | Good conservative depth | Sensitive. Needs periodic NIA manual verification. |
| NHI | `guides/nhi-for-foreigners.html` | Good conservative depth | Sensitive. Needs NHIA manual verification. |
| Renting | `guides/renting-room-in-taiwan.html` | Strong | Has Taiwan-local platforms and examples. Good model for future pages. |
| Cost of living | `guides/cost-of-living-taipei-new-taipei.html` | Good beta depth | Low to medium risk. Can be improved with clearer budget profiles. |
| Banking | `guides/opening-bank-account-in-taiwan.html` | Strong but sensitive | Useful and specific. Avoid affiliate or financial product promotion. |
| EasyCard / transportation | `guides/easycard-transportation-taiwan.html` | Good beta depth | Low-risk page. Can be improved with airport and first-week transport flows. |
| Tax filing | `guides/taiwan-tax-for-foreigners.html` | Good but sensitive | Needs annual eTax verification. No affiliate. |
| 183-day tax rule | `guides/183-day-tax-rule.html` | Good but sensitive | Needs annual eTax verification. No affiliate. |
| Student work permit | `guides/work-permit-international-students.html` | Good conservative depth | Sensitive. Needs WDA, MOL, MOE manual verification. |

### Summary Card Only

These cards are useful but still need independent SEO pages or deeper supporting content:

| Guide card | Current weakness | Best next treatment |
| --- | --- | --- |
| Before moving to Taiwan | Good card, no full checklist page. | Create a full arrival checklist page. |
| Job contract checklist | High-value but legally sensitive. | Create conservative page with MOL sources and disclaimer. |
| Salary records and payslips | Practical but thin. | Create evidence-keeping page, not legal advice. |
| Overtime and leave | Sensitive and currently too short. | Create conservative labor page after official-source check. |
| Emergency contacts | Useful but not deep enough. | Create quick-reference page with official numbers and translations. |
| Ask school for help | Useful for students, but summary-only. | Create page with email templates and office routing. |
| Convenience stores | Practical Taiwan-local topic, summary-only. | Create low-risk daily-life page. |
| Basic Chinese phrases | Useful and shareable, summary-only. | Create practical phrase page with Chinese, pinyin, and situations. |
| Common mistakes | Good umbrella topic, summary-only. | Create internal-link hub after more pages exist. |
| Verify official information | Important trust topic, summary-only. | Expand `how-we-verify.html` or create a stronger official-source guide. |
| Foreign workers | Strategically important but language-sensitive. | Keep English page limited. Later localize by language with native review. |

## Top 10 Content Gaps

| Priority | Content gap | Impact | Difficulty | Why it matters |
| --- | --- | --- | --- | --- |
| 1 | Prepare before moving to Taiwan | High | Medium | Broad top-of-funnel page that can link to SIM, rent, banking, ARC, NHI, transport, and cost tool. |
| 2 | Emergency contacts in Taiwan | High | Medium | Trust-building, useful for every newcomer, and easy to share. Requires official-number verification. |
| 3 | Job contract checklist | High | High | High user value for workers and expats, but must avoid legal advice and unsupported claims. |
| 4 | Salary records and payslips | High | Medium-high | Practical evidence-keeping topic that supports tax, labor, banking, and rental needs. |
| 5 | Convenience stores in Taiwan | Medium-high | Low | Very local, practical, low-risk content that makes the site feel real. |
| 6 | Basic Chinese phrases for daily life | Medium-high | Low | Shareable page for food, taxi, address, allergies, receipts, and asking for help. |
| 7 | How to ask for help at school | Medium-high | Medium | Directly serves international students and can reduce confusion around ARC, work permits, dorms, and documents. |
| 8 | Overtime and leave basics | Medium-high | High | Important for worker trust, but labor-sensitive and needs careful official sourcing. |
| 9 | Common mistakes foreigners make in Taiwan | Medium | Medium | Good internal-link hub that can guide users to deeper pages. Should not become vague list content. |
| 10 | Official information verification guide | Medium | Medium | Improves trust and AI-search extraction by showing where rules should be verified. |

## Next 10 SEO Pages In Priority Order

### 1. Prepare Before Moving To Taiwan

- Proposed URL: `guides/prepare-before-moving-to-taiwan.html`
- Target user: International students, expats, first-job foreign employees, and newcomers arriving in the next 1 to 8 weeks.
- Search intent: "moving to Taiwan checklist", "what to prepare before moving to Taiwan", "Taiwan arrival checklist for foreigners".
- Why it matters: This is the best broad entry page for new users. It can naturally send readers to SIM, cost, renting, banking, ARC, NHI, and transport pages.
- Risk level: Low-medium.
- Official sources needed:
  - National Immigration Agency for visa and residence reminders.
  - Airport or airline official pages only if giving arrival-process details.
  - School or employer sources should be framed as case-specific.
- Suggested internal links:
  - `guides/sim-card-esim-taiwan.html`
  - `guides/cost-of-living-taipei-new-taipei.html`
  - `guides/easycard-transportation-taiwan.html`
  - `guides/renting-room-in-taiwan.html`
  - `guides/opening-bank-account-in-taiwan.html`
  - `guides/arc-resident-certificate.html`
  - `tools/cost-of-living.html`
- Realistic example idea: A student lands on Sunday night with a temporary eSIM, NT cash, dorm address in Chinese, admission letter, printed documents, and a backup hotel option, so the first 24 hours are manageable.
- Notes: This should be built in English first. Later it can become a downloadable checklist or newsletter lead magnet.

### 2. Emergency Contacts In Taiwan

- Proposed URL: `guides/emergency-contacts-taiwan.html`
- Target user: All newcomers, parents of students, schools, roommates, employers, and people helping foreigners in Taiwan.
- Search intent: "Taiwan emergency numbers", "Taiwan police ambulance number", "Taiwan emergency contacts foreigners".
- Why it matters: High trust and high usefulness. This is the type of page people save on their phone.
- Risk level: Medium.
- Official sources needed:
  - Police 110.
  - Fire and ambulance 119.
  - Protection or safety hotlines where relevant.
  - 1955 labor consultation hotline if included.
  - Local government 1999 where applicable.
  - Representative office or foreign ministry guidance if mentioned.
- Suggested internal links:
  - `guides/basic-chinese-phrases-taiwan.html`
  - `guides/how-to-ask-for-help-at-school.html`
  - `guides/nhi-for-foreigners.html`
  - `guides/work-permit-international-students.html`
  - `how-we-verify.html`
- Realistic example idea: A student has an allergic reaction at night. Their roommate can show a taxi driver the nearest hospital name and Chinese address because they saved it earlier.
- Notes: Avoid promising English availability unless verified. Make it mobile-friendly and scannable.

### 3. Job Contract Checklist In Taiwan

- Proposed URL: `guides/job-contract-checklist-taiwan.html`
- Target user: Foreign employees, white-collar expats, foreign workers, and students considering part-time work.
- Search intent: "Taiwan employment contract foreigner", "Taiwan job contract checklist", "what to check before signing Taiwan job contract".
- Why it matters: High-impact topic that can prevent money, housing, schedule, and deduction problems.
- Risk level: High.
- Official sources needed:
  - Ministry of Labor.
  - Workforce Development Agency if foreign worker categories are discussed.
  - Local labor office resources.
  - Legal Aid Foundation only if linking to help, not giving legal conclusions.
- Suggested internal links:
  - `guides/work-permit-international-students.html`
  - `guides/taiwan-tax-for-foreigners.html`
  - `guides/opening-bank-account-in-taiwan.html`
  - Future `guides/salary-payslips-taiwan.html`
  - Future `guides/overtime-leave-taiwan.html`
- Realistic example idea: A worker sees salary in writing but dorm fees and broker-related deductions are discussed only verbally, so he asks for deductions in writing before signing.
- Notes: Must say rules may change, check official sources, and this is educational information only. No affiliate.

### 4. Salary Records And Payslips In Taiwan

- Proposed URL: `guides/salary-payslips-taiwan.html`
- Target user: Foreign employees, foreign workers, part-time students, and expats preparing for tax filing or contract checks.
- Search intent: "Taiwan payslip foreign worker", "Taiwan salary deductions foreigner", "how to keep salary records Taiwan".
- Why it matters: Practical evidence-keeping supports tax filing, rental applications, renewal questions, and labor conversations.
- Risk level: Medium-high.
- Official sources needed:
  - Ministry of Labor.
  - Local labor office resources.
  - eTax if connecting records to tax filing.
- Suggested internal links:
  - `guides/taiwan-tax-for-foreigners.html`
  - `guides/183-day-tax-rule.html`
  - `guides/opening-bank-account-in-taiwan.html`
  - Future `guides/job-contract-checklist-taiwan.html`
  - Future `guides/overtime-leave-taiwan.html`
- Realistic example idea: A worker saves each payslip photo and bank deposit screenshot. One month has an unexpected dorm deduction, so he can ask payroll with dates and evidence instead of relying on memory.
- Notes: Focus on record keeping and questions to ask. Do not make legal conclusions.

### 5. Convenience Stores In Taiwan

- Proposed URL: `guides/convenience-stores-taiwan.html`
- Target user: Newcomers, students, expats, visiting family members, and people with low Chinese ability.
- Search intent: "Taiwan convenience store guide", "how to use 7-Eleven Taiwan", "FamilyMart Taiwan parcel pickup", "ibon Taiwan guide".
- Why it matters: This is low-risk, highly practical local content. It makes the site feel lived-in and helpful.
- Risk level: Low.
- Official sources needed:
  - 7-Eleven Taiwan service pages if specific machine services are explained.
  - FamilyMart service pages if specific services are explained.
  - Parcel service pages if making specific parcel claims.
- Suggested internal links:
  - `guides/easycard-transportation-taiwan.html`
  - `guides/basic-chinese-phrases-taiwan.html`
  - `guides/cost-of-living-taipei-new-taipei.html`
  - `tools/cost-of-living.html`
- Realistic example idea: A newcomer pays a utility bill at 7-Eleven, picks up an online order at FamilyMart, and prints a school document using a store machine.
- Notes: Avoid turning the page into brand advertising. Keep it instructional.

### 6. Basic Chinese Phrases For Daily Life In Taiwan

- Proposed URL: `guides/basic-chinese-phrases-taiwan.html`
- Target user: New students, expats, workers, and visitors staying long enough to handle daily errands.
- Search intent: "basic Chinese phrases Taiwan", "Taiwan daily Chinese phrases", "Chinese phrases for foreigners in Taiwan".
- Why it matters: Very shareable and useful for taxi, food, address, allergies, receipts, payment, and help requests.
- Risk level: Low.
- Official sources needed:
  - No official source needed for common phrases unless using official agency terms.
  - Use common Traditional Chinese phrasing and avoid claiming official translations unless sourced.
- Suggested internal links:
  - `guides/emergency-contacts-taiwan.html`
  - `guides/convenience-stores-taiwan.html`
  - `guides/renting-room-in-taiwan.html`
  - `guides/easycard-transportation-taiwan.html`
- Realistic example idea: A person with a peanut allergy saves "我對花生過敏" on their phone and shows it at a lunch shop.
- Notes: Include Chinese, pinyin, English meaning, when to use it, and a polite fallback phrase.

### 7. How To Ask For Help At School In Taiwan

- Proposed URL: `guides/how-to-ask-for-help-at-school-taiwan.html`
- Target user: International students who need help from an international office, department office, dorm office, or advisor.
- Search intent: "Taiwan international student office help", "ask school for ARC help Taiwan", "Taiwan university international office documents".
- Why it matters: It directly serves the main audience and reduces confusion around documents, housing, class issues, ARC, work permits, and NHI.
- Risk level: Medium.
- Official sources needed:
  - Ministry of Education only for broad student-related information.
  - University official pages can be cited as examples, but should not be generalized to all schools.
  - NIA, WDA, NHIA when school help touches official decisions.
- Suggested internal links:
  - `guides/arc-resident-certificate.html`
  - `guides/work-permit-international-students.html`
  - `guides/nhi-for-foreigners.html`
  - `guides/renting-room-in-taiwan.html`
  - Future `guides/prepare-before-moving-to-taiwan.html`
- Realistic example idea: A student cannot upload an ARC renewal document and emails the international office with student ID, screenshot, deadline, browser name, and one clear question.
- Notes: Add copyable email templates. Remind readers that schools explain procedures but agencies make official decisions.

### 8. Overtime And Leave Basics In Taiwan

- Proposed URL: `guides/overtime-leave-taiwan.html`
- Target user: Foreign employees, workers, and students doing part-time jobs.
- Search intent: "Taiwan overtime rules foreigner", "Taiwan leave rules foreign worker", "Taiwan rest day overtime".
- Why it matters: Workers need this, but the page must be careful because labor rules can be detailed and job-category dependent.
- Risk level: High.
- Official sources needed:
  - Ministry of Labor.
  - Workforce Development Agency if foreign worker categories are discussed.
  - Local labor office resources.
- Suggested internal links:
  - Future `guides/job-contract-checklist-taiwan.html`
  - Future `guides/salary-payslips-taiwan.html`
  - `guides/work-permit-international-students.html`
  - `guides/taiwan-tax-for-foreigners.html`
- Realistic example idea: A caregiver saves daily start and end times plus messages about holiday work. When pay looks wrong, she has a timeline to ask about.
- Notes: This must be framed as record-keeping and source verification, not legal advice.

### 9. Common Mistakes Foreigners Make In Taiwan

- Proposed URL: `guides/common-mistakes-foreigners-taiwan.html`
- Target user: New students, expats, workers, and people planning a move.
- Search intent: "common mistakes foreigners make in Taiwan", "moving to Taiwan mistakes", "Taiwan newcomer mistakes".
- Why it matters: Good internal-link hub and social-sharing page. It can route users to deeper pages.
- Risk level: Medium.
- Official sources needed:
  - Official sources only when discussing tax, immigration, labor, NHI, banking, or housing rules.
- Suggested internal links:
  - `guides/renting-room-in-taiwan.html`
  - `guides/opening-bank-account-in-taiwan.html`
  - `guides/taiwan-tax-for-foreigners.html`
  - `guides/arc-resident-certificate.html`
  - `guides/nhi-for-foreigners.html`
  - Future `guides/prepare-before-moving-to-taiwan.html`
- Realistic example idea: An expat signs a one-year lease after one viewing, then learns the commute is 70 minutes and the electricity rate is high.
- Notes: Must not be generic. Each mistake should include the cost, the better action, and a related guide link.

### 10. Where To Verify Official Taiwan Information

- Proposed URL option A: deepen `how-we-verify.html`
- Proposed URL option B: `guides/verify-official-information-taiwan.html`
- Target user: Readers who need to check tax, immigration, labor, health insurance, banking, and official-rule information.
- Search intent: "Taiwan official sources foreigners", "where to verify Taiwan immigration tax labor information", "Taiwan government websites foreigners".
- Why it matters: Builds credibility and supports AI answer extraction by clearly separating guide explanation from official-rule verification.
- Risk level: Medium.
- Official sources needed:
  - Ministry of Finance / eTax.
  - National Immigration Agency.
  - National Health Insurance Administration.
  - Ministry of Labor / Workforce Development Agency.
  - Ministry of Education.
  - Banking Bureau / FSC when discussing banking.
- Suggested internal links:
  - `sources.html`
  - `how-we-verify.html`
  - `guides/taiwan-tax-for-foreigners.html`
  - `guides/arc-resident-certificate.html`
  - `guides/nhi-for-foreigners.html`
  - `guides/work-permit-international-students.html`
- Realistic example idea: A worker sees two confident but conflicting answers in a Facebook group. Instead of choosing the louder comment, he checks the agency page and asks an official help channel for the current rule.
- Notes: This page can become the trust backbone of the site.

## First Implementation Batch After Owner Approval

The owner requested the first production batch to focus only on three low-risk English SEO pages:

1. SIM card / eSIM in Taiwan
2. Cost of living in Taipei / New Taipei
3. EasyCard and transportation

These pages already exist, so the first batch should be a deepening pass, not a new-page pass.

### SIM / eSIM Deepening Ideas

- Add clearer airport arrival flow: before landing, at airport, first 7 days, after ARC or stable address.
- Add comparison table: eSIM, airport SIM, prepaid SIM, monthly plan.
- Add "what to check before paying": phone compatibility, hotspot, Taiwan number, validity days, data cap, ID requirements.
- Add neutral outbound tracking later, but no affiliate link now.
- Keep official carrier links and disclosure-ready language.

### Cost Of Living Deepening Ideas

- Add 3 practical budget profiles:
  - Student in New Taipei shared room.
  - Expat in Taipei studio.
  - New worker with employer-assisted housing.
- Add first-month vs normal-month cost distinction more visibly.
- Add "where budgets go wrong": deposit, electricity, commute, eating out, temporary stay, home setup.
- Link more strongly to the cost calculator.
- Keep all numbers as examples and remind users prices change.

### EasyCard / Transportation Deepening Ideas

- Add first-week transport route from Taoyuan Airport to Taipei/New Taipei.
- Add "which card or app do I need first?"
- Add clearer distinction between MRT, bus, YouBike, TRA, HSR, and airport MRT.
- Add "do not buy a scooter immediately" context for Taipei/New Taipei users.
- Add common route-planning workflow using official transit sites plus maps.

## Pages To Do In English First

Build English first for:

1. Prepare before moving to Taiwan.
2. Emergency contacts in Taiwan.
3. Job contract checklist in Taiwan.
4. Salary records and payslips in Taiwan.
5. Convenience stores in Taiwan.
6. Basic Chinese phrases for daily life.
7. How to ask for help at school.
8. Overtime and leave basics.
9. Common mistakes foreigners make in Taiwan.
10. Where to verify official Taiwan information.

## Pages To Adapt Into Traditional Chinese Later

Traditional Chinese should support local trust and review. It should come after the English version is stable.

Good Traditional Chinese candidates:

1. Emergency contacts in Taiwan.
2. Job contract checklist in Taiwan.
3. Salary records and payslips in Taiwan.
4. Overtime and leave basics.
5. How to ask for help at school.
6. Prepare before moving to Taiwan.
7. Where to verify official Taiwan information.

Reason: These are useful for Taiwanese friends, schools, employers, or helpers who may assist a foreign reader.

## Pages Not To Translate Into Indonesian Or Vietnamese Yet

Do not mass machine-translate these into Indonesian or Vietnamese during this stage:

- Tax filing.
- ARC.
- NHI.
- Work permits.
- Job contracts.
- Salary records and payslips.
- Overtime and leave.
- Banking.
- Remittance or financial topics.

Reason: These are sensitive, language-specific, and could mislead users if translated without native-speaker and official-source review.

Indonesian and Vietnamese should stay as basic entry pages until there is a real localization plan.

## Affiliate And Monetization Boundaries

Do not add affiliate links in this content-depth phase.

Pages that may later support low-risk affiliate testing:

- SIM / eSIM.
- EasyCard and transportation, only for airport pickup or transport support.
- Cost of living, only for daily-life products or arrival checklist items.
- Renting, only for short-term accommodation support and only after rental safety wording is strong.
- Future prepare-before-moving page.
- Future convenience-store or daily-life checklist page.

Pages that should not get affiliate blocks:

- Tax filing.
- 183-day tax rule.
- ARC.
- NHI.
- Student work permit.
- Banking.
- Job contract checklist.
- Salary records and payslips.
- Overtime and leave.
- Emergency contacts.
- Official verification pages.
- Any remittance, credit card, loan, investment, insurance, or financial product content.

## Official Source Review Needed

Sensitive pages need manual official-source review before major promotion:

| Topic | Source priority |
| --- | --- |
| Tax filing and 183-day rule | Ministry of Finance, eTax, National Taxation Bureau |
| ARC and residence | National Immigration Agency |
| NHI | National Health Insurance Administration |
| Student work permits | Workforce Development Agency, Ministry of Labor, Ministry of Education, school international offices |
| Job contracts, payslips, overtime, leave | Ministry of Labor, local labor offices, Workforce Development Agency when foreign-worker categories are discussed |
| Banking | Banking Bureau, FSC, individual bank official pages |
| Transport | EasyCard, Taipei Metro, Taoyuan Airport MRT, TRA, THSR, YouBike, city transport agencies |
| Emergency contacts | Taiwan police/fire/ambulance/government hotline pages and local government pages |

## Implementation Rules For The Next Step

When the owner approves this plan and requests the first batch:

1. Modify only the three approved low-risk English pages first:
   - `guides/sim-card-esim-taiwan.html`
   - `guides/cost-of-living-taipei-new-taipei.html`
   - `guides/easycard-transportation-taiwan.html`
2. Preserve existing UI, CSS, dark mode, language switcher, guide search, copy-link buttons, and Netlify Forms.
3. Update internal links only where needed.
4. Update `guides.html` if guide card summaries need to reflect the deeper pages.
5. Update `sources.html` if new trustworthy sources are added.
6. Update `sitemap.xml` only if new pages are created.
7. Update `launch-checklist.md`.
8. Run available static checks and Playwright tests if the environment allows it.
9. If browser tests cannot run because of local environment limits, run a static verification and clearly report the limitation.

