import React from "react"

export default function SingleBadge(props){
    
    return(
            <li className="new-badge">
                <div className="badge-banner">
                    Badge:
                </div>
                <h1>{props.firstName} {props.lastName}</h1>
                <p>
                    Phone Number: {props.phone} <br/>
                    E-mail: {props.email} <br/>
                    Favorite Food: {props.favFood} <br/>
                    Birthplace: {props.birthPlace}
                </p>
                <p>
                    Additional Comments: {props.comments}
                </p>
            </li>
    )
}