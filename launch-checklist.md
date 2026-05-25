# Taiwan Starter Guide Launch Checklist

Last checked: 2026-05-24

## 2026-05-24 GitHub + Netlify Launch Prep

### 已通過項目

- 專案根目錄確認為 `/Users/yangtaixiang/Documents/Codex/2026-05-19/codex-google`。
- Netlify publish directory 確認為 `public`，`public/index.html`、`public/sitemap.xml`、`public/robots.txt`、`public/contact.html`、`public/privacy.html`、`public/disclaimer.html`、`public/sources.html`、`public/how-we-verify.html` 都存在。
- `netlify.toml` 已設定 `publish = "public"`，build command 為 `npm run build`。
- `package.json` 已保留靜態建置流程：`npm run build` 會執行 `scripts/build-netlify.sh`。
- `robots.txt` 允許搜尋引擎爬取，並指向 `https://heroic-speculoos-e83aec.netlify.app/sitemap.xml`。
- `sitemap.xml` 使用目前 Netlify beta URL 作為 production base URL，且 sitemap 內頁面都能對應到 `public/` 實際檔案。
- `public/_redirects` 已包含常見不帶 `.html` 的 guide / tool URL 轉址，降低 Netlify 上 404 風險。
- `public/_headers` 已存在，安全 header 與 assets cache 設定可隨 `public/` 一起部署。
- Newsletter 與 beta feedback 表單皆符合 Netlify Forms 基本要求：`name`、`method="POST"`、`data-netlify="true"`、hidden `form-name`、honeypot、`/success.html` action。
- 已重新建置 `public/`，並通過本機靜態部署驗收：31 個 HTML、38 個 public 檔案、內部連結、錨點、圖片、scripts、styles、Netlify Forms、sitemap、robots、canonical、external link `target/rel`、redirect targets 全部通過。
- 已建立最新版 Netlify Drop 部署包：`taiwan-starter-guide-netlify-production.zip`，zip 內容以 `public/` 內檔案作為根目錄，可直接上傳 Netlify。
- 已新增 `go-live-profit-test-plan.md`，整理新手上線流程、Netlify Forms 設定、Google Search Console、前 30/90 天盈利測試策略與 affiliate 啟動門檻。
- 已新增 `beta-outreach-kit.md`，提供英文/中文 beta 測試邀請文、社群貼文、使用者訪談問題與第一週指標表。
- 已加入 Google Search Console HTML file verification：`googlec1bda2f350467e34.html`，建置後會出現在網站根目錄。
- 全站正式檔案未掃到 hash-only href、空 href、void JavaScript placeholder、未完成標記、placeholder Latin text、本機測試網址或本機檔案路徑。
- Playwright 測試檔可正常載入，共 46 個測試，包含頁面開啟、連結、guide cards、搜尋、dark mode、language switcher、forms、mobile overflow、sitemap 與 placeholder 掃描。
- JavaScript 語法檢查通過：`assets/site.js`、`tests/launch.spec.js`、`playwright.config.js`。

### 已修正項目

- `README.md` 與 `NETLIFY-DEPLOY.md` 的 Netlify build command 已同步為 `npm run build`，避免文件與 `netlify.toml` 不一致。
- `.gitignore` 已補齊：`node_modules/`、`.env`、`.env.*`、`.DS_Store`、`playwright-report/`、`test-results/`、`coverage/`、`.netlify/`、`public/`、暫存資料夾與壓縮檔都會被忽略。
- `beta-test-plan.md` 已移除本機檔案測試路徑，改成目前 Netlify beta URL。
- Playwright placeholder 掃描已加入本機檔案路徑檢查。
- Playwright config 已改為預設使用 Playwright 安裝的瀏覽器；只有設定 `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` 時才使用系統瀏覽器。

### 測試狀態

