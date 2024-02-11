import { readFile } from "fs";
import { createServer } from "http";

// createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ name: "Tom", age: 19 }));
// }).listen(3000)

createServer((req, res) => {
    if (req.url === "/html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readFile("./html/index.html", (err, data) => {
            if (err) console.log(err)
            res.end(data);
        })
    }
}).listen(3000)