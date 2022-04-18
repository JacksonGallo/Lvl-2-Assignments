import React from "react"
import Card from "./Card"
import data from "./data"

export default function CardList (){

    const cards = data.map(function(item){
        return (
            <Card
            key={item.place}
            item={item}
            />
        )
    })

    return (
        <section>

            <h2 className="cardlist--h2">Featured</h2>

            <div className="cardlist--container">
                
                {cards}

            </div>

        </section>
        
        
    )
}