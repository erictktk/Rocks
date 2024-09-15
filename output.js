const arr =[
  {
    "fileName": "blobStamp.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\examples\\blobStamp.js",
    "comments": "/**\r\n * @param {PixelArray} pixelArray\r\n */",
    "functionSignature": "export function VaryLuminance(pixelArray, copies=10, seed=null)"
  },
  {
    "fileName": "blobStamp.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\examples\\blobStamp.js",
    "comments": "/**\r\n * @param {PixelArray|Array<PixelArray>} mainObj\r\n */",
    "functionSignature": "export function VaryScale(mainObj, widthRange=[1, 2], heightRange=[1, 2], copies=10, seed=null)"
  },
  {
    "fileName": "blobStamp.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\examples\\blobStamp.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray|Array<PixelArray>} mainObj \r\n * @param {Array<Number>} rotateRange - an array of form [a, b]\r\n * @param {*} copies \r\n * @param {Number|null} seed \r\n * @returns \r\n */",
    "functionSignature": "export function VaryHue(mainObj, rotateRange = [-10, 10], copies=10, seed=null)"
  },
  {
    "fileName": "blobStamp.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\examples\\blobStamp.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pixelArray \r\n * @param {Number} rotation \r\n * @returns \r\n */",
    "functionSignature": "export function ChangeHueOfPixelArray(pixelArray, rotation)"
  },
  {
    "fileName": "fillBackground.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fillBackground.js",
    "comments": "/**\r\n * @param {PixelArray} pixelArray\r\n */",
    "functionSignature": "export function FillBackgroundMod(pixelArray, rgba=[0, 220, 255])"
  },
  {
    "fileName": "fillBackground.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fillBackground.js",
    "comments": "/**\r\n * @param {PixelArray} pixelArray\r\n */",
    "functionSignature": "export function FillBackground(pixelArray, rgba=[0, 220, 255, 255])"
  },
  {
    "fileName": "EdgeDetection.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeDetection.js",
    "comments": "/**\r\n * Highlights the edges of pixels in the given pixelArray based on the alpha value of neighboring pixels.\r\n * If a neighboring pixel's alpha value is greater than or equal to alphaMin, \r\n * the current pixel's value is set to a solid white pixel.\r\n * \r\n * @param {PixelArray} pixelArray - The pixel array object containing width, height, and array properties.\r\n * @param {Kernel|null} [kernel=null] - The offsets to define which neighboring pixels to consider.\r\n * @param {number} [alphaMin=0] - The minimum alpha value to consider for highlighting the edge.\r\n * @returns {Uint8ClampedArray} - The new pixel array highlighting the edges.\r\n */",
    "functionSignature": "export function DetectColorEdges(pixelArray, kernel=null, randomOrder=false, minAlpha=200)"
  },
  {
    "fileName": "EdgeDetection.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeDetection.js",
    "comments": "/**\r\n * Detects edges between different colors in a pixel array.\r\n * \r\n * @param {PixelArray} pixelArray - The input pixel array.\r\n * @param {Kernel|null} kernel - The kernel used for edge detection.\r\n * @returns {PixelArray} - A new pixel array with edges highlighted.\r\n */",
    "functionSignature": "export function detectEdges(pixelArray, kernel, fillColor=[255, 255, 255, 255], checkSingle = true)"
  },
  {
    "fileName": "EdgeDetection.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeDetection.js",
    "comments": "/**\r\n * Detects and returns an array of inner edges, fill color is white\r\n * \r\n * @param {PixelArray} pixelArray - The input pixel array.\r\n * @param {Kernel|null} kernel - The kernel used for edge detection.\r\n * @param {Number} alphaMax - Inclusive alpha value to test\r\n * @returns {PixelArray} - A new pixel array with edges highlighted.\r\n */",
    "functionSignature": "export function detectAlphaEdges(pixelArray, kernel, fillColor=[255, 255, 255, 255], alphaMax=0)"
  },
  {
    "fileName": "EdgeDetection.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeDetection.js",
    "comments": "/**\r\n * Detects and returns a ring - tests only alpha = 0 and will return true if kernel has alpha 255\r\n * \r\n * @param {PixelArray} pixelArray - The input pixel array.\r\n * @param {Kernel} kernel - The kernel used for edge detection.\r\n * @param {Number} alphaMax - Inclusive alpha value to test\r\n * @returns {PixelArray} - A new pixel array with edges highlighted.\r\n */",
    "functionSignature": "export function detectOuterEdges(pixelArray, kernel=null, fillColor=[255, 255, 255, 255], alphaMin=0, alphaMax=255)"
  },
  {
    "fileName": "EdgeDetection.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeDetection.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pixelArray \r\n * @param {Kernel|null} kernel \r\n * @param {Function|null} predicate \r\n * @returns {PixelArray}\r\n */",
    "functionSignature": "export function detectEdgesGrayscale(pixelArray, kernel, predicate=blankPredicate)"
  },
  {
    "fileName": "EdgeDetection.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeDetection.js",
    "comments": "/**\r\n * Compares two arrays for equality.\r\n * \r\n * @param {Array} a - The first array.\r\n * @param {Array} b - The second array.\r\n * @returns {boolean} - Returns true if arrays are equal, false otherwise.\r\n */",
    "functionSignature": "function arraysAreEqual(a, b)"
  },
  {
    "fileName": "EdgeExample.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeExample.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pixelArray \r\n */",
    "functionSignature": "export function EdgeExample(pixelArray)"
  },
  {
    "fileName": "EdgeExample.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeExample.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pixelArray \r\n */",
    "functionSignature": "export function EdgeExample2(pixelArray)"
  },
  {
    "fileName": "EdgeFunctions.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeFunctions.js",
    "comments": "/**\r\n * Shrinks the edge of pixels in the given pixelArray based on the alpha value of neighboring pixels.\r\n * If a neighboring pixel's alpha value is greater than or equal to alphaMin, \r\n * the current pixel's value is set to an empty (transparent) pixel.\r\n * \r\n * @param {PixelArray} pixelArray - The pixel array object containing width, height, and array properties.\r\n * @param {Kernel|null} [kernelOffsets=null] - The offsets to define which neighboring pixels to consider.\r\n * @param {number} [alphaMin=0] - The minimum alpha value to consider for shrinking the edge.\r\n * @returns {Uint8ClampedArray} - The modified pixel array.\r\n */",
    "functionSignature": "export function ShrinkEdge(pixelArray, kernelOffsets=null, alphaMin = 0)"
  },
  {
    "fileName": "EdgeFunctions.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\EdgeFunctions.js",
    "comments": "/**\r\n * Highlights the edges of pixels in the given pixelArray based on the alpha value of neighboring pixels.\r\n * If a neighboring pixel's alpha value is greater than or equal to alphaMin, \r\n * the current pixel's value is set to a solid white pixel.\r\n * \r\n * @param {PixelArray} pixelArray - The pixel array object containing width, height, and array properties.\r\n * @param {Object|null} [kernelOffsets=null] - The offsets to define which neighboring pixels to consider.\r\n * @param {number} [alphaMin=0] - The minimum alpha value to consider for highlighting the edge.\r\n * @returns {Uint8ClampedArray} - The new pixel array highlighting the edges.\r\n */",
    "functionSignature": "export function GetEdgeArray(pixelArray, kernelOffsets=null, alphaMin = 0)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * Creates a mask from a given pixel array. If the `solid` parameter is true, any non-transparent pixel in the \r\n * original pixel array is replaced with the specified color. If `solid` is false, only the alpha value \r\n * of the original pixel is used, and the RGB values are replaced with the specified color.\r\n * \r\n * @param {PixelArray} pixelArray - The source pixel array from which the mask is generated.\r\n * @param {Array<number>} [color=[255, 255, 255, 255]] - The color to use for the mask. Default is solid white.\r\n * @param {boolean} [solid=true] - Determines the behavior of the mask generation. If true, any non-transparent \r\n *                                 pixel in the original array is replaced with the given color. If false, \r\n *                                 the alpha value of the original pixel is preserved.\r\n * @returns {PixelArray} - A new pixel array that represents the generated mask.\r\n */",
    "functionSignature": "export function MaskFromPixelArray(pixelArray, color=[255, 255, 255, 255], solid=true)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * @param {PixelArray} pixelArray\r\n */",
    "functionSignature": "export function ExpandMutate(pixelArray, kernel=null)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * @param {PixelArray} pixelArray\r\n */",
    "functionSignature": "export function ExpandRing(pixelArray, kernel=null)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * @param {PixelArray} pixelArray\r\n * @returns {PixelArray} - a new PixelArray\r\n */",
    "functionSignature": "export function Expand(pixelArray, kernel=null, color=null)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pixelArray \r\n * @returns {PixelArray}\r\n */",
    "functionSignature": "export function InvertAlpha(pixelArray)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * Inverts pixels based on their alpha value. Pixels with alpha value above a threshold \r\n * will be set to a transparent color. All other pixels will be set to a specified color.\r\n * \r\n * @param {PixelArray} pixelArray - The source pixel array.\r\n * @param {number} [alphaMin=254] - Minimum alpha value to consider for inversion.\r\n * @param {Array<number>} [newColor=null] - Color to set for pixels below the alpha threshold.\r\n * @param {number} [blackOrWhite=0] - Indicates whether to use black (0) or white (1) if newColor is not specified.\r\n * @returns {PixelArray} - A new pixel array with pixels inverted based on alpha values.\r\n */",
    "functionSignature": "export function InvertFromAlpha(pixelArray, alphaMin = 254, newColor=null, blackOrWhite=0)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * Expands the details of a pixel array based on a given detail map.\r\n * \r\n * @param {PixelArray} pixelArray - The source pixel array.\r\n * @param {PixelArray} detailArray - The detail map used for expansion.\r\n * @param {Kernel} [kernel=null] - Optional kernel for convolution operations.\r\n * @param {number} [iters=2] - Number of iterations to perform expansion.\r\n * @param {number} [blackOrWhite=1] - Indicates whether to use black (0) or white (1) for the expanded areas.\r\n * @returns {PixelArray} - A new pixel array with details expanded.\r\n */",
    "functionSignature": "export function ExpandByDetailMap(pixelArray, detailArray, kernel=null, iters=2, blackOrWhite=1)"
  },
  {
    "fileName": "Expansion.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Expansion.js",
    "comments": "/**\r\n * Expands the details of a pixel array for a single iteration based on a detail map.\r\n * \r\n * @param {PixelArray} pixelArray - The source pixel array.\r\n * @param {PixelArray} detailArray - The detail map used for expansion.\r\n * @param {Kernel} [kernel=null] - Optional kernel for convolution operations.\r\n * @param {Uint8ClampedArray} [newArray=null] - An optional new array to hold the result.\r\n * @param {number} [blackOrWhite=0] - Indicates whether to use black (0) or white (1) for the expanded areas.\r\n * @param {number} [alphaMin=254] - Minimum alpha value to consider for expansion.\r\n * @param {Array<number>} [newColor=null] - Color to set for expanded pixels.\r\n * @returns {Uint8ClampedArray} - An array with expanded details.\r\n */",
    "functionSignature": "export function ExpandByDetailSingleIter(pixelArray, detailArray, kernel=null, newArray=null, blackOrWhite = 0, alphaMin = 254, newColor=null)"
  },
  {
    "fileName": "Kernel.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\Kernel.js",
    "comments": "/**\r\n     * Tests a pixel with arbitrary func and this object's kernel\r\n     * \r\n     * @param {PixelArray} pixelArray - The width of the 2D plane.\r\n     * @param {Number} x - an integer \r\n     * @param {Number} y - an integer\r\n     * @param {Function} func - predicate function.\r\n     * @returns {Array<Array<Boolean>>}\r\n     */\r\n    getBool(pixelArray, x, y, func=null){\r\n        if (!func){\r\n            func = (color) => {return color[3] > 0;}\r\n        }\r\n\r\n        const result = [];\r\n\r\n        for(let i = 0; i < this.offsets[0].length; i += 1){\r\n            const currentRow = [];\r\n            for(let j = 0; j < this.offsets[1].length; j += 1){\r\n                const xOffset = this.offsets[0][i];\r\n                const yOffset = this.offsets[1][j];\r\n                const checkX = x + xOffset;\r\n                const checkY = y + yOffset;\r\n                \r\n                currentRow.push(func(checkX, checkY, pixelArray));\r\n            }\r\n            result.push(currentRow);\r\n        }\r\n        return result;\r\n    }\r\n\r\n    grabNeighborColor(pixelArray){\r\n        \r\n    }\r\n\r\n    flattenResult(result){\r\n        return result.flatten();\r\n    }\r\n\r\n    /**\r\n     * Generates a gradient on a 2D plane given two colors, dimensions, position offsets, and gradient distance.\r\n     * \r\n     * @param {number} width - The width of the 2D plane.\r\n     * @param {Function} func - predicate function.\r\n     * @returns {Array<Array<Boolean>>}\r\n     */\r\n    getColorBool(){\r\n\r\n    }\r\n    \r\n}\r\n\r\n//export function Pixe\r\n\r\nexport function Thing(pArray, x, y){\r\n    if (x >= pArray.width){\r\n        return null;\r\n    }\r\n    else if (x < 0){\r\n        return null;\r\n    }\r\n    else if (y >= pArray.height){\r\n        return null;\r\n    }\r\n    else if (y < 0){\r\n        return null;\r\n    }\r\n}\r\n\r\n\r\n//#region Kernel Functions\r\n/**\r\n * \r\n * @param {*} x int\r\n * @param {*} y int\r\n * @param {*} kernel \r\n * @param {*} pixelArrays Array<PixelArray>\r\n * @param {*} func \r\n */",
    "functionSignature": "export function KernelBoundFunc(x, y, kernel, pixelArrays, func)"
  },
  {
    "fileName": "KernelSpecial.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\KernelSpecial.js",
    "comments": "/**\r\n * Creates an upward-facing kernel.\r\n * Note: In canvas, higher y-values are downward.\r\n *\r\n * @param {number} [length=3] - Kernel height.\r\n * @returns {Kernel} - Upwards kernel.\r\n */",
    "functionSignature": "export function UpKernel(length=3)"
  },
  {
    "fileName": "KernelSpecial.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\KernelSpecial.js",
    "comments": "/**\r\n * Creates an downard-facing kernel.\r\n * Note: In canvas, higher y-values are downward.\r\n *\r\n * @param {number} [length=3] - Kernel height.\r\n * @returns {Kernel} - Upwards kernel.\r\n */",
    "functionSignature": "export function DownKernel(length=3)"
  },
  {
    "fileName": "KernelSpecial.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\KernelSpecial.js",
    "comments": "/**\r\n * Creates an downard-facing kernel.\r\n *\r\n * @param {number} [length=3] - Kernel left bounds.\r\n * @returns {Kernel} - Left kernel\r\n */",
    "functionSignature": "export function LeftKernel(length=3)"
  },
  {
    "fileName": "KernelSpecial.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Edges\\KernelSpecial.js",
    "comments": "/**\r\n * Creates a horizontal kernel.\r\n *\r\n * @param {number} [length=2] - Kernel left bounds.\r\n * @returns {Kernel} - Left kernel\r\n */",
    "functionSignature": "export function HorizontalKernel(length=2)"
  },
  {
    "fileName": "Generators.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Generators.js",
    "comments": "/**\r\n * Mutates a given pixelArray by drawing a horizontal line at a specified y-coordinate.\r\n * \r\n * @param {PixelArray} pixelArray - The PixelArray object to be mutated.\r\n * @param {number} yValue - The y-coordinate at which the line will be drawn.\r\n * @param {number[]} fillColor - An array representing the RGBA color value. Default is black.\r\n */",
    "functionSignature": "export function LineAtYMutate(pixelArray, yValue, fillColor=[0, 0, 0, 255])"
  },
  {
    "fileName": "Generators.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Generators.js",
    "comments": "/**\r\n * Creates a new PixelArray and draws a horizontal line at a specified y-coordinate.\r\n *\r\n * @param {number[]} size - An array representing the width and height of the PixelArray. Default is [32, 32].\r\n * @param {number} yValue - The y-coordinate at which the line will be drawn.\r\n * @param {number[]} fillColor - An array representing the RGBA color value. Default is black.\r\n * @returns {PixelArray} A new PixelArray with the drawn line.\r\n */",
    "functionSignature": "export function LineAtY(size=[32, 32], yValue, fillColor=[0, 0, 0, 255])"
  },
  {
    "fileName": "Generators.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Generators.js",
    "comments": "/**\r\n * Mutates a given pixelArray by drawing a vertical line at a specified x-coordinate.\r\n * \r\n * @param {PixelArray} pixelArray - The PixelArray object to be mutated.\r\n * @param {number} xValue - The x-coordinate at which the line will be drawn.\r\n * @param {number[]} fillColor - An array representing the RGBA color value. Default is black.\r\n */",
    "functionSignature": "export function LineAtXMutate(pixelArray, xValue, fillColor=[0, 0, 0, 255])"
  },
  {
    "fileName": "Generators.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Generators.js",
    "comments": "/**\r\n * Creates a new PixelArray and draws a vertical line at a specified x-coordinate.\r\n *\r\n * @param {number[]} size - An array representing the width and height of the PixelArray. Default is [32, 32].\r\n * @param {number} xValue - The x-coordinate at which the line will be drawn.\r\n * @param {number[]} fillColor - An array representing the RGBA color value. Default is black.\r\n * @returns {PixelArray} A new PixelArray with the drawn line.\r\n */",
    "functionSignature": "export function LineAtX(size=[32, 32], xValue, fillColor=[0, 0, 0, 255])"
  },
  {
    "fileName": "Gradients.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Gradients.js",
    "comments": "/**\r\n * Generates a gradient on a 2D plane given two colors, dimensions, position offsets, and gradient distance.\r\n * \r\n * @param {number} width - The width of the 2D plane.\r\n * @param {number} height - The height of the 2D plane.\r\n * @param {number} xOffsetTop - Horizontal offset for the top of the gradient line.\r\n * @param {number} xOffsetBottom - Horizontal offset for the bottom of the gradient line.\r\n * @param {number} gradientDistanceInPixels - Distance over which the gradient spans.\r\n * @param {number[]} color1 - The starting RGBA color of the gradient.\r\n * @param {number[]} color2 - The ending RGBA color of the gradient.\r\n * \r\n * @returns {PixelArray} The pixel array containing gradient data.\r\n */",
    "functionSignature": "function GenerateGradient(width, height, xOffsetTop, xOffsetBottom, gradientDistanceInPixels, black, white)"
  },
  {
    "fileName": "Gradients.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Gradients.js",
    "comments": "/**\r\n * Generates a horizontal gradient from left to right.\r\n *\r\n * @param {number} width - Width of the output gradient.\r\n * @param {number} height - Height of the output gradient.\r\n * @param {Array<number>} color1 - Starting color as [r, g, b, a].\r\n * @param {Array<number>} color2 - Ending color as [r, g, b, a].\r\n * @returns {PixelArray} Resulting gradient in PixelArray format.\r\n */",
    "functionSignature": "function GenerateHorizontalGradient(width, height, color1, color2)"
  },
  {
    "fileName": "Gradients.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Gradients.js",
    "comments": "/**\r\n * Generates a vertical gradient from top to bottom.\r\n *\r\n * @param {number} width - Width of the output gradient.\r\n * @param {number} height - Height of the output gradient.\r\n * @param {Array<number>} color1 - Starting color as [r, g, b, a].\r\n * @param {Array<number>} color2 - Ending color as [r, g, b, a].\r\n * @returns {PixelArray} Resulting gradient in PixelArray format.\r\n */",
    "functionSignature": "function GenerateVerticalGradient(width, height, color1, color2)"
  },
  {
    "fileName": "Noise.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Noise.js",
    "comments": "/**\r\n * Stamps a\r\n\r\n * @param {PixelArray} bottomArray - serves as the base or background.\r\n * @param {PixelArray} topArray - will be blended over the bottomArray.\r\n * @param {number} [xPos=0] - The x-position where the topArray starts relative to the bottomArray.\r\n * @param {number} [yPos=0] - The y-position where the topArray starts relative to the bottomArray.\r\n */\r\n/*\r\nexport function stampMutateBad(bottomArray, topArray, xPos = 0, yPos = 0) {\r\n    const blendedArrayData = new Uint8ClampedArray(bottomArray.array);\r\n    //const blendedArray = new PixelArray(blendedArrayData, bottomArray.width, bottomArray.height);\r\n\r\n    for (let x = 0; x < topArray.width; x += 1) {\r\n        for (let y = 0; y < topArray.height; y += 1) {\r\n            const bottomX = x + xPos;\r\n            const bottomY = y + yPos;\r\n\r\n            // Check bounds to ensure we're within the blendedArray\r\n            if (bottomX >= 0 && bottomX < blendedArray.width && bottomY >= 0 && bottomY < blendedArray.height) {\r\n                const [topR, topG, topB, topA] = topArray.getColorValue(x, y);\r\n                const [bottomR, bottomG, bottomB, bottomA] = blendedArray.getColorValue(bottomX, bottomY);\r\n\r\n                const alphaBlend = topA / 255;\r\n                const inverseAlpha = 1 - alphaBlend;\r\n\r\n                // Blend colors based on the top pixel's alpha\r\n                const blendedR = topR * alphaBlend + bottomR * inverseAlpha;\r\n                const blendedG = topG * alphaBlend + bottomG * inverseAlpha;\r\n                const blendedB = topB * alphaBlend + bottomB * inverseAlpha;\r\n                const blendedA = Math.min(255, topA + bottomA); // ensure alpha doesn't exceed 255\r\n\r\n                blendedArray.setColorValue(bottomX, bottomY, [blendedR, blendedG, blendedB, blendedA]);\r\n            }\r\n        }\r\n    }\r\n    return blendedArray;\r\n}\r\n*/\r\n\r\n/**\r\n * \r\n * @param {number} bias \r\n * @param {Array<Number>} seedNumbers\r\n * @param {PixelArray.PixelArray} pixelArray \r\n * @param {Array<Number>} fillColor \r\n * @param {*} mask \r\n * @param {testFunc}\r\n * @returns {PixelArray}\r\n */",
    "functionSignature": "export function TotallyRandomFunc(pixelArray, bias, seedNumbers, fillColor = null, mask=null, testFunc=null)"
  },
  {
    "fileName": "Noise.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Noise.js",
    "comments": "/**\r\n * Blends two colors using the \"over\" blend mode.\r\n * \r\n * @param {Array<number>} bottom - Bottom color in the format [r, g, b, a].\r\n * @param {Array<number>} top - Top color in the format [r, g, b, a].\r\n * @returns {Array<number>} Resultant blended color.\r\n */",
    "functionSignature": "function overBlend(bottom, top)"
  },
  {
    "fileName": "Noise.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Generators\\Noise.js",
    "comments": "/**\r\n * Stamps the stampTop pixel array onto pixels in the bottom pixel array \r\n * with an alpha value over 200.\r\n * \r\n * @param {PixelArray} bottom - The pixel array to be stamped onto.\r\n * @param {Array<PixelArray>} arrayOfStamps - Array of PixelArrays for stamping.\r\n * @param {string} [blendMode='over'] - The blending mode. Default is 'over'.\r\n * @param {Function} func - Func that tests the bottomPArray\r\n * @param {Number} seed - Seed for the RandomWrapper object\r\n */",
    "functionSignature": "export function stampMutate(bottom, arrayOfStamps, blendMode = 'over', func=null, seed=null)"
  },
  {
    "fileName": "Deleters.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Deleters.js",
    "comments": "/**\r\n * Uses a RandomWrapper object to erase pixels from a PixelArray based on a bias factor\r\n * \r\n * @param {PixelArray} pixelArray - The target PixelArray object\r\n * @param {Number} bias - The likelihood factor for erasing a pixel (1 means every pixel will be erased, 0 means none)\r\n * @param {Number|null} seed - Optional seed for the random generation\r\n */",
    "functionSignature": "export function RandomDelete(pixelArray, bias, seed=null)"
  },
  {
    "fileName": "Deleters.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Deleters.js",
    "comments": "/**\r\n * Uses a RandomWrapper object to erase pixels from a PixelArray based on a bias factor\r\n * \r\n * @param {PixelArray} pixelArray - The target PixelArray object\r\n * @param {Number} bias - The likelihood factor for erasing a pixel (1 means every pixel will be erased, 0 means none)\r\n * @param {Number|null} seed - Optional seed for the random generation\r\n */",
    "functionSignature": "export function RandomDeleteMutate(pixelArray, bias, seed=null)"
  },
  {
    "fileName": "Deleters.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Deleters.js",
    "comments": "/**\r\n * Uses a RandomWrapper object to only keep a certain amount of pixels within a fixed range\r\n * \r\n * @param {PixelArray} pixelArray - The target PixelArray object\r\n * @param {Array<Number>|Number} range - The likelihood factor for erasing a pixel (1 means every pixel will be erased, 0 means none)\r\n * @param {Number|null} seed - Optional seed for the random generation\r\n */",
    "functionSignature": "export function RandomKeep(pixelArray, range=[3, 5], seed=null, fillColor=null, minAlpha=1)"
  },
  {
    "fileName": "perspective.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\perspective.js",
    "comments": "/**\r\n * Compresses the pixel array vertically by skipping rows.\r\n * The skip probability is interpolated between the start and end values \r\n * as you move from the top to the bottom of the image.\r\n *\r\n * @param {PixelArray}} pixelArray - The original pixel array.\r\n * @param {number} [initialSkipProbability=0] - The starting probability to skip a row at the top.\r\n * @param {number} [endingSkipProbability=0.7] - The ending probability to skip a row at the bottom.\r\n * @returns {Object} - The compressed pixel array.\r\n */",
    "functionSignature": "function compressPixelArray(pixelArray, initialSkipProbability = 0, endingSkipProbability = 0.7)"
  },
  {
    "fileName": "Transformations.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Transformations.js",
    "comments": "/**\r\n * Flips the PixelArray along the X-axis.\r\n * @param {PixelArray} pixelArray - The input PixelArray.\r\n * @returns {PixelArray} - The flipped PixelArray.\r\n */",
    "functionSignature": "export function flipX(pixelArray)"
  },
  {
    "fileName": "Transformations.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Transformations.js",
    "comments": "/**\r\n * Flips the PixelArray along the Y-axis.\r\n * @param {PixelArray} pixelArray - The input PixelArray.\r\n * @returns {PixelArray} - The flipped PixelArray.\r\n */",
    "functionSignature": "export function flipY(pixelArray)"
  },
  {
    "fileName": "Transformations.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Transformations.js",
    "comments": "/**\r\n * Rotates the PixelArray by 90 degrees.\r\n * @param {PixelArray} pixelArray - The input PixelArray.\r\n * @returns {PixelArray} - The rotated PixelArray.\r\n */",
    "functionSignature": "export function rotate90(pixelArray)"
  },
  {
    "fileName": "Transformations.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Transformations.js",
    "comments": "/**\r\n * Rotates the PixelArray by 180 degrees.\r\n * @param {PixelArray} pixelArray - The input PixelArray.\r\n * @returns {PixelArray} - The rotated PixelArray.\r\n */",
    "functionSignature": "export function rotate180(pixelArray)"
  },
  {
    "fileName": "Transformations.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Transformations.js",
    "comments": "/**\r\n * Rotates the PixelArray by 270 degrees.\r\n * @param {PixelArray} pixelArray - The input PixelArray.\r\n * @returns {PixelArray} - The rotated PixelArray.\r\n */",
    "functionSignature": "export function rotate270(pixelArray)"
  },
  {
    "fileName": "Transformations.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Mutators\\Transformations.js",
    "comments": "/**\r\n * Rotates the PixelArray by an arbitrary amount of degrees.\r\n * Note: This is a simple implementation and may not handle edge cases or give high-quality results for all angles.\r\n * @param {PixelArray} pixelArray - The input PixelArray.\r\n * @param {number} degrees - Degrees of rotation.\r\n * @returns {PixelArray} - The rotated PixelArray.\r\n */",
    "functionSignature": "export function rotateArbitrary(pixelArray, degrees)"
  },
  {
    "fileName": "PaletteGrading.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGrading.js",
    "comments": "/**\r\n * Map the colors of one palette to another palette evenly.\r\n * @param {PixelArray} pixelArray\r\n * @param {*} paletteToMapTo\r\n */",
    "functionSignature": "export function PaletteToPaletteMapEvenSpace(pixelArray, paletteToMapTo)"
  },
  {
    "fileName": "PaletteGrading.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGrading.js",
    "comments": "/**\r\n * Map the colors of one palette to another palette evenly.\r\n * @param {*} palette1\r\n * @param {*} palette2\r\n * @param {boolean} startWithDarkest\r\n * @param {boolean} guaranteeUnique\r\n * @returns {Array}\r\n */",
    "functionSignature": "export function paletteToPaletteMapEvenSpace(palette1, palette2, startWithDarkest=true, guaranteeUnique=false)"
  },
  {
    "fileName": "PaletteGrading.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGrading.js",
    "comments": "/**\r\n * Color grade a pixel array.\r\n * @param {PixelArray} pixelArray\r\n * @param {*} seedValues\r\n * @param {*} paletteList\r\n * @param {boolean} doYUV\r\n * @returns {PixelArray}\r\n */",
    "functionSignature": "export function PaletteGradingFunc(pixelArray, seedValues, paletteList, doYUV=true)"
  },
  {
    "fileName": "PaletteGrading.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGrading.js",
    "comments": "/**\r\n * Color map the entire pixel array.\r\n * @param {PixelArray} pixelArray\r\n * @param {number} width\r\n * @param {*} palette\r\n * @param {boolean} keepTransparency\r\n * @returns {Uint8ClampedArray}\r\n */",
    "functionSignature": "function entireColorMapFunction(pixelArray, width, palette, keepTransparency=true)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Represents a color with RGBA values.\r\n   * @param {number} r - Red value (0-255).\r\n   * @param {number} g - Green value (0-255).\r\n   * @param {number} b - Blue value (0-255).\r\n   * @param {number} [a=255] - Alpha value (0-255, defaults to 255).\r\n   */\r\n  constructor(r, g, b, a = 255) {\r\n    this.r = r;\r\n    this.g = g;\r\n    this.b = b;\r\n    this.a = a;\r\n  }\r\n\r\n  /**\r\n   * Converts the color to an RGBA string.\r\n   * @returns {string} - RGBA string representation of the color.\r\n   */\r\n  toRGBString() {\r\n    const a = this.a / 255;\r\n    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;\r\n  }\r\n}\r\n\r\n/**\r\n * Converts an RGBA array to an RGB string.\r\n * @param {number[]} arr - RGBA array.\r\n * @returns {string} - RGB string representation.\r\n */",
    "functionSignature": "export function RGBArrToString(arr)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Represents a palette created from an array of HEX values.\r\n   * @param {string[]} hexValues - Array of HEX color values.\r\n   * @param {string} [name=null] - Name of the palette.\r\n   */\r\n  constructor(hexValues, name = null) {\r\n    this.colors = [];\r\n    this.luminances = [];\r\n    this.name = name;\r\n\r\n    for (let i = 0; i < hexValues.length; i += 1) {\r\n      var result = hexToRgb(hexValues[i]);\r\n      this.colors.push(new Color(result.r, result.g, result.b));\r\n    }\r\n\r\n    this.colors.sort(rgbCompareFunction);\r\n\r\n    for (let i = 0; i < hexValues.length; i += 1) {\r\n      var curColor = this.colors[i];\r\n      this.luminances.push(getLuminance(curColor.r, curColor.g, curColor.b));\r\n    }\r\n  }\r\n}\r\n\r\nexport class Palette {\r\n    /**\r\n     * Represents a palette with colors and optional luminance values.\r\n     * @param {Array<Color>} colors - Array of Color objects.\r\n     * @param {Array<number>} [luminances=null] - Array of luminance values corresponding to colors.\r\n     * @param {string} [name=null] - Name of the palette.\r\n     */\r\n    constructor(colors, luminances = null, name = null) {\r\n      if (luminances === null) {\r\n        this.colors = colors;\r\n        this.colors.sort(rgbCompareFunction);\r\n        this.luminances = [];\r\n        for (let i = 0; i < this.colors.length; i += 1) {\r\n          var curColor = this.colors[i];\r\n          this.luminances.push(getLuminance(curColor.r, curColor.g, curColor.b));\r\n        }\r\n      } else {\r\n        this.colors = colors;\r\n        this.luminances = luminances;\r\n      }\r\n  \r\n      this.name = name;\r\n    }\r\n  \r\n    static PaletteFromPixelArray(pixelArray) {\r\n      const colors = GetColorsFromPixelArray(pixelArray);\r\n      return new Palette(colors);\r\n    }\r\n  \r\n    static PaletteFromArrColors(arrColors, name = null) {\r\n      const actualColors = [];\r\n      for (let i = 0; i < arrColors.length; i += 1) {\r\n        actualColors.push(new Color(arrColors[i][0], arrColors[i][1], arrColors[i][2]));\r\n      }\r\n  \r\n      return new Palette(actualColors, null, name);\r\n    }\r\n  \r\n    static PaletteFromHEX(hexValues) {\r\n      const colors = [];\r\n      for (let i = 0; i < hexValues.length; i += 1) {\r\n        let result = hexToRgb(hexValues[i]);\r\n        colors.push(new Color(result.r, result.g, result.b));\r\n      }\r\n    }\r\n  }\r\n  \r\n  export class UrlPalette {\r\n    /**\r\n     * Represents a palette obtained from a URL.\r\n     * @param {string} url - URL to fetch the palette information.\r\n     */\r\n    constructor(url) {\r\n      this.url = url;\r\n      this.colors = null;\r\n      this.luminances = null;\r\n      this.counts = null;\r\n      this.getPaletteInformation();\r\n    }\r\n  \r\n    getPaletteInformation() {\r\n      let result = GetPalette(this.url);\r\n      this.colors = result[0];\r\n      this.counts = result[1];\r\n      this.luminances = result[2];\r\n      console.log(this.colors);\r\n    }\r\n  }\r\n\r\n\r\n/**\r\n * Converts an RGB color string to an array of RGB values.\r\n * @param {string} colorStr - RGB color string in the format 'rgb(r, g, b)'.\r\n * @returns {number[]} - Array containing RGB values.\r\n */",
    "functionSignature": "export function stringToRGB(colorStr)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Calculate luminance from an RGB color string.\r\n   * @param {string} colorStr - RGB color string in the format 'rgb(r, g, b)'.\r\n   * @returns {number} - Luminance value.\r\n   */",
    "functionSignature": "function getLuminanceFromString(colorStr)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Find the color in a list that has the smallest difference from the given RGB color.\r\n   * @param {number[]} rgbArr - Array containing RGB values.\r\n   * @param {number[][]} YUVList - List of YUV values for colors.\r\n   * @param {string[]} colorList - List of color strings.\r\n   * @param {boolean} [euclidean=false] - Whether to use Euclidean distance.\r\n   * @returns {string} - Closest color string from colorList.\r\n   */",
    "functionSignature": "export function findSmallestDifference(rgbArr, YUVList, colorList, euclidean = false)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Convert a palette to a list of YUV values.\r\n   * @param {Palette} palette - The palette to convert.\r\n   * @returns {number[][]} - List of YUV values.\r\n   */",
    "functionSignature": "export function PaletteToYUVList(palette)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Convert RGB values to YUV values.\r\n   * @param {number} r - Red value (0-255).\r\n   * @param {number} g - Green value (0-255).\r\n   * @param {number} b - Blue value (0-255).\r\n   * @returns {number[]} - Array containing YUV values.\r\n   */",
    "functionSignature": "export function YUVfromRGB(r, g, b)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n * Convert a value to a color based on a palette.\r\n * @param {Palette} palette - The palette to use.\r\n * @param {number} value - The value to map to a color.\r\n * @param {number[]} cumuList - List of cumulative values.\r\n * @param {string[]} colorList - List of color strings.\r\n * @returns {string | null} - The color string or null if not found.\r\n */",
    "functionSignature": "export function valueToColor(palette, value, cumuList, colorList)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Calculate cumulative list based on the count of colors.\r\n   * @param {string[]} colorList - List of color strings.\r\n   * @returns {number[]} - List of cumulative values.\r\n   */",
    "functionSignature": "export function getCumuList(colorList)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Get unique colors from a pixel array.\r\n   * @param {PixelArray} pixelArray - The pixel array to extract colors from.\r\n   * @returns {number[][]} - List of unique colors as RGB arrays.\r\n   */",
    "functionSignature": "export function GetColorsFromPixelArray(pixelArray)"
  },
  {
    "fileName": "PaletteGradingUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\PaletteUtils\\PaletteGradingUtils.js",
    "comments": "/**\r\n   * Calculate luminance from RGB values.\r\n   * @param {number} r - Red value (0-255).\r\n   * @param {number} g - Green value (0-255).\r\n   * @param {number} b - Blue value (0-255).\r\n   * @returns {number} - Luminance value.\r\n   */",
    "functionSignature": "export function getLuminance(r, g, b)"
  },
  {
    "fileName": "fitElementSimple.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\fitElementSimple.js",
    "comments": "/**\r\n * Fit a pixel element into a window with only one extension\r\n *\r\n * @param {PixelElement} pixelElement - The pixel element to resize.\r\n * @param {number} [targetWidth=null] - The desired target width. If null, the current width is used.\r\n * @param {number} [targetHeight=null] - The desired target height. If null, the current height is used.\r\n * @param {*} [testingObject=null] - Object to store skipped and repeated height or width during resizing.\r\n * @returns {Uint8ClampedArray} - The resized pixel array.\r\n */",
    "functionSignature": "export function fitElementSimple(pixelElement, targetWidth = null, targetHeight = null, testingObject = null)"
  },
  {
    "fileName": "PFitting.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\PFitting.js",
    "comments": "/**\r\n * Module to handle fitting of PixelElements (not sure what the difference is between this and PFixedFitting)\r\n */\r\n\r\nimport * as PixelUtils from \"eric-pixelarrayutils/PixelUtils\";\r\nimport { PixelArray } from \"eric-pixelarrayutils/PixelArray\";\r\nimport { PixelElement } from \"./FittingClasses\";\r\n\r\n\r\n/**\r\n* fit a pixel element into a window with only one extension\r\n* \r\n* @param {PixelElement} pixelElement \r\n* @param {int} targetWidth \r\n* @param {int} targetHeight \r\n* @param {*} testingObject \r\n* @returns {PixelArray}\r\n*/",
    "functionSignature": "export function fitElementSimplePArray(pixelElement, targetWidth=null, targetHeight=null, testingObject=null)"
  },
  {
    "fileName": "PFitting.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\PFitting.js",
    "comments": "/**\r\n* fit a pixel element into a window with only one extension\r\n* \r\n* @param {PixelElement} pixelElement \r\n* @param {int} targetWidth \r\n* @param {int} targetHeight \r\n* @param {*} testingObject \r\n* @returns {Uint8ClampedArray}\r\n*/",
    "functionSignature": "export function fitElementSimple(pixelElement, targetWidth=null, targetHeight=null, testingObject=null)"
  },
  {
    "fileName": "PFixedFitting.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\PFixedFitting.js",
    "comments": "/**\r\n * Module to handle fitting of PixelElements\r\n */\r\n\r\nimport * as PixelUtils from \"eric-pixelarrayutils/PixelUtils\";\r\nimport { PixelArray } from \"eric-pixelarrayutils/PixelArray\";\r\nimport { PixelElement } from \"./FittingClasses\";\r\n\r\n/**\r\n * Fits a pixel element into a window with one extension and returns a PixelArray.\r\n * \r\n * @param {PixelElement} pixelElement - The pixel element to be fit.\r\n * @param {number|null} [targetWidth=null] - The target width to fit the element into.\r\n * @param {number|null} [targetHeight=null] - The target height to fit the element into.\r\n * @param {*} [testingObject=null] - An optional object for tracking skipped or repeated dimensions.\r\n * @returns {PixelArray} - The new fitted PixelArray.\r\n */",
    "functionSignature": "export function fitElementSimplePArray(pixelElement, targetWidth = null, targetHeight = null, testingObject = null)"
  },
  {
    "fileName": "PFixedFitting.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\PFixedFitting.js",
    "comments": "/**\r\n * Fits a pixel element into a window with one extension and returns a Uint8ClampedArray.\r\n * \r\n * @param {PixelElement} pixelElement - The pixel element to be fit.\r\n * @param {number|null} [targetWidth=null] - The target width to fit the element into.\r\n * @param {number|null} [targetHeight=null] - The target height to fit the element into.\r\n * @param {*} [testingObject=null] - An optional object for tracking skipped or repeated dimensions.\r\n * @returns {Uint8ClampedArray} - The resized pixel array as a Uint8ClampedArray.\r\n */",
    "functionSignature": "export function fitElementSimple(pixelElement, targetWidth = null, targetHeight = null, testingObject = null)"
  },
  {
    "fileName": "Placing.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\Placing.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pArr \r\n * @param {*} prePlacement \r\n */",
    "functionSignature": "export function GetHPreMove(pArr, prePlacement=1)"
  },
  {
    "fileName": "Placing.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\Placing.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pArr \r\n * @param {*} prePlacement \r\n */",
    "functionSignature": "export function GetVPreMove(pArr, prePlacement=1)"
  },
  {
    "fileName": "Placing.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\Placing.js",
    "comments": "/**\r\n * \r\n * @param {PixelArray} pArray \r\n * @param {PixelArray} pArrToPlace \r\n * @param {*} randObj \r\n * @param {*} preMoveChoice \r\n */",
    "functionSignature": "export function MiddlePlacement(pArray, pArrToPlace, randObj=null, preMoveChoice=null)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\Stampers.js",
    "comments": "/**\r\n * Uniformly stamps across an image using random stamps and positions.\r\n * @param {PixelArray} inputArray - Base image\r\n * @param {Array<PixelArray>} stampArrays - Array of stamp images\r\n * @param {Array<number>} widthDistRange - Width distribution range\r\n * @param {Array<number>} heightDistRange - Height distribution range\r\n * @param {RandomWrapper} randObj - Random utility\r\n * @returns {PixelArray} - New image with stamps\r\n */",
    "functionSignature": "export function uniformStamper(inputArray, stampArrays, widthDistRange, heightDistRange, randObj)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\Stampers.js",
    "comments": "/**\r\n * Creates random copies of a stamp on a background.\r\n * @param {number} copies - Number of copies\r\n * @param {PixelArray} bgArray - Background image\r\n * @param {PixelArray} stampArray - Stamp image\r\n * @param {RandomWrapper} randObj - Random utility\r\n * @param {function} [blendFunc=null] - Optional blend function\r\n * @returns {Uint8ClampedArray} - New pixel array with stamps\r\n */",
    "functionSignature": "export function randomCopy(copies, bgArray, stampArray, randObj, blendFunc = null)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\Stampers.js",
    "comments": "/**\r\n * Wrapper function that returns a PixelArray.\r\n * @returns {PixelArray}\r\n */",
    "functionSignature": "export function randomCopyPArray(bgArray, stampArray, copies, randObj, blendFunc = null)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Placers\\Stampers.js",
    "comments": "/**\r\n * Stamps images along the width at random positions.\r\n * @param {PixelArray} inputArray - Base image\r\n * @param {Array<PixelArray>} stampArrays - Array of stamp images\r\n * @param {RandomWrapper} randObj - Random utility\r\n * @param {number|Array<number>} copies - Number or range of copies\r\n * @param {Array<number>} [distRange=[-2, 2]] - Distribution range for x offset\r\n * @param {function} [blendFunc=null] - Optional blend function\r\n * @returns {PixelArray} - New image with stamps\r\n */",
    "functionSignature": "export function widthStamper(inputArray, stampArrays, copies, randObj, distRange = [-2, 2], yRange=[0, 0], blendFunc = null)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Stamping\\Stampers.js",
    "comments": "/**\r\n * Uniformly stamps across an image using random stamps and positions.\r\n * @param {PixelArray} inputArray - Base image\r\n * @param {Array<PixelArray>} stampArrays - Array of stamp images\r\n * @param {Array<number>} widthDistRange - Width distribution range\r\n * @param {Array<number>} heightDistRange - Height distribution range\r\n * @param {RandomWrapper} randObj - Random utility\r\n * @returns {PixelArray} - New image with stamps\r\n */",
    "functionSignature": "export function uniformStamper(inputArray, stampArrays, widthDistRange, heightDistRange, randObj)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Stamping\\Stampers.js",
    "comments": "/**\r\n * Creates random copies of a stamp on a background.\r\n * @param {number} copies - Number of copies\r\n * @param {PixelArray} bgArray - Background image\r\n * @param {PixelArray} stampArray - Stamp image\r\n * @param {RandomWrapper} randObj - Random utility\r\n * @param {function} [blendFunc=null] - Optional blend function\r\n * @returns {Uint8ClampedArray} - New pixel array with stamps\r\n */",
    "functionSignature": "export function randomCopy(copies, bgArray, stampArray, randObj, blendFunc = null)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Stamping\\Stampers.js",
    "comments": "/**\r\n * Wrapper function that returns a PixelArray.\r\n * @returns {PixelArray}\r\n */",
    "functionSignature": "export function randomCopyPArray(bgArray, stampArray, copies, randObj, blendFunc = null)"
  },
  {
    "fileName": "Stampers.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\fixing-core\\Stamping\\Stampers.js",
    "comments": "/**\r\n * Stamps images along the width at random positions.\r\n * @param {PixelArray} inputArray - Base image\r\n * @param {Array<PixelArray>} stampArrays - Array of stamp images\r\n * @param {RandomWrapper} randObj - Random utility\r\n * @param {number|Array<number>} copies - Number or range of copies\r\n * @param {Array<number>} [distRange=[-2, 2]] - Distribution range for x offset\r\n * @param {function} [blendFunc=null] - Optional blend function\r\n * @returns {PixelArray} - New image with stamps\r\n */",
    "functionSignature": "export function widthStamper(inputArray, stampArrays, copies, randObj, distRange = [-2, 2], yRange=[0, 0], blendFunc = null)"
  },
  {
    "fileName": "PixelArrayReact.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\PixelArrayReact.js",
    "comments": "/**\r\n * ImageLoader component loads an image from a given `src` URL and extracts its pixel data.\r\n * Once the image is loaded, it triggers the `onImageDataLoaded` callback with the image's pixel data.\r\n * \r\n * THIS NEEDS TO EXIST, YOU NEED TO CREATE A CANVAS ELEMENT TO GET PIXEL DATA\r\n * \r\n * @param {string} src - The URL of the image to load.\r\n * @param {function} onImageDataLoaded - Callback function that receives the image data (pixels) once loaded.\r\n */",
    "functionSignature": "export function ImageLoader({ src, onImageDataLoaded })"
  },
  {
    "fileName": "PixelArrayReact.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\PixelArrayReact.js",
    "comments": "/**\r\n * ImageLoader component loads an image from a given `src` URL and extracts its pixel data.\r\n * Once the image is loaded, it triggers the `onImageDataLoaded` callback with the image's pixel data.\r\n * \r\n * THIS NEEDS TO EXIST, YOU NEED TO CREATE A CANVAS ELEMENT TO GET PIXEL DATA\r\n * \r\n * @param {string} src - The URL of the image to load.\r\n * @param {function} onImageDataLoaded - Callback function that receives the image data (pixels) once loaded.\r\n */",
    "functionSignature": "export function SimplePSDLoader({ src, onImageDataLoaded })"
  },
  {
    "fileName": "PixelArrayReact.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\PixelArrayReact.js",
    "comments": "/**\r\n * ToPixelArray component loads an image, converts it to a PixelArray object, and triggers a callback when the image is loaded.\r\n * \r\n * @param {string} pic - The source URL of the image to load.\r\n * @param {function} onImageLoaded - Callback function to handle the PixelArray object once the image is loaded.\r\n * \r\n * This component handles image loading and conversion to a custom PixelArray format, and optionally executes a callback with the PixelArray.\r\n */",
    "functionSignature": "export function ToPixelArray({ pic, onImageLoadedCallback })"
  },
  {
    "fileName": "PixelArrayReact.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\PixelArrayReact.js",
    "comments": "/**\r\n * MultiImageProcessor component processes multiple image inputs (PSD files)\r\n * and extracts pixel data for each non-background layer.\r\n * Once the image data is loaded, it applies functions to the pixel data and renders it on canvases.\r\n *\r\n * @param {Array} inputs - An array of objects containing `src` (URL of the image) and `func` (function to apply to the pixel data).\r\n */",
    "functionSignature": "export function PSDProcessor({ inputs=null })"
  },
  {
    "fileName": "PixelArrayReactUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\PixelArrayReactUtils.js",
    "comments": "/**\r\n * ImageLoader component loads an image from a given `src` URL and extracts its pixel data.\r\n * Once the image is loaded, it triggers the `onImageDataLoaded` callback with the image's pixel data.\r\n * \r\n * THIS NEEDS TO EXIST, YOU NEED TO CREATE A CANVAS ELEMENT TO GET PIXEL DATA\r\n * \r\n * @param {string} src - The URL of the image to load.\r\n * @param {function} onImageDataLoaded - Callback function that receives the image data (pixels) once loaded.\r\n */",
    "functionSignature": "export function ImageLoader({ src, onImageDataLoaded })"
  },
  {
    "fileName": "PixelArrayReactUtils.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\PixelArrayReactUtils.js",
    "comments": "/**\r\n * ToPixelArray component loads an image, converts it to a PixelArray object, and triggers a callback when the image is loaded.\r\n * \r\n * @param {string} pic - The source URL of the image to load.\r\n * @param {function} onImageLoaded - Callback function to handle the PixelArray object once the image is loaded.\r\n * \r\n * This component handles image loading and conversion to a custom PixelArray format, and optionally executes a callback with the PixelArray.\r\n */",
    "functionSignature": "export function ToPixelArray({ pic, onImageLoadedCallback })"
  },
  {
    "fileName": "Loaders.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\ReactLoading\\Loaders.js",
    "comments": "/**\r\n * SimplePSDLoader component loads a PSD file from a given `src` URL,\r\n * parses it using `ag-psd`, and extracts pixel data for each non-background layer.\r\n * Once the PSD is loaded and processed, it triggers the `onImageDataLoaded`\r\n * callback with the parsed PSD data.\r\n *\r\n * @param {string} src - The URL of the PSD file to load.\r\n * @param {function} onImageDataLoaded - Callback function that receives the parsed PSD data once loaded.\r\n */",
    "functionSignature": "export function SimplePSDLoader({ src, onImageDataLoaded })"
  },
  {
    "fileName": "Loaders.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\ReactLoading\\Loaders.js",
    "comments": "/**\r\n * SimplePSDLoader component loads a PSD file from a given `src` URL,\r\n * parses it using `ag-psd`, extracts pixel data for each non-background layer,\r\n * and automatically downloads each layer as a PNG file.\r\n *\r\n * @param {string} src - The URL of the PSD file to load.\r\n * @param {function} onImageDataLoaded - Callback function that receives the parsed PSD data once loaded.\r\n */",
    "functionSignature": "export function SimplePSDDownloader({ src, onImageDataLoaded })"
  },
  {
    "fileName": "sampling.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\sampling.js",
    "comments": "/**\r\n * @param pixelArray {PixelArray}\r\n */",
    "functionSignature": "export function sampleWithBrush(pixelArray, x, y, r, falloffFunction = linearFalloff)"
  },
  {
    "fileName": "sampling.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\sampling.js",
    "comments": "/**\r\n * Blends a top PixelArray over a bottom PixelArray based on the alpha values of the top array.\r\n \r\n * @param {PixelArray} bottomArray - serves as the base or background.\r\n * @param {PixelArray} topArray - will be blended over the bottomArray.\r\n * @param {number} [xPos=0] - The x-position where the topArray starts relative to the bottomArray.\r\n * @param {number} [yPos=0] - The y-position where the topArray starts relative to the bottomArray.\r\n *\r\n * @returns {PixelArray} \r\n */",
    "functionSignature": "export function blendPixelArrays(bottomArray, topArray, xPos = 0, yPos = 0)"
  },
  {
    "fileName": "scalingMethods.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\scalingMethods.js",
    "comments": "/** Scales a pixelArray according to [sx, sy]\r\n * \r\n * @param {PixelArray} pixelArray \r\n * @param {Number} sx \r\n * @param {Number} sy \r\n * @returns {PixelArray} - a new PixelArray\r\n */",
    "functionSignature": "export function floatScale(pixelArray, sx, sy)"
  },
  {
    "fileName": "seamlessTiling.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\seamlessTiling.js",
    "comments": "/**\r\n * A function that cuts up a PixelArray in four quadrants and moves them to opposite quandrant diagonally\r\n * \r\n * @param {PixelArray} pixelArray \r\n * @returns {PixelArray} \r\n */",
    "functionSignature": "export function prepareSeamless(pixelArray)"
  },
  {
    "fileName": "seamlessTiling.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\seamlessTiling.js",
    "comments": "/**\r\n * Creates a seamless tile and stamps brushes on the vertical and horizontal seams.\r\n *\r\n * @param {PixelArray} pixelArray - The input PixelArray to be made seamless.\r\n * @param {number} brushRadius - The radius of the brush used for stamping.\r\n * \r\n * @returns {PixelArray} - The seamlessly tiled and stamped PixelArray.\r\n */",
    "functionSignature": "export function tileAndOverlayBrush(pixelArray, brushRadius, seed=10)"
  },
  {
    "fileName": "textureLoad.js",
    "filePath": "C:\\Users\\Erik Tkachuk\\Documents\\_js from documents\\Rocks\\src\\textureLoad.js",
    "comments": "/**\r\n * @param pixelArray {PixelArray}\r\n */",
    "functionSignature": "export function TextureTruncator(pixelArray, targetSize, seed=null)"
  }
];