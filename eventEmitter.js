const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved`);
    console.log(`Your name is ${name} and your id is ${id}`);
    
});
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customEmitter.emit('response','haggag',1);