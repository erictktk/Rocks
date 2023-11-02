import { PixelArray } from "eric-pixelarrayutils";

export function LineAtYMutate(pixelArray, yValue, fillColor=[0, 0, 0, 255]){
    for(let i = 0; i < pixelArray.width; i += 1){
        pixelArray.setColorValue(i, yValue, fillColor);
    }
    //
}

export function LineAtY(size=[32, 32], yValue, fillColor=[0, 0, 0, 255]){
    const pixelArray = new PixelArray(null, size[0], size[1]);

    LineAtYMutate(pixelArray, yValue, fillColor);
    return pixelArray;
}


export function LineAtXMutate(pixelArray, xValue, fillColor=[0, 0, 0, 255]){
    for(let i = 0; i < pixelArray.height; i += 1){
        pixelArray.setColorValue(xValue, i, fillColor);
    }
    //
}

export function LineAtX(size=[32, 32], xValue, fillColor=[0, 0, 0, 255]){
    const pixelArray = new PixelArray(null, size[0], size[1]);

    LineAtYMutate(pixelArray, xValue, fillColor);
    return pixelArray;
}