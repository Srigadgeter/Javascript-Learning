var persons = {
    age : 22,
    fullName : function(){
        // this keyword is used to refer the owner of the function
        return this.firstName + this.lastName
    }
},

persons2 = {
    firstName : 'sri',
    lastName : 'gadgeter'
}

document.getElementById("firstName").innerHTML = persons2.firstName
document.getElementById("lastName").innerHTML = persons2.lastName
document.getElementById("age").innerHTML = persons.age
document.getElementById("fullName").innerHTML = persons.fullName.call(persons2)
document.getElementById("fullName2").style.color = "green"
document.getElementById("fullName2").innerHTML = persons.fullName.apply(persons2)

/* The call() and apply() methods are predefined js methods. 
They can both be used to call an object method with another object as arguement.
*/