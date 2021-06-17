/*
  Description:
    The following script will take in the Dialtone V5 CSS and Dialtone V6 CSS and extract the CSS Vars from each file.
    It will then see which variables have been removed in Dialtone V6 and output the results to `removed.txt`
  Args:
    1. Path to Dialtone V5 CSS (string)
    2. Path to Dialtone V6 CSS (string)
  Outputs:
   1. `removed.txt`, contains the css vars removed in the Dialtone V6 CSS
*/

const fs = require('fs');

const cssVarReg = /--.+:.+;/;
const pathV5 = process.argv[2];
const pathV6 = process.argv[3];
const cssVarsV5 = [];
const cssVarsV6 = [];
const cssVarsRemoved = [];
let content = '';

const getCSSVar = line => line.split(':')[0]?.trim();
const getCSSVars = (data, cssVars) => {
  data.split('\n').forEach(line => {
    if (line.match(cssVarReg)) {
      const cssVar = getCSSVar(line);
      if (!cssVars.includes(cssVar)) {
        cssVars.push(cssVar);
      }
    }
  });
};

try {
  // Read V5 & V6 CSS Into Memory
  const cssV5 = fs.readFileSync(pathV5, 'utf8');
  const cssV6 = fs.readFileSync(pathV6, 'utf8');

  // Parse V5 & V6 CSS
  getCSSVars(cssV5, cssVarsV5);
  getCSSVars(cssV6, cssVarsV6);

  // Find Removed CSS Vars
  cssVarsV5.forEach(cssVar => {
    if (!cssVarsV6.includes(cssVar)) {
      cssVarsRemoved.push(cssVar);
      content += `${cssVar}\n`
    }
  });

  // Write to file
  console.log('Writing to removed.txt');
  fs.writeFileSync('removed.txt', content);
  console.log('Writing complete!');
} catch (err) {
  console.error('An error has occurred:', err);
}
