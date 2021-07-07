/*
  Description:
    The following script will validate our created map files
  Args:
    1. Path to class / var map
    2. Path to Dialtone V6 Less
    2. Path to Dialtone V6 CSS
  Outputs:
*/

const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const mapFile = process.argv[2];
const pathV6Less = process.argv[3];
const pathV6CSS = process.argv[4];

async function findCSS (migrationClass) {
  const { stdout } = await exec(`grep -e "${migrationClass}" "${pathV6CSS}" | wc -l | xargs`);
  return parseInt(stdout, 10);
}

async function findLess (migrationClass) {
  const { stdout } = await exec(`grep -r -e "${migrationClass}" "${pathV6Less}" | wc -l | xargs`);
  return parseInt(stdout, 10);
}

try {
  // Read map file into memory
  const mappings = fs.readFileSync(mapFile, 'utf8')?.split('\n');

  // Find missing classes
  mappings.forEach(line => {
    const mapping = line?.split(':')[1];
    if (mapping) {
      const classes = mapping.split(' ');
      classes.forEach(async (migrationClass) => {
        let occurences = await findCSS(migrationClass);
        occurences += await findLess(migrationClass);
        if (occurences < 1) {
          console.log('==============================================================================================');
          console.log('Could not find class:', migrationClass);
          console.log('Line:', line);
          console.log('==============================================================================================');
        }
      });
    }
  });

} catch (err) {
  console.error('An error has occurred:', err);
}
