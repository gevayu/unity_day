// Smoke test every route at 1440 and 390: status, height, horizontal overflow,
// console errors, 4xx assets. For overflowing pages it names the elements that
// stick out (and aren't clipped by an ancestor).
// Usage: node smoke.cjs <baseUrl> <route> [route...]
const { execSync } = require("child_process");
const { chromium } = require(execSync("npm root -g").toString().trim() + "/playwright");
const [, , base, ...routes] = process.argv;
(async () => {
  const b = await chromium.launch();
  for (const w of [1440, 390]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    for (const r of routes) {
      const errs = [];
      const onC = (m) => m.type() === "error" && errs.push(m.text().slice(0, 100));
      const onR = (res) => res.status() >= 400 && res.url() !== base + r && errs.push(res.status() + " " + res.url().replace(base, ""));
      p.on("console", onC);
      p.on("response", onR);
      const resp = await p.goto(base + r, { waitUntil: "networkidle" });
      await p.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); }
      });
      const [h, sw] = await p.evaluate(() => [document.documentElement.scrollHeight, document.documentElement.scrollWidth]);
      let culprits = [];
      if (sw !== w) {
        culprits = await p.evaluate((vw) => {
          const res = [];
          for (const el of document.querySelectorAll("body *")) {
            const rc = el.getBoundingClientRect();
            if (!rc.width || (rc.left >= -1 && rc.right <= vw + 1)) continue;
            let a = el.parentElement, clipped = false;
            while (a && a !== document.body) {
              if (getComputedStyle(a).overflowX !== "visible") {
                const ar = a.getBoundingClientRect();
                if (ar.left >= -1 && ar.right <= vw + 1) { clipped = true; break; }
              }
              a = a.parentElement;
            }
            if (!clipped) res.push(`${String(el.className || el.tagName).slice(0, 50)} [${Math.round(rc.left)},${Math.round(rc.right)}]`);
          }
          return res.slice(0, 5);
        }, w);
      }
      // an intentional 404 page logs its own document request as a console error
      if (resp.status() === 404) for (let i = errs.length - 1; i >= 0; i--) if (errs[i].includes("status of 404")) errs.splice(i, 1);
      console.log(w, r.padEnd(24), resp.status(), "h", h, "sw", sw, sw !== w ? "OVERFLOW " + culprits.join(" | ") : "ok", errs.length ? "ERR " + errs.join(" | ") : "");
      p.off("console", onC);
      p.off("response", onR);
    }
    await p.close();
  }
  await b.close();
})();
