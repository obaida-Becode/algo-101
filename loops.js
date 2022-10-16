const prompt = require('prompt-sync')();

 const printNumbers = function (num){
     num = parseInt(prompt(Number + " insert a number "));
    for (let i = 0; i < num ; i++) {
        console.log(i)
    } 
    for(let i = num; i >= 0; i--){
        console.log(i); 
    }
    for(let i =-num; i <= num; i++){
        console.log(i);
    }
    for(let i = 1 ; i <= num; i+=2)
    console.log(i);

}
printNumbers();
//* ************************************************ ************************************************************************************** 
const printRandom = function (num){
     num = parseInt(prompt(Number + " insert a number "));
     num = Math.floor(Math.random()*num)
     console.log("The number is : " + num)
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}
printRandom();
// ****************************************************************************************************************************************
const throwDice = function getRandom(){
    times = parseInt(prompt(Number + " how many times you want throw the dice "));
    let dice ; 
    for(let i = 1; i <= times; i++){
       dice = Math.floor(Math.random()*6+1);
       console.log(dice);
    }


}
throwDice();
// *****************************************************************************************************************************************

function evenNumber(){
     num = parseInt(prompt(Number + " insert a number "));
    for(let i = 0; i <= num; i=i+2 ){
        console.log(i)
    }
    
}
evenNumber();
// *****************************************************************************************************************************************

function perfectNumber(){
    nb = parseInt(prompt(Number + " insert a number "));
    sum = 0;
    for(let i =1; i <= num/2; i++){
        
        if(nb % i === 0){
            sum = sum + i;

        }
    }
    if(sum === nb  ){
        console.long("this " + nb + "is perfect Number")
    }
}
perfectNumber();