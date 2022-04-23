function puzzlePieces (arr1, arr2) {
    
    if (arr1.length !== arr2.length) {
        return false
    } 

    let newArr = []

    for (let i=0; i<arr1.length; i++) {
            newArr.push(arr1[i] + arr2[i])
        }
    
    for (let i=0; i<newArr.length; i++){
        if (newArr[i] !== newArr[i+1]) {
            return false
        }
        else {
            return true
        }
    }
}

console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]))
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]))
console.log(puzzlePieces([1, 2], [-1, -1]))