- `npm install` 在目前 Codex 環境無法執行，原因是此環境沒有 `npm` 指令。
- 已使用 bundled Node 執行靜態驗收，結果通過。
- 已使用 bundled Playwright 列出測試，46 個測試可被正確載入。
- 完整 Playwright 瀏覽器測試目前未能完成，原因是此環境缺少 Playwright Chromium browser executable；請在你的本機終端執行 `npm install`、`npx playwright install`、`npm test` 再跑一次。

### Git / Netlify 狀態

- Git 初始化已嘗試，但目前 Codex 環境建立 `.git` 時回傳 `Operation not permitted`，需要在你的本機終端手動執行 Git 初始化與 commit。
- 尚未 push 到 GitHub；需要先建立 GitHub repository，建議名稱 `taiwan-starter-guide`。
- Netlify CLI 目前未安裝；若要用 CLI 部署，需要在本機有 Node/npm 後安裝並登入 Netlify。
- 尚未進行 Netlify CLI deploy；需要 Netlify login / link 或 GitHub connected deploy，不能假裝已部署。

### 仍需人工確認

- 上線前請再用官方來源逐條確認 tax、183-day rule、ARC、NHI、student work permit、labor、banking 相關頁面。
- 用你的本機或 GitHub Actions 跑完整 Playwright 瀏覽器測試。
- 在 Netlify Dashboard 確認 Forms 偵測到 `newsletter` 與 `beta-feedback`，並確認 email notifications 寄到正確信箱。
- 若改成自訂網域，需更新 canonical、Open Graph URL、sitemap、robots、Netlify site URL 與 Google Search Console 設定。

## 2026-05-22 正式上線前全站驗收

### 已通過項目

- 正式頁面存在並可被靜態驗證：31 個頁面已檢查，包含首頁、英文指南、繁中頁、印尼文入口、越南文入口、工具頁、contact、privacy、disclaimer、sources、how-we-verify、work-in-taiwan。
- 所有內部連結、頁內錨點、CSS、JS、圖片路徑已通過靜態檢查。
- 導覽列與頁尾連結沒有空連結、假連結或無效 JS 連結。
- 首頁 CTA 已指向有效位置：guides、checklist、cost tool、tax tool、newsletter。
- 英文 `guides.html` 有 21 張 guide card；每張都有 short answer 與 realistic example。
- 已有完整 SEO 頁的 guide card 會連到對應頁：SIM/eSIM、cost of living、EasyCard/transportation、ARC、NHI、tax、183-day rule、renting、banking、student work permit。
- guide search 的新增英文 guide 關鍵字已存在於索引內容中：`esim`、`cost taipei`、`easycard`、`work permit`、`nhi`、`arc`。
- 圖片檔 `assets/taipei-skyline.jpg` 存在且非空檔。
- `robots.txt` 允許搜尋引擎爬取，並指向正式 Netlify beta sitemap。
- `sitemap.xml` 已包含所有正式公開頁面；語言首頁使用 `/zh-hant/`、`/id/`、`/vi/` 這種 canonical 資料夾首頁格式。
- Newsletter 與 feedback 表單都有 Netlify Forms 設定、hidden `form-name`、honeypot 與 `/success.html` action。
- `privacy.html`、`disclaimer.html`、`sources.html`、`how-we-verify.html` 都有正常內部連結。
- 稅務、183-day rule、ARC、NHI、student work permit、banking、tax estimator 都有 disclaimer / educational wording 與 official sources 區塊或來源清單。
- 已重新建置 `public/`，Netlify 發布資料夾已同步正式檔案。

### 已修正項目

- 修正 `tests/launch.spec.js` 裡 Netlify Forms 測試的一個 typo，避免表單檢查邏輯不乾淨。
- 調整測試檔內 placeholder email 的寫法，避免全站 placeholder 掃描誤報。
- 重新跑靜態驗收後通過：31 pages、21 guide cards、internal links、anchors、forms、sitemap、robots、images、JSON-LD、sensitive-topic markers 全部 OK。

