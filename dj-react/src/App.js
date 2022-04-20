import React from "react"
import Square from "./Square"

export default function App() {

  const [colors, setColors] = React.useState(["white","white","white","white"])

  const squares = colors.map(color => {
    return (

      <Square 
      
      color={color}
      />

    )

  })

  function blackOrWhite(){
    setColors(prevColor => {
     if (prevColor[0]==="white") {
        return ["black","black","black","black"]
      } else {
        return ["white","white","white","white"]
      }
    })
  }

  function topHalfPurple() {
    setColors(prevColor => {
      return ["purple", "purple", prevColor, prevColor]
    })
  }

  function bottomLeftBlue() {
    setColors(prevColor => {
      return [prevColor, prevColor, "blue", prevColor]
    })
  }

  function bottomRightBlue() {
    setColors(prevColor => {
      return [prevColor, prevColor, prevColor, "blue"]
    })
  }

  return(

    <section className="app--container">

      <div className="square--container">
        {squares}
      </div>

      <button className="app--button" onClick={blackOrWhite}>Black / White</button>
      <button className="app--button" onClick={topHalfPurple}>Top 2 Purple</button>
      <button className="app--button" onClick={bottomLeftBlue}>Bottom Left Blue</button>
      <button className="app--button" onClick={bottomRightBlue}>Bottom Right Blue</button>

    </section>
    
  )
}
