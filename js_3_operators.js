// exponential operator (**)
document.getElementById('p1').innerHTML = 2**3

var x = 3.5, y = [1, 2]

// typeof operator
document.getElementById('p2').innerHTML = typeof x + " " + typeof y

// instanceof operator
document.getElementById('p3').innerHTML = x instanceof String


// ------------------------------------------------------------------

// ES6 'yield' keyword

// yield keyword is used to pause and resume a generator function [function*] in js
// function* <= generator function

function* funcName(index){
    while(index <= 3){
        yield index++;
    }    
}

// iterating the returning values
for(var i of funcName(0)){
    console.log(i)
}

// ------------------------------------------------------------------