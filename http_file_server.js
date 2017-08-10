
//pull in node modules
var http = require('http');
//need fs because wil be reading a file from hard drive
var fs = require('fs');

//create server
var server = http.createServer(function(req, res) { //this wants us to read from a file and return contents
        res.writeHead(200, { 'Content-Type' : 'text/plain' });
        //var readStream = fs.createReadStream(process.argv[3]); //because the are giving it to us (otherwise has address to file)
        //readStream.pipe(res); //readStream pipe you
        fs.createReadStream(process.argv[3]).pipe(res);
});

//need to listen
server.listen(process.argv[2]); //equals first command line argument that they send that equals the port number

