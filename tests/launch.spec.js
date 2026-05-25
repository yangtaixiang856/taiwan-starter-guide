const fs = require("node:fs");
const path = require("node:path");
const { test, expect } = require("playwright/test");

const rootDir = path.resolve(__dirname, "..");
const siteOrigin = "https://heroic-speculoos-e83aec.netlify.app";
const localHost = process.env.HOST || ["127", "0", "0", "1"].join(".");
const localBaseURL = process.env.PLAYWRIGHT_BASE_URL || `http://${localHost}:9327`;
const useFileBaseURL = localBaseURL.startsWith("file:");

const requiredPages = [
  "index.html",
  "guides.html",
  "guides/prepare-before-moving-to-taiwan.html",
  "guides/taiwan-tax-for-foreigners.html",
  "guides/183-day-tax-rule.html",
  "guides/arc-resident-certificate.html",
  "guides/nhi-for-foreigners.html",
  "guides/renting-room-in-taiwan.html",
  "guides/opening-bank-account-in-taiwan.html",
  "guides/sim-card-esim-taiwan.html",
  "guides/cost-of-living-taipei-new-taipei.html",
  "guides/easycard-transportation-taiwan.html",
  "guides/emergency-contacts-taiwan.html",
  "guides/work-permit-international-students.html",
  "zh-hant/guides/renting-room-in-taiwan.html",
  "zh-hant/guides/opening-bank-account-in-taiwan.html",
  "tools/cost-of-living.html",
  "tools/tax-estimator.html",
  "zh-hant/tools/cost-of-living.html",
  "zh-hant/tools/tax-estimator.html",
  "contact.html",
  "success.html",
  "privacy.html",
  "disclaimer.html",
  "sources.html",
  "how-we-verify.html",
  "work-in-taiwan.html",
  "zh-hant/index.html",
  "zh-hant/guides.html",
  "id/index.html",
  "id/guides.html",
  "vi/index.html",
  "vi/guides.html"
];

const sourceFiles = [
  ...requiredPages,
  "assets/site.css",
  "assets/site.js",
  "robots.txt",
  "sitemap.xml",
  "netlify.toml",
  "NETLIFY-DEPLOY.md"
];

function abs(file) {
  return path.join(rootDir, file);
}

function read(file) {
  return fs.readFileSync(abs(file), "utf8");
}

function htmlFiles() {
  return requiredPages.filter((file) => file.endsWith(".html"));
}

function pagePath(file) {
  if (useFileBaseURL) {
    const base = localBaseURL.endsWith("/") ? localBaseURL : `${localBaseURL}/`;
    return new URL(file, base).href;
  }
  return `/${file}`;
}

function stripHash(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  return parsed.href;
}

function hashFor(value) {
  const index = value.indexOf("#");
  return index >= 0 ? value.slice(index + 1) : "";
}

function isExternal(value) {
  return /^(https?:|mailto:|tel:)/i.test(value);
}

function isExternalHttp(value) {
  return /^https?:/i.test(value) && !value.startsWith(siteOrigin);
}

