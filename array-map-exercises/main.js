//make an array that are doubles of first array
//const arr = [1,2,3,4]

//const double = arr.map(num => num*2)

//console.log(double)



//take an array of numbers and make them strings
//const arr = [1,2,3,4]

//const stringItUp = arr.map(num => num.toString())

//console.log(stringItUp)



//capitalize the first letter of each name and make the rest lowercase

//const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

//const capitalNames = arr.map(name => name[0].toUpperCase().concat(name.slice(1).toLowerCase()))

//console.log(capitalNames)


//return just the names
/* const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const names = people.map(person => person.name)

console.log(names)
*/



//make an array of strings of the names saying whether or not they can go to the matrix
/* const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const isAllowed = people.map(person => {
    if (person.age >= 18) {
        return person.name + " can go to see the Matrix"
    } else {
        return person.name + " is NOT old enough"
    }
})

console.log(isAllowed)
*/


//make an array of the names in h1s, and the ages in h2s

const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const readyForDOM = people.map(person => "<h1>" + person.name + "</h1><h2>" + person.age + "</h2>")

console.log(readyForDOM)