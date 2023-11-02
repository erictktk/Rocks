import { PixelArray } from "eric-pixelarrayutils/PixelArray";

export class Island{
    /**
     * 
     * @param {PixelArray} pixelArray 
     */
    constructor(pixelArray, bounds){
        /**@type{PixelArray} */
        this.pixelArray = pixelArray;
        this.verticalLineBounds = [];
        this.horizontalLineBounds = [];
        this.xMin, this.xMax, this.yMin, this.yMax = 0, 0, 0, 0;
        this._getBounds();
        this.getVerticalLineBounds();
        this.getHorizontalLineBounds();
    }


    _getBounds(){
        let [xMin, xMax, yMin, yMax] = [Infinity, 0, Infinity, 0];
        let curAlpha = 0;
        for(let i = 0; i < this.pixelArray.width; i += 1){
            for(let j = 0; j < this.pixelArray.height; j += 1){
                curAlpha = 0;
                curAlpha = this.pixelArray.getColorValue(i, j)[3];
                if (curAlpha > 0){
                    if (i < xMin){
                        xMin = i;
                    }
                    if (i > xMax){
                        xMax = i;
                    }
                    if (j < yMin){
                        yMin = j;
                    }
                    if (j > yMax){
                        yMax = j;
                    }
                }
            }
        }
        this.xMin, this.xMax, this.yMin, this.yMax = [xMin, xMax, yMin, yMax];
    }
    /*
    get verticalLine(){

    }*/

    getVerticalLineBounds(){
        this.verticalLineBounds = [];
        let curAlpha = -1;
        for(let i = 0; i < this.pixelArray.width; i += 1){
            let curMin = 100000;
            let curMax = -1;
            for(let j = 0; i < this.pixelArray.height; j += 1){
                curAlpha = this.pixelArray.getColorValue(i, j)[3];

                if (curAlpha > 0){
                    if (j < curMin){
                        curMin = j;
                    }
                    if (j > curMax){
                        curMax = j;
                    }
                }
            }
            this.verticalLineBounds.push([curMin, curMax]);
        }
    }

    getHorizontalLineBounds(){
        this.horizontalLineBounds = [];
        let curAlpha = -1;
        for(let i = 0; i < this.pixelArray.height; i += 1){
            let curMin = 100000;
            let curMax = -1;
            for(let j = 0; i < this.pixelArray.width; j += 1){
                curAlpha = this.pixelArray.getColorValue(j, i)[3];

                if (curAlpha > 0){
                    if (j < curMin){
                        curMin = 0;
                    }
                    if (j > curMax){
                        curMax = j;
                    }
                }
            }
            this.horizontalLineBounds.push([curMin, curMax]);
        }
    }
}

class VerticalLineBounds{
    constructor(island){

    }
}