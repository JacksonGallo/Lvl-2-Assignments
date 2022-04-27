import React from "react"
import axios from "axios"

export default function App(){

  const [color, setColor] = React.useState("")

  const randomNum = Math.floor(Math.random())

  React.useEffect(( ) => {      
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)        
    .then(res => setColor(res.data.colors[randomNum].hex))        
    .catch(err => console.log(err))  }, [])


  return(

    <section>
      <h1 style={{backgroundColor: `#${color}`}}>app</h1>
    </section>
  
  )

}
