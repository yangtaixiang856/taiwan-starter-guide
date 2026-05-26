const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0
});

const analyticsId = "G-SQV27NLLKX";

const uiText = {
  en: {
    cities: {
      taipei: "Taipei",
      "new-taipei": "New Taipei",
      taichung: "Taichung",
      tainan: "Tainan",
      kaohsiung: "Kaohsiung"
    },
    costEstimate: "monthly estimate",
    housing: "Housing",
    food: "food",
    transport: "transport",
    basics: "basics",
    buffer: "buffer",
    arrivalRunway: "Arrival runway:",
    arrivalRunwayText: "for three months plus two months of rent deposit.",
    residentEstimate: "resident estimate",
    taxableIncome: "Taxable income estimate:",
    deductionsUsed: "Deductions used:",
    marginalBracket: "Marginal bracket in this simplified model:",
    nonResidentEstimate: "non-resident estimate",
    nonResidentText: "Uses a simplified non-resident withholding estimate of",
    monthlyIncomeBasis: "based on average monthly income.",
    verifyTax: "Verify residency days, withholding, and income category with the tax office."
  },
  zh: {
    cities: {
      taipei: "台北",
      "new-taipei": "新北",
      taichung: "台中",
      tainan: "台南",
      kaohsiung: "高雄"
    },
    costEstimate: "每月估算",
    housing: "住房",
    food: "餐飲",
    transport: "交通",
    basics: "基本開銷",
    buffer: "緩衝金",
    arrivalRunway: "抵台準備金：",
    arrivalRunwayText: "約等於三個月生活費加上兩個月房租押金。",
    residentEstimate: "居住者估算",
    taxableIncome: "估算課稅所得：",
    deductionsUsed: "本試算使用扣除額：",
    marginalBracket: "此簡化模型的邊際稅率：",
    nonResidentEstimate: "非居住者估算",
    nonResidentText: "使用簡化的非居住者扣繳估算：",
    monthlyIncomeBasis: "依平均月收入判斷。",
    verifyTax: "請向國稅局確認在台天數、扣繳與所得類型。"
  }
};

function activeLocale() {
  return document.documentElement.lang.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function text() {
  return uiText[activeLocale()];
}

function initAnalytics() {
  if (!analyticsId || !window.location.protocol.startsWith("http")) return;
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", analyticsId, {
    send_page_view: true,
    anonymize_ip: true
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
  document.head.appendChild(script);
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    page_location: window.location.href,
    page_title: document.title,
    language: document.documentElement.lang || "en",
    ...params
  });
}

const costModel = {
  taipei: {
    name: "Taipei",
    housing: { shared: 12000, studio: 23000, "one-bed": 36000 },
    food: { lean: 9000, balanced: 13500, comfortable: 21000 },
    transport: 1600,
    basics: 6200
  },
  "new-taipei": {
    name: "New Taipei",
    housing: { shared: 9000, studio: 17000, "one-bed": 27000 },
    food: { lean: 8500, balanced: 12500, comfortable: 19000 },
    transport: 1900,
    basics: 5800
  },
  taichung: {
    name: "Taichung",
    housing: { shared: 8000, studio: 14500, "one-bed": 23000 },
    food: { lean: 8000, balanced: 11800, comfortable: 18000 },
    transport: 1400,
    basics: 5500
  },
  tainan: {
    name: "Tainan",
    housing: { shared: 7000, studio: 12500, "one-bed": 20000 },
    food: { lean: 7600, balanced: 11000, comfortable: 16500 },
    transport: 1300,
    basics: 5200
  },
  kaohsiung: {
    name: "Kaohsiung",
    housing: { shared: 7500, studio: 13500, "one-bed": 21000 },
    food: { lean: 7800, balanced: 11200, comfortable: 17000 },
    transport: 1350,
    basics: 5300
  }
};

