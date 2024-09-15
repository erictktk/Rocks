import React, { useEffect } from 'react';
import { readPsd } from 'ag-psd';

/**
 * SimplePSDLoader component loads a PSD file from a given `src` URL,
 * parses it using `ag-psd`, and extracts pixel data for each non-background layer.
 * Once the PSD is loaded and processed, it triggers the `onImageDataLoaded`
 * callback with the parsed PSD data.
 *
 * @param {string} src - The URL of the PSD file to load.
 * @param {function} onImageDataLoaded - Callback function that receives the parsed PSD data once loaded.
 */
export function SimplePSDLoader({ src, onImageDataLoaded }) {
  useEffect(() => {
    const loadPsd = async () => {
      try {
        const response = await fetch(src);
        const buffer = await response.arrayBuffer();
        const psd = readPsd(buffer);

        // Prepare to extract pixel data for each non-background layer
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        psd.children.forEach((layer) => {
          // Skip the background layer if present
          if (layer.name !== 'Background' && layer.canvas) {
            canvas.width = layer.canvas.width;
            canvas.height = layer.canvas.height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(layer.canvas, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            // Call the callback with pixel data for each non-background layer
            onImageDataLoaded(imageData); // Modify as needed if you want to pass additional data
          }
        });

      } catch (error) {
        console.error('Failed to load PSD file:', error);
      }
    };

    loadPsd();
  }, [src, onImageDataLoaded]); // Dependencies: re-run if `src` or `onImageDataLoaded` changes

  return null; // Component does not render any visible UI elements
}


/**
 * SimplePSDLoader component loads a PSD file from a given `src` URL,
 * parses it using `ag-psd`, extracts pixel data for each non-background layer,
 * and automatically downloads each layer as a PNG file.
 *
 * @param {string} src - The URL of the PSD file to load.
 * @param {function} onImageDataLoaded - Callback function that receives the parsed PSD data once loaded.
 */
export function SimplePSDDownloader({ src, onImageDataLoaded }) {
  useEffect(() => {
    const loadPsd = async () => {
      try {
        const response = await fetch(src);
        const buffer = await response.arrayBuffer();
        const psd = readPsd(buffer);

        // Prepare to extract pixel data for each non-background layer
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        psd.children.forEach((layer, index) => {
          // Skip the background layer if present
          if (layer.name !== 'Background' && layer.canvas) {
            canvas.width = layer.canvas.width;
            canvas.height = layer.canvas.height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(layer.canvas, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            onImageDataLoaded(imageData); // Optionally handle the pixel data

            // Convert canvas to a data URL (base64) for downloading
            const dataURL = canvas.toDataURL('image/png');

            // Create a download link element
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = `${layer.name || `Layer_${index}`}.png`; // Default to layer name or index if name is missing
            link.click(); // Automatically trigger the download
          }
        });

      } catch (error) {
        console.error('Failed to load PSD file:', error);
      }
    };

    loadPsd();
  }, [src, onImageDataLoaded]); // Dependencies: re-run if `src` or `onImageDataLoaded` changes

  return null; // Component does not render any visible UI elements
}