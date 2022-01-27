
const EventEmitter= require('events');

const emitter = new EventEmitter();

emitter.on("message",(...arg)=>{
    console.log('You are trying to send some information',arg);
})

let c=0;
setInterval(()=>{
    emitter.emit("message",c++);
    setTimeout(() => {
        console.log('\n exiting application, bye bye');
        process.exit();
    }, 10000);
},1000)
