//addition function

const addForm = document["addForm"]

addForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstAdd = parseInt(addForm.firstAdd.value,10)
    const secondAdd = parseInt(addForm.secondAdd.value,10)
    addForm.firstAdd.value = ""
    addForm.secondAdd.value = ""

    const addSolution = document.createElement("h3")
    addSolution.textContent = (firstAdd + secondAdd)
    document.getElementById("add").append(addSolution)
})

//subtraction function

const subtractForm = document["subtractForm"]

subtractForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstSubtract = parseInt(subtractForm.firstSubtract.value,10)
    const secondSubtract = parseInt(subtractForm.secondSubtract.value,10)
    subtractForm.firstSubtract.value = ""
    subtractForm.secondSubtract.value = ""

    const subtractSolution = document.createElement("h3")
    subtractSolution.textContent = (firstSubtract - secondSubtract)
    document.getElementById("subtract").append(subtractSolution)
    console.log(subtractSolution)
})

//multiplication function

const multiplyForm = document["multiplyForm"]

multiplyForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstMultiply = parseInt(multiplyForm.firstMultiply.value,10)
    const secondMultiply = parseInt(multiplyForm.secondMultiply.value,10)
    multiplyForm.firstMultiply.value = ""
    multiplyForm.secondMultiply.value = ""

    const multiplySolution = document.createElement("h3")
    multiplySolution.textContent = (firstMultiply * secondMultiply)
    document.getElementById("multiply").append(multiplySolution)
    console.log(multiplySolution)
})
