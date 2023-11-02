import * as ScalingMethods from "../scalingMethods";
import blobStamp from "../ImagesFolder/blobStamp.png";
import ImageProcessor from "../PixelArrayReact";
import * as Composition from "eric-pixelarrayutils/Composition";
import * as BlendModes from "eric-pixelarrayutils/BlendModes";
import { PixelArray } from "eric-pixelarrayutils/PixelArray";
import { RandomWrapper } from "eric-random-wrapper";
import * as RGBUtils from "eric-hsvutils/HSVUtils";

//Composition.
/**
 * @param {PixelArray} pixelArray
 */
export function VaryLuminance(pixelArray, copies=10, seed=null){
    const whitePixelArray = new PixelArray(null, pixelArray.width, pixelArray.height);
    whitePixelArray.fill([255, 255, 255, 255]);

    const overlayFunc = BlendModes.Overlay;

    const copyArrays = [];

    const randObj = new RandomWrapper(seed);

    for(let i = 0; i < copies; i += 1){
        const curCopy = PixelArray.CopyPixelFactory(pixelArray);
        const blended = Composition.blendColorLayersPArray(curCopy, whitePixelArray, overlayFunc)

        const alphaFunc = BlendModes.OverCustomAlphaExport(randObj.random(.1, .4));
        
        const blendedFinal = Composition.blendColorLayersPArray(curCopy, blended, alphaFunc);
        copyArrays.push(blendedFinal);
    }

    return copyArrays;
}

//Composition.
/**
 * @param {PixelArray|Array<PixelArray>} mainObj
 */
export function VaryScale(mainObj, widthRange=[1, 2], heightRange=[1, 2], copies=10, seed=null){
    let numToDo;
    let isArray = false;
    if (Array.isArray(mainObj)){
        numToDo = mainObj.length;
        isArray = true;
    }
    else{
        numToDo = copies;
    }
    
    const randObj = new RandomWrapper(seed);

    const resultArrays = [];

    for(let i = 0; i < numToDo; i += 1){
        const sx = randObj.random(widthRange[0], widthRange[1]);
        const sy =  randObj.random(heightRange[0], heightRange[1]);

        if (isArray){
            const cur = mainObj[i];
            resultArrays.push( ScalingMethods.floatScale(cur, sx, sy) );
        }
        else{
            resultArrays.push( ScalingMethods.floatScale(pixelArray, sx, sy) )
        }
    }

    return resultArrays;
}

/**
 * 
 * @param {PixelArray|Array<PixelArray>} mainObj 
 * @param {Array<Number>} rotateRange - an array of form [a, b]
 * @param {*} copies 
 * @param {Number|null} seed 
 * @returns 
 */
export function VaryHue(mainObj, rotateRange = [-10, 10], copies=10, seed=null){
    let numToDo;
    let isArray = false;
    if (Array.isArray(mainObj)){
        numToDo = mainObj.length;
        isArray = true;
    }
    else{
        numToDo = copies;
    }
    
    const randObj = new RandomWrapper(seed);

    const resultArrays = [];

    for(let i = 0; i < numToDo; i += 1){
        const hueRotate = randObj.random(...rotateRange);

        if (isArray){
            const cur = mainObj[i];
            resultArrays.push( ChangeHueOfPixelArray(cur, hueRotate) );
        }
        else{
            resultArrays.push( ChangeHueOfPixelArray(pixelArray, hueRotate));
        }
    }

    return resultArrays;
}

/**
 * 
 * @param {PixelArray} pixelArray 
 * @param {Number} rotation 
 * @returns 
 */
export function ChangeHueOfPixelArray(pixelArray, rotation){
    const newPixelArray = [];

    for (let i = 0; i < pixelArray.length; i += 4) {
        const r = pixelArray[i];
        const g = pixelArray[i + 1];
        const b = pixelArray[i + 2];
        const a = pixelArray[i + 3];

        let [h, s, v] = RGBUtils.rgb_to_hsv([r, g, b]);
        h = (h + rotation) % 360;
        if (h < 0) h += 360;

        const [newR, newG, newB] = RGBUtils.hsv2rgb([h, s, v]);

        newPixelArray.push(newR, newG, newB, a);
    }

    return newPixelArray;
}