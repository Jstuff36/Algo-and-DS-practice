const fs = require('fs');

// Harness for reading an input CSV file into an array
const parseInputCSV = inputFilePath => {
  const rows = [];

  const body = fs.readFileSync(inputFilePath, 'utf-8');
  let lines = body.trim().split('\n');
  const headerLine = lines.shift();
  const headers = headerLine.split(',').map(h => h.trim());
  return lines.map(line =>
    line.split(',').reduce(
      (acc, col, i) =>
        Object.assign(acc, {
          [headers[i]]: col.trim(),
        }),
      {}
    )
  );
};

const isEqual = (expected, actual) => {
  try {
    const splitExpected = expected.split('\n').filter(entry => entry.includes('@lattice.com'));
    const splitActual = actual.split('\n').filter(entry => entry.includes('@lattice.com'));

    let isEqual = true;
    splitExpected.forEach((row, index) => {
      if (row !== splitActual[index]) {
        isEqual = false;
      }
    });

    return isEqual;
  } catch (err) {
    return false;
  }
};

// Compare the result with the expected value
const assertResult = resultCSV => {
  const expectedAnswer = fs.readFileSync('output.csv', 'utf-8').toString();
  return isEqual(expectedAnswer, resultCSV);
};

module.exports = { assertResult, parseInputCSV };
