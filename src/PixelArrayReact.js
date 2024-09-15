import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PixelArray } from 'eric-pixelarrayutils/PixelArray';
import defaultPic from "./ImagesFolder/pixil-frame-0.png";
import { FillBackgroundMod, FillBackground } from "./fillBackground";
import { EdgeExample2 } from './fixing-core/Edges/EdgeExample.js';
import { readPsd } from 'ag-psd';
//import src\fixing-core\Edges\examples\individual_stalactites.psd
import psdFile from './fixing-core/Edges/examples/individual_stalactites.psd'; //this is correct I believe

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
 * ImageLoader component loads an image from a given `src` URL and extracts its pixel data.
 * Once the image is loaded, it triggers the `onImageDataLoaded` callback with the image's pixel data.
 * 
 * THIS NEEDS TO EXIST, YOU NEED TO CREATE A CANVAS ELEMENT TO GET PIXEL DATA
 * 
 * @param {string} src - The URL of the image to load.
 * @param {function} onImageDataLoaded - Callback function that receives the image data (pixels) once loaded.
 */
export function SimplePSDLoader({ src, onImageDataLoaded }) {
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

function ImageProcessorSeparated({ src, func = null }) {
  const [originalPixelArray, setPixelArray] = useState(null);
  const [dummyVar, setDummyVar] = useState(0);
  const canvasRef = useRef(null);

  console.count('count');

  // Apply the provided or default function to the pixel array
  const applyFunctionToPixelArray = (pixelArray, processingFunc) => {
    const processingFunction = processingFunc || (() => FillBackground(pixelArray));
    return processingFunction(pixelArray);
  };

  // Draw the processed pixel array on the canvas
  const drawPixelArrayOnCanvas = useCallback((pixelArrayInstance) => {
    const canvas = canvasRef.current;
    if (!canvas || !pixelArrayInstance) return;

    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(
      pixelArrayInstance.array,
      pixelArrayInstance.width,
      pixelArrayInstance.height
    );

    ctx.putImageData(imageData, pixelArrayInstance.xPos, pixelArrayInstance.yPos);
  }, []); // No dependencies, doesn't rely on any changing state

  // Process the pixel array and draw it
  const totalFunc = useCallback((pixelArray) => {
    if (!pixelArray) return;
    const finalPixelArray = applyFunctionToPixelArray(pixelArray, func);
    drawPixelArrayOnCanvas(finalPixelArray);
  }, [func, drawPixelArrayOnCanvas]); // Ensure dependencies are correctly set

  useEffect(() => {
    totalFunc(originalPixelArray); // Trigger processing on dummyVar change
  }, [dummyVar, totalFunc]);

  // Callback for when image data is loaded
  const handleImageDataLoaded = useCallback((imageData) => {
    const newPixelArray = new PixelArray(imageData.data, imageData.width, imageData.height);
    setPixelArray(newPixelArray);

    const finalPixelArray = applyFunctionToPixelArray(newPixelArray, func);
    drawPixelArrayOnCanvas(finalPixelArray);
  }, [func, drawPixelArrayOnCanvas]); // Correct dependencies

  /*
  <div style={{display: "flex", flexDirection: "column"}}>
  </div>*/
  return (
    <div>
      <ImageLoader src={src} onImageDataLoaded={handleImageDataLoaded} />
      
        Reset Input
        <input 
          type="range"
          value={dummyVar}
          onChange={(e) => setDummyVar(Number(e.target.value))}
          min={0}
          max={1}
        />
        
      
      {originalPixelArray && (
        <canvas 
          ref={canvasRef} 
          width={originalPixelArray.width} 
          height={originalPixelArray.height} 
        />
      )}
    </div>
  );
}


function MultiImageProcessor({ inputs }) {
  const [pixelArrays, setPixelArrays] = useState([]); // State to hold pixel data for all images
  const [dummyVar, setDummyVar] = useState(0); // Single state variable to trigger re-renders
  const canvasRefs = useRef([]); // Refs for multiple canvas elements

  console.count('count'); // Debugging: log render count

  // Function to apply a processing function to a pixel array
  const applyFunctionToPixelArray = (pixelArray, func) => {
    const processingFunction = func || (() => FillBackground(pixelArray));
    return processingFunction(pixelArray);
  };

  // Draw a pixel array on a specific canvas
  const drawPixelArrayOnCanvas = useCallback((pixelArrayInstance, canvasIndex) => {
    const canvas = canvasRefs.current[canvasIndex];
    if (!canvas || !pixelArrayInstance) return;

    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(
      pixelArrayInstance.array,
      pixelArrayInstance.width,
      pixelArrayInstance.height
    );

    ctx.putImageData(imageData, pixelArrayInstance.xPos, pixelArrayInstance.yPos);
  }, []);

  // Process and draw all pixel arrays
  const processAndDrawAll = useCallback(() => {
    pixelArrays.forEach((pixelArray, index) => {
      if (!pixelArray) return;
      const func = inputs[index].func; // Use the specific function for each input
      const finalPixelArray = applyFunctionToPixelArray(pixelArray, func);
      drawPixelArrayOnCanvas(finalPixelArray, index);
    });
  }, [pixelArrays, inputs, drawPixelArrayOnCanvas]);

  useEffect(() => {
    processAndDrawAll(); // Process and draw on dummyVar change
  }, [dummyVar, processAndDrawAll]);

  // Handle when image data is loaded for a specific image
  const handleImageDataLoaded = useCallback((imageData, index) => {
    const newPixelArray = new PixelArray(imageData.data, imageData.width, imageData.height);
    setPixelArrays((prev) => {
      const updatedArrays = [...prev];
      updatedArrays[index] = newPixelArray;
      return updatedArrays;
    });

    const func = inputs[index].func; // Use the specific function for each input
    const finalPixelArray = applyFunctionToPixelArray(newPixelArray, func);
    drawPixelArrayOnCanvas(finalPixelArray, index);
  }, [inputs, drawPixelArrayOnCanvas]); // Correct dependencies

  // Handler for input range change to trigger re-render for all
  const handleInputChange = (e) => {
    setDummyVar(Number(e.target.value));
  };

  return (
    <div>
      {/* Single input range to control all images */}
      <input 
        type="range"
        value={dummyVar}
        onChange={handleInputChange}
        min={0}
        max={1}
      />

      {inputs.map((input, index) => (
        <div key={index}>
          {/* ImageLoader component that takes a callback omImageDataLoaded*/}
          {/* needs to be a React component because it needs to instantiate a canvas to get pixelData*/}
          <ImageLoader src={input.src} onImageDataLoaded={(imageData) => handleImageDataLoaded(imageData, index)} />
          
          {pixelArrays[index] && (
            <canvas
              ref={(el) => (canvasRefs.current[index] = el)} // Store the ref for each canvas
              width={pixelArrays[index].width}
              height={pixelArrays[index].height}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * MultiImageProcessor component processes multiple image inputs (PSD files)
 * and extracts pixel data for each non-background layer.
 * Once the image data is loaded, it applies functions to the pixel data and renders it on canvases.
 *
 * @param {Array} inputs - An array of objects containing `src` (URL of the image) and `func` (function to apply to the pixel data).
 */
export function PSDProcessor({ inputs=null }) {
  const [pixelArrays, setPixelArrays] = useState([]); // State to hold pixel data for all layers of all images
  const [dummyVar, setDummyVar] = useState(0); // Single state variable to trigger re-renders
  const canvasRefs = useRef({}); // Refs for multiple canvas elements, keyed by [inputIndex-layerIndex]

  if (inputs === null){
    inputs = [];
    inputs.push( {src: psdFile, func: EdgeExample2} )
  }

  console.count('count'); // Debugging: log render count

  // Function to apply a processing function to a pixel array
  const applyFunctionToPixelArray = (pixelArray, func) => {
    const processingFunction = func || (() => FillBackground(pixelArray));
    return processingFunction(pixelArray);
  };

  // Draw a pixel array on a specific canvas
  const drawPixelArrayOnCanvas = useCallback((pixelArrayInstance, inputIndex, layerIndex) => {
    const canvasKey = `${inputIndex}-${layerIndex}`;
    const canvas = canvasRefs.current[canvasKey];
    if (!canvas || !pixelArrayInstance) return;

    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(
      pixelArrayInstance.array,
      pixelArrayInstance.width,
      pixelArrayInstance.height
    );

    ctx.putImageData(imageData, pixelArrayInstance.xPos, pixelArrayInstance.yPos);
  }, []);

  // Process and draw all pixel arrays
  const processAndDrawAll = useCallback(() => {
    pixelArrays.forEach((layers, inputIndex) => {
      layers.forEach((pixelArray, layerIndex) => {
        if (!pixelArray) return;
        const func = inputs[inputIndex].func; // Use the specific function for each input
        const finalPixelArray = applyFunctionToPixelArray(pixelArray, func);
        drawPixelArrayOnCanvas(finalPixelArray, inputIndex, layerIndex);
      });
    });
  }, [pixelArrays, inputs, drawPixelArrayOnCanvas]);

  useEffect(() => {
    processAndDrawAll(); // Process and draw on dummyVar change
  }, [dummyVar, processAndDrawAll]);

  // Handle when image data is loaded for a specific image layer
  const handleImageDataLoaded = useCallback((imageData, inputIndex, layerIndex) => {
    const newPixelArray = new PixelArray(imageData.data, imageData.width, imageData.height);
    setPixelArrays((prev) => {
      const updatedArrays = [...prev];
      updatedArrays[inputIndex] = updatedArrays[inputIndex] || [];
      updatedArrays[inputIndex][layerIndex] = newPixelArray;
      return updatedArrays;
    });

    const func = inputs[inputIndex].func; // Use the specific function for each input
    const finalPixelArray = applyFunctionToPixelArray(newPixelArray, func);
    drawPixelArrayOnCanvas(finalPixelArray, inputIndex, layerIndex);
  }, [inputs, drawPixelArrayOnCanvas]); // Correct dependencies

  // Handler for input range change to trigger re-render for all
  const handleInputChange = (e) => {
    setDummyVar(Number(e.target.value));
  };

  return (
    <div>
      {/* Single input range to control all images */}
      <input 
        type="range"
        value={dummyVar}
        onChange={handleInputChange}
        min={0}
        max={1}
      />

      {inputs.map((input, inputIndex) => (
        <div key={inputIndex}>
          {/* SimplePSDLoader component that takes a callback onImageDataLoaded */}
          {/* This component will call the handleImageDataLoaded function for each layer */}
          <SimplePSDLoader src={input.src} onImageDataLoaded={(imageData, layerIndex) => handleImageDataLoaded(imageData, inputIndex, layerIndex)} />
          
          {pixelArrays[inputIndex] && pixelArrays[inputIndex].map((_, layerIndex) => (
            <canvas
              key={`${inputIndex}-${layerIndex}`}
              ref={(el) => (canvasRefs.current[`${inputIndex}-${layerIndex}`] = el)} // Store the ref for each canvas
              width={pixelArrays[inputIndex][layerIndex].width}
              height={pixelArrays[inputIndex][layerIndex].height}
            />
          ))}
        </div>
      ))}
    </div>
  );
}


export function PSDProcessorAuto({ inputs = [] }) {
  const pixelArraysRef = useRef([]); // Ref to hold pixel data for all layers of all images
  const canvasRefs = useRef({}); // Refs for multiple canvas elements, keyed by [inputIndex-layerIndex]

  // Function to apply a processing function to a pixel array
  const applyFunctionToPixelArray = (pixelArray, func) => {
    const processingFunction = func || (() => FillBackground(pixelArray));
    return processingFunction(pixelArray);
  };

  // Draw a pixel array on a specific canvas
  const drawPixelArrayOnCanvas = useCallback((pixelArrayInstance, inputIndex, layerIndex) => {
    const canvasKey = `${inputIndex}-${layerIndex}`;
    const canvas = canvasRefs.current[canvasKey];
    if (!canvas || !pixelArrayInstance) return;

    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(
      pixelArrayInstance.array,
      pixelArrayInstance.width,
      pixelArrayInstance.height
    );

    ctx.putImageData(imageData, pixelArrayInstance.xPos, pixelArrayInstance.yPos);
  }, []);

  // Process and draw all pixel arrays
  const processAndDrawAll = useCallback(() => {
    (inputs || []).forEach((input, inputIndex) => {
      const layers = pixelArraysRef.current[inputIndex];
      layers.forEach((pixelArray, layerIndex) => {
        if (!pixelArray) return;
        const func = input.func; // Use the specific function for each input
        const finalPixelArray = applyFunctionToPixelArray(pixelArray, func);
        drawPixelArrayOnCanvas(finalPixelArray, inputIndex, layerIndex);
      });
    });
  }, [inputs, drawPixelArrayOnCanvas]);

  useEffect(() => {
    processAndDrawAll(); // Process and draw when inputs or pixelArraysRef change
  }, [processAndDrawAll]);

  // Handle when image data is loaded for a specific image layer
  const handleImageDataLoaded = useCallback((imageData, inputIndex, layerIndex) => {
    const newPixelArray = new PixelArray(imageData.data, imageData.width, imageData.height);
    if (!pixelArraysRef.current[inputIndex]) {
      pixelArraysRef.current[inputIndex] = [];
    }
    pixelArraysRef.current[inputIndex][layerIndex] = newPixelArray;

    const func = inputs[inputIndex].func; // Use the specific function for each input
    const finalPixelArray = applyFunctionToPixelArray(newPixelArray, func);
    drawPixelArrayOnCanvas(finalPixelArray, inputIndex, layerIndex);
  }, [inputs, drawPixelArrayOnCanvas]);

  // Function to automatically load a PSD file from a given path
  const loadPsdFromPath = async (path) => {
    try {
      const response = await fetch(path); // Fetch the PSD file
      const arrayBuffer = await response.arrayBuffer();
      const psd = readPsd(arrayBuffer); // Read the PSD using ag-psd

      // Push the PSD into the inputs array manually
      inputs.push({
        src: psd, // Store the PSD data here
        func: (pixelArray) => EdgeExample2(pixelArray), // Default or custom processing function
      });

      processAndDrawAll(); // Trigger the rendering process
    } catch (error) {
      console.error('Error loading PSD:', error);
    }
  };

  // Automatically load the PSD on component mount if inputs are null
  useEffect(() => {
    if (inputs.length === 0) {
      //const psdPath = '/fixing-core/Edges/examples/individual_stalactites.psd';
      loadPsdFromPath(psdFile); // Load the PSD automatically
    }
  }, [inputs]); // Empty dependency array to only run on mount

  return (
    <div>
      {inputs && inputs.map((input, inputIndex) => (
        <div key={inputIndex}>
          <SimplePSDLoader src={input.src} onImageDataLoaded={(imageData, layerIndex) => handleImageDataLoaded(imageData, inputIndex, layerIndex)} />
          
          {pixelArraysRef.current[inputIndex] && pixelArraysRef.current[inputIndex].map((_, layerIndex) => (
            <canvas
              key={`${inputIndex}-${layerIndex}`}
              ref={(el) => (canvasRefs.current[`${inputIndex}-${layerIndex}`] = el)} // Store the ref for each canvas
              width={pixelArraysRef.current[inputIndex][layerIndex].width}
              height={pixelArraysRef.current[inputIndex][layerIndex].height}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ImageProcessorSeparated;