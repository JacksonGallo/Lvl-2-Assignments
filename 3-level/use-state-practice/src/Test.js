import React from "react"

export default function Test () 
{
    // const [color, setColor] = React.useState("pink")

    // //1 - hard code
    // //setColor("blue")

    // //2 - toggle
    // // function colorChange () {
    // //     if (color === "pink") {
    // //         setColor("blue")
    // //     } else {
    // //         setColor("pink")
    // //     }
            
    // // }

    // console.log(color)

    //3 - add person object
    // const [people, setPeople] = React.useState([
    //     {
    //         firstName: "John",
    //         lastName: "Smith"
    //     }
    // ])
    
    // function addPerson () {
    //     setPeople(prev => prev.push({
    //         firstName: "Jackson",
    //         lastName: "Gallo"
    //     }))
    //     console.log(people)
    // }
    
    //4 - implicit returns
    // const [colors, setColors] = React.setState(["pink", "blue"])

    // setColors(prevColors => [...prevColors, "green"])

    // const [countObject, setCountObject] = setState({
    //     count: 0
    // })
    
    // setCountObject(prevState=>  {count: prevState.count + 1})
    
    const [person, setPerson] = React.useState({
		firstName: "John",
		lastName: "Smith"
    })

    function addAge () {
        setPerson(prev => prev.map(obj => ({ ...obj, age: '30' })))
        console.log(person)
    }
    
    
    return(

        <button onClick={addAge}>click me</button>
    )
}