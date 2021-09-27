import React from 'react'
import Navbar from './Navbar.jsx'
import '../css/landingPage.css'


function LandingPage() {
    return (
        <div>
            <div className="background-img"></div>
            <Navbar/>
            <svg viewBox="0 0 1400 600">
                <text x="50%" y="50%" fill="transparent" text-anchor="middle">
                ACM
                </text>
            </svg>
        </div>
    )
}

export default LandingPage