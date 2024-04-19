import React from "react"

export default function Header(){
    return(
            <div className="Header">
                <img src="./Images/Profile.png" className="ProfileImg"/>
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <h3>LauraSmith.website</h3>
                <button>
                    <img src="./Images/Email.png" id="EmailPNG"/>
                    Email
                </button>
            </div>
    )
}
