//function statement
function greet() {
    console.log('hi');
}
greet();

//functions are first-class
// function logGreeting(fn) {
//     fn();
// }

let logGreeting = (fn) => {
    fn();
}

logGreeting(greet);  //you can pass a function in as a parameter

//function Expression
var greetMe = function() {
    console.log('Hi Tony');
}

greetMe(); //It will invoke the same as the functions above but with the variable name.

//it's first Class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function(){
    console.log('Hello Michael');
});

logGreeting(() => {
    console.log('Hello ES6');
})
