const fs = require('fs');
const path = require('path');
const { promptingString, srcPath, outFilePath, outFileName } = require('params');


//Specify the directory where your module files are located.
const moduleDirectory = `${srcPath}`;

// Create an array to store file content.
const concatenatedContent = [];

// Extensions to exclude:
const imageExtensions = [
  '.jpeg',
  '.jpg',
  '.png',
  '.gif',
  '.bmp',
  '.tiff',
  '.tif', 
  '.webp',
  '.svg',
  ".heif", // or ".heic"
  // RAW formats can vary: ".raw", ".cr2", ".nef", ".orf", ".sr2", etc.
  '.ico'
];
const txtExclusions = ['.css', '.json', '.scss', '.html'];

const excludeExtensions = imageExtensions + txtExclusions;

//

function concatenateFilesInDirectory(directoryPath, relativePath = '') {
  fs.readdirSync(directoryPath).forEach((item) => {
    const itemPath = path.join(directoryPath, item);

    // Skip the .git directory
    if (item === '.git') {
      return;
    }

    // Recursively handle directories
    if (fs.statSync(itemPath).isDirectory()) {
      concatenateFilesInDirectory(itemPath);
    } else {
      // Skip files with extensions listed in excludeExtensions
      if (excludeExtensions.includes(path.extname(itemPath))) {
        return;
      }

      // Read and concatenate only non-excluded files.
      const fileContent = fs.readFileSync(itemPath, 'utf-8');
      const totalContent = `//### Start of ${itemPath} \n\n${fileContent}`;
      concatenatedContent.push(totalContent);
    }
  });
}

// Start the recursive concatenation process.
concatenateFilesInDirectory(moduleDirectory);

// Join the file content and save it to a single file. 
fs.writeFileSync(outFilePath + '/'  + outFileName, promptingString + concatenatedContent.join('\n'));

console.log('Module files concatenated and saved to concatenated_module.js');
