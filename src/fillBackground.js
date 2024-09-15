import { PixelArray } from "eric-pixelarrayutils/PixelArray";


/**
 * @param {PixelArray} pixelArray
 */
export function FillBackgroundMod(pixelArray, rgba=[0, 220, 255]){
    let curRGBA;
    for(let i = 0; i < pixelArray.width; i += 1){
        for(let j = 0; j < pixelArray.height; j += 1){
            curRGBA = pixelArray.getColorValue(i, j);
            if (curRGBA[3] === 0){
                pixelArray.setColorValue(i, j, rgba);
                //console.log(curRGBA);
            }
        }
    }

    //console.log(curRGBA);

    console.log('hi from fill backgroundmod!');

    return pixelArray;
}

/**
 * @param {PixelArray} pixelArray
 */
export function FillBackground(pixelArray, rgba=[0, 220, 255, 255]){
    const newPixelArray = new PixelArray(null, pixelArray.width, pixelArray.height);
    let curRGBA;
    for(let i = 0; i < pixelArray.width; i += 1){
        for(let j = 0; j < pixelArray.height; j += 1){
            curRGBA = pixelArray.getColorValue(i, j);
            if (curRGBA[3] === 0){
                newPixelArray.setColorValue(i, j, rgba);
                //console.log(curRGBA);
            }
        }
    }

    //console.log(curRGBA);

    console.log('hi from fill background!');

    return newPixelArray;
}