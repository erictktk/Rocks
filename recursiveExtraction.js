const fs = require('fs');
const path = require('path');

// Define the regex to capture JSDoc comments and any function signatures (exported or not)
const regex = /(\/\*\*[\s\S]*?\*\/)\s*(function\s+\w+\s*\([^)]*\)|export\s+function\s+\w+\s*\([^)]*\))/g;

// Define the input directory and output file paths
const inputDirectoryPath = path.join(__dirname, 'src/'); // Replace with your actual input folder name
const outputFilePath = path.join(__dirname, 'output.js'); // The file where the results will be saved

// Array to hold all extracted functions from all files
const allExtractedFunctions = [];

// Recursive function to walk through directories
function walkDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // If the file is a directory, recursively process it
            walkDir(filePath);
        } else if (file.endsWith('.js')) {
            // If it's a JavaScript file, process it
            const data = fs.readFileSync(filePath, 'utf8');
            let match;
            while ((match = regex.exec(data)) !== null) {
                // Push the entire function (comments + signature) to the array
                allExtractedFunctions.push({
                    fileName: file,
                    filePath: filePath,
                    comments: match[1],
                    functionSignature: match[2],
                });
            }
        }
    });
}

// Start walking the input directory
walkDir(inputDirectoryPath);

// Convert the array to a JSON string for better readability in the output file
const outputContent = JSON.stringify(allExtractedFunctions, null, 2);

// Write the results to the output file in JSON array format
fs.writeFile(outputFilePath, outputContent, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to output file:', err);
        return;
    }
    console.log('Extraction complete! Functions have been saved to:', outputFilePath);
});