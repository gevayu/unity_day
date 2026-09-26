---
name: figma-to-nextjs
description: Pixel-perfect conversion of UNITY DAY Figma frames into pages of this Next.js app (RTL Hebrew, CSS Modules), verified against Figma screenshots and deployed to Vercel. Use whenever the user shares a figma.com link (file s0iTO1CNBDq1dQiUWH5aiv or any other) and asks to build, implement, convert, "open as a page", "פתח כעמוד", "תבנה את העמוד", "המר לעמוד NEXTJS", "פיקסל פרפקט", or adds frames to "the queue" (תור הפיתוח). Also use when fixing a visual mismatch against Figma ("ארטיפקט", "לא כמו בעיצוב") on an existing page.
---

# Figma → Next.js page (UNITY DAY)

Goal: every page matches its Figma frame at 1440px to within a few px, without horizontal scroll at any width, and goes live on Vercel. This workflow got sixteen pages, homepage included, to ~99.9% fidelity. Follow it rather than improvising.

The Figma MCP's own `figma-design-to-code` guidance still applies. Read `skill://figma/figma-design-to-code/SKILL.md` with `mcp__Figma__get_figma_skill` before the first `get_design_context` call, and pass `skillNames: "resource:figma-design-to-code"`.

## 0. Project facts

- Next.js 16 App Router, TypeScript, CSS Modules, **no Tailwind**. `<html lang="he" dir="rtl">`.
- Shared pieces:
  - `components/SiteHeader.tsx` and `components/SiteFooter.tsx`: the header is the top 148px of every frame, the footer the last 604px ("Frame 2147227530"). Never re-implement them.
    - Some frames (donation, checkout) use cut-down chrome: a header with only the status bar and logo, and a footer that is only the 337px dark bottom band. Use `<SiteHeader minimal />` and `<SiteFooter compact />`. If the page comes out ~267px taller than the frame, this is why.
  - `components/PillButton.tsx`: the 50px CTA pill, variants `dark`/`light`, optional arrow icon that is mirrored automatically.
  - `app/globals.css`: tokens `--ink #071722`, `--r-card 32px`, `--r-pill`, `--gutter 60px`, `--sky`, `--gradient-2`, and so on.
- Fonts: Polin (the design font, licensed) is self-hosted from `app/fonts` via `next/font/local` in `app/layout.tsx`, weights 300-900; Rubik is a non-preloaded fallback.
  - Chrome sets Polin a little differently from Figma (per word anywhere from -3% to +3%, usually a bit wider). A paragraph can then wrap one word earlier than in Figma, which adds a line and, in vertically centred blocks, shifts everything around it.
  - Fix it per paragraph, not globally: run `node .claude/skills/figma-to-nextjs/scripts/breaks.cjs <url> '<css selector>' '[["line 1","line 2",...]]'` with Figma's lines. It prints the box width needed for Figma's breaks and the width at which the next word would jump up. For centred text, widen with `margin-inline: -Npx` inside that range (see `.copy > p` in `app/_home/ChoiceSection.module.css`).
- Assets: `public/site/` holds header/footer assets; each page's assets go in `public/<page>/`.
- Routes and their Figma nodes are listed in `README.md`. Add a row for every new page.
- Explorations or anything the user wants "on the side, not connected to the site" go under `app/lab/` (its layout sets `robots: noindex, nofollow`); nothing in the site links there.
- Footer link map: `HREFS` in `SiteFooter.tsx`. Wire links to any page that now exists.

## 1. Read the frame

1. Run `get_metadata` on the frame node. Take the children of "NEW HOMEPAGE" that sit between the header frames and the footer frame; those are the sections.
2. Run `get_design_context` on **each section in parallel**, not the whole frame (the whole frame is too big and comes back sparse). If a section is still sparse, request its children.
3. Get the Figma screenshot of the whole frame at 1:1: `get_screenshot` with `maxDimension` equal to the frame height. Download it with curl immediately, because the URL is short-lived.

## 2. Assets

- Download every asset URL with `curl -sSfL` as `*.raw`, then run `node .claude/skills/figma-to-nextjs/scripts/prep-images.cjs public/<page>/*.raw`.
  - JPEGs (Figma often names them `.png`) get resized to fit 2400px at mozjpeg q80.
  - PNGs with alpha are kept and losslessly recompressed.
  - SVGs are kept as is. Render them at their root `width`/`height`.
- Figma asset file names are content hashes, so reuse existing files when the hash matches:

