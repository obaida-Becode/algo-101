const prompt = require('prompt-sync')();

function printArrays(){
    let box = ['one',2,'a',3,5,10,88]
    for (let i = 0; i < box.length; i++) {
    console.log(box[i]);
    }
    console.log(box.length);
    console.log(box[1]);
    
}
console.log(printArrays());