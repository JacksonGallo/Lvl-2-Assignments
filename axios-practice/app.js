

//long hand version using axios to get info and then runs the data:

// function assignResponseToVariable(response) {
//     console.log(response.data)
// }

// axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable)

//ES6 version of above ^ :

//axios.get('https://swapi.co/api/people/1').then(response => {console.log(response.data)})

//adding a .catch() method to help with errors:

//axios.get('https://swapi.co/api/people/1').then(response => {console.log(response.data)}).catch(error => {console.log(error)})

const axios = require("axios");

axios.get("https://api.vschool.io/scrimbalessons/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const h1 = document.createElement("h1")
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))

