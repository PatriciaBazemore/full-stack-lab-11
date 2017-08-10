//request access to fs
var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) { //read file, when finished, do callback)
    if (err) {
        console.log(err);
    } else {
    var text = data.toString(); 
    var lines = text.split('\n');
    console.log(lines.length-1);
    }
});

//var data = fs.readFileSync(process.argv[2]); //put in var to catch result
//will give data back in buffer 11100010101010's
//turns bianry buffer into text we can read 
//has lots of texts and /n for new lines

