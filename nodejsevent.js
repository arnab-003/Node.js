import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('please turned off the motor');
  setTimeout(()=>{
    console.log('please turned off the motor ! it is a gentle remainder');
  },3000)
});
// myEmitter.emit('event');
console.log("The script is still running")
myEmitter.emit('waterFull');