### 測試狀態

- JavaScript 語法檢查通過：`assets/site.js`、`tests/launch.spec.js`、`playwright.config.js`。
- Playwright 測試清單可正常載入，共 46 個測試。
- 完整 Playwright 瀏覽器測試在目前 Codex 沙盒中無法完成，原因是本機 Chrome headless 啟動後被環境阻擋，錯誤為 `kill EPERM / SIGABRT`。這是本機測試環境限制，不是網站內容、連結或表單驗收失敗。
- 已用靜態驗收補足：頁面存在、內部連結、錨點、圖片檔、Netlify Forms、sitemap、robots、JSON-LD 與敏感頁標記都已通過。

### 還需要人工確認的官方來源

- Tax filing / 183-day rule：請用 Ministry of Finance、eTax、National Taxation Bureau 最新年度資料再確認 filing season、文件、稅率與線上報稅方式。
- ARC / resident certificate：請用 National Immigration Agency 最新資料確認不同身分類別、文件、費用、處理時間、地址變更與延長居留規則。
- NHI：請用 National Health Insurance Administration 最新資料確認外籍學生、工作者、眷屬、等待期、加保單位、健保卡與臨時看診文件。
- Student work permit：請用 Workforce Development Agency、Ministry of Labor、Ministry of Education 與學校國際處確認學生類別、文件、工時限制、寒暑假例外與處理時間。
- Banking：請用 Banking Bureau / FSC 與各銀行最新英文頁確認外國人開戶文件、分行要求、手機號碼、地址與 AML / KYC 要求。
- Renting：請再確認 Ministry of the Interior 租約範本、租賃用電規則與各租屋平台連結是否最新。
- Transport：請再確認 EasyCard、Taipei Metro、YouBike、TRA、THSR、airport transport 的票價、規則與連結。

### 還不建議公開推廣的地方

- 可以給朋友、小群組、學校窗口做 beta 測試，但還不建議大規模投放廣告或大量貼社團。
- 不建議現在申請或依賴 AdSense；內容深度與搜尋流量仍需要時間。
- 不建議加入 remittance、信用卡、貸款、投資、保險或金融產品 affiliate。
- 不建議開放印尼文與越南文給真實目標族群大規模使用，除非有母語者與官方來源校對。
- 上線正式推廣前，請在真機手機再次手動檢查首頁、guides、cost tool、tax tool、contact form，特別是 390px 左右寬度是否有擁擠或橫向滑動。
- 若改自訂網域，必須更新 canonical、sitemap、robots、Open Graph URL、Netlify 設定與 Search Console。

## 已完成

