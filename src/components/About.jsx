import React from "react"
import "./About.css"
import Button from "./Button.jsx"
import topAboutImage from "../assets/images/about-top.png"

export default function About() {
    return (
        <div className="about-container">
            <img src={topAboutImage}/>
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>
            <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="destination-card">
                <h2>Your destination is waiting.<br />
                Your van is ready.</h2>
                <Button text="Explore our vans" backgroundColor={"#161616"} width={"175px"} fontSize={"1rem"} />


            </div>
        </div>
    )
    }