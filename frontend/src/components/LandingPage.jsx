import React from 'react'
import Navbar from './Navbar.jsx'
import '../css/landingPage.css'
import SocialSites from './SocialSites.jsx'

export default function LandingPage() {
    return (
        <div>
            <div className="background-img"></div>
            <Navbar/>
            <svg viewBox="0 0 1400 400">
                <text x="50%" y="80%" fill="transparent" text-anchor="middle">
                ACM
                </text>
            </svg>
            <SocialSites/>
        </div>
    )
}
