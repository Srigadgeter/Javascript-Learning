val = document.getElementById('out')

proteinRichFoods = ['egg', 'yogut', 'chicken', 'almonds', 'milk']
// broccoli, peanuts, pumpkinSeeds, oats

joinFunc = function(){
    val.innerHTML = proteinRichFoods.join("*")
}

// toString() used to convert array to string 
// (without using toString() method directly put array name to print as string)

// push(element1, element2, ...) used to add new element(s) to an array at last
// unshift(element1, element2, ...) used to add new element(s) to an array at first
// pop() used to delete element(s) [deletes] to an array at last
// shift() used to delete element(s) to an array at first

pushFunc = function(){
    // type 1: here it add the last element from an array
    proteinRichFoods.push("peanuts")
    val.innerHTML = proteinRichFoods
    // type 2: here it add the value that was "popped out"
    val.innerHTML += "<br/>" + proteinRichFoods.push("broccoli")
}
// both types are also common to the unshift() function. but adds elements at first

popFunc = function(){
    // type 1: here it removes the last element from an array
    proteinRichFoods.pop()
    val.innerHTML = proteinRichFoods
    // type 2: here it returns the value that was "popped out"
    val.innerHTML += "<br/>" + proteinRichFoods.pop()
}
// both types are also common to the shift() function. but removes elements at first

splicing = function(){
    // splice(1st_number_parameter, 2nd_number_parameter, other_parameters)
    // 1st_number_parameter => represents starting index
    // 2nd_number_parameter => represents how many elements should be removed from given starting index
    // other_parameters => represents the elements to be added from given starting index

    proteinRichFoods.splice(2, 1, "pumpkinSeeds", "oats", "beef")
    val.innerHTML = proteinRichFoods
}

deleting = function(){
    /* delete keyword used to delete the specified index element 
    and wont delete the space. Instead of the deleted value it is assign to undefined*/
    delete proteinRichFoods[0]
    val.innerHTML = proteinRichFoods
}

concatenation = function(){
    moreProducts = ['peanuts', 'pumpkinSeeds', 'oats']
    val.innerHTML = proteinRichFoods.concat(moreProducts)
}

