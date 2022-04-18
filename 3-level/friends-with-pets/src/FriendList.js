import React from "react"
import Friend from "./Friend"
import data from "./data"

export default function FriendList () {

    const friends = data.map(person => {

        return(

            <Friend 
                key = {person.name}
                person = {person}
            />

        )

    })

    return (

        <section>

            <div className="friendlist--header">
                <h1 className="friendlist--h1">My Friends & Pets</h1>
            </div>
            
            <div className="friendlist--container">
                {friends}
            </div>
            

        </section>
        
    )
}