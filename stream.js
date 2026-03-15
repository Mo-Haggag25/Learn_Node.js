const fs = require('fs');

const stream = fs.createReadStream('./content/subfolder/first.txt',{highWaterMark:9000,encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})