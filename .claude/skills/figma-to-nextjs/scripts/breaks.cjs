// Given paragraphs with Figma's line breaks, find the box widths (in px) for
// which the browser reproduces exactly those breaks.
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const [,, url, selector, linesJson] = process.argv;
const paras = JSON.parse(linesJson);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const res = await p.evaluate(([selector, paras]) => {
    const el = document.querySelector(selector);
    const cs = getComputedStyle(el);
    const mk = t => { const s = document.createElement('span'); s.style.cssText = `font:${cs.font};letter-spacing:${cs.letterSpacing};white-space:nowrap;position:absolute;visibility:hidden;direction:rtl`; s.textContent = t; document.body.appendChild(s); const w = s.getBoundingClientRect().width; s.remove(); return w; };
    return paras.map(lines => {
      let lo = 0, hi = Infinity;
      lines.forEach((ln, i) => {
        lo = Math.max(lo, mk(ln.trim()));
        const next = lines[i + 1];
        if (next) hi = Math.min(hi, mk(ln.trim() + ' ' + next.trim().split(' ')[0]));
      });
      return { need: Math.ceil(lo * 10) / 10, mustStayBelow: Math.floor(hi * 10) / 10, font: cs.font };
    });
  }, [selector, paras]);
  console.log(JSON.stringify(res, null, 1));
  await b.close();
})();