const taxTables = {
  2026: {
    exemption: 101000,
    standardSingle: 136000,
    employmentDeduction: 227000,
    minWage: 29500,
    brackets: [
      { upTo: 590000, rate: 0.05, deduction: 0 },
      { upTo: 1330000, rate: 0.12, deduction: 41300 },
      { upTo: 2660000, rate: 0.2, deduction: 147700 },
      { upTo: 4980000, rate: 0.3, deduction: 413700 },
      { upTo: Infinity, rate: 0.4, deduction: 911700 }
    ]
  },
  2025: {
    exemption: 97000,
    standardSingle: 131000,
    employmentDeduction: 218000,
    minWage: 28590,
    brackets: [
      { upTo: 590000, rate: 0.05, deduction: 0 },
      { upTo: 1330000, rate: 0.12, deduction: 41300 },
      { upTo: 2660000, rate: 0.2, deduction: 147700 },
      { upTo: 4980000, rate: 0.3, deduction: 413700 },
      { upTo: Infinity, rate: 0.4, deduction: 911700 }
    ]
  }
};

function numberFrom(form, name, fallback = 0) {
  const value = Number(form.elements[name]?.value);
  return Number.isFinite(value) ? value : fallback;
}

function setResult(form, html) {
  const result = form.closest(".calculator-panel, .tool-card")?.querySelector("[data-result]");
  if (result) result.innerHTML = html;
}

function estimateCost(form) {
  const labels = text();
  const city = form.elements.city.value;
  const housingType = form.elements.housing.value;
  const lifestyle = form.elements.lifestyle.value;
  const buffer = Math.max(0, numberFrom(form, "buffer", 0));
  const model = costModel[city];
  const housing = model.housing[housingType];
  const food = model.food[lifestyle];
  const total = housing + food + model.transport + model.basics + buffer;
  const runway = total * 3 + housing * 2;

  setResult(
    form,
    `<span class="card-kicker">${labels.cities[city] || model.name} ${labels.costEstimate}</span>
     <strong>${money.format(total)}</strong>
     <p>${labels.housing} ${money.format(housing)} + ${labels.food} ${money.format(food)} + ${labels.transport} ${money.format(model.transport)} + ${labels.basics} ${money.format(model.basics)} + ${labels.buffer} ${money.format(buffer)}.</p>
     <p><b>${labels.arrivalRunway}</b> ${money.format(runway)} ${labels.arrivalRunwayText}</p>`
  );
}

function residentTax(income, dependents, extraDeductions, table) {
  const people = 1 + Math.max(0, dependents);
  const employment = Math.min(income, table.employmentDeduction);
  const deductions = table.exemption * people + table.standardSingle + employment + Math.max(0, extraDeductions);
  const taxable = Math.max(0, income - deductions);
  const bracket = table.brackets.find((item) => taxable <= item.upTo);
  const tax = Math.max(0, taxable * bracket.rate - bracket.deduction);
  return { tax, taxable, deductions, rate: bracket.rate };
}

function estimateTax(form) {
  const labels = text();
  const zh = activeLocale() === "zh";
  const year = form.elements.year.value;
  const table = taxTables[year];
  const days = numberFrom(form, "days", 0);
  const income = Math.max(0, numberFrom(form, "income", 0));
  const dependents = Math.max(0, numberFrom(form, "dependents", 0));
  const extraDeductions = Math.max(0, numberFrom(form, "extraDeductions", 0));

  if (days >= 183) {
    const estimate = residentTax(income, dependents, extraDeductions, table);
    setResult(
      form,
      `<span class="card-kicker">${year} ${labels.residentEstimate}</span>
       <strong>${money.format(estimate.tax)}</strong>
       <p>${labels.taxableIncome} <b>${money.format(estimate.taxable)}</b>. ${labels.deductionsUsed} ${money.format(estimate.deductions)}.</p>
       <p>${labels.marginalBracket} <b>${Math.round(estimate.rate * 100)}%</b>.</p>`
    );
    return;
  }

  const monthlyAverage = income / 12;
  const threshold = table.minWage * 1.5;
  const rate = monthlyAverage <= threshold ? 0.06 : 0.18;
  const tax = income * rate;

  setResult(
    form,
    `<span class="card-kicker">${year} ${labels.nonResidentEstimate}</span>
     <strong>${money.format(tax)}</strong>
     <p>${labels.nonResidentText} <b>${Math.round(rate * 100)}%</b>${zh ? "，" : " "}${labels.monthlyIncomeBasis}</p>
     <p>${labels.verifyTax}</p>`
  );
}

