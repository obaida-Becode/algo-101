const prompt = require('prompt-sync')();

function printNumbers(){
     num = parseInt(prompt(Number + " insert a number "));
    for (let i = 0; i < num ; i++) {
        console.log(i)
    } 
}
console.log(printNumbers());