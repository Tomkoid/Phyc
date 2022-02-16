const express = require("express");
const fs = require("fs");

const server = express();

const tmpconfig = fs.readFileSync("config.json");
const config = JSON.parse(tmpconfig);

server.all("/", (req, res) => {
    console.log("\033[0;32m[HTTP server] Logged from " + req.ip.split(":")[3] + "\033[0m");
    res.send(config.REPLIT_HTTPSERVERCODE);
})

function keepAlive() {
    server.listen(3000, () => {
        console.log("\033[0;32m[HTTP server] Server is ready!\033[0m");
    })
}

module.exports = keepAlive;