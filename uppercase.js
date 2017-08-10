var http = require('http');

var server = http.createServer(function(req, res) {
        if (req.method === 'POST') {
            var incomingData = '';
            req.on('data', function(data) {                //not picking  it's always data...needs a call back to run anytime data comes in
                incomingData += data;            
            });
            req.on('end', function() {  //all the POST data is in
                var upper = incomingData.toUpperCase();
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(upper);
            })
        }
});
 server.listen(process.argv[2]);  //they told us this portif 