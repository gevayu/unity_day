// Finds horizontal scroll between the design width and mobile: for each width,
// lists the elements that stick out of the viewport and aren't clipped by an
// ancestor. Usage: node hscroll.cjs <baseUrl> <route>...
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
(async () => {
  const [base, ...routes] = process.argv.slice(2);
  const b = await chromium.launch();
  for (const w of [1024, 1200, 1281, 1300, 1366, 1400, 1439]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    for (const r of routes) {
      await p.goto(base + r, { waitUntil: 'networkidle' });
      const res = await p.evaluate(() => {
        const sw = document.documentElement.scrollWidth, cw = document.documentElement.clientWidth;
        const bad = sw > cw ? [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); if (!(r.right > cw + 1 || r.left < -1)) return false; for (let a = e.parentElement; a && a !== document.documentElement; a = a.parentElement) { const o = getComputedStyle(a); if (o.overflowX !== 'visible') { const ar = a.getBoundingClientRect(); if (ar.left >= -1 && ar.right <= cw + 1) return false; } } return true; }).slice(0, 4).map(e => (e.className || e.tagName).toString().slice(0, 50) + ' ' + Math.round(e.getBoundingClientRect().left) + '..' + Math.round(e.getBoundingClientRect().right)) : [];
        return { sw, cw, bad };
      });
      if (res.sw > res.cw) console.log(w, r, 'scrollWidth', res.sw, 'client', res.cw, res.bad.join(' | '));
    }
    await p.close();
  }
  console.log('done');
  await b.close();
})();
