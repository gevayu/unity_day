// Compress raw Figma downloads in place.
// Usage (from the project root): node prep-images.cjs public/<page>/*.raw
//   JPEG (even when Figma calls it .png) -> fit 2400px, mozjpeg q80, .jpg
//   PNG with alpha                       -> lossless recompress, .png
const sharp = require(require.resolve("sharp", { paths: [process.cwd()] }));
const fs = require("fs");
(async () => {
  for (const raw of process.argv.slice(2)) {
    const meta = await sharp(raw).metadata();
    const png = meta.format === "png";
    const out = raw.replace(/\.[^.]+$/, png ? ".png" : ".jpg");
    const buf = png
      ? await sharp(raw).png({ compressionLevel: 9, effort: 10 }).toBuffer()
      : await sharp(raw).rotate()
          .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    fs.writeFileSync(out, buf);
    if (out !== raw) fs.unlinkSync(raw);
    const m2 = await sharp(buf).metadata();
    console.log(out, `${meta.width}x${meta.height} -> ${m2.width}x${m2.height}`, `${(buf.length / 1024) | 0}KB`);
  }
})();
