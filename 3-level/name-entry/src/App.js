import React from "react" 

export default function App() {
 
const [formData, setFormData] = React.useState(
  {
  name: ""
  }
)

const [list, setList] = React.useState([])

function handleChange (event) {
  
  const {name, value} = event.target
  
  setFormData((prevName) => {
    return {
      [name]:value
    }
  })

  // console.log(formData)

}

function handleSubmit(event) {
  event.preventDefault()
  setList(prev => [formData.name, ...prev]) 
}
// console.log(list)

 return (

    <section>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <h1>{formData.name}</h1>

        <button>Submit</button>

      </form>

      <ol>
        {list.map(item => <li> {item} </li>)}
      </ol>
      

    </section>

  )
}
