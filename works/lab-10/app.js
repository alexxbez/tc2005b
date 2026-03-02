import { createServer } from "node:http";
import { readFile, appendFile, stat, readdir } from "node:fs/promises";

const app = createServer(async (req, res) => {
  if (req.url === "/") {
    const html = await readFile("index.html");

    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
  }
  else if ((req.url === "/test" || req.url === "/test?") && req.method == "GET") {
    const html = await readFile("test.html");

    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
  }
  else if ((req.url === "/test" || req.url === "/test?") && req.method == "POST") {
    res.setHeader("Content-Type", "text/html");
    const dataContent = [];

    req.on("data", (data) => {
      console.log(data);
      dataContent.push(data);
    })

    req.on("end", async () => {
      const completeDataString = Buffer.concat(dataContent).toString();
      console.log(completeDataString);
      const parsedData = completeDataString.split("=");
      console.log(parsedData);

      const fileName = `${parsedData[1]}.txt`;

      try {
        await stat(fileName);
        console.log("File already exists");
      } catch {
        await hanoi(parseInt(parsedData[1]), 1, 3, fileName);
        console.log("File created");
      }

      const html = await readFile("test.html");

      res.write(html);
      res.end();
    })
  }
  else if (req.url === "/view" || req.url === "/view?") {
    const header = await readFile("header_view.html");
    const footer = await readFile("footer_view.html");

    const files = await readdir(".");
    const resultFiles = files.filter(file => /^\d+\.txt$/.test(file));

    let body = "";

    for (const file of resultFiles) {
      const content = await readFile(file, "utf8");
      const lines = content.trim().split("\n");

      const diskNumber = file.replace(".txt", "");
      const totalMoves = lines.length;
      const firstFive = lines.slice(0, 5);
      body += `
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Test with ${diskNumber}</p>
  </header>
  <div class="card-content">
    <div class="content">
      The total moves were <strong>${totalMoves}</strong>. The first five were: <br>
      ${firstFive.join("<br>")}
    </div>

                <div class="buttons">
<form action="/${diskNumber}" method="GET">
  <button type="submit" class="button is-link">View full</button>
</form>
                </div>
  </div>
</div>
    `;
    }



    res.setHeader("Content-Type", "text/html");
    res.write(header + body + footer);
    res.end();
  }
  else if (/^\/\d+\??$/.test(req.url)) {

    const number = req.url.slice(1).replace("?", "");
    const fileName = `${number}.txt`;
    console.log(fileName)

    try {
      const content = await readFile(fileName, "utf8");

      res.setHeader("Content-Type", "text/plain");
      res.end(content);

    } catch {
      res.statusCode = 404;
      res.end("File not found");
    }
  }
  else {
    const html = await readFile("404.html")

    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
  }
})

app.listen(8080)

async function printMove(start, end, fileName) {
  appendFile(fileName, `${start}, ${end}\n`)
}

async function hanoi(n, start, end, fileName) {
  // base case
  if (n === 1) { await printMove(start, end, fileName); return; }

  // other rod is always 6 - (start + end)
  const other = 6 - (start + end);

  await hanoi(n - 1, start, other, fileName);
  await printMove(start, end, fileName);
  await hanoi(n - 1, other, end, fileName);
}
