import React from "react" 
import axios from "axios"

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
//RANDOM COLOR PORTION

const [color, setColor] = React.useState(
  {
    colors:[
      {
      "hex":""
      } 
    ]
  }
  )

setColor(
  axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  .then(response => setColor(response.data))
)
  

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
      
      <div>
        <h1 style={{backgroundColor:{color}}}>New Color Background here</h1>
        <button>Change Color</button>
      </div>

    </section>

  )
}
