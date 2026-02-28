import { appendFile, readFile } from 'node:fs/promises';
import { writeFileSync } from 'node:fs';
import { createServer } from 'node:http'

// class demonstration
console.log("hola desde node!");

writeFileSync("hola.txt", "Hola desde node");

setTimeout(() => {
  console.log("get hacked");
}, 15000);

const arr = [43, 25223, 23, 32, 4, , 56, 36, 24, 5, 134, 0];

for (let item of arr) {
  setTimeout(() => {
    console.log(item);
  }, item);
}

const htmlContent = `
<h1>HTML</h1>
`

// class server demonstration
// const server = createServer((req, res) => {
//   res.log(req.url);
//   res.setHeader('Content-Type', 'text/html');
//   res.write("");
//   res.end();
// });
//
// server.listen(3000);

// average of array
function avg(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce(
    (accum, curr) => { return accum + curr; },
    0
  ) / arr.length;
}

let tests = [
  {
    input: [1, 2, 3, 4, 5, 6],
    output: 3.5,
  },
  {
    input: [10, 20, 30],
    output: 20,
  },
  {
    input: [5],
    output: 5,
  },
  {
    input: [-5, 5, -10, 10],
    output: 0,
  },
  {
    input: [1.5, 2.5, 3.5],
    output: 2.5,
  },
  {
    input: [0, 0, 0, 0],
    output: 0,
  },
  {
    input: [100, 200, 300, 400],
    output: 250,
  },
  {
    input: [-10, -20, -30],
    output: -20,
  },
  {
    input: [],
    output: 0,
  },
];

console.log("Running tests for avg...");
for (let i = 0; i < tests.length; i++) {
  const passed = tests[i].output === avg(tests[i].input);
  if (passed) {
    console.log(`Test ${i}: OK`);
  } else {
    console.log(`Test ${i}: FAILED`);
  }
}
console.log("");

// write to file
async function writeToFile(fileName, fileContent) {
  await appendFile(fileName, fileContent, 'utf8');
  console.log('Here ya go.');
}

await writeToFile("test.txt", "Lets gooooooooo");

// towers of hanoi

function printMove(start, end) {
  console.log(`${start} -> ${end}`)
}

function hanoi(n, start, end) {
  // base case
  if (n === 1) { printMove(start, end); return; }

  // other rod is always 6 - (start + end)
  const other = 6 - (start + end);

  hanoi(n - 1, start, other);
  printMove(start, end);
  hanoi(n - 1, other, end);
}

console.log("Hanoi with 10")
hanoi(10, 1, 3)

const anotherServer = createServer(async (req, res) => {
  const html = await readFile("./index.html")

  res.setHeader('Content-Type', 'text/html');
  res.write(html);
  res.end();
})

anotherServer.listen("8080")
