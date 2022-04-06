// const manName = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", manName)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = (arr) => arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })

// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// // //const filterForFriendly = people.filter(person => person.friendly)

// const filterForFriendly = (arr) => arr.filter(person => person.friendly) 
     

// console.log(filterForFriendly(people))

// const doMathSum = (a, b) => a + b


// const produceProduct = (a, b) => a * b

// const printString = (firstName="Jane", lastName="Doe", age="40") => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

// console.log(printString())

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 

// const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog"))

// console.log(filterForDogs(animals))

// const buildIntro = (firstName, location) => `Hello ${firstName}. 
// Welcome to ${location}.
// Please ask the president of ${location} if you need anything.`

// console.log(buildIntro("Jackson", "FL"))