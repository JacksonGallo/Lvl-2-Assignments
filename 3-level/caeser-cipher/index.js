const readline = require('readline-sync');

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase().split("")
const shift = parseInt(readline.question('How many letters would you like to shift? '));
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")



//look at each individual character in input
//see if that letter matches a value in alphabet array
//if it does, return that alphabet[index + shift]

function solution(arr) {
    let encryptedString = ""

    arr.map(letter => {

        if ("abcdefghijklmnopqrstuvwxyz".includes(letter)){

            const index = alphabet.indexOf(letter)
            const newChar = alphabet[(index + shift) % 26]
            encryptedString += newChar

        } else {
            
            encryptedString += letter
        }
        
    })

    return encryptedString
}

console.log(solution(input))

//graveyard

// else if(asciiNum >= 65 && asciiNum <= 90) {
//     solved += String.fromCharCode(asciiNum + shift)
// }

// function solution(arr) {
//     let newArr = []

//     alphabet.map(letter => {
//         arr.map(index => {
//             if(index == letter) {
//                 newArr.push(index)
//             }
//         })
//     })

//     return newArr.join("")
// }

// function solution(arr) {
    
//     let newArr = []

//     arr.map(letter => {
//         alphabet.map(index => {
//             if (index === letter) {
//                 newArr.push(alphabet[(index.indexOf(letter)) + shift])
//             }
//         })
//     })

//     return newArr.join("")
// }

// for(i=0; i<str.length; i++){
//     //get ascii code
//     let asciiNum = str[i].charCodeAt()
//     if(asciiNum >= 97 && asciiNum <= 122) {
//         //turn ascii code into letter
//         solved += String.fromCharCode(asciiNum + shift)
//     }
// }