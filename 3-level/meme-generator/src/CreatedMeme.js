import React from "react"

export default function CreatedMeme(props) {
    return(
        <div className="created--meme">
            <img className="preview--meme--image" src={props.randomImage}/>
            <h2 className="preview--meme--text top">{props.topText}</h2>
            <h2 className="preview--meme--text bottom">{props.bottomText}</h2>
        </div>
    )
}