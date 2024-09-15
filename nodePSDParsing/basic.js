const fs = require('fs-extra');
const path = require('path');
const { createCanvas } = require('canvas'); // Use canvas in Node.js
const { initializeCanvas, readPsd } = require('ag-psd');

// Initialize the canvas for ag-psd (this simulates the HTML canvas in Node.js)
initializeCanvas(createCanvas);

const psdFilePath = process.argv[2];
const outputDir = process.argv[3];

if (!psdFilePath || !outputDir) {
  console.error('Usage: node parsePsd.js <input.psd> <output-directory>');
  process.exit(1);
}

fs.ensureDirSync(outputDir);

const saveImage = async (canvas, layerName) => {
  const outPath = path.join(outputDir, `${layerName}.png`);
  const out = fs.createWriteStream(outPath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  await new Promise((resolve) => out.on('finish', resolve));
  console.log(`Saved: ${outPath}`);
};

const parsePsdFile = async () => {
  const psdBuffer = fs.readFileSync(psdFilePath);
  const psd = readPsd(psdBuffer, { skipLayerImageData: false }); // Ensure layer image data is loaded

  console.log(`PSD file loaded: ${psdFilePath}`);
  console.log(`Number of layers: ${psd.children.length}`);

  // Loop through each layer
  for (const [index, layer] of psd.children.entries()) {
    // Check if the layer has a canvas
    if (layer.canvas) {
      console.log(`Processing layer ${index} (${layer.name || 'unnamed'})...`);
      const canvas = layer.canvas; // This is the HTMLCanvasElement in Node.js
      await saveImage(canvas, `layer_${index}_${layer.name || 'unnamed'}`);
    } else {
      console.log(`Layer ${index} (${layer.name || 'unnamed'}) has no canvas data and will be skipped.`);
    }
  }
};

// Run the script
parsePsdFile().catch((err) => {
  console.error('Error parsing PSD file:', err);
});