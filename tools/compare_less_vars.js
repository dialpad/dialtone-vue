/*
  Description:
    The following script will take in the Dialtone V5 less var file and Dialtone V6 less var file and see which
    variables have been removed in Dialtone V6 and output the results to `removed_less_vars.txt`
  Args:
    1. Path to Dialtone V5 Less Var File (string)
    2. Path to Dialtone V6 Less Var File (string)
  Outputs:
   1. `removed_less_vars.txt`, contains the less vars removed in the Dialtone V6 Less
*/

const fs = require('fs');

const pathV5 = process.argv[2];
const pathV6 = process.argv[3];
const lessVarsRemoved = [];
let content = '';

try {
  // Read V5 & V6 Less Vars Into Memory
  const lessVarsV5 = fs.readFileSync(pathV5, 'utf8')?.split('\n');
  const lessVarsV6 = fs.readFileSync(pathV6, 'utf8')?.split('\n');

  console.log(lessVarsV5);

  // Find Removed Less Vars
  lessVarsV5.forEach(lessVar => {
    if (!lessVarsV6.includes(lessVar)) {
      lessVarsRemoved.push(lessVar);
      content += `${lessVar}\n`;
    }
  });

  // Write to file
  console.log('Writing to removed.txt');
  fs.writeFileSync('removed_less_vars.txt', content);
  console.log('Writing complete!');
} catch (err) {
  console.error('An error has occurred:', err);
}
