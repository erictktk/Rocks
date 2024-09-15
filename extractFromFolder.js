const fs = require('fs');
const path = require('path');

// Define the regex to capture JSDoc comments and any function signatures (exported or not)
// captures a pattern of JSDOC comments
const regex = /(\/\*\*[\s\S]*?\*\/)\s*(function\s+\w+\s*\([^)]*\)|export\s+function\s+\w+\s*\([^)]*\))/g;

// Define the input directory and output file paths
const inputDirectoryPath = path.join(__dirname, 'src/fixing-core/Edges'); // Replace 'input' with your actual input folder name
const outputFilePath = path.join(__dirname, 'output.txt'); // The file where the results will be saved

// Array to hold all extracted functions from all files
const allExtractedFunctions = [];

// Read all files in the input directory
fs.readdir(inputDirectoryPath, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }

    // Filter only JavaScript files
    const jsFiles = files.filter(file => file.endsWith('.js'));

    // Process each JavaScript file
    jsFiles.forEach(file => {
        const filePath = path.join(inputDirectoryPath, file);

        // Read the contents of each JavaScript file
        const data = fs.readFileSync(filePath, 'utf8');

        // Use regex to find all matches in the current file
        let match;
        while ((match = regex.exec(data)) !== null) {
            // Push the entire function (comments + signature) to the array
            allExtractedFunctions.push({
                fileName: file,
                comments: match[1],
                functionSignature: match[2],
            });
        }
    });

    // Convert the array to a JSON string for better readability in the output file
    const outputContent = JSON.stringify(allExtractedFunctions, null, 2);

    // Write the results to the output file
    fs.writeFile(outputFilePath, outputContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to output file:', err);
            return;
        }
        console.log('Extraction complete! Functions have been saved to:', outputFilePath);
    });
});