| Figma hash | File to reuse |
| --- | --- |
| feed1 | /gallery/hero.jpg |
| c43e8 | /gallery/photo-1.jpg |
| 19e18 | /gallery/photo-2.jpg |
| 5935e | /gallery/photo-3.jpg |
| 2c604 | /gallery/photo-4.jpg |
| 50ebb | /gallery/photo-5.jpg |
| fab38 | /committee/hero.jpg |
| 68b29 | /moments/card-2.jpg |
| 423fe | /winners/hero.jpg |
| 1608a | /winners/about.jpg |
| 0ca3f | /winners/story-3.jpg |
| 702e1 | /memorial/closing-sunset.jpg |
| 4797a | /thank-you/hero.jpg |
| 470d5 | /home/journey-unity.jpg |
| b1a3d | /home/prize-winner.jpg |
| dbca1 / 5fe4e / cbab6 / a74b9 | /winners/illustration-sunrise / sprout / heart / community.png |
| 0207e.svg | /winners/divider-line.svg |
| f124d | /moments/card-3.jpg (same image as /winners/story-4.jpg) |
| 6e190 | /nominations/wave.png |
| 308f6.svg | /nominations/icon-arrow-light.svg |
| 5c251.svg | /nominations/icon-arrow-dark.svg |
| a3950.svg | /gallery/icon-arrow-cta.svg |
| 566b9 / 562ce / 02cfd.svg | /site/icon-facebook / instagram / youtube.svg |

- The footer's horizontal gradient divider comes out of Figma without its stroke, so it's drawn in CSS with `--gradient-2`.

## 3. Converting the Figma code (the rules that matter)

**RTL**
- Figma code is positioned LTR by x. In every horizontal row, put children in DOM order from right to left: the child with the largest x comes first.
- In a Figma column, `items-end` means right-aligned. In RTL that's `align-items: flex-start`, and a row's `justify-end` becomes `justify-content: flex-start`.
- Check every row against the screenshot. Arrows are a common trap: in RTL the right-pointing arrow means "previous" and the left-pointing one means "next".
- Hebrew text that Figma marks `dir="ltr"` is a design bug (the full stop ends up on the wrong side). Render it as normal RTL and mention it to the user.

**Layout**
- Each section is a full-width `<section>` with Figma's padding and an inner container whose `max-width` is the Figma width (1320 / 1202 / ...).
- Absolute decorations are positioned against the page centre: `left: calc(50% + (X - 720)px)`. Anything that can extend past 0..1440 needs `overflow: hidden` on its section. RTL pages also scroll sideways when content overflows on the left.
- If a fixed-width text block (`width: 700px; max-width: 100%`) sits inside a shrink-to-fit flex column, it overflows on mobile. Give the column `max-width: 100%`.
- Figma strokes are sometimes inside the box and sometimes part of the layout. Check the chip/button height in the metadata: if it's 36 with 8px padding and 20px text, the 1px border sits inside, so use padding 7px.
- When text makes rows shrink (Rubik is narrower than Polin), pin the row to the design's height with `min-height` (for example category cards 202/189).
- Figma rounds each line box to whole pixels (54px text → 65px lines, 16px → 22px, 14px → 20px). On long text-heavy pages the browser's fractional `line-height: 1.2/1.4` adds up to several px; if the height drifts, set those line heights in px at 1440 (and go back to relative ones in the mobile media query). This took /about from +5px to exact.
- A non-Polin font that the frame uses for specific elements (for example Heebo for figures on /donate) is loaded per page with `next/font/google` in a `fonts.ts` next to the page, not globally.

**Images**
- Plain photos: `next/image` with `fill` and `object-fit: cover`.
- Figma crops (an `img` with % width/height/left/top):
  - If it's equivalent to cover, use `object-position`. The offset share is `-left / (imgW - boxW)`.
  - Zoomed crops: `width: W%; height: auto; left: L%; top: T%`.
  - Small fixed-size illustrations cut from a sprite sheet: copy the exact percentages.
- Mirrored frames: a metadata x of 1320 plus `-scale-x` means the element really renders at x - width. Trust the screenshot and the code over the metadata.
- If Figma stretches a photo (its % width and height don't keep the image's aspect), keep the true aspect (`height: auto`). Always do this for portraits of people.

**Transforms**
- `-scale-y-100 rotate-180` on an arrow icon is `transform: scaleX(-1)`.
- For any Tailwind rotate/scale/skew combination, write a single `transform: rotate() scale() skewX()`. **Never use the individual `rotate:` / `scale:` CSS properties: the build strips them.** That silently hid the tilted green backdrop on /prize/nominations.

