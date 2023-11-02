import { PixelArray } from 'eric-pixelarrayutils/PixelArray';

export function linearFalloffU(u){
    return 1 - (u);
}
export function quadraticFalloffU(u){
    return 1 - (u * u);
}
export function exponentialFalloffU(u) {
    return Math.exp(-4 * u * u);
}

export function linearFalloff(distance, r) {
    return 1 - (distance / r);
}
export function quadraticFalloff(distance, r) {
    const t = distance / r;
    return 1 - (t * t);
}
export function exponentialFalloff(distance, r) {
    const t = distance / r;
    return Math.exp(-4 * t * t);
}


/**
 * @param pixelArray {PixelArray}
 */
export function sampleWithBrush(pixelArray, x, y, r, falloffFunction = linearFalloff) {
    const newPixelArray = new PixelArray(null, 2 * r, 2 * r);
    const rSquared = r * r;
    for (let offsetX = 0; offsetX < 2 * r; offsetX += 1) {
        for (let offsetY = 0; offsetY < 2 * r; offsetY += 1) {
            const i = x + offsetX;
            const j = y + offsetY;
            
            const dx = offsetX - r; // Adjusted distance calculations
            const dy = offsetY - r; // to keep the brush center at r, r in the newPixelArray
            const distanceSquared = dx * dx + dy * dy;

            if (distanceSquared <= rSquared) {
                const distance = Math.sqrt(distanceSquared);
                const softness = falloffFunction.call(this, distance, r);

                const [red, green, blue, alpha] = pixelArray.getColorValue(i, j);
                const newAlpha = alpha * softness;
                newPixelArray.setColorValue(offsetX, offsetY, [red, green, blue, newAlpha]);
            }
        }
    }
    return newPixelArray;
}

/**
 * Blends a top PixelArray over a bottom PixelArray based on the alpha values of the top array.
 
 * @param {PixelArray} bottomArray - serves as the base or background.
 * @param {PixelArray} topArray - will be blended over the bottomArray.
 * @param {number} [xPos=0] - The x-position where the topArray starts relative to the bottomArray.
 * @param {number} [yPos=0] - The y-position where the topArray starts relative to the bottomArray.
 *
 * @returns {PixelArray} 
 */
export function blendPixelArrays(bottomArray, topArray, xPos = 0, yPos = 0) {
    const blendedArrayData = new Uint8ClampedArray(bottomArray.array);
    const blendedArray = new PixelArray(blendedArrayData, bottomArray.width, bottomArray.height);

    for (let x = 0; x < topArray.width; x += 1) {
        for (let y = 0; y < topArray.height; y += 1) {
            const bottomX = x + xPos;
            const bottomY = y + yPos;

            // Check bounds to ensure we're within the blendedArray
            if (bottomX >= 0 && bottomX < blendedArray.width && bottomY >= 0 && bottomY < blendedArray.height) {
                const [topR, topG, topB, topA] = topArray.getColorValue(x, y);
                const [bottomR, bottomG, bottomB, bottomA] = blendedArray.getColorValue(bottomX, bottomY);

                const alphaBlend = topA / 255;
                const inverseAlpha = 1 - alphaBlend;

                // Blend colors based on the top pixel's alpha
                const blendedR = topR * alphaBlend + bottomR * inverseAlpha;
                const blendedG = topG * alphaBlend + bottomG * inverseAlpha;
                const blendedB = topB * alphaBlend + bottomB * inverseAlpha;
                const blendedA = Math.min(255, topA + bottomA); // ensure alpha doesn't exceed 255

                blendedArray.setColorValue(bottomX, bottomY, [blendedR, blendedG, blendedB, blendedA]);
            }
        }
    }
    return blendedArray;
}