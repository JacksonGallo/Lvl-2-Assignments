//return new array of numbers > 5
//const arr = [1,2,3,4,5,6,7,8]

//const greaterThan = arr.filter(num => num > 5)

//console.log(greaterThan)


//return only even numbers
//const arr = [1,2,3,4,5,6,7,8]

//const onlyEven = arr.filter(num => num % 2 === 0)

//console.log(onlyEven)


//given array of strings, return only those that are <= 5 char in length

//const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

//const fiveOrFewer = arr.filter(word => word.length <=5)

//console.log(fiveOrFewer)



//return only members
/*
const arr = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const members = arr.filter(member => member.member === true)

console.log(members)
*/


//people old enough to see the Matrix
// const arr = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// const oldEnough = arr.filter(person => person.age >= 18)

// console.log(oldEnough)

// function points(twoPointers, threePointers) {
//     return (twoPointers * 2) + (threePointers * 3);
// }
// console.log(points(1, 1))
// console.log(points(7, 5))
// console.log(points(38, 8))


// function doubleChar (str){
//     let newString = ""

//     for (i=0; i<str.length; i++) {
//         newString += str[i] + str[i]
//     }

//     return newString
// }

// console.log(doubleChar("124_"))


// function sumMix(x){
//     return x.reduce(function(final,current) {
//       final += parseInt(current)
//       return final
//     },0)
// }

// function sumMix(arr){
//     let count = 0
//     for (let i=0; i<arr.length; i++){
//         if (typeof [i] === "string" ){
//             count += arr[i]
//         } else {
//             count += arr[i]
//         }
//     }
//     return count
// }

// console.log(sumMix([9, 3, '7', '3']))

// function litres(time) {
//     return Math.floor(time/2)
//   }

//   console.log(litres(11.8))

function solve(n) {
    let withdrawal = n
    let bankNotes = 0
    if (n % 500 === 0){
      bankNotes += (n/500)
      withdrawal -= (bankNotes*500)
    }
    return bankNotes
}

console.log(solve(1000))