- 首頁 CTA 已指向實際頁面或實際頁內區塊：guides、checklist、tools、newsletter 都可被連到。
- 必要頁面已存在：`guides.html`、`tools/cost-of-living.html`、`tools/tax-estimator.html`、`contact.html`、`privacy.html`、`disclaimer.html`、`sources.html`。
- 聯絡頁已改成清楚可點的 `mailto:yangtaixiang856@gmail.com`，本機測試不會再寄到假信箱。
- 稅務工具頁已加入明確免責聲明：內容僅供參考，實際以財政部、國稅局、移民署、勞動部與其他主管機關公告為準。
- 全站 footer 已補上資訊免責聲明，英文、繁中、印尼文、越南文頁面都有頁尾。
- `robots.txt` 與 `sitemap.xml` 已更新為目前 Netlify Beta 網域 `https://heroic-speculoos-e83aec.netlify.app`，並補上 contact、privacy、disclaimer。
- 已新增 Netlify 部署設定：`netlify.toml`、`scripts/build-netlify.sh`、`NETLIFY-DEPLOY.md`。
- Netlify 發布資料夾設定為 `public`，建置腳本只複製正式公開檔案，避免測試檔與 checklist 直接公開。
- 已掃描並清除空連結、假連結、測試文字、舊網域與本機測試網址。
- 已補強手機版 CSS：導覽列可換行，語言切換不會撐寬頁面，整體避免水平溢出。
- 已加入 Playwright 上線檢查：頁面開啟、內部連結、圖片、手機橫向溢出、深色模式、語言切換、指南搜尋、測試文字掃描。
- Playwright 測試已升級為正式測試套件：包含主要頁面開啟、nav 空連結、internal link HTTP 狀態、guide card actions、語言切換、dark mode、英文 guide search、Netlify Forms、390px mobile overflow、sitemap URL 對應檢查。
- `package.json` 已新增 npm scripts：`test`、`test:ui`、`test:report`，並保留 `test:launch`。
- 英文指南已補強到 21 篇，並且每篇都有 clear title、short answer、practical explanation、realistic example。
- 已把 10 篇高搜尋價值英文指南拆成獨立 SEO 頁：tax filing、183-day tax rule、ARC、NHI、renting、banking、SIM/eSIM、Taipei/New Taipei cost of living、EasyCard/transportation、international student work permit。
- 獨立英文文章頁已加入可見 breadcrumb 與 `BreadcrumbList` 結構化資料。
- 已新增 `how-we-verify.html`，說明官方來源、更新政策、例子寫法與敏感主題處理方式。
- 5 篇核心英文 SEO 頁已補上「Official sources checked 2026-05-20」標記與更具體的官方來源檢查段落。
- 稅務頁已補 eTax required documents、taxation offices、線上報稅失敗時的實務處理提醒。
- 183-day tax rule 頁已補 eTax 對 90 天、183 天與 taxable year 的官方邏輯摘要。
- ARC 頁已重新整理為保守版英文 SEO 頁，補上 educational only、rules may change、check official sources、school/employer questions、common mistakes、what to do next 與 NIA official sources。
- NHI 頁已重新整理為保守版英文 SEO 頁，補上 educational only、rules may change、check official sources、insured unit 問題、clinic/card handling reminders 與 NHIA official sources。
- International student work permit 已新增完整英文 SEO 頁，保守說明學生兼職前要先問學校、確認 WDA 官方系統、工作時數與核准狀態，不保證結果。
- 租屋頁已補內政部租賃用電規則、政府租約範本、租屋前應問房東的實務清單。
- 租屋頁已補常用租屋平台：學校住房板、591、Rakuya、Facebook groups、Tealit、仲介，並加入中文租屋關鍵字與看房訊息範本。
- 銀行開戶已新增完整英文 SEO 頁，補上外國人較實用的開戶路線、建議先嘗試的銀行類型、文件清單、分行策略與帳戶安全提醒。
- SIM/eSIM 已新增完整英文 SEO 頁，補上機場到達、旅遊 SIM、eSIM、台灣門號、熱點分享、長約前測訊號與常見錯誤。
- Taipei / New Taipei cost of living 已新增完整英文 SEO 頁，補上第一個月成本、租屋差異、通勤判斷、生活費分類與搬家前檢查。
- EasyCard / transportation 已新增完整英文 SEO 頁，補上 EasyCard、iPASS、MRT、公車、YouBike、TRA、HSR、機場到市區與常見錯誤。
- 繁中版已新增 2 篇完整深度頁：租屋指南與銀行開戶指南，方便站長、台灣朋友、學校窗口或雇主檢查內容是否合理。
- 繁中指南總覽已補強租屋與銀行卡片，加入真實情境、台灣常用平台與「看完整指南」連結。
- 已進入 Beta 測試版：全站 header 會顯示 Beta / 測試版標記。
- 已加入全站回饋入口，點擊後會導向 `contact.html#feedback` 並帶入目前頁面網址。
- 首頁 newsletter 欄位已改成 Netlify Forms；部署後會在 Netlify Forms 裡留下 submission，本機測試時使用 mailto 備援。
- `contact.html` 已新增 Netlify Forms 回饋表單；部署後可在 Netlify 後台查看 submissions，並設定 email notification。
- 全站 `Send feedback / 回報問題` 已改成導向 `contact.html#feedback`，並帶入原頁面網址。
- 已新增 `beta-test-plan.md`，可直接拿去邀請朋友做 5 分鐘測試。
- `contact.html` 已補 Beta 回饋清單，方便朋友知道要回報什麼。
- 繁中、印尼文、越南文指南頁目前內容較少，已移除容易讓人誤會的分類篩選，只保留搜尋；英文版因有 20+ 篇指南，仍保留分類篩選。
- Playwright 測試已新增英文指南數量與 realistic example 檢查。
- 已完成本機靜態驗證：HTML 內部連結、錨點、資源引用、JSON-LD、sitemap 網域、JavaScript 語法皆通過。
- 已新增 `AGENTS.md`，把 Taiwan Starter Guide 的語言策略、內容深度標準、敏感主題免責、SEO 檢查與 checklist 更新規則整理成 Codex 工作規則。
- 已新增 `monetization-roadmap.md`，整理前 30 天不放廣告、前 90 天不依賴 AdSense、低風險 affiliate 類別、適合與不適合放推薦的頁面、揭露文字與啟動門檻；目前沒有加入任何 affiliate link。

