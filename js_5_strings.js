var context = document.getElementById('para').innerText,
output = document.getElementById('value')

// Finding the String
indexOf = function(){
    output.innerHTML = context.indexOf('win')
}

lastIndexOf = function(){
    output.innerHTML = context.lastIndexOf('win')
}

search = function(){
    output.innerHTML = context.search('win')
}
// --------------------------------------------------
// Calculating the Length
length = function(){
    output.innerHTML = context.length
}
// --------------------------------------------------
// Extracting String Parts
slice = function(){
    // slice(fromPosition, toPosition)
    // negative values can use in parameters

    // slice from left to right
    p = context.slice(4, 8)
    // slice count starts from right side, extraction of data from left to right
    n = context.slice(-9, -5) // slice 9th position to 5th position, starts from right
    // slice from given left position to right end
    pe = context.slice(40)
    // slice from given right position to left end
    ne = context.slice(-40)

    output.innerHTML = p + "<br/>" + n + "<br/>" + pe +"<br/>" + ne
}

substring = function(){
    // substring(fromPosition, toPosition)
    // negative values are not allowed as parameters

    // slice from one position to other position
    p = context.substring(17, 20)

    // slice from one position to right end
    pe = context.substring(60)

    output.innerHTML = p + "<br/>" + pe
}

substr = function(){
    // substr(startingPosition, LengthOfTextToExtract)
    // starting position can be negative but length couldn't be negative

    // substr extracts data its starts from left to appropriate length towards right
    p = context.substr(9, 3)

    // substr extracts data its starts from right to appropriate length towarda right
    n = context.substr(-8, 3)

    output.innerHTML = p + "<br/>" + n
}
// --------------------------------------------------
// Replacing the string
replace = function(){
    // replace the first occurence only
    r = context.replace("win", "WIN")

    // replace the all occurences by using 'g' flag (for global match)
    rg = context.replace(/win/g, "WIN")

    output.innerHTML = r + "<br/>" + rg
}
// --------------------------------------------------
// Case Changing, Concatenating & Trimming the string
upper = function(){
    output.innerHTML = context.toUpperCase()
}

lower = function(){
    output.innerHTML = context.toLowerCase()
}

concat = function(){
    context2 = "Winny!!!!"
    output.innerHTML = context.concat(" ",", win, win, ",context2)
}

trim = function(){
    // Removes whitespace from both sides of a string
    text = "        " + context + "        "
    output.innerHTML = text + "<br/>" + text.trim()
}
// --------------------------------------------------
// Extracting the character from the string
charAt = function(){
    // returns the character at a specified index (position) in a string
    output.innerHTML = context.charAt(5)
}

charCodeAt = function(){
    // returns the unicode of the character at a specified index in a string
    output.innerHTML = context.charCodeAt(5)
}
// --------------------------------------------------
// Converting the string to an Array
split = function(){
    // seperator
    output.innerHTML = ""
    context = context.split(" ")
    context.forEach(element => {
        output.innerHTML += element + "<br/>"
    })   
}
