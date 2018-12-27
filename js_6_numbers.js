val = document.getElementById('output')

// Infinity keyword concept
infinity = function(){
    var num = 4, output = ""
    while(num != Infinity){
        num *= num
        output += num + "<br/>"
    }
    val.innerHTML = output
}

// isNaN()
nan = function(){
    x = 100 / "10", y = 100 / "y"
    val.innerHTML = isNaN(x) + "<br/>" + isNaN(y)
}

// toString()
tostring = function(){
    x = 123
    val.innerHTML = x.toString() + "<br/>" + (333).toString() + "<br/>" + (123+123).toString()
}

// base conversion using toString()
base_conversion = function(){
    // toString(2) <== binary
    // toString(8) <== octal
    // toString(16) <== hexa
    x = 10
    val.innerHTML = x.toString(2) + "<br/>" + x.toString(8) + "<br/>" + x.toString(16)
}

// some functions are there
// toExponential()
// toFixed()
// toPrecision()
// valueOf()

// number()
numb = function(){
    val.innerHTML = Number(true) + "<br/>" +
    Number(false) + "<br/>" +
    Number(new Date()) + "<br/>" +
    Number("  10") + "<br/>" +
    Number("10  ") + "<br/>" +
    Number("  10  ") + "<br/>" +
    Number("10 6");  
}

// parseInt()
parseint = function(){
    // Only the first number is returned
    val.innerHTML = parseInt("10") + "<br/>" +
    parseInt("10.33") + "<br/>" +
    parseInt("10 6") + "<br/>" +    
    parseInt("10 years") + "<br/>" +    
    parseInt("years 10"); 
}

// parseFloat() is similarly as parseInt().. But allows float values also..
