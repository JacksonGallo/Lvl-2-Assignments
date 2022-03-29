const form = document.myForm


form.addEventListener("submit", (event) => {
    event.preventDefault()

    let firstName = form.firstName.value
    
    let lastName = form.lastName.value
    
    let age = form.age.value
    
    let gender = form.gender.value
    
    let destination = form.city.value
    

    let checkedAllergies = []
    let checkedBoxes = document.querySelectorAll("input[name=allergies]:checked")
    for (i=0; i<checkedBoxes.length; i++) {
        checkedAllergies.push(checkedBoxes[i].value)
    }
    

    alert(`
    First Name: ${firstName} 
    Last Name: ${lastName} 
    Age: ${age} 
    Gender: ${gender} 
    Destination: ${destination} 
    Allergies: ${checkedAllergies} 
    Thank you for flying with AirJackson :)
    `)

})

