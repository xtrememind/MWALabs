var dns = require('dns');
dns.resolve4('www.mum.edu', function (err, addresses){
    console.log(addresses[0]);
});