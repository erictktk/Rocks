export class ScalingMethods {
    FLOOR = 0;
    ROUND = 1;
    RANDOM = 2;
}

/** Scales a pixelArray according to [sx, sy]
 * 
 * @param {PixelArray} pixelArray 
 * @param {Number} sx 
 * @param {Number} sy 
 * @returns {PixelArray} - a new PixelArray
 */
export function floatScale(pixelArray, sx, sy){
  constv[width, height] = [pixelArray.width, pixelArray.height];
  return nearestNeighborScale(pixelArray, Math.round(width*sx), Math.round(height*sy));
}

export function nearestNeighborScale(pixelArray, targetWidth, targetHeight){
    const arr = nearestNeighborScaleUint8(pixelArray, targetWidth, targetHeight);
    return new PixelArray(arr, targetWidth, targetHeight);
}

export function nearestNeighborScaleUint8(pixelArray, targetWidth, targetHeight) {
  const sourceWidth = pixelArray.width;
  const sourceHeight = pixelArray.height;
  
  const scaleX = sourceWidth / targetWidth;
  const scaleY = sourceHeight / targetHeight;
  
  const result = new Uint8ClampedArray(targetWidth * targetHeight * 4);

  const newPixelArray = new PixelArray(null, targetWidth, targetHeight);

  for (let y = 0; y < targetHeight; y++) {
        for (let x = 0; x < targetWidth; x++) {
            // Find the nearest neighbor in the source PixelArray
            const srcX = Math.floor(x * scaleX);
            const srcY = Math.floor(y * scaleY);

            // Get the color value from the source PixelArray using getColorValue
            const color = pixelArray.getColorValue(srcX, srcY);

            // Set the color value in the destination array
            const destIndex = (y * targetWidth + x) * 4;
            result[destIndex] = color[0];
            result[destIndex + 1] = color[1];
            result[destIndex + 2] = color[2];
            result[destIndex + 3] = color[3];

            newPixelArray.setColor(x, y, color);
    }
  }
  
  return result;
}