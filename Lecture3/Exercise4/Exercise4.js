let fs = require('fs');
let zlib = require('zlib');
let gzip = zlib.createGunzip();

let compressed = fs.createReadStream(__dirname + '/image.gz');
let decompressed = fs.createWriteStream(__dirname + '/image.jpg');

compressed.pipe(gzip).pipe(decompressed);