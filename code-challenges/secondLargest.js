function secondLargest(arr){
    arr.sort(function(a, b){
        return b - a
    })
    return arr[1]
}

function secondLargestExtra(arr) {
    let largestNum = 0
    let secondLargestNum = 0

    arr.map(num => {
        if(num > largestNum) {
            largestNum = num
        } else if (num > secondLargestNum){
            secondLargestNum = num
        }
    })

    return secondLargestNum

}

// console.log(secondLargest([10, 40, 30, 20, 50]))
// console.log(secondLargest([25, 143, 89, 13, 105]))
// console.log(secondLargest([54, 23, 11, 17, 10]))

console.log(secondLargestExtra([10, 40, 30, 20, 50]))
console.log(secondLargestExtra([25, 143, 89, 13, 105]))
console.log(secondLargestExtra([54, 23, 11, 17, 10]))