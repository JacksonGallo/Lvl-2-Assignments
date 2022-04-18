import React from "react"

export default function Card(props) {

    let priceTag
    if(props.item.price < 500){
        priceTag = "$"
    } else if(props.item.price < 1000) {
        priceTag= "$$"
    } else {
        priceTag = "$$$"
    }

    return(

        <section>

            <div style={{backgroundColor: (props.item.timeToGo === "Fall") ? "tan" : (props.item.timeToGo === "Spring") ? "lightgreen" : (props.item.timeToGo === "Summer") ? "orange" : "whitesmoke"}}className="card--container">

                {priceTag && <div className="card--pricetag">{priceTag}</div>}
                <p className="card--place">{props.item.place}</p>
                <p>${props.item.price}</p>
                <p>Time To Go: {props.item.timeToGo}</p>
                <img className="card--img" src={props.item.imageUrl}/>

            </div>
            

        </section>
        

    )
}