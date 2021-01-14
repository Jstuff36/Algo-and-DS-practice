const utils = require('./utils');

/*

Given a csv input of employee,manager pairs, construct an org chart tree and output it as a csv.
See output.csv for the example format of the solution that matches the input files given.

- Reports should be sorted alphabetically in the output CSV

- Each report should occupy a single row in the CSV with their name printed one column deeper than their manager

- If there are no top level managers in the input CSV, the application should throw an error

- If the input CSV contains a circular chain of command, the application should detect it and throw an error
  - If there is a loop, print out the circular chain of command in the error.
    Ex: "Circular chain of command: Person A - Person B - Person C - Person A"

Ex: input.csv
employee,manager
jack
eric,jack
andrew,dini
dini,jack

output:
jack
,dini
,,andrew
,eric

*/

const recurse = (data, manager, level = 1, result = [], visited = {}) => {
  if (visited[manager.employee]) {
    throw Error ('Circular reference')
  }
  visited[manager.employee] = true;
  const leadingCommas = Array(level).map(_ => ",").join()
  result.push(leadingCommas + manager.employee);
  data.filter(maybeReport => maybeReport.manager === manager.employee)
    .sort((a, b) => a.employee.localeCompare(b.employee))
    .forEach(report => recurse(data, report, level + 1, result, seen));

  return result;
}

let resultCSV = '';
const buildOrgChart = data => {
  const topManager = data.find(d => !d.manager);
  if (!topManager) {
    throw Error('No top manager');
  }
  resultCSV = recurse(data, topManager).join("\n")
};

// Run test
const data = utils.parseInputCSV('circular_org_2.csv');
buildOrgChart(data);

// compare the result against "output.csv"
console.log('===RESULT===');
console.log(utils.assertResult(resultCSV));