## 本次新增與強化的英文指南

| 指南 | Realistic example | 需人工確認官方來源 |
| --- | --- | --- |
| What should I prepare before moving to Taiwan? | Yes | No |
| How do I get a SIM or eSIM in Taiwan? | Yes | No |
| What is an ARC or resident certificate? | Yes | Yes, National Immigration Agency |
| How does National Health Insurance work for foreigners? | Yes | Yes, National Health Insurance Administration |
| What should I check before renting a room in Taiwan? | Yes | No |
| How much does it cost to live in Taipei or New Taipei? | Yes | No |
| How do foreigners open a bank account in Taiwan? | Yes | No |
| How do EasyCard and transportation work in Taiwan? | Yes | No |
| How do foreigners file income tax in Taiwan? | Yes | Yes, Ministry of Finance / eTax |
| What is the 183-day tax rule in Taiwan? | Yes | Yes, Ministry of Finance / eTax |
| Do I need a work permit in Taiwan? | Yes | Yes, Workforce Development Agency / Ministry of Labor |
| What should I check before signing a job contract? | Yes | Yes, Ministry of Labor or local labor office |
| How should I track salary records and payslips? | Yes | Yes, Ministry of Labor or local labor office |
| What should I know about overtime and leave? | Yes | Yes, Ministry of Labor or local labor office |
| What emergency contacts should I save in Taiwan? | Yes | No |
| How do I ask for help at school? | Yes | Yes, if tied to ARC, work permits, NHI, or tax |
| How do convenience stores work in Taiwan? | Yes | No |
| What basic Chinese phrases help daily life? | Yes | No |
| What common mistakes do foreigners make in Taiwan? | Yes | Yes, for any official-rule claims |
| Where should I verify official Taiwan information? | Yes | Yes, all agency links before production |
| What should foreign workers check first? | Yes | Yes, Ministry of Labor and worker support channels |

## 已拆出的獨立 SEO 英文頁

