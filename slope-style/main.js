// function collectAnimals(...animals) {
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "deer", "jackolope", "platypus"));
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables) {
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
// }
  
// console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }));

// function returnFirst(items){
//     const firstItem = items; /*change this line to be es6*/
//     return firstItem
// }

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav,secondFav,thirdFav] = arr
//     return `My top 3 fav activties are ${firstFav}, ${secondFav}, ${thirdFav}`
// }

// console.log(returnFavorites(favoriteActivities)

// function combineAnimals(arr1, arr2, arr3){
//     return [...arr1, ...arr2, ...arr3];
//   }
  
//   const realAnimals = ["dog", "cat", "mouse"];
//   const magicalAnimals = ["jackolope"];
//   const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// const product = (a, b, c, d, e) => {
//     const numbers = [a,b,c,d,e];
//     return numbers.reduce((acc, number) => acc * number, 1);
// }

// console.log(product(1,1,1,1,2))

// function  unshift (array, ...letters) { 
//     return [...letters, ...array];
// }
// console.log(unshift([1, 2, 3,], 'a', 'b', 'c'));

function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        let [firstName, lastName] = name
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))