

/* number1 + number2 = result ;
   number1 / number2 = result;
   number1 mod number2 = result; */
   
const prompt=require("prompt-sync")({sigint:true});
function sum(){
var nb1 =parseInt(prompt(" insert the first number"  )) ;
var nb2 = parseInt(prompt( "put the second number" ));
var sum = nb1 +nb2;
 console.log(sum);
 console.log(nb1/nb2);
 console.log(nb1 % nb2);
}
console.log(sum());

 /* sentence1 =  "Welcome in ";
    sentence2 = "JavaScript world"; 
    sentence1 + sentence2 = "Welcome in JavaScript World" */
 function welcome(){
 console.log("Welcome in JavaScript");
 }
 console.log(welcome());

 /* The price one pice in 12$ without VAT;
    The price one pice with VAT = price + 21%;
    price without VAT = 12$;
    calcul VAT = (price * percent vzalue )/100;
    price with VAT = 12 + (12*21)/100 = 14.52$;
    for 3 pice =
    (price*3)+((price*3)*21/100)/100;
    ex:
    (12*3 ) + (36*21)/100  = 43.56$ */

var price = parseInt(prompt(Number + " "+" put the price without vat "));
var VAT = (( (price)* 21)/100);
var priceWthVAT = (price + VAT);
console.log("price including VAT " + priceWthVAT);
//select how number the pice you want. //
var nbpice = parseInt(prompt(Number + "How many pices you want? "));

console.log("total price =" + parseFloat(price*nbpice +(VAT*nbpice)));

/* The surface the circle =  pi * (radius)*(radius);
   pi = 3.14;
   if radius = 3  ;
   surface the circle =  3.14 * 3*3;
   surface the circle =  28.26 ; */
function curface(radius){
   return Math.PI*Math.pow(2,radius);
}
radius = prompt(Number + " insert number the radius ?");
   console.log(curface(radius)); 

/*
conversion of time to seconds; 
hours, minutes, seconds;
h, m, s
1-multiply the hours by 60 to convers to minutes;
2- sum the minutes wich converted with minutes ;
3- total minutes multiply with seconds;
4- sum all the seconds;
example:
time 14.06.25;
convers to mintues 14 * 60 = 840 minutes;
sum all the minutes 840 + 6 = 846 minutes;
convers to seconds 846 * 60 =  50760 seconds;
summ all seconds 50760+25= 50785;  */
//function getTimeInSeconds(h, m, s){



// getTime();
// var seconds = new Date().getTime() / 1000;

// console.log(seconds);