| 獨立頁 | 對應搜尋意圖 | 狀態 |
| --- | --- | --- |
| `guides/taiwan-tax-for-foreigners.html` | Taiwan income tax for foreigners / how to file tax in Taiwan | 已完成，含 Article + FAQ JSON-LD |
| `guides/183-day-tax-rule.html` | Taiwan 183-day tax rule / tax resident Taiwan | 已完成，含 Article + FAQ JSON-LD |
| `guides/arc-resident-certificate.html` | Taiwan ARC / resident certificate for foreigners | 已完成，含 Article + FAQ + Breadcrumb JSON-LD |
| `guides/nhi-for-foreigners.html` | Taiwan NHI for foreigners / health insurance Taiwan | 已完成，含 Article + FAQ + Breadcrumb JSON-LD |
| `guides/renting-room-in-taiwan.html` | renting in Taiwan as a foreigner / shared room Taiwan | 已完成，含 Article JSON-LD |
| `guides/opening-bank-account-in-taiwan.html` | open bank account Taiwan foreigner / Taiwan bank account ARC | 已完成，含 Article + FAQ JSON-LD |
| `guides/sim-card-esim-taiwan.html` | Taiwan SIM card for foreigners / Taiwan eSIM / airport SIM Taiwan | 已完成，含 Article + FAQ + Breadcrumb JSON-LD |
| `guides/cost-of-living-taipei-new-taipei.html` | cost of living Taipei / New Taipei rent budget / Taiwan newcomer budget | 已完成，含 Article + FAQ + Breadcrumb JSON-LD |
| `guides/easycard-transportation-taiwan.html` | EasyCard Taiwan / Taiwan transportation for foreigners / MRT bus YouBike guide | 已完成，含 Article + FAQ + Breadcrumb JSON-LD |
| `guides/work-permit-international-students.html` | Taiwan student work permit / international student part-time job Taiwan | 已完成，含 Article + FAQ + Breadcrumb JSON-LD |
| `zh-hant/guides/renting-room-in-taiwan.html` | 繁中內容檢查 / 台灣租屋平台 / 外國人租屋注意事項 | 已完成，含 Article + Breadcrumb JSON-LD |
| `zh-hant/guides/opening-bank-account-in-taiwan.html` | 繁中內容檢查 / 外國人開戶文件 / 銀行分行策略 | 已完成，含 Article + FAQ + Breadcrumb JSON-LD |
| `how-we-verify.html` | trust / editorial standards / how information is verified | 已完成，含 Article JSON-LD |

## 本次官方來源補強

| 頁面 | 已補強內容 | 上線前人工確認 |
| --- | --- | --- |
| `guides/taiwan-tax-for-foreigners.html` | eTax alien tax、required documents、tax offices、線上報稅失敗時的備案 | 檢查最新 filing season 是否仍使用相同文件與線上系統 |
| `guides/183-day-tax-rule.html` | taxable year、90 天、183 天、resident/non-resident 思考方式 | 用 eTax 最新年度說明重新核對 |
| `guides/arc-resident-certificate.html` | NIA 英文站、學生線上居留申請、NIA 學生申請入口、外僑居留期間小叮嚀 | 確認不同身分別文件、費用、處理時間、地址變更與延長居留規則 |
| `guides/nhi-for-foreigners.html` | NHIA 英文站、加保資訊、外籍人士 ARC 加保、健保卡申請程序 | 確認工作者、學生、眷屬各自最新條件、等待期、加保單位與臨時看診文件 |
| `guides/renting-room-in-taiwan.html` | 內政部租賃用電規則、租約範本、押金/用電/地址問題清單 | 檢查各縣市英文租約與法律扶助聯絡方式 |
| `guides/opening-bank-account-in-taiwan.html` | 銀行局開戶資訊、國泰世華外籍客戶頁、玉山開戶預約頁、文件與分行策略 | 檢查最新銀行開戶文件要求與各銀行英文頁是否仍有效 |
| `guides/sim-card-esim-taiwan.html` | 中華電信旅遊預付卡/eSIM、台灣大哥大旅遊 SIM、機場購買與長期方案注意事項 | 檢查各電信資費、機場櫃位、eSIM/實體 SIM 條款與台灣門號是否仍有效 |
| `guides/cost-of-living-taipei-new-taipei.html` | 591、Rakuya、台北捷運、悠遊卡來源，用於租金與交通費估算邏輯 | 檢查最新租屋市場價格、捷運票價與生活費區間後再對外宣傳 |
| `guides/easycard-transportation-taiwan.html` | 悠遊卡、台北捷運、YouBike、台鐵電子票證規則、高鐵票價來源 | 檢查最新票價、YouBike 註冊方式、台鐵電子票證限制與高鐵票務規則 |
| `guides/work-permit-international-students.html` | WDA EZ Work Permit、EZ Work Taiwan 外籍學生兼職頁、WDA 學生工作時數提醒、MOE Study in Taiwan FAQ | 確認學生身分別、文件、費用、處理時間、工作時數、寒暑假例外與學校內部審核流程 |
| `zh-hant/guides/renting-room-in-taiwan.html` | 繁中租屋平台、租屋中文關鍵字、押金/電費/可收信提醒 | 確認各平台連結與內政部租約/電費資訊仍有效 |
| `zh-hant/guides/opening-bank-account-in-taiwan.html` | 繁中銀行開戶文件、分行策略、國泰世華與玉山來源 | 確認最新銀行開戶文件要求與各銀行英文頁是否仍有效 |

