const { chromium } = require("@playwright/test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.SITE_URL || "http://127.0.0.1:4000";
const production = "https://cucc30509-crypto.github.io";
const routes = ["/", "/work/", "/services/", "/contact/", "/work/pecan-street-plumbing/", "/work/waterloo-dental/", "/work/sempl-crm/", "/404.html"];
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ["--no-sandbox"] });
  try {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      for (const route of routes) {
        const response = await page.goto(base + route, { waitUntil: "networkidle" });
        assert.equal(response.status(), 200, route);
        assert.equal(await page.locator("h1").count(), 1, route + " H1");
        assert.equal(await page.locator("link[rel=canonical]").getAttribute("href"), production + route, route + " canonical");
        assert.ok(await page.locator("meta[name=description]").getAttribute("content"));
        assert.equal(await page.locator('meta[property="og:url"]').getAttribute("content"), production + route);
        const links = await page
          .locator("#navbarNav a.nav-link")
          .evaluateAll((nodes) => nodes.map((n) => ({ text: n.textContent.replace("(current)", "").trim(), href: n.getAttribute("href") })));
        assert.deepEqual(links, [
          { text: "Home", href: "/" },
          { text: "Work", href: "/work/" },
          { text: "Services", href: "/services/" },
          { text: "Contact", href: "/contact/" },
        ]);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route + " horizontal overflow at " + width);
        for (const href of await page
          .locator("a[href], link[rel=stylesheet], script[src], img[src]")
          .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href") || n.getAttribute("src")))) {
          const url = new URL(href, base + route);
          if (url.origin !== base && url.origin !== production) continue;
          if (url.pathname === route && url.hash) continue;
          const local = path.join("_site", decodeURIComponent(url.pathname));
          assert.ok(fs.existsSync(local) || fs.existsSync(path.join(local, "index.html")), route + " missing local target: " + url.pathname);
        }
        if (route.startsWith("/work/") && route !== "/work/") {
          assert.match(await page.locator("main, [role=main]").innerText(), /Independent Portfolio Study/);
          assert.match(await page.locator("main, [role=main]").innerText(), /No ranking, traffic, conversion, or revenue results are claimed/);
        }
        if (route === "/work/") assert.equal(await page.locator(".sorbet-work-card").count(), 3);
        if (width === 390) {
          await page.getByRole("button", { name: "Toggle navigation", exact: true }).click();
          assert.equal(await page.getByRole("button", { name: "Toggle navigation", exact: true }).getAttribute("aria-expanded"), "true");
          assert.ok(await page.locator("#navbarNav a").filter({ hasText: "Services" }).isVisible());
        }
        if (route === "/" || route === "/work/waterloo-dental/")
          await page.screenshot({ path: `/tmp/sorbet-${width}-${route === "/" ? "home" : "study"}.png`, fullPage: true });
      }
      await page.close();
    }
    for (const demo of ["blog", "publications", "cv", "books", "teaching", "repositories", "projects"])
      assert.ok(!fs.existsSync(path.join("_site", demo)), "Published demo: " + demo);
    console.log("PASS: 8 pages at desktop/mobile widths; navigation, metadata, links, study notices, mobile menu, and demo exclusion.");
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
