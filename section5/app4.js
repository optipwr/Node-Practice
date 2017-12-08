var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname} Badge# ${this.badgenumber}`);
}

function Policeman() {
    Person.call(this);  //.call() connects the Person constructor with the Policeman constructor
    //which grants you access to this.firstname, this.lastname, AND this.badgenumber
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);  //.inherits() only connects the prototypes but not the constructor properties
var officer = new Policeman();
officer.greet();
