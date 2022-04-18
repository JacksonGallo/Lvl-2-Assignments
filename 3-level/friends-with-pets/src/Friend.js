import React from "react"
import Pet from "./Pet"

export default function Friend (props) {
    
    const petComponent = props.person.pets.map(pet =>{

        return(

            <Pet 
                pet={pet}
            />

        )
    })


    return(

        <section>

            <div  className="friend--container">

                <h1>{props.person.name}</h1>
                {props.person.age}
                {petComponent}

            </div>

        </section>
        
    )
}