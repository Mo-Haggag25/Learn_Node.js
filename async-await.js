const { promises, resolve } = require("dns");
const { readFile,writeFile } = require("fs");
const { reject, get } = require("lodash");
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try {
        const first =await readFilePromise('./content/subfolder/first.txt','utf8');
        const second =await readFilePromise('./content/subfolder/second.txt','utf8');
        await writeFilePromise('./content/result-promise-async-await.txt',`This is async-await : ${first} and ${second}`,'utf8')
        console.log(first) ;
        console.log(second); 
    } catch (error) {
        console.log(error);
        
    }
}
start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(result);
//         })
//     })
// }

// getText('./content/subfolder/first.txt').then(result => console.log(result)).catch(err => console.log(err));