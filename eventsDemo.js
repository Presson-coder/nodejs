import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('hello, ', name);
}

function goodByHandler(name){
    console.log('goodbye, ', name);
}

// register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodBye', goodByHandler);

// Emit events
myEmitter.emit("goodBye", "Tiva");
myEmitter.emit("greet", "Presson");

// Error Handling
myEmitter.on('error',(err) => {
    console.log('error occured, ', err);
});

// Simulate error 
myEmitter.emit('error', new Error('something went wrong'))