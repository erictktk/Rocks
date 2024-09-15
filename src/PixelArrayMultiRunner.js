import { useEffect, useState, useRef } from "react";
import { EdgeExample2 } from "./fixing-core/Edges/EdgeExample.js";
import {  ImageLoader, ToPixelArray } from "./PixelArrayReactUtils";
import { RandomWrapper } from "eric-random-wrapper";
//import { }

//import React from 'react';
import img1 from './imgs/allPNGs/1.png';
import img2 from './imgs/allPNGs/2.png';
import img3 from './imgs/allPNGs/3.png';
import img4 from './imgs/allPNGs/4.png';

const allImgs = [img1, img2, img3, img4];

function edgeExampleTries(tries=20, pixelArrayArr){
    const rw = new RandomWrapper();

    const newPAs = [];
    for( let i = 0; i < tries; i += 1){
        EdgeExample2(rw.choice(pixelArrayArr));
        newPAs.push(EdgeExample2);
    }

    return newPAs;
}


/*
export default function EdgeExampleReact({tries=20, imgSrcs}){
    //needs to load pixelArrayList,
    //execute edgeExampleTries
    //needs to load canvas to paint new
    //use PAReactUtils.  
}
*/

export default function EdgeExampleReact({ tries = 20, imgSrcs=allImgs }) {
    const [pixelArrays, setPixelArrays] = useState([]); // Array to store the extracted PixelArrays
    const [processedPixelArrays, setProcessedPixelArrays] = useState([]); // Store processed PixelArrays
  
    // Function to handle the pixel arrays once they are ready
    const handlePixelArrayLoaded = (newPixelArray, index) => {
      setPixelArrays((prevPixelArrays) => {
        const updatedPixelArrays = [...prevPixelArrays];
        updatedPixelArrays[index] = newPixelArray;
        return updatedPixelArrays;
      });
    };
  
    // Process the pixel arrays using edgeExampleTries once they are all loaded
    useEffect(() => {
      if (pixelArrays.length === imgSrcs.length && pixelArrays.every((arr) => arr)) {
        const newProcessedArrays = edgeExampleTries(tries, pixelArrays); // Process the arrays
        setProcessedPixelArrays(newProcessedArrays); // Store the processed arrays
      }
    }, [pixelArrays, imgSrcs.length, tries]);
  
    // Function to draw the processed PixelArray onto a canvas
    const CanvasRenderer = ({ pixelArray }) => {
      const canvasRef = useRef(null);
  
      useEffect(() => {
        if (canvasRef.current && pixelArray) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          const imageData = new ImageData(pixelArray.array, pixelArray.width, pixelArray.height);
          ctx.putImageData(imageData, 0, 0); // Draw the image data onto the canvas
        }
      }, [pixelArray]);
  
      return (
        <canvas
          ref={canvasRef}
          width={pixelArray.width}
          height={pixelArray.height}
        />
      );
    };
  
    return (
      <div>
        {/* Map over the image sources and load each image */}
        {imgSrcs.map((src, index) => (
          <ToPixelArray
            key={index}
            pic={src}
            onImageLoadedCallback={(pixelArray) => handlePixelArrayLoaded(pixelArray, index)}
          />
        ))}
  
        {/* Render the processed pixel arrays */}
        <div>
          {processedPixelArrays.map((pixelArray, index) => (
            <CanvasRenderer key={index} pixelArray={pixelArray} />
          ))}
        </div>
      </div>
    );
  }