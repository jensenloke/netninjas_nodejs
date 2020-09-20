////method 1
// var counter = function(arr){
//   return 'There are ' + arr.length + ' elements in this array';
// };
//
// var adder = function(a,b){
//   return `The sum of the 2 numbers is ${a+b}`;
// }
//
// var pi = 3.142;
//
// module.exports.counter = counter;
// module.exports.pi = pi;
// module.exports.adder = adder;

////method 2
// module.exports.counter = function(arr){
//   return 'There are ' + arr.length + ' elements in this array';
// };
//
// module.exports.adder = function(a,b){
//   return `The sum of the 2 numbers is ${a+b}`;
// }
//
// module.exports.pi = 3.142;

////method 3

var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.142;

module.exports ={
  counter: counter,
  adder: adder,
  pi: pi
};
