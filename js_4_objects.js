var persons = {
    firstName : 'sri',
    lastName : 'gadgeter',
    age : 22,
    fullName : function(){
        return persons.firstName + persons.lastName
    }
}

document.getElementById("firstName").innerHTML = persons.firstName
document.getElementById("lastName").innerHTML = persons.lastName
document.getElementById("age").innerHTML = persons.age
document.getElementById("fullName").innerHTML = persons.fullName()