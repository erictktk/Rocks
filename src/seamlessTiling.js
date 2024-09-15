import { blendPixelArrays, samplePixelArray } from "./sampling";
import { PixelArray } from "eric-pixelarrayutils/PixelArray";
import { RandomWrapper } from 'eric-random-wrapper';


/**
 * A function that cuts up a PixelArray in four quadrants and moves them to opposite quandrant diagonally
 * 
 * @param {PixelArray} pixelArray 
 * @returns {PixelArray} 
 */
export function prepareSeamless(pixelArray) {
    const halfWidth = pixelArray.width / 2;
    const halfHeight = pixelArray.height / 2;

    // Create a new PixelArray for the output
    const newPixelArray = new PixelArray(null, pixelArray.width, pixelArray.height);

    for (let y = 0; y < pixelArray.height; y++) {
        for (let x = 0; x < pixelArray.width; x++) {
            // Calculate the shifted coordinates
            const shiftedX = (x + halfWidth) % pixelArray.width;
            const shiftedY = (y + halfHeight) % pixelArray.height;

            // Get the color value from the original PixelArray at the shifted coordinates
            const color = pixelArray.getColorValue(shiftedX, shiftedY);

            // Set the color value in the output PixelArray at the current coordinates
            newPixelArray.setColorValue(x, y, color);
        }
    }

    // Here you'd manually edit the seams at the center of 'output'
    // You might use various algorithms or tools depending on the nature of your image and the pattern of the seam.

    return newPixelArray;
}

export function stampOverSeams(pixelArray, brushPixelArray, seed=16){
    //make sure brushPixelArray is at least 4 times smaller than pixelArray

    const [width, height] = [pixelArray.width, pixelArray.height];
    
    const [bWidth, bHeight] = [brushPixelArray.width, brushPixelArray.height];

    //returns pixel array sourced from the PixelArray
    const sourceRandom = () => {
        //select pixel randomly from one of four quadrants s.t. in random position in one of the quadrants
        //such that brushPixelArray sources pixels from WITHIN the quadrants
    }

    const randObj = new RandomWrapper(seed);

    const widthIters = width/bWidth + 2;
    const totalWidthCovered = widthIters*bWidth;

    let cumuWidth = 0;
    //stamp 
    for(let i = 0; i < widthIters; i += 1){
        //stamp pixelarrays sourced from sourceRandom over the midpoint line y = height/2 with some randomness in distance
    }

    const heightIters = height/bHeight + 2;
    const totalHeightCovered = heightIters*bHeight;

    let cumuHeight = 0;
    for(let i = 0; i < heightIters; i += 1){
        //stamp pixelarrays sourced from sourceRandom over the midpoint line x = width/2 with some randomness in distance
    }
}


/**
 * Creates a seamless tile and stamps brushes on the vertical and horizontal seams.
 *
 * @param {PixelArray} pixelArray - The input PixelArray to be made seamless.
 * @param {number} brushRadius - The radius of the brush used for stamping.
 * 
 * @returns {PixelArray} - The seamlessly tiled and stamped PixelArray.
 */
export function tileAndOverlayBrush(pixelArray, brushRadius, seed=10) {
    // Generate seamless tile
    const tiledPixelArray = makeSeamless(pixelArray);

    // Function to sample a random quadrant from a PixelArray
    const sampleRandomQuadrant = (sourcePixelArray, r) => {
        const quadrantChoice = Math.floor(Math.random() * 4);
        let startX, startY;

        //need to randomize this//
        switch (quadrantChoice) {
            case 0: // Top-left
                startX = 0;
                startY = 0;
                break;
            case 1: // Top-right
                startX = sourcePixelArray.width - r;
                startY = 0;
                break;
            case 2: // Bottom-left
                startX = 0;
                startY = sourcePixelArray.height - r;
                break;
            case 3: // Bottom-right
                startX = sourcePixelArray.width - r;
                startY = sourcePixelArray.height - r;
                break;
        }

        return samplePixelArray(sourcePixelArray, startX, startY, r);
    };

    // Stamp (overlay) the brush onto the seams
    const stampBrushOnSeam = (targetPixelArray, brushPixelArray, seamType) => {
        const xPos = seamType === 'vertical' ? targetPixelArray.width - brushRadius : Math.floor(Math.random() * (targetPixelArray.width - 2 * brushRadius));
        const yPos = seamType === 'horizontal' ? targetPixelArray.height - brushRadius : Math.floor(Math.random() * (targetPixelArray.height - 2 * brushRadius));
        const blendedArray = blendPixelArrays(targetPixelArray, brushPixelArray, xPos, yPos);

        return blendedArray;
    };

    const stampBrushOnSeam = (targetPixelArray, brushPixelArray, seamType)

    // Iteratively sample and stamp brush on vertical seam
    for (let i = 0; i < tiledPixelArray.height / brushRadius; i += 1) {
        const brushSample = sampleRandomQuadrant(tiledPixelArray, brushRadius);
        tiledPixelArray = stampBrushOnSeam(tiledPixelArray, brushSample, 'vertical');
    }

    // Iteratively sample and stamp brush on horizontal seam
    for (let j = 0; j < tiledPixelArray.width / brushRadius; j += 1) {
        const brushSample = sampleRandomQuadrant(tiledPixelArray, brushRadius);
        tiledPixelArray = stampBrushOnSeam(tiledPixelArray, brushSample, 'horizontal');
    }

    return tiledPixelArray;
}