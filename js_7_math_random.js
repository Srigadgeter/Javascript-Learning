val = document.getElementById('output')


// Math Functions
/*
    Math.PI
    Math.random()
    Math.pow()
    Math.sqrt()
    Math.abs()
    Math.ceil()
    Math.floor()
    Math.sin()
    Math.cos()
    Math.tan()
    Math.min()
    Math.max()
*/


// Math.random() usages 
function one(){
    val.innerHTML = Math.floor(Math.random() * 10)  // returns number between 0 and 9
}

function two(){
    val.innerHTML = Math.floor(Math.random() * 100)  // returns number between 0 and 9
}

function three(){
    val.innerHTML = Math.floor(Math.random() * 10) + 1  // returns number between 1 and 10
}

randomizing = function(){
    min = parseInt(document.getElementById('min').value)
    max = parseInt(document.getElementById('max').value)
    val.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min
}