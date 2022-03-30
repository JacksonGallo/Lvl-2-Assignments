const baddieForm = document.baddieForm

baddieForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const goombaCount = parseInt(baddieForm.goomba.value,10)
    const bobombCount = parseInt(baddieForm.bobomb.value,10)
    const cheepCount = parseInt(baddieForm.cheep.value,10)

    const totalPrice = document.createElement("h2")
    totalPrice.textContent=((goombaCount * 5) + (bobombCount * 7) + (cheepCount * 11))
    document.getElementById("total").append(totalPrice)

    
})