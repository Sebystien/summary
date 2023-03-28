'use strict';

console.log('test');

let counter = document.querySelector('.counter');
let setCounter = 0;
let startCounter = setInterval(counterFunc);


function counterFunc(){
    counter.innerHTML=++setCounter;
    if(setCounter === 76){
        let stopCounter = clearInterval(startCounter);
    }

}



