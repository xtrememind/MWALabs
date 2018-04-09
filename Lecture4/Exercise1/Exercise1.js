const http = require("http");
const fs = require("fs");
const url = require('url');
const {fork} = require('child_process');


http.createServer((req, res) => {
    const filePath = url.parse(req.url, true).query.url;

    const childProcess = fork("childProcess.js", [filePath], {silent: true});
    childProcess.stdout.on('data', data => {
        res.write(data.toString());
    });

    childProcess.on('exit', err => {
        res.end();
    });

    childProcess.on('error', error => {
        console.log(error.message);
        res.write(error.message);
        res.end();
    });

}).listen(8080, '127.0.0.1');

