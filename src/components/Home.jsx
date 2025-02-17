import React from "react"
import "./Home.css"
import Button from "./Button.jsx"


import backgroundImage from "../assets/images/Home_background.png"

export default function Home() {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Button text="Find your van" />

        </div>
    )
    }