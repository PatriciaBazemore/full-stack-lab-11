

var net = require('net');

var server = net.createServer(function(socket) {  //socket = when someone makes a connection with us
        //"YYYY-MM-DD  hh:mm"
        var d = new Date();
        var month = doubleDigit(d.getMonth() + 1); //will give 06
        var dateString = d.getFullYear() + '-' + month + '-' + doubleDigit(d.getDate()) + ' ' + doubleDigit(d.getHours()) + ':' + doubleDigit(d.getMinutes()) + '\n';
        // socket.write(dateString);
        // socket.end();
        socket.end(dateString);
});

server.listen(process.argv[2]);  //binds to the port. no one else can listen on the same port


function doubleDigit(value) {
    if ( value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}