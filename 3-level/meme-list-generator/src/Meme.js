import React from "react"
import axios from "axios"
import CreatedMeme from "./CreatedMeme"

export default function Meme(){
    //initial set up for meme
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https:\/\/i.imgflip.com\/1ur9b0.jpg"
    })

    //live updates to state meme
    function handleChange(event){
        event.preventDefault()

        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

        //console.log(meme)
    }

    //state for interacting with API
    const [memeAPI, setMemeAPI] = React.useState([])

    //GET request
    React.useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
        .then(response => setMemeAPI(response.data.data.memes))
        //console.log("use effect")
    },[])

    //get new image when button pressed
    function getNewImage(event){
        event.preventDefault()

        const randomNum = Math.floor(Math.random() * memeAPI.length);

        const newImage = memeAPI[randomNum].url

        setMeme(prev => ({
            ...prev,
            randomImage: newImage
        }))
    }


    //pushing data from 'form' into mappable array, and then putting that info into imported component via props
    const [newMeme, setNewMeme] = React.useState([])

    function handleSubmit(event) {
        event.preventDefault()

        setNewMeme(prev => (
            [
                ...prev,
                meme
            ]
        ))
    }

    const createdMemeList = newMeme.map((item, index) => {
        //console.log("createdmeme")
        return(
            <CreatedMeme
                key={index}
                {...item}
            />
        )
        
    })

    return(
        <section>

            <div className="form">

                <input 
                    type="text"
                    name="topText"
                    className="form--input"
                    placeholder="Top Text"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="bottomText"
                    className="form--input"
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                className="form--button"
                onClick={getNewImage}
                >
                    Get New Image
                </button>

                <button 
                className="form--button"
                onClick={handleSubmit}
                >
                    Create Meme
                </button>

            </div>

            <div className="preview--meme">
                <img className="preview--meme--image" src={meme.randomImage}/>
                <h2 className="preview--meme--text top">{meme.topText}</h2>
                <h2 className="preview--meme--text bottom">{meme.bottomText}</h2>
            </div>
            
            {createdMemeList}

        </section>
    )
}