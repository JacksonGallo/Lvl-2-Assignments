import React from "react"

export default function BlogPost (props) {
    return (

        <div className="BlogPost--container">

           <h1 className="BlogPost--title">{props.item.title}</h1>
           <h3 className="BlogPost--subtitle">{props.item.subTitle}</h3> 
           <p className="BlogPost--info">Posted by <span className="BlogPost--author">{props.item.author}</span> on {props.item.date}</p>

        </div>
        
    )
}