## 連結檢查狀態

- 目前沒有掃到空連結、假分享連結、無效 JS 連結、本機測試網址、假文、舊正式網域或測試 email。
- `sitemap.xml` 已加入 10 篇獨立英文 SEO 頁與 2 篇繁中深度頁；`guides.html` 的 JSON-LD `hasPart` 已把核心深度頁導向正式獨立 URL。

## 待人工確認

- 若未來改成自訂網域，請把 `https://heroic-speculoos-e83aec.netlify.app` 換成新正式網域後，再重新產生並提交 sitemap。
- 真實聯絡信箱已改為 `yangtaixiang856@gmail.com`；正式上線前仍可再換成品牌信箱。
- 部署到 Netlify 後，確認 Forms 裡有偵測到 `newsletter` 與 `beta-feedback`。
- 在 Netlify Forms 後台設定 email notifications，表單才會自動寄到你的收件匣。
- 安裝 Node 套件與 Playwright 瀏覽器後執行：`npm install`、`npx playwright install`、`npm run test:launch`。
- 用真機手機檢查首頁、指南頁、生活費工具、稅務工具，確認沒有文字過大、按鈕太擠或橫向滑動。
- 稅務、健保、移民、勞動相關內容上線前，請再用官方網站逐條核對。
- 若要開放印尼文與越南文頁面給真實使用者，建議找母語者校稿。
- 若未來加入 affiliate 或廣告，請補上合作揭露、隱私政策與追蹤工具說明。
- 開始任何 affiliate 測試前，請先確認平台條款、台灣流量是否可用、追蹤方式、佣金規則與 disclosure 是否已放在推薦區塊附近。

## Netlify 部署檢查 - 2026-05-23

- 已確認 `netlify.toml` 使用 `public` 作為 publish 目錄，build command 為 `npm run build`。
- 已確認 `public/` 會包含首頁、指南頁、工具頁、語言入口、`robots.txt`、`sitemap.xml`、`success.html`、資源檔與 Netlify `_redirects`。
- 已新增 `_redirects`，支援常見不帶 `.html` 的指南與工具網址轉向正式 `.html` 頁，降低手動輸入網址造成 404 的風險。
- 已新增 `_headers`，讓 Netlify Drop 上傳時也能套用與 `netlify.toml` 類似的安全 headers 與資源快取設定。
- 已更新 `scripts/build-netlify.sh`，建置時會把 `_headers` 與 `_redirects` 複製到 `public/`。
- 已確認 `newsletter` 與 `beta-feedback` 表單符合 Netlify Forms 基本要求：`name`、`method="POST"`、`data-netlify="true"`、honeypot、hidden `form-name`、`/success.html` action。
- 已確認 `sitemap.xml` 與 `robots.txt` 使用目前正式 Netlify 網址 `https://heroic-speculoos-e83aec.netlify.app`。
- 已確認 canonical / hreflang / Open Graph URL 沒有使用本機測試網址或範例網域。
- 已重新建置 `public/`，並通過靜態部署檢查：31 個 HTML、38 個部署檔、sitemap、robots、forms、redirects、headers、站內連結與內部資源皆可對應到實際檔案。
- 已建立乾淨的 Netlify Drop 上傳包：`taiwan-starter-guide-netlify-ready-v2.zip`。請使用這個新檔或直接上傳 `public/` 內容，不要使用舊的 `taiwan-starter-guide-netlify-upload.zip`。
- 不建議加入 `/* /index.html 200` SPA fallback，因為本專案是多頁靜態網站；加上 fallback 會讓錯誤網址假裝成功，對 SEO 和除錯都不好。

