import React from "react"
import SingleBadge from "./SingleBadge"

export default function EntryForm() {
    
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phone: "",
        favFood: "",
        comments: ""
    })

    const [badgeContent, setBadgeContent] = React.useState([])
    


    //gather info
    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target

        setFormData(prev => (
             {
                ...prev,
                [name]: value
            }
        ))

        // console.log(formData)
    }

    //push info to new badge
    function handleSubmit(event) {
        event.preventDefault()

        setBadgeContent(prev => (
            [
            ...prev, 
            formData,
            ]
        ))

        
    }
    
    console.log(badgeContent)

    //create badge <li>
    const singleBadge = badgeContent.map((badge, index) => <SingleBadge key={index} {...badge}/>)
    
    return(

        <section>

            <form className="form--container" onSubmit={handleSubmit}>

                <div>
                    <input
                        className="input--left"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        minLength='3'
                        required
                    />

                    <input
                        className="input--right"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        minLength='3'
                        required
                    />
                </div>
                
                <div>
                    <input
                        className="input--left"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        minLength='3'
                        required
                    />

                    <input
                        className="input--right"
                        type="text"
                        placeholder="Place of Birth"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        minLength='3'
                        required
                    />
                </div>
                
                <div>
                    <input
                        className="input--left"
                        type="text"
                        placeholder="Phone (1234567899)"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        inputMode="numeric"
                        pattern="\d*"
                        maxLength={10}
                    />

                    <input
                        className="input--right"
                        type="text"
                        placeholder="Favorite Food"
                        name="favFood"
                        value={formData.favFood}
                        onChange={handleChange}
                        minLength='3'
                        required
                    />
                </div>
                
                <div>
                    <textarea 
                        className="form--textarea"
                        placeholder="Tell us about yourself"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <button disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.birthPlace || !formData.favFood || !formData.comments}>Submit</button>
                </div>
                
            </form>

            {singleBadge}
            
        </section>
        
    )
}