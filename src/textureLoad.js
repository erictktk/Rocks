import { PixelArray } from "eric-pixelarrayutils/PixelArray";
import { RandomWrapper } from 'eric-random-wrapper';

/**
 * @param pixelArray {PixelArray}
 */
export function TextureTruncator(pixelArray, targetSize, seed=null){
    //
    const [width, height] = [pixelArray.width, pixelArray.height];

    const [newWidth, newHeight] = [targetSize*2, targetSize*2];

    const newPixelArray = new PixelArray(targetSize, targetSize);

    const randObj = new RandomWrapper(seed);
    const [xStart, yStart] = [randObj.randInt(0, width-targetSize-1), randObj.randInt(0, height-targetSize-1)];

    let curRGBA;
    for(let i = 0; i < targetSize; i += 1){
        for(let j = 0; j < targetSize; j += 1){
            curRGBA = pixelArray.getColorValue(xStart+i, yStart+j);
        }
    }
}