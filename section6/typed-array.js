var buffer = new ArrayBuffer(8);  //the parameter here accepts BYTES, so we sent it 8 which === 8 Bytes
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
