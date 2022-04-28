import React from "react"

export default function CreatedMeme(props) {

    const [isEditOn, setIsEditOn] = React.useState(true)

    const [meme, setMeme] = React.useState({
        topText: props.topText,
        bottomText: props.bottomText,
        randomImage: props.randomImage
    })

    function handleChange(event){
        event.preventDefault()

        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

        //console.log(meme)
    }

    function handleSubmit(event) {
        event.preventDefault()

        props.editMeme(props.id, meme)

        setIsEditOn(prev => !prev)
    }

    return(

        <section className="meme-and-buttons">
            
            {isEditOn ?
                <>

                <div className="created--meme">

                    <img className="preview--meme--image" src={props.randomImage}/>
                    <h2 className="preview--meme--text top">{props.topText}</h2>
                    <h2 className="preview--meme--text bottom">{props.bottomText}</h2>
                
                </div>

                <button 
                    className="delete--button"
                    onClick={() => {props.deleteMeme(props.id)}}
                >
                    Delete
                </button>

                <button 
                    className="edit--button"
                    onClick={() => {
                        setIsEditOn(prev => !prev)
                    }}
                >
                    Edit
                </button>

                </>

            :

            <form>

                <div className="created--meme">

                    <img className="preview--meme--image" src={meme.randomImage}/>
                    <h2 className="preview--meme--text top">{meme.topText}</h2>
                    <h2 className="preview--meme--text bottom">{meme.bottomText}</h2>

                </div>

                <div className="edit--container">

                    <input 
                    type="text"
                    name="topText"
                    className="edit--input"
                    placeholder="Top Text"
                    value={meme.topText}
                    onChange={handleChange}
                    />

                    <input 
                        type="text"
                        name="bottomText"
                        className="edit--input"
                        placeholder="Bottom Text"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button 
                        className="delete--button-2"
                        onClick={() => {props.deleteMeme(props.id)}}
                        >
                        Delete
                    </button>

                    <button 
                        className="save--button"
                        onClick={handleSubmit}
                        >
                        Save
                    </button>

                </div>
                
            </form>
            
            }

        </section>

        
    )
}