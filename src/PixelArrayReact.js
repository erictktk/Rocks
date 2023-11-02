import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PixelArray } from 'eric-pixelarrayutils/PixelArray';
import defaultPic from "./ImagesFolder/pixil-frame-0.png";
import { FillBackgroundMod, FillBackground } from "./fillBackground";

/**
 * 
 */
export function ImageLoader({ src, onImageDataLoaded }) {
    const imageRef = useRef(new Image());

    useEffect(() => {
        imageRef.current.src = src;
        imageRef.current.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = imageRef.current.width;
            canvas.height = imageRef.current.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(imageRef.current, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            onImageDataLoaded(imageData);
        };
    }, [src, onImageDataLoaded]);

    return null;  // This component doesn't render anything visibly.
}

export function ToPixelArray({pic, onImageLoaded}) {
    const [pixelArray, setPixelArray] = useState(null);

    const handleImageDataLoaded = (imageData) => {
        // Create a new PixelArray from the image data.
        const newPixelArray = new PixelArray(imageData.data, imageData.width, imageData.height);
        setPixelArray(newPixelArray);
        if (onImageLoaded){
            onImageLoaded(newPixelArray);
        }
    };

    const thePic = pic ? pic : defaultPic;

    return (
        <div className="PixelArrayClass">
            {/* Load the image and get its pixel data */}
            <ImageLoader src={thePic} onImageDataLoaded={handleImageDataLoaded} />

            {/* Render the rest of your app, potentially using the pixelArray */}
            {pixelArray && <div>Image loaded into PixelArray!</div>}
        </div>
    );
}

export function PixelArrayCanvas({ pixelArray }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Create an ImageData object from the PixelArray
        const imageData = new ImageData(
            new Uint8ClampedArray(pixelArray.array), 
            pixelArray.width, 
            pixelArray.height
        );

        // Draw the ImageData onto the canvas
        ctx.putImageData(imageData, 0, 0);

    }, [pixelArray]);

    return (
        <canvas ref={canvasRef} width={pixelArray.width} height={pixelArray.height} />
    );
}

/*
export default function LoadImageToCanvas(){
    ToPixelArray({null, onImageLoaded})
}*/



function ImageProcessor({ src, func=null }) {
  const [originalPixelArray, setPixelArray] = useState(null);
  const [dummyVar, setDummyVar] = useState(0);
  const canvasRef = useRef(null);

  console.count('count');

  const totalFunc = useCallback((pixelArray) => {
    if (!pixelArray) return;
    let finalPixelArray;

    if (!func){
        func = () => {  return FillBackground(pixelArray); };
    }
    
    if (func){
        finalPixelArray = func(pixelArray);
    }
    else{
        finalPixelArray = pixelArray;
    }
    
    drawPixelArrayOnCanvas(finalPixelArray);
  });

  useEffect(() => {
    totalFunc(originalPixelArray);
    }, [dummyVar]);

  const handleImageDataLoaded = useCallback((imageData) => {
    
    const newPixelArray = new PixelArray(
      imageData.data,
      imageData.width,
      imageData.height
    );

    setPixelArray(newPixelArray);

    /*
    if (!func){
        func = () => {  return FillBackgroundMod(newPixelArray); };
    }*/

    let finalPixelArray = newPixelArray;
    if (func){
        finalPixelArray = func(newPixelArray);
       //setPixelArray(finalPixelArray);
    }
    else{
        // Set the manipulated pixelArray to state.
        finalPixelArray = newPixelArray;
    }

    //setPixelArray(finalPixelArray);
    drawPixelArrayOnCanvas(finalPixelArray);
  }, []);

  const drawPixelArrayOnCanvas = (pixelArrayInstance) => {
    const canvas = canvasRef.current;
    console.log(pixelArrayInstance);
    console.log(canvas);
    if (!canvas || !pixelArrayInstance) return;
    

    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(
      pixelArrayInstance.array,
      pixelArrayInstance.width,
      pixelArrayInstance.height
    );

    ctx.putImageData(imageData, pixelArrayInstance.xPos, pixelArrayInstance.yPos);
  };

  return (
    <div>
      <ImageLoader src={src} onImageDataLoaded={handleImageDataLoaded} />

      <input 
        type="range"
        value={dummyVar}
        onChange={(e) => setDummyVar(e.target.value)}
        min={0}
        max={1}
    />
      {originalPixelArray && <canvas ref={canvasRef} width={originalPixelArray.width} height={originalPixelArray.height} />}
    </div>
  );
}


export default ImageProcessor;