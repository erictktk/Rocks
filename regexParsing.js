const code = `
/**
 * Highlights the edges of pixels in the given pixelArray based on the alpha value of neighboring pixels.
 * If a neighboring pixel's alpha value is greater than or equal to alphaMin, 
 * the current pixel's value is set to a solid white pixel.
 * 
 * @param {PixelArray} pixelArray - The pixel array object containing width, height, and array properties.
 * @param {Kernel|null} [kernel=null] - The offsets to define which neighboring pixels to consider.
 * @param {number} [alphaMin=0] - The minimum alpha value to consider for highlighting the edge.
 * @returns {Uint8ClampedArray} - The new pixel array highlighting the edges.
 */
export function DetectColorEdges(pixelArray, kernel=null, randomOrder=false, minAlpha=200){
    const toTest = [];
    for(let i = 0; i < pixelArray.width; i += 1){
        const curRow = [];
        for(let j = 0; j < pixelArray.height; j += 1){
            curRow.push(true);

            //toTest.push(true);
        }
        toTest.push(curRow);

        //toTest.push()
    }

    if (!kernel){
        kernel = new Kernel(-1, 1, -1, 1);
    }

    const pixelsDone = [];

    for(let i = 0; i < pixelArray.width; i += 1){
        for(let j = 0; j < pixelArray.height; j += 1){
            kernel.getColorBool
        }
    }
}

/**
 * Detects edges between different colors in a pixel array.
 * 
 * @param {PixelArray} pixelArray - The input pixel array.
 * @param {Kernel|null} kernel - The kernel used for edge detection.
 * @returns {PixelArray} - A new pixel array with edges highlighted.
 */
export function detectEdges(pixelArray, kernel, fillColor=[255, 255, 255, 255], checkSingle = true) {
    const edgeArray = new PixelArray(null, pixelArray.width, pixelArray.height);
    const [width, height] = [pixelArray.width, pixelArray.height];

    if (!kernel){
        kernel = new Kernel();
    }

    for (let i = 0; i < pixelArray.width; i += 1) {
        for (let j = 0; j < pixelArray.height; j += 1) {
            const currentPixel = PixelUtils.getColorValue(i, j, pixelArray.width, pixelArray.array);
            if (currentPixel[3] === 0) continue;

            for (const [xOffset, yOffset] of kernel.offsets) {
                // Check only right and bottom neighbors
                if (checkSingle){
                    if (xOffset < 0 || yOffset < 0) continue;
                 }

                const [curX, curY] = [i + xOffset, j + yOffset]

                if (curX < 0 || curX >= width || curY < 0 || curY >= height) continue;

                const neighborPixel = pixelArray.getColorValue(curX, curY);
                if (neighborPixel[3] > 0 && !arraysAreEqual(currentPixel, neighborPixel)) {
                    edgeArray.setColorValue(i, j, fillColor);
                    break;
                }
            }
        }
    }

    return edgeArray;
}
`;

const regex = /(\/\*\*[\s\S]*?\*\/)\s*(export\s+function\s+\w+\s*\([^)]*\))/g;
let match;
const results = [];

while ((match = regex.exec(code)) !== null) {
    results.push({
        comments: match[1],
        functionSignature: match[2]
    });
}

// Output the extracted comments and function signatures
results.forEach((result, index) => {
    console.log(`Function ${index + 1} Comments:`, result.comments);
    console.log(`Function ${index + 1} Signature:`, result.functionSignature);
    console.log('---------------------------------------');
});


// (                 # Start of the first capturing group
//   \/\*\*          # Matches the beginning of a JSDoc comment block /** 
//   [\s\S]*?        # Matches any character (whitespace `\s` or non-whitespace `\S`), as few times as possible (non-greedy)
//   \*\/            # Matches the end of the JSDoc comment block */
// )                 # End of the first capturing group

// \s*               # Matches any whitespace character (spaces, tabs, newlines) zero or more times

// (                 # Start of the second capturing group
//   export          # Matches the literal string "export"
//   \s+             # Matches one or more whitespace characters (to account for any space after "export")
//   function        # Matches the literal string "function"
//   \s+             # Matches one or more whitespace characters (to account for any space after "function")
//   \w+             # Matches one or more word characters (letters, digits, or underscore) - this is the function name
//   \s*             # Matches any whitespace characters (spaces, tabs) zero or more times (optional spaces after function name)
//   \(              # Matches the opening parenthesis of the function parameter list
//   [^)]*           # Matches any character except a closing parenthesis, zero or more times (to match the parameters)
//   \)              # Matches the closing parenthesis of the function parameter list
// )    

