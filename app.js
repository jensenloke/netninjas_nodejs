//run in cmd
//cd C:\Users\jense\OneDrive\Desktop\node_playlist
//node app.js

// var time = 0;
// console.log(__dirname);
// var timer = setInterval(function(){
//   time += 2;
//   console.log(time + ' seconds have passed');
//   if (time > 10){
//     clearInterval(timer);
//   }
// }, 2000);

// //normal function statement
// function sayHi(){
//   console.log('hi')
// }
//
// sayHi();

// //function expression
// var sayBye = function(){
//   console.log('bye');
// };
//
// // sayBye();
//
// function callFunction(fun){
//   fun()
// }
//
// callFunction(sayBye);

// var stuff = require('./stuff');
//
// console.log(stuff.counter(['shaun','crystal','ryu']));
// console.log(stuff.adder(2,5));
// console.log(stuff.adder(stuff.pi,5));

var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak','hey dudes');
ryu.emit('speak','I want curry');
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent',function(mssg){
//   console.log(mssg);
// });
// //manually emitting
// myEmitter.emit('someEvent','the event was emitted');
