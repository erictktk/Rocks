import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PixelArray } from 'eric-pixelarrayutils/PixelArray';
import defaultPic from "./ImagesFolder/pixil-frame-0.png";
import { EdgeExample2 } from './fixing-core/Edges/EdgeExample.js';


/**
 * ImageLoader component loads an image from a given `src` URL and extracts its pixel data.
 * Once the image is loaded, it triggers the `onImageDataLoaded` callback with the image's pixel data.
 * 
 * THIS NEEDS TO EXIST, YOU NEED TO CREATE A CANVAS ELEMENT TO GET PIXEL DATA
 * 
 * @param {string} src - The URL of the image to load.
 * @param {function} onImageDataLoaded - Callback function that receives the image data (pixels) once loaded.
 */
export function ImageLoader({ src, onImageDataLoaded }) {
  const imageRef = useRef(new Image()); // Ref to store the Image object

  useEffect(() => {
      // Set image source and handle the load event to extract image data
      imageRef.current.src = src;
      imageRef.current.onload = function() {
          const canvas = document.createElement('canvas');
          canvas.width = imageRef.current.width;
          canvas.height = imageRef.current.height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(imageRef.current, 0, 0);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          onImageDataLoaded(imageData); // Trigger callback with pixel data
      };
  }, [src, onImageDataLoaded]); // Dependencies: re-run if `src` or `onImageDataLoaded` changes

  return null; // Component does not render any visible UI elements
}

/**
 * ToPixelArray component loads an image, converts it to a PixelArray object, and triggers a callback when the image is loaded.
 * 
 * @param {string} pic - The source URL of the image to load.
 * @param {function} onImageLoaded - Callback function to handle the PixelArray object once the image is loaded.
 * 
 * This component handles image loading and conversion to a custom PixelArray format, and optionally executes a callback with the PixelArray.
 */
export function ToPixelArray({ pic, onImageLoadedCallback }) {
  const [pixelArray, setPixelArray] = useState(null); // State to store the PixelArray

  const handleImageDataLoaded = (imageData) => {
      // Convert image data to PixelArray and update state
      const newPixelArray = new PixelArray(imageData.data, imageData.width, imageData.height);
      setPixelArray(newPixelArray);

      // Trigger the callback if provided
      if (onImageLoadedCallback) {
          onImageLoadedCallback(newPixelArray);
      }
  };

  const thePic = pic ? pic : defaultPic; // Fallback to default image if none provided

  return (
      <div className="PixelArrayClass">
          {/* Use ImageLoader to load the image and process its data */}
          <ImageLoader src={thePic} onImageDataLoaded={handleImageDataLoaded} />

          {/* Render a message or component indicating the image is loaded */}
          {pixelArray && <div>Image loaded into PixelArray!</div>}
      </div>
  );
}


export function PixelArrayToCanvas({ pixelArray }) {
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