// Full-page screenshots at 1440 for pixel comparison.
// Usage: node shoot.cjs <baseUrl> <outDir> <route> [route...]
// Prints page height, scrollWidth and any console errors / 4xx responses.
const { execSync } = require("child_process");
const { chromium } = require(execSync("npm root -g").toString().trim() + "/playwright");
const [, , base, outDir, ...routes] = process.argv;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  p.on("pageerror", (e) => errs.push(e.message));
  p.on("response", (r) => r.status() >= 400 && errs.push(r.status() + " " + r.url()));
  for (const route of routes) {
    await p.goto(base + route, { waitUntil: "networkidle" });
    // scroll through so lazy images load
    await p.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await p.waitForTimeout(700);
    const [h, sw] = await p.evaluate(() => [document.documentElement.scrollHeight, document.documentElement.scrollWidth]);
    const file = `${outDir}/impl${route.replace(/\//g, "_") || "_root"}.png`;
    await p.screenshot({ path: file, fullPage: true });
    console.log(route, "height", h, "scrollWidth", sw, "->", file);
  }
  console.log("errors:", errs.length ? "\n" + errs.join("\n") : "none");
  await b.close();
})();