function initCalculators() {
  document.querySelectorAll("form[data-calculator]").forEach((form) => {
    const run = () => (form.dataset.calculator === "cost" ? estimateCost(form) : estimateTax(form));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      run();
      trackEvent("calculator_used", {
        calculator_type: form.dataset.calculator || "unknown"
      });
    });
    run();
  });
}

function initReadingProgress() {
  const bar = document.querySelector("[data-progress]");
  if (!bar) return;
  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initClickTracking() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const label = link.textContent.trim().replace(/\s+/g, " ").slice(0, 80);
    let targetUrl;
    try {
      targetUrl = new URL(href, window.location.href);
    } catch {
      return;
    }

    if (targetUrl.origin !== window.location.origin) {
      trackEvent("external_link_click", {
        link_url: targetUrl.href,
        link_text: label
      });
      return;
    }

    if (link.closest("[data-guide-card]")) {
      trackEvent("guide_card_link_click", {
        guide_id: link.closest("[data-guide-card]")?.id || "",
        link_url: targetUrl.pathname + targetUrl.hash,
        link_text: label
      });
      return;
    }

    if (link.classList.contains("button") || link.classList.contains("source-link") || link.dataset.betaFeedback) {
      trackEvent("internal_cta_click", {
        link_url: targetUrl.pathname + targetUrl.hash,
        link_text: label
      });
    }
  });
}

function initBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;
  const update = () => button.classList.toggle("visible", window.scrollY > 500);
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initTheme() {
  const button = document.querySelector("[data-theme-toggle]");
  const stored = safeStorageGet("tsg-theme");
  if (stored) document.documentElement.dataset.theme = stored;
  if (!button) return;
  button.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    safeStorageSet("tsg-theme", next);
  });
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return false;
  }
  return true;
}

const englishStopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "can",
  "do",
  "does",
  "for",
  "from",
  "get",
  "has",
  "have",
  "how",
  "i",
  "in",
  "is",
  "it",
  "my",
  "of",
  "on",
  "or",
  "should",
  "the",
  "to",
  "what",
  "when",
  "where",
  "who",
  "why",
  "with"
]);

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^\p{L}\p{N}\u4e00-\u9fff]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function searchTokens(query) {
  const normalized = normalizeSearchText(query);
  const tokens = [];

  for (const token of normalized.match(/[a-z0-9]+/g) || []) {
    if (token.length > 1 && !englishStopWords.has(token)) tokens.push(token);
  }

  for (const phrase of normalized.match(/[\u4e00-\u9fff]+/g) || []) {
    if (phrase.length <= 2) {
      tokens.push(phrase);
      continue;
    }
    for (let index = 0; index < phrase.length - 1; index += 1) {
      tokens.push(phrase.slice(index, index + 2));
    }
  }

  return [...new Set(tokens)];
}

function guideSearchMessage(shown, total) {
  const lang = document.documentElement.lang.toLowerCase();
  if (lang.startsWith("zh")) {
    return shown === 0 ? "沒有找到符合的指南。試試：銀行、稅務、健保、租屋。" : `顯示 ${shown} / ${total} 篇指南`;
  }
  if (lang.startsWith("id")) {
    return shown === 0 ? "Tidak ada panduan yang cocok. Coba: bank, pajak, NHI, sewa." : `Menampilkan ${shown} dari ${total} panduan`;
  }
  if (lang.startsWith("vi")) {
    return shown === 0 ? "Không tìm thấy hướng dẫn phù hợp. Thử: ngân hàng, thuế, NHI, thuê nhà." : `Đang hiển thị ${shown} / ${total} hướng dẫn`;
  }
  return shown === 0 ? "No matching guides. Try: bank, tax, NHI, rent, worker." : `Showing ${shown} of ${total} guides`;
}

