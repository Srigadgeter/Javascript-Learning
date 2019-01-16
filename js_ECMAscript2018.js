// ECMAscript 2018


// Object rest/spread property
person = {
    firstName: 'raj',
    x: 2,
    lastName: 'kumar',
    age: 20,
    email: 'rajkumar@gmail.com',
    y: 5
}

const {x, y, ...z} = person
// Rest element must be last element
// Rest element ==> ...z

console.log("Object rest/spread property concept")
console.log(x)
console.log(y)
console.log(z)

// ---------------------------------------

// Promise
// https://www.youtube.com/watch?v=s6SH72uAn3Q - youtube video link to learn promise concept in ecmascript2018
console.log("Promise : simple concept")

promiseToCleanTheHouse = new Promise(function(resolve, reject) {
    let isHouseClean = false

    isHouseClean ? resolve('clean') : reject('not clean')
})

promiseToCleanTheHouse.then(function(paramsFromResolveCall) {
    console.log('The house is ' + paramsFromResolveCall)
}).catch(function(paramsFromRejectCall) {
    console.log('The house is ' + paramsFromRejectCall)
})

console.log("Promise : complex concept\n---------------------------------")

isCleanedHouse = true, isRemovedGarbage = false

cleanHouse = function() {
    return new Promise(function(resolve, reject) {
        isCleanedHouse ? resolve('House is cleaned.') : reject('House isn\'t cleaned.')
    })
}

removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        isRemovedGarbage ? resolve(message + ' The garbage is removed.') : reject(message + ' The garbage isn\'t removed.')
    })
}

winChocolate = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' You won chocolate.')
    })
}

cleanHouse().then(function(msgFromResolve) {
    removeGarbage(msgFromResolve).then(function(msgFromResolve) {
        winChocolate(msgFromResolve).then(function(msgFromResolve) {
            console.log('You have finished all. ' + msgFromResolve)
        })
    }).catch(function(msgFromReject) {
        console.log(msgFromReject + ' You didn\'t win chocolate.')
    })
}).catch(function(msgFromReject) {
    console.log(msgFromReject)
})

// above lines could write aslike this

// cleanHouse().then(function(msgFromResolve) {
//     return removeGarbage(msgFromResolve)
// }).then(function(msgFromResolve) {
//     return winChocolate(msgFromResolve)
// }).then(function(msgFromResolve) {
//     console.log('You have finished all. ' + msgFromResolve)
// })

// ---------------------------------------
