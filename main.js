const { generateReport } = require('./reportGenerator');

const studentReport = generateReport('Alice', [12, 9, 11, 10]);
console.log(studentReport);