## Prepare Before Moving to Taiwan SEO Page - 2026-05-25

- 已新增英文 SEO 入口頁：`guides/prepare-before-moving-to-taiwan.html`。
- 已加入 SEO title、meta description、canonical、Open Graph、Article JSON-LD、FAQ JSON-LD、Breadcrumb JSON-LD。
- 已加入 short answer、適用對象、來台前 checklist、抵台後 7 天 checklist、抵台後 30 天 checklist、新人類型比較表、兩個 realistic examples、common mistakes、next steps、official sources、敏感內容 disclaimer。
- 已從首頁 featured guide 區塊與 newcomer checklist CTA 連到新頁。
- 已更新英文 `guides.html` 摘要卡與 guide search tags，搜尋 `prepare`、`moving`、`first 30 days`、`airport`、`phone`、`ARC`、`NHI` 都應能找到此卡。
- 已更新 `sitemap.xml`，加入 `https://heroic-speculoos-e83aec.netlify.app/guides/prepare-before-moving-to-taiwan.html`。
- 已更新 `sources.html`，補入 Taiwan Taoyuan International Airport 與 Taoyuan Metro Airport MRT 官方來源。
- 已在 `competitor-benchmark.md` 標註第一優先建議已執行。
- 已重新建置 `public/`，本機靜態驗收通過：32 個 HTML 檔、31 個 sitemap URL、新頁內部連結、錨點、JSON-LD、Netlify Forms 標記、placeholder 掃描皆通過。
- `npm test` 尚未能在此環境執行，原因是目前 Codex 環境沒有 `npm` 指令；請在本機終端補跑 `npm install`、`npx playwright install`、`npm test`。
- 仍需人工確認：NIA、NHIA、MOE、WDA、eTax、Taoyuan Airport、Taoyuan Metro、Taipei Metro、EasyCard 等官方頁面的最新路徑與規則是否仍正確，尤其是 ARC、NHI、學生/工作者身分流程與抵台交通資訊。

## Emergency Contacts in Taiwan SEO Page - 2026-05-25

- 已新增英文 SEO 頁：`guides/emergency-contacts-taiwan.html`。
- 已加入 SEO title、meta description、canonical、Open Graph、Article JSON-LD、FAQ JSON-LD、Breadcrumb JSON-LD。
- 已加入 short answer、適用對象、可點擊電話表、中文地址卡、簡單中英文求助句、常見情境、兩個 realistic examples、common mistakes、next steps、official sources、disclaimer。
- 已從首頁 featured guide 區塊與英文 `guides.html` emergency card 連到新頁。
- 已更新英文 guide search tags，搜尋 `emergency`、`119`、`110`、`hotline`、`address card` 應能找到此卡。
- 已更新 `sitemap.xml` 與 `_redirects`，加入 `https://heroic-speculoos-e83aec.netlify.app/guides/emergency-contacts-taiwan.html`。
- 已更新 `sources.html`，補入 National Police Agency 110 / 113 / 165、Taipei City Police emergency FAQ、WDA 1955、NIA 1990、MOHW 1925 官方來源。
- 仍需人工確認：110、119、113、165、1955、1990、1925 的最新服務範圍、語言支援與官方頁面路徑；尤其 1925 的英文或多語支援需要保守看待。