function initGuideSearch() {
  const input = document.querySelector("[data-guide-search]");
  const cards = [...document.querySelectorAll("[data-guide-card]")];
  const filters = [...document.querySelectorAll("[data-guide-filter]")];
  if (!input || cards.length === 0) return;

  const status = document.createElement("p");
  status.className = "guide-search-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  const statusTarget = document.querySelector(".filter-row") || document.querySelector(".guide-search-wrap");
  statusTarget?.after(status);

  let activeFilter = "all";
  let searchTimer;
  const queueSearchEvent = () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      const query = input.value.trim();
      if (query.length >= 2) {
        trackEvent("guide_search", {
          search_term_length: query.length
        });
      }
    }, 900);
  };

  const apply = () => {
    const query = normalizeSearchText(input.value);
    const tokens = searchTokens(input.value);
    let shown = 0;
    cards.forEach((card) => {
      const searchable = normalizeSearchText([
        card.innerText,
        card.id,
        card.dataset.tags,
        card.dataset.keywords
      ].join(" "));
      const tags = normalizeSearchText(card.dataset.tags || "");
      const matchesQuery = !query || searchable.includes(query) || tokens.some((token) => searchable.includes(token));
      const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
      const visible = matchesQuery && matchesFilter;
      card.classList.toggle("is-hidden", !visible);
      if (visible) shown += 1;
    });
    document.body.classList.toggle("no-results", shown === 0);
    status.textContent = guideSearchMessage(shown, cards.length);
  };

  input.addEventListener("input", () => {
    apply();
    queueSearchEvent();
  });
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.guideFilter;
      trackEvent("guide_filter_click", {
        filter: activeFilter
      });
      apply();
    });
  });
  apply();
}

function initCopyLinks() {
  document.querySelectorAll("[data-copy-link]").forEach((button) => {
    const defaultText = button.textContent;
    const copiedText = button.dataset.copied || "Copied";
    button.addEventListener("click", async () => {
      const hash = button.dataset.copyLink;
      const url = `${window.location.origin}${window.location.pathname}${hash}`;
      try {
        await navigator.clipboard.writeText(url);
        trackEvent("copy_link", {
          copied_hash: hash || ""
        });
        button.textContent = copiedText;
        setTimeout(() => (button.textContent = defaultText), 1400);
      } catch {
        window.location.hash = hash;
      }
    });
  });
}

function initSignupForm() {
  const form = document.querySelector("[data-signup-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements.website?.value) return;

    const email = form.elements.email?.value.trim();
    const message = form.querySelector("[data-signup-message]");
    const formData = new FormData(form);
    formData.append("submittedAt", new Date().toISOString());
    formData.append("currentUrl", window.location.href);

    if (window.location.protocol.startsWith("http")) {
      trackEvent("newsletter_submit_attempt");
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
        .then((response) => {
          if (!response.ok) throw new Error("Newsletter submission failed");
          form.reset();
          trackEvent("newsletter_submit_success");
          if (message) message.textContent = "Thanks. You are on the beta update list.";
        })
        .catch(() => {
          trackEvent("newsletter_submit_fallback");
          if (message) message.textContent = "Signup failed, so your email app will open as a backup.";
          window.location.href = newsletterMailto(email);
        });
      return;
    }

    trackEvent("newsletter_submit_mailto");
    if (message) message.textContent = "Your email app should open now. Send the draft to join the beta update list.";
    window.location.href = newsletterMailto(email);
  });
}

