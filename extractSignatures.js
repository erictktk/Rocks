const fs = require('fs');
const path = require('path');
const glob = require('glob');
const espree = require('espree');

// Define the source folder and output file path
const sourceFolder = path.join(__dirname, 'src/fixing-core/Edges'); // Change 'src' to your specific folder
const outputFilePath = path.join(__dirname, 'function_signatures.js');

// Options for Espree parser to enable ES6+ parsing and handle modules
const espreeOptions = {
  ecmaVersion: 2021, // Adjust as needed for your JavaScript version
  sourceType: 'module', // Add this line to handle 'import' and 'export' syntax
  comment: true,
  attachComment: true,
  loc: true,
  range: true,
  tokens: true,
};

// Use glob to find all JavaScript files in the source folder
glob(`${sourceFolder}/**/*.js`, (err, files) => {
  if (err) {
    console.error('Error finding JavaScript files:', err);
    return;
  }

  let outputContent = '';

  files.forEach(file => {
    // Check if the path is a file and not a directory
    if (fs.statSync(file).isFile()) {
      const content = fs.readFileSync(file, 'utf8');

      try {
        // Parse the file content with Espree
        const ast = espree.parse(content, espreeOptions);

        // Extract function signatures and JSDoc comments
        const signatures = extractSignaturesAndComments(ast, content);

        if (signatures.length > 0) {
          outputContent += signatures.join('\n\n') + '\n\n';
        }
      } catch (parseError) {
        console.error(`Error parsing file ${file}:`, parseError.message);
      }
    } else {
      console.log(`Skipping directory: ${file}`);
    }
  });

  // Write the extracted signatures to the output file
  fs.writeFileSync(outputFilePath, outputContent);
  console.log(`Function signatures written to ${outputFilePath}`);
});

// Helper function to extract function signatures and JSDoc comments from AST
function extractSignaturesAndComments(ast, content) {
  const signatures = [];
  
  // Traverse AST nodes to find function declarations and expressions
  function traverse(node) {
    if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
      let jsdoc = '';
      if (node.leadingComments && node.leadingComments.length > 0) {
        jsdoc = node.leadingComments.map(comment => content.substring(comment.range[0], comment.range[1])).join('\n');
      }

      let signature = '';
      if (node.type === 'FunctionDeclaration') {
        signature = `function ${node.id.name}(${node.params.map(param => param.name).join(', ')})`;
      } else if (node.type === 'FunctionExpression' && node.id) {
        signature = `function ${node.id.name}(${node.params.map(param => param.name).join(', ')})`;
      } else if (node.type === 'ArrowFunctionExpression') {
        signature = `(${node.params.map(param => param.name).join(', ')}) =>`;
      }

      if (signature) {
        signatures.push(`${jsdoc}\n${signature}`);
      }
    }

    // Recursively traverse child nodes
    for (const key in node) {
      if (node[key] && typeof node[key] === 'object') {
        traverse(node[key]);
      }
    }
  }

  traverse(ast);
  return signatures;
}