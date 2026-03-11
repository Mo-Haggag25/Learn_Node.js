
const fs = require('fs');
console.log("start");
fs.readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    console.log(result);
    const first = result;
    fs.readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            return;
        }
        console.log(result);
        const second = result;
        fs.writeFile('./content/result-async.txt', `Here is the result: ${first} ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            console.log("done with this task");
        })
    })
})
console.log("starting the next one");