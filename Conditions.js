const prompt = require('prompt-sync')();
// defination the prompt .

 /*
 enter your name!;
 if your name is "John Doe";
 output is ("yes i'm John Doe");
 if your name is n't ("John Doe");
 output is ("No , I'm not John Doe);
 */

const $name = prompt("write your name ");
if($name == "John Doe"){
    console.log("Yes I am John Doe" )
}else{ 
    console.log("No I'm not John Doe")
}
console.log($name);
// ---------------------------------------------------------------------------------------------------------------------
 /*
 The algorithm will output a number between 0 and 100;
 we use the math.floor for return integer number with math.random()*101 for have number between 0 and 100;
 */
 let nbr = Math.floor(Math.random() * 101);
 console.log(nbr);

 /*
 cinema tariffs:;
 to enter to cinema you will pay 10€ ;
 if you have reduce you will have a discount and will pay 8€;
 */
 var age = prompt(Number + "how old you? ");
 var normalTicket = false;
 var reduceTicket = true;
if(age >= 19 ){
    console.log("you don't have a reduce")
    var price = 10;
    console.log( price )
}else{
    console.log("you have a reduce")
    var price = 8;
    console.log(price)
}
//------------------------------------------------------------------------------------------------------------------------
/*
 maximum:;
number1, number2, number3 ;
f number1 > number2 ;
aximum = number1;
lse 
umber2 = maximum;if number3 > maximum(nb1>nb2) ;number3 is maximum;if else number1 is maximum;else number2 is maximum;*/

var nb1 = parseInt(prompt(Number + "insert first number "));
var nb2 = parseInt(prompt(Number + "insert second number"));
var nb3 = parseInt(prompt(Number + "insert third number "));
var max = 0;

if(nb1 > nb2){
    max = nb1
}else{
    max = nb2
}
console.log("max = " + max);
 
if(max > nb3){
    max = max
}else{
    max = nb3
}
console.log(max);

//--------------------------------------------------------------------------------------------

/*
identical dice:;
we throw three dices ;
if number first dice equal the number second dice or  the number third dice;
There are 2 dices are  identical same value;
or all the dices number are same ;
there are 3 dices are indentical same value;
*/


    let dice1 = Math.floor(Math.random()*7);
    let dice2 = Math.floor(Math.random()*7);
    let dice3 = Math.floor(Math.random()*7);
    console.log(dice1, dice2, dice3);
    let result = 'none';
    if ((dice1 === dice2 || dice2 === dice3) || dice1 === dice3 ) result = 'two qre equal';
     if ((dice1 === dice2 || dice2 === dice3) || dice1 === dice3){
         result = "2 dices are indentical ";
     } 
    if (dice1 === dice2 && dice2 === dice3) {
        result = "3 dices are indentical ";
    }
        console.log(result);

//-------------------------------------------------------------------------------------------

/* Day’s number:;
i will give the days of the week numbers from 0 to 7
0 = sunday .... 7 = saturday;
switch (x)
case 0 ;
console.log("sunday")
*/

let day = parseInt(prompt(Number+"Insert a number betwwn 1 and 7"));
switch (day){
    case 7 :
        day = "sunday";
        break;
        case 1:
            day = "Monday";
            break;
            case 2 :
                day = "Tuesday";
                break;
                case 3:
                    day = "Wendsday";
                    break;
                    case 4:
                        day = "Thersday";
                        break;
                        case 5:
                            day = "Fraiday";
                            break;
                            case 6:
                            day = "Saturady";
                            break;
                            
}
console.log(day);

//----------------------------------------------------------------------------------------------------

// example for called function 
// export function testFun (num) {
//     if(num > 2) {
//         console.log('hello there')
//     }
// }


// console.log(testFun(3));

//----------------------------------------------------------------------------------------------------

/*
print shop:;
form 1 to 10 papers the cost of copy = 0.12€ ;
if more than 10 and less 21 papers cost of copy = 0.11€;
if mor 20 papers cost of copy = 0.10€
*/

//function costOfCopy(num){
    
        
  /*  let num = parseInt(prompt(Number+"Insert how many papers you want copy"));

     console.log (("your number is ",+ (num)));

    let cost =0;
    if(num <= 10){
        cost = cost + (number* 0.12);
    }
     if( (num > 10) && (num <21)){
        cost = cost + (number*0.11);
    }else{
        cost= cost + (number*0.10);
    }
    console.log(cost);
    */