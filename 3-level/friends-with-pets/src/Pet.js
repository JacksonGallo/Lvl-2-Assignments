import React from "react"

export default function Pet (props) {

    return(

        <section>

            <p>Pet Name:<span className="pet--bold"> {props.pet.name}</span></p>
            <p>Pet Breed:<span className="pet--bold"> {props.pet.breed}</span> </p>
            
        </section>
    )
}