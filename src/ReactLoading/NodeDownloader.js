const fs = require('fs');
const { readPsd } = require('ag-psd');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');

// Function to process and save each non-background layer
async function processPsdFile(filePath, outputDir) {
  try {
    // Read the PSD file as a buffer
    const buffer = fs.readFileSync(filePath);

    // Parse the PSD file using ag-psd
    const psd = readPsd(buffer);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Process each layer in the PSD
    psd.children.forEach((layer, index) => {
      if (layer.name !== 'Background' && layer.canvas) {
        const canvas = createCanvas(layer.canvas.width, layer.canvas.height);
        const ctx = canvas.getContext('2d');

        // Draw the layer onto the canvas
        ctx.drawImage(layer.canvas, 0, 0);

        // Get the image data URL from the canvas and convert it to a buffer
        const buffer = canvas.toBuffer('image/png');

        // Define the output file path
        const outputFilePath = path.join(outputDir, `${layer.name || `Layer_${index}`}.png`);

        // Write the buffer to a file
        fs.writeFileSync(outputFilePath, buffer);
        console.log(`Saved layer ${layer.name || `Layer_${index}`} to ${outputFilePath}`);
      }
    });
  } catch (error) {
    console.error('Error processing PSD file:', error);
  }
}

// Example usage
const psdFilePath = 'path/to/your/file.psd';  // Replace with your PSD file path
const outputDirectory = 'path/to/output/directory';  // Replace with your desired output directory

processPsdFile(psdFilePath, outputDirectory);