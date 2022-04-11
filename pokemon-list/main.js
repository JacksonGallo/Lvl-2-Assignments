const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
        showData(data.objects[0].pokemon)
    }
}

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
} 


function doubleNumbers(arr) {
    return arr.map(function(num) {
        return num * 2
    } )
}

//console.log(doubleNumbers([2,4,6]))

function stringItUp(arr) {
    return arr.map(num => num.toString())
}
  
//console.log(stringItUp([2, 5, 100]))

function capitalizeNames (arr) {
    return arr.map(name => name[0].toUpperCase().concat(name.slice(1).toLowerCase()))
}

//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

function namesOnly(arr) {
    return arr.map(person => person.name)
}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))

function makeStrings(arr) {
    return arr.map(person => {
        if (person.age >= 18) {
            return `${person.name} can go to the Matrix`
        } else {
            return `${person.name} can NOT go to the Matrix`
        }
    })
}

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))

function readyForDOM (arr) {
    return arr.map(function(user){
        return `<h1>${user.name}</h1><h2>${user.age}</h2>`
    })
}

// console.log(readyForDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))

function fiveOrGreater(arr){
    return arr.filter(num => num >= 5)
}

//console.log(fiveOrGreater([3, 6, 8, 2]))

function onlyEven(arr) {
    return arr.filter(num => num % 2 === 0)
}

// console.log(onlyEven([3, 6, 8, 2]))

function lessThanFive(arr) {
    return arr.filter(word => word.length <= 5)
}

//console.log(lessThanFive(["dog", "wolf", "by", "family", "eaten", "camping"]))

function inClub(arr) {
    return arr.filter(person => person.member)
}

// console.log(inClub([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]))

function oldEnough(arr) {
    return arr.filter(person => person.age >= 18)
}

// console.log(oldEnough([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]))

function leastToGreatest(arr) {
    return arr.sort((a,b) =>  a - b)
}

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))

function largestToSmallest(arr) {
    return arr.sort((a,b) => b - a)
}

//console.log(largestToSmallest([1, 3, 5, 2, 90, 20]))

function shortestString(arr) {
    return arr.sort(function(a,b){
        return a.length - b.length
    })
}

// console.log(shortestString(["dog", "wolf", "by", "family", "eaten"]))

function alphabetical(arr) {
    return arr.sort(function(a,b){
        return a === b ? 0 : a < b ? -1 : 1;
    })
}

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]))

function byAge(arr) {
    return arr.sort((a,b) => a.age - b.age)
}

// console.log(byAge([
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]))

function sumTotal(arr) {
    return arr.reduce(function(final, num){
        final += num
        return final
    },0)
}

// console.log(sumTotal([1,2,3]))

function stringConcat(arr) {
    return arr.reduce(function(final, num){
        final += num
        return final
    },"")
}

//console.log(stringConcat([1,2,3]))

function totalVotes(arr) {
    return arr.reduce(function(final, voter){
        if (voter.voted === true) {
            final ++
        }
        return final
    },0)
}

// console.log(totalVotes([
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]))

function shoppingSpree(arr) {
    return arr.reduce(function(final, item){
        return final += item.price
    },0)
}

// console.log(shoppingSpree([
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]))

function flattenArr(arr) {
    return arr.reduce(function(final, current) {
        return final.concat(current)
    },[])
}

// console.log(flattenArr([
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]))

function voterResults(arr) {
    return arr.reduce(function(final, voter){
        if (voter.age <= 25) {
            final.youngPeople ++
            if (voter.voted === true) {
                final.youngPeopleVotes ++
            }
        } else if (voter.age <= 35) {
            final.midPeople ++
            if (voter.voted === true) {
                final.midPeopleVotes ++
            }
        } else if (voter.age > 35) {
            final.oldPeople ++
            if (voter.voted === true) {
                final.oldPeopleVotes ++
            }
        }
        return final
    },{youngPeople: 0, youngPeopleVotes: 0, midPeople: 0, midPeopleVotes: 0, oldPeople: 0, oldPeopleVotes: 0})
}

// console.log(voterResults([
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]))


let peopleArray = [
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

function sortedOfAge(arr) {
    return arr.filter(person => person.age >= 18).sort((a,b) => a.lastName === b.lastName ? 0 : a.lastName < b.lastName ? -1 : 1).map(person =>`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
}

// console.log(sortedOfAge(peopleArray))




function evenishOrOddish(num) {
        let array = num.toString().split("")
        let sum = array.reduce(function(final,current){
            final += parseInt(current)
            return final
        },0)
        if (sum % 2 === 0) {
            return "evenish"
        } else {
            return "oddish"
        }
}

// console.log(evenishOrOddish(8))
