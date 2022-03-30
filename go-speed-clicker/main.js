const button = document.getElementById("button")

let count = 0

button.addEventListener("click", (event) => {
    
    count ++ ;
    //console.log(count)

    const liveCount = document.createElement("h1")
    liveCount.textContent=(count)
    document.body.append(liveCount)
    localStorage.setItem("liveCount",(count))
})




const newButton = document.getElementById("newButton")
newButton.addEventListener("click", (event) => {
    const oldCount=document.createElement("h1")
    oldCount.textContent=(localStorage.getItem("liveCount"))
    document.body.prepend(oldCount)
})