function newsletterMailto(email) {
    const subject = encodeURIComponent("Join Taiwan Starter Guide beta updates");
    const body = encodeURIComponent(
      `Please add me to the Taiwan Starter Guide beta update list.\n\nEmail: ${email}\nPage: ${window.location.href}\n\nWhat I am most interested in:\n`
    );
  return `mailto:yangtaixiang856@gmail.com?subject=${subject}&body=${body}`;
}

function siteRootPrefix() {
  const path = window.location.pathname;
  if (/\/(?:zh-hant|id|vi)\/tools\//.test(path)) return "../../";
  if (/\/(?:guides|tools|zh-hant|id|vi)\//.test(path)) return "../";
  return "";
}

function feedbackMailto(recipient, data) {
  const subject = encodeURIComponent("Taiwan Starter Guide beta feedback");
  const body = encodeURIComponent(
    `Page: ${data.page || window.location.href}\nName: ${data.name || ""}\nEmail: ${data.email || ""}\nType: ${data.type || ""}\nSource: ${data.source || ""}\n\nMessage:\n${data.message || ""}\n`
  );
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

function initFeedbackForm() {
  const form = document.querySelector("[data-feedback-form]");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const pageInput = form.querySelector("[data-feedback-page]");
  if (pageInput && !pageInput.value) pageInput.value = params.get("from") || document.referrer || "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements.website?.value) return;

    const message = form.querySelector("[data-feedback-message]");
    const endpoint = form.dataset.feedbackEndpoint?.trim();
    const recipient = form.dataset.feedbackRecipient || "yangtaixiang856@gmail.com";
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    formData.append("submittedAt", new Date().toISOString());
    formData.append("currentUrl", window.location.href);

    if (endpoint || window.location.protocol.startsWith("http")) {
      try {
        trackEvent("feedback_submit_attempt", {
          feedback_type: String(data.type || "")
        });
        const response = await fetch(endpoint || "/", {
          method: "POST",
          headers: endpoint
            ? { Accept: "application/json" }
            : { "Content-Type": "application/x-www-form-urlencoded" },
          body: endpoint ? formData : new URLSearchParams(formData).toString()
        });
        if (!response.ok) throw new Error("Feedback endpoint failed");
        form.reset();
        trackEvent("feedback_submit_success", {
          feedback_type: String(data.type || "")
        });
        if (pageInput) pageInput.value = params.get("from") || document.referrer || "";
        if (message) message.textContent = "Thanks. Your feedback was sent.";
        return;
      } catch {
        trackEvent("feedback_submit_fallback", {
          feedback_type: String(data.type || "")
        });
        if (message) message.textContent = "Automatic delivery failed, so your email app will open as a backup.";
      }
    } else if (message) {
      trackEvent("feedback_submit_mailto", {
        feedback_type: String(data.type || "")
      });
      message.textContent = "Automatic delivery is not connected yet. Your email app will open as a backup.";
    }

    window.location.href = feedbackMailto(recipient, data);
  });
}

function initBetaMode() {
  const header = document.querySelector(".site-header");
  const brand = document.querySelector(".brand");
  if (!header || !brand) return;

  const zh = activeLocale() === "zh";
  if (!brand.querySelector(".beta-badge")) {
    const badge = document.createElement("span");
    badge.className = "beta-badge";
    badge.textContent = zh ? "測試版" : "Beta";
    brand.appendChild(badge);
  }

  if (!header.querySelector("[data-beta-feedback]")) {
    const feedback = document.createElement("a");
    feedback.className = "beta-feedback";
    feedback.dataset.betaFeedback = "true";
    feedback.href = `${siteRootPrefix()}contact.html?from=${encodeURIComponent(window.location.href)}#feedback`;
    feedback.textContent = zh ? "回報問題" : "Send feedback";

    const actions = header.querySelector(".nav-actions") || header;
    actions.appendChild(feedback);
  }
}

initAnalytics();
initBetaMode();
initTheme();
initReadingProgress();
initBackToTop();
initClickTracking();
initGuideSearch();
initCopyLinks();
initSignupForm();
initFeedbackForm();
initCalculators();
