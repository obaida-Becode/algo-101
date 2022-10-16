const prompt = require('prompt-sync')();

function printArrays(){
    let box = ['one',2,'a',3,5,10,88]
    for (let i = 0; i < box.length; i++) {
    console.log(box[i]);
    }
    console.log(box.length);
    console.log(box[0]);
    console.log(box[box.length-1])
    console.log("--------------------------------------------------------");
}
printArrays();

// ************************************************************************************************** 

function maximum(){
    let array = [10, 5, 9, 6, 20, 25, 2, 54 ];
    let max =array[0] ;
    for(let i = 0; i <= array.length; i++){
        
        if(max < array[i]){
            max = array[i];
        }
    }
    console.log("max is " + max)
    console.log("------------------------------------")
}
maximum();
 // **********************************************************************************************************

 function minimum(){
    let array = [10, 5, 9, 6, 20, 25, 3, 54 ];
    let min =array[0] ;
    for(let i = 0; i <= array.length; i++){
        
        if(min > array[i]){
            min = array[i];
        }
    }
    console.log("min is " + min)
    console.log("------------------------------------")
}
minimum();

// ****************************************************************************************************

function minimumPOsition(){
    let array = [10, 5, 9, 6, 2, 25, 3, 54 ];
    let min = array[0] ;
    let minPOs = 0;
    for(let i = 0; i <= array.length; i++){
        
        if(min > array[i]){
            min = array[i];
             minPOs = i;
        }
    }
    console.log("min position is " + minPOs)
    console.log("------------------------------------")
}
minimumPOsition();