//request access to fs
var fs = require('fs');
var data = fs.readFileSync(process.argv[2]); //put in var to catch result
//will give data back in buffer 11100010101010's
var text = data.toString(); //turns bianry buffer into text we can read 
//has lots of texts and /n for new lines
var lines = text.split('\n');
console.log(lines.length-1);

