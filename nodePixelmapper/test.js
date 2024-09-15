const fs = require('fs-extra');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
//const { PixelArray } = require('eric-pixelarrayutils/PixelArray'); // Assuming the PixelArray class is in a separate file
const { PixelArray } = require('eee_pixelarrayutils/PixelArray'); // Assuming the PixelArray class is in a separate file
//const PixelArray  = require('eee_pixelarrayutils/dist/cjs/PixelArray');
const { edgeExampleTries } = require('./tries'); // Assuming edgeExampleTries is in a separate file

const imageDir = process.argv[2];  // Directory where the PNGs are stored
const outputDir = process.argv[3]; // Directory to save the processed image
if (!imageDir || !outputDir) {
  console.error('Error, Usage: node processImages.js <image-directory> <output-directory>');
  process.exit(1);
}

fs.ensureDirSync(outputDir);

// Function to save an image to a file (using a canvas only to render the final image)
const saveImage = async (pixelArray, fileName) => {
  const canvas = createCanvas(pixelArray.width, pixelArray.height); // Create canvas for final rendering
  const ctx = canvas.getContext('2d');

  const imageData = ctx.createImageData(pixelArray.width, pixelArray.height);
  imageData.data.set(pixelArray.array); // Use the Uint8ClampedArray from PixelArray directly

  ctx.putImageData(imageData, 0, 0); // Render the image onto the canvas

  // Save canvas as PNG
  const outPath = path.join(outputDir, `${fileName}.png`);
  const out = fs.createWriteStream(outPath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  await new Promise((resolve) => out.on('finish', resolve));
  console.log(`Saved: ${outPath}`);
};

// Function to convert image data into a PixelArray
const imageDataToPixelArray = (imageData, width, height) => {
  return new PixelArray(imageData.data, width, height);  // Create a PixelArray from the image data
};

// Function to process a single image (load, convert to PixelArray, and store)
const processImage = async (imagePath, storageArray) => {
  const img = await loadImage(imagePath);  // Load the image
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0); // Draw the image onto the canvas

  const imageData = ctx.getImageData(0, 0, img.width, img.height); // Extract pixel data
  const pixelArray = imageDataToPixelArray(imageData, img.width, img.height);

  storageArray.push(pixelArray); // Add the PixelArray to the storage
};

// Main function to process all PNG images in the directory
const processImages = async () => {
  const files = fs.readdirSync(imageDir).filter(file => file.endsWith('.png'));

  const storageArray = [];
  for (const file of files) {
    const imagePath = path.join(imageDir, file);

    console.log(`Processing ${file}...`);
    await processImage(imagePath, storageArray); // Convert images to PixelArray and store them
  }

  /**@type {PixelArray[]} */
  const processedPixelArrays = edgeExampleTries(5, storageArray); // Apply the edge detection algorithm

  // Save the processed images
  processedPixelArrays.forEach((pixelArray, index) => {
    const fileName = `processed_image_${index}`;
    saveImage(pixelArray, fileName); // Save each processed PixelArray as an image
  });

  console.log('Processing complete.');
};

// Run the script
processImages().catch((err) => {
  console.error('Error processing images:', err);
});