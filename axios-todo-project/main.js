//GET request 
function getData(){
        axios.get("https://api.vschool.io/jacksong/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}    

//Listing of todos
function listData(data) {

    clearList()

    for(let i = 0; i < data.length; i++){

        //creating title
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title

        if (data[i].completed === true) {
        document.getElementById("todo-list").appendChild(h1).style.textDecoration="line-through"
        } else {
            document.getElementById("todo-list").appendChild(h1)
        }

        //creating image
        const img = document.createElement('img')
        img.src = data[i].imgUrl
        document.getElementById("todo-list").appendChild(img)

        //creating checkbox, making completed if done
        const checkBox = document.createElement('input')
        checkBox.setAttribute("type", "checkbox")
        document.getElementById("todo-list").appendChild(checkBox)
        
        checkBox.addEventListener("change", function(event){
            event.preventDefault()

            if (this.checked) {
                axios.put(`https://api.vschool.io/jacksong/todo/${data[i]._id}`, {"completed": true})
                .then(response => console.log(response.data),
                h1.style.textDecoration="line-through")
                .catch(error => console.log(error))
                
            } else {
                axios.put(`https://api.vschool.io/jacksong/todo/${data[i]._id}`, {"completed": false})
                .then(response => console.log(response.data),
                h1.style.textDecoration="none")
                .catch(error => console.log(error))
                }
        })    
        
        //creating delete button, removing item if clicked
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = "Delete"
        document.getElementById("todo-list").appendChild(deleteButton)

        deleteButton.addEventListener("click", function(event){
            event.preventDefault()
            
            axios.delete(`https://api.vschool.io/jacksong/todo/${data[i]._id}`)
                .then(response => getData(response))
                .catch(error => console.log(error))
        })
    }
}
    
        
//clearing complete list, then reload to old list + 1 new todo
function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

//auto run
getData()

//POST request - form actions    
const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        completed: false
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/jacksong/todo", newTodo)
        .then(response => getData(response))
        .catch(error => console.log(error))
})