**Photo fades into a coloured card** (the most common artifact)
- The Figma pattern is a gradient overlay (`rgba(c,0) 25% → c 90%`) with `backdrop-blur-[3px]`, inside a frame rounded on all corners.
- **Square the bottom corners of the photo box** (`border-radius: R R 0 0`). They sit under the solid end of the fade, and rounding them leaves an anti-aliased hairline arc ("קו גימור"). The user spotted this on /moments.
- **Mask the blur with the same gradient stops.** Put it on a `::before` with `backdrop-filter: blur(3px); mask-image: linear-gradient(180deg, transparent 25%, #000 90%)`. Figma's background blur only shows where the fill is opaque, while plain CSS `backdrop-filter` starts at a hard edge. If the masked blur still reads stronger than Figma, drop the blur: the gradient alone matched better on /memorial.
- For reference, see `.fade` in `app/moments/MomentsArchive.module.css`.

**Interactivity**
- Chips filter (`aria-pressed`). Carousels scroll or loop and support the keyboard.
- Forms use native validation and no fake network calls. A thank-you message with a TODO is fine.
- Links with no destination are `href="#"` with a `// TODO`. For placeholder links, `next/link` needs `prefetch={false}`.
- Keep the design copy exactly, including placeholders. Put page data in a `data.ts` marked `PLACEHOLDER`.
- If the design's state can't be real (for example a selected chip while other years' cards show), pick the honest behaviour that keeps the layout identical, and tell the user.

## 4. Verify (don't skip; this is where the 99.9% comes from)

```bash
npm run typecheck && npx next build
npx next start -p 3000 &            # stop later with: fuser -k 3000/tcp  (never pkill -f next)
S=<scratchpad>
node .claude/skills/figma-to-nextjs/scripts/shoot.cjs http://localhost:3000 $S /my-page
node .claude/skills/figma-to-nextjs/scripts/compare.cjs $S/figma-my-page.png $S/impl_my-page.png $S/sbs.png 0 2300 0.4
# then Read sbs.png; zoom on details: top/height/scale 1.0 on a 300px band
node .claude/skills/figma-to-nextjs/scripts/smoke.cjs http://localhost:3000 /my-page /other-page
```

- Compare section by section. Page height should be within about 4px of the frame (the shared header and footer add about 1.7px).
- Zoom into every photo edge, fade, rounded corner and rotated shape at scale 1.0. Artifacts only show up at 1:1.
- `smoke.cjs` must report `ok` at 1440 **and** 390 for every route: no errors, no 4xx. When a page overflows, the script names the offending elements.
- Also run `node .claude/skills/figma-to-nextjs/scripts/hscroll.cjs http://localhost:3000 <routes>` (1024-1439). Fixed-width rows and page-centred decorations that fit at 1440 often scroll the RTL page sideways just below it (on /prize/nominations and /unity-day they did). Fix with `overflow-x: clip` on the section, or move the breakpoint up to the row's real width.

## 5. Ship

- Commit to the session's branch and push. The Vercel project `unity-day` (team `team_1lypYCt3hZemkd7OElLEcVRz`) is Git-linked; its production branch is `main`.
- Until the PR merges, put a branch commit live with `mcp__Vercel__create_deployment`, using `target: "production"` and `gitSource: {type: "github", org: "gevayu", repo: "unity_day", ref: <branch>, sha: <sha>}`. Then curl every route on https://unity-day.vercel.app (expect 200, and 404 for an unknown path).
- Update the PR description's page table, and the README.

## 6. Many frames at once

- For three or more frames, run one background `Agent` per frame with `isolation: "worktree"` and a self-contained brief: this skill's rules, the node id, the route, a unique port (3101, 3102, ...), a "do not modify shared files" list, and a report format.
- Known worktree pitfalls:
  - Worktrees may be created from the **initial commit**. The agent must `git reset --hard <current HEAD sha>` first.
  - `npm ci` can be blocked. Use `npm install`, which leaves the lockfile unchanged.
  - Agents must stop their own server with `fuser -k <port>/tcp`.
- Merge each result with `git cherry-pick <agent branch>`. Then apply the shared-file changes the agents recommend (footer/header links, README) yourself.
- Exclude `.claude/worktrees/` in `.git/info/exclude`. Remove the worktrees and branches when done.

## 7. Report to the user (in Hebrew)

- Live link per page, and height vs Figma.
- What was checked: 1440 comparison and the 390 smoke test.
- Deliberate deviations from the design, and design bugs worth passing to the designer.
- Open content questions: placeholders, contact details, image rights.
