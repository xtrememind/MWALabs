var http = require('http'); 
var fs = require('fs'); 

//Asynchronous, better performance
http.createServer(function(req, res) { 
var rs = fs.createReadStream(__dirname +'/image.jpg').pipe(res); 
}).listen(1337, '127.0.0.1');


//Synchronous, less performance
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    let image = fs.readFileSync(__dirname + '/image.jpg');
    res.end(image);
}).listen(1338, '127.0.0.1');