// Side-by-side crop: Figma (left) | implementation (right), then Read the output image.
// Usage: node compare.cjs <figma.png> <impl.png> <out.png> [top=0] [height=all] [scale=0.5]
const sharp = require(require.resolve("sharp", { paths: [process.cwd()] }));
const [, , figma, impl, out, top = "0", height = "0", scale = "0.5"] = process.argv;
(async () => {
  const load = async (f) => {
    const m = await sharp(f).metadata();
    const t = +top;
    const h = Math.min(+height || m.height, m.height - t);
    return sharp(f).extract({ left: 0, top: t, width: Math.min(1440, m.width), height: h })
      .resize({ width: Math.round(1440 * +scale) }).toBuffer({ resolveWithObject: true });
  };
  const a = await load(figma), b = await load(impl);
  const W = a.info.width, H = Math.max(a.info.height, b.info.height);
  await sharp({ create: { width: W * 2 + 10, height: H, channels: 3, background: "#ff00ff" } })
    .composite([{ input: a.data, left: 0, top: 0 }, { input: b.data, left: W + 10, top: 0 }])
    .png().toFile(out);
  console.log(out);
})();
