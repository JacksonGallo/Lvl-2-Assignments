const arr = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


const result = arr.filter(person => person.age > 18).sort((a,b) => a.lastName === b.lastName ? 0 : a.lastName < b.lastName ? -1 : 1)
.map(person => "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "<li>")

console.log(result)





