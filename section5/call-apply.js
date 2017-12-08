var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Jane Doe'});

//Call and Apply are useful for borrowing methods but passing your own unique data versus what is in the original object.
