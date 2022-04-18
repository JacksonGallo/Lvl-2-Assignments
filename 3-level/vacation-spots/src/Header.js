import React from "react"

export default function Header() {
    return(

        <div className="header--container">
            <img src="https://o.remove.bg/downloads/288e1e62-3d22-4713-9340-160850b68e58/trivago_logo_a-removebg-preview.png" className="header--logo"/>
            <ul className="header--ul">
                <span className="header--current-page"><li className="header--li">Home</li></span>
                <li className="header--li">Book Now</li>
                <li className="header--li">Contact Us</li>
                <li className="header--li">Sign Up / Login</li>
            </ul>
        </div>
        

    )
}