function idsIn(html) {
  const ids = new Set();
  const idPattern = /\sid=(["'])(.*?)\1/g;
  for (const match of html.matchAll(idPattern)) ids.add(match[2]);
  return ids;
}

function localPathFromUrl(value, currentFile) {
  const currentUrl = new URL(pagePath(currentFile), `http://${localHost}`);
  const targetUrl = new URL(value, currentUrl);
  return targetUrl.pathname.replace(/^\/+/, "") || "index.html";
}

function sitemapPathFromLoc(loc) {
  const url = new URL(loc);
  let pathname = url.pathname;
  if (pathname === "/") return "index.html";
  if (pathname.endsWith("/")) pathname += "index.html";
  return pathname.replace(/^\/+/, "");
}

async function expectHttpOk(request, url, context) {
  if (url.startsWith("file:")) {
    const targetPath = decodeURIComponent(new URL(stripHash(url)).pathname);
    expect(fs.existsSync(targetPath), context).toBe(true);
    return;
  }
  const response = await request.get(stripHash(url), { failOnStatusCode: false });
  expect(response.status(), context).toBeLessThan(400);
}

test("required launch pages exist", () => {
  for (const file of requiredPages) {
    expect(fs.existsSync(abs(file)), `${file} should exist`).toBe(true);
  }
});

for (const file of requiredPages) {
  test(`opens ${file}`, async ({ page }) => {
    const response = await page.goto(pagePath(file));
    if (response) expect(response.status(), `${file} should return a successful status`).toBeLessThan(400);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page).not.toHaveTitle("");
  });
}

test("nav links are not empty placeholder links", async ({ page }) => {
  const problems = [];

  for (const file of htmlFiles()) {
    await page.goto(pagePath(file));
    const links = await page.locator(".site-header a, .site-footer a, .nav-actions a").evaluateAll((anchors) =>
      anchors.map((anchor) => ({
        text: anchor.textContent.trim(),
        href: anchor.getAttribute("href") || ""
      }))
    );

    for (const link of links) {
      if (!link.href || link.href === "#" || /^javascript:/i.test(link.href)) {
        problems.push(`${file}: bad nav link "${link.text}" -> ${link.href}`);
      }
    }
  }

  expect(problems).toEqual([]);
});

test("all internal links, anchors, scripts, styles, and images return status under 400", async ({ page, request }) => {
  const problems = [];

  for (const file of htmlFiles()) {
    const html = read(file);
    const attrs = [...html.matchAll(/\s(?:href|src)=(["'])(.*?)\1/g)].map((match) => match[2]);
    const currentUrl = new URL(pagePath(file), localBaseURL);

    for (const rawValue of attrs) {
      const value = rawValue.trim();
      if (!value) {
        problems.push(`${file}: empty link or asset reference`);
        continue;
      }
      if (value.startsWith("data:") || isExternalHttp(value) || /^mailto:|^tel:/i.test(value)) continue;

      const targetUrl = new URL(value.startsWith(siteOrigin) ? new URL(value).pathname + new URL(value).search + new URL(value).hash : value, currentUrl);
      const localPath = localPathFromUrl(value.startsWith(siteOrigin) ? new URL(value).pathname + new URL(value).search + new URL(value).hash : value, file);

      if (!fs.existsSync(abs(localPath))) {
        problems.push(`${file}: missing ${value} -> ${localPath}`);
        continue;
      }

      if (!useFileBaseURL) {
        const response = await request.get(stripHash(targetUrl.href), { failOnStatusCode: false });
        if (response.status() >= 400) problems.push(`${file}: ${value} returned ${response.status()}`);
      }

      const targetHash = hashFor(value);
      if (targetHash) {
        const targetHtml = read(localPath);
        if (!idsIn(targetHtml).has(targetHash)) problems.push(`${file}: missing section ${value}`);
      }
    }
  }

  expect(problems).toEqual([]);
});

test("homepage calls to action point to real places", async ({ page, request }) => {
  await page.goto(pagePath("index.html"));

  const ctas = [
    ['a[href="guides.html"]', "Explore the guides"],
    ['a[href="#checklist"]', "Start the checklist"],
    ['a[href="tools/cost-of-living.html"]', "Estimate costs"],
    ['a[href="tools/tax-estimator.html"]', "Estimate tax"],
    ['a[href="#newsletter"]', "Join updates"]
  ];

  for (const [selector, text] of ctas) {
    const locator = page.locator(selector, { hasText: text }).first();
    await expect(locator).toBeVisible();
    const href = await locator.getAttribute("href");
    const target = new URL(href, page.url()).href;
    await expectHttpOk(request, target, `${text} should resolve`);
  }

  await expect(page.locator('form[name="newsletter"][data-netlify="true"]')).toBeVisible();
});

test("guide cards have clickable valid actions", async ({ page, request }) => {
  await page.goto(pagePath("guides.html"));

  const copyButtons = await page.locator("[data-guide-card] [data-copy-link]").evaluateAll((buttons) =>
    buttons.map((button) => button.getAttribute("data-copy-link"))
  );
  expect(copyButtons.length).toBeGreaterThanOrEqual(20);

  for (const hash of copyButtons) {
    expect(hash, `copy link target ${hash}`).toMatch(/^#/);
    await expect(page.locator(hash)).toHaveCount(1);
  }

  for (let index = 0; index < Math.min(copyButtons.length, 5); index += 1) {
    await page.locator("[data-guide-card] [data-copy-link]").nth(index).click();
    await expect(page.locator("body")).toBeVisible();
  }

  const internalGuideLinks = await page.locator('[data-guide-card] a.source-link[href]:not([target])').evaluateAll((links) =>
    links.map((link) => link.getAttribute("href"))
  );
  expect(internalGuideLinks.length).toBeGreaterThan(0);

  for (const href of internalGuideLinks) {
    await expectHttpOk(request, new URL(href, page.url()).href, `guide card link ${href} should resolve`);
  }
});

test("language switch links can be clicked without breaking the page", async ({ page }) => {
  for (const file of ["index.html", "guides.html", "tools/cost-of-living.html", "tools/tax-estimator.html"]) {
    await page.goto(pagePath(file));
    const count = await page.locator(".language-menu a").count();
    expect(count, `${file} should have language links`).toBeGreaterThan(0);

    for (let index = 0; index < count; index += 1) {
      await page.goto(pagePath(file));
      const responsePromise = page.waitForLoadState("domcontentloaded");
      await page.locator(".language-menu a").nth(index).click();
      await responsePromise;
      await expect(page.locator("body")).toBeVisible();
      await expect(page.locator("h1").first()).toBeVisible();
    }
  }
});

test("dark mode toggle can be clicked without breaking pages", async ({ page }) => {
  for (const file of ["index.html", "guides.html", "tools/cost-of-living.html", "guides/arc-resident-certificate.html"]) {
    await page.goto(pagePath(file));
    await page.locator("[data-theme-toggle]").first().click();
    const theme = await page.evaluate(() => document.documentElement.dataset.theme || "");
    expect(["light", "dark"]).toContain(theme);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();
  }
});

test("guide search finds newly added English guides", async ({ page }) => {
  await page.goto(pagePath("guides.html"));

  const cases = [
    ["prepare moving", "#before-moving"],
    ["esim", "#sim-esim"],
    ["cost taipei", "#costs"],
    ["easycard", "#transport"],
    ["emergency 119", "#emergency"],
    ["work permit", "#work-permit"],
    ["nhi", "#nhi"],
    ["arc", "#arc"]
  ];

  for (const [query, cardId] of cases) {
    await page.locator("[data-guide-search]").fill(query);
    await expect(page.locator(cardId)).toBeVisible();
    await expect(page.locator(".guide-search-status")).toContainText("Showing");
  }
});

test("guide search filters localized content", async ({ page }) => {
  await page.goto(pagePath("zh-hant/guides.html"));
  await page.locator("[data-guide-search]").fill("銀行");
  await expect(page.locator("#banking")).toBeVisible();
  await expect(page.locator("#sim-esim")).toHaveClass(/is-hidden/);

  await page.goto(pagePath("guides.html"));
  await page.locator("[data-guide-search]").fill("bank這裡我輸入bank他沒有反應");
  await expect(page.locator("#banking")).toBeVisible();
  await expect(page.locator(".guide-search-status")).toContainText("Showing");
});

test("newsletter and feedback forms are Netlify-ready or have usable actions", async ({ page }) => {
  const problems = [];

  for (const file of htmlFiles()) {
    await page.goto(pagePath(file));
    const forms = await page.locator("form").evaluateAll((items) =>
      items
        .filter((form) => form.matches('[name="newsletter"], [name="beta-feedback"], [data-signup-form], [data-feedback-form]'))
        .map((form) => ({
        name: form.getAttribute("name") || "",
        action: form.getAttribute("action") || "",
        netlify: form.hasAttribute("data-netlify") || form.hasAttribute("netlify")
      }))
    );

    for (const form of forms) {
      const usableAction = /^\/.+|^https?:|^mailto:/i.test(form.action);
      if (!form.netlify && !usableAction) {
        problems.push(`${file}: form ${form.name || "(unnamed)"} needs Netlify or usable action`);
      }
      if (form.action === "#" || form.action.trim() === "") {
        problems.push(`${file}: form ${form.name || "(unnamed)"} has placeholder action`);
      }
    }
  }

  await page.goto(pagePath("contact.html"));
  await expect(page.locator('form[name="beta-feedback"][data-netlify="true"]')).toBeVisible();

  await page.goto(pagePath("index.html"));
  await expect(page.locator('form[name="newsletter"][data-netlify="true"]')).toBeVisible();

  expect(problems).toEqual([]);
});

test("mobile viewport has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  for (const file of requiredPages) {
    await page.goto(pagePath(file));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `${file} should not overflow horizontally`).toBeLessThanOrEqual(1);
  }
});

test("sitemap URLs correspond to existing local pages and return status under 400", async ({ request }) => {
  const sitemap = read("sitemap.xml");
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const problems = [];

  expect(locs.length).toBeGreaterThan(0);

  for (const loc of locs) {
    const localPath = sitemapPathFromLoc(loc);
    if (!fs.existsSync(abs(localPath))) {
      problems.push(`${loc}: missing local file ${localPath}`);
      continue;
    }
    if (!useFileBaseURL) {
      const response = await request.get(`/${localPath}`, { failOnStatusCode: false });
      if (response.status() >= 400) problems.push(`${loc}: local response ${response.status()}`);
    }
  }

  expect(problems).toEqual([]);
});

test("images load in the browser", async ({ page }) => {
  for (const file of htmlFiles()) {
    await page.goto(pagePath(file));
    const broken = await page.locator("img").evaluateAll((images) =>
      images
        .filter((image) => image.naturalWidth === 0 || image.naturalHeight === 0)
        .map((image) => image.getAttribute("src"))
    );
    expect(broken, `${file} has broken images`).toEqual([]);
  }
});

test("english guide library has 20+ practical guides with examples", async ({ page }) => {
  await page.goto(pagePath("guides.html"));
  const guideCount = await page.locator("[data-guide-card]").count();
  expect(guideCount).toBeGreaterThanOrEqual(20);

  const missingExamples = await page.locator("[data-guide-card]").evaluateAll((cards) =>
    cards
      .filter((card) => !card.querySelector(".example-box"))
      .map((card) => card.id || card.querySelector("h2")?.textContent || "untitled")
  );
  expect(missingExamples).toEqual([]);
});

test("production files do not contain blocked placeholders", () => {
  const blocked = [
    ["href=", '"', "#", '"'].join(""),
    ["href=", '"', '"'].join(""),
    ["javascript:", "void(0)"].join(""),
    ["TO", "DO"].join(""),
    ["local", "host"].join(""),
    ["127.0.0.", "1"].join(""),
    ["file:", "///Users"].join(""),
    ["lor", "em"].join(""),
    ["ip", "sum"].join(""),
    ["taiwanstarterguide", ".com"].join(""),
    ["you", "@", "example", ".", "com"].join(""),
    ["For ", "launch"].join(""),
    ["Static ", "demo"].join("")
  ];

  const problems = [];
  for (const file of sourceFiles) {
    const content = read(file);
    for (const item of blocked) {
      if (content.includes(item)) problems.push(`${file}: ${item}`);
    }
  }

  expect(problems).toEqual([]);
});
