var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, fileList) { //returns an array of file names in dir/folder
    if (err) {
        console.log(err)
    } else {
        for (var i = 0; i < fileList.length; i++) {
            if (path.extname(fileList[i]) === "." + process.argv[3]) {  //dot on first but not second 
                console.log(fileList[i]);
            }
        }
    }
});