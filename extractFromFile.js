const fs = require('fs');
const path = require('path');

// Define the regex to capture JSDoc comments and function signatures
//const regex = /(\/\*\*[\s\S]*?\*\/)\s*(export\s+function\s+\w+\s*\([^)]*\))/g;
const regex = /(\/\*\*[\s\S]*?\*\/)\s*(function\s+\w+\s*\([^)]*\)|export\s+function\s+\w+\s*\([^)]*\))/g;

// Define the input and output file paths
const inputFilePath = path.join(__dirname, './src/fixing-core/Edges/EdgeDetection.js'); // Replace 'input.js' with your actual input file name
const outputFilePath = path.join(__dirname, 'output.js'); // The file where the results will be saved

// Read the contents of the input file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    // Array to hold the extracted functions
    const extractedFunctions = [];

    // Use regex to find all matches in the input file
    let match;
    while ((match = regex.exec(data)) !== null) {
        // Push the entire function (comments + signature) to the array
        extractedFunctions.push({
            comments: match[1],
            functionSignature: match[2],
        });
    }

    // Convert the array to a JSON string for better readability in the output file
    const outputContent = JSON.stringify(extractedFunctions, null, 2);

    // Write the results to the output file
    fs.writeFile(outputFilePath, outputContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to output file:', err);
            return;
        }
        console.log('Extraction complete! Functions have been saved to:', outputFilePath);
    });
});