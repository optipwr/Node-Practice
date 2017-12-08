var EventEmitter = require('events');
var Greetr = require('./greetr')

// class Greetr extends EventEmitter {
//     constructor() {
//         super();
//         this.greeting = 'Hello World!';
//     }
//
//     greet(data) {
//         console.log(`${this.greeting}: ${data}`);
//         this.emit('greet', data);
//     }
// }

var greeter1 = new Greetr();

greeter1.on('greet', function(dataFromGreet) {
    console.log('Someone greeted!: ' + dataFromGreet);
});

greeter1.greet('EMITED DATA');
