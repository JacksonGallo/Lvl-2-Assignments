import React, {useState} from "react"
import Die from "./Die"


export default function Dicebox(){

    const [numbers, setNumbers] = useState([null, null, null, null, null])

    function rollDie () {
        setNumbers(function(){
           return [1 + Math.floor(Math.random() * 6),1 + Math.floor(Math.random() * 6),1 + Math.floor(Math.random() * 6),1 + Math.floor(Math.random() * 6),1 + Math.floor(Math.random() * 6)]
        })
    }

    


    const oneDie = numbers.map(number => {
        return (
            <Die 
                number={number}
            />
        )
    })

    return(

        <section>
            <button onClick={rollDie}>Roll Die</button>
            {oneDie}
        </section>
        
    )
}