var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());  //because this is a Buffer, it changes to 'wollo' by overwriting the 'He' in Hello (acting as a buffer)
