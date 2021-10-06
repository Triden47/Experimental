import React from 'react'
import Navbar from './Navbar.jsx'
import '../css/home/landingPage.css'
import SocialSites from './SocialSites.jsx'
import { motion } from 'framer-motion'

export default function LandingPage() {
    return (
        <div>
            <div className="background-img"></div>
            <Navbar/>
            <motion.svg viewBox="0 0 1400 400"
                animate={{
                    y: [-100, 0],
                    opacity: [0, 1]
                }}
                transition={{ duration: 3 }}
            >
                <text x="50%" y="80%" fill="transparent" text-anchor="middle">
                ACM
                </text>
            </motion.svg>
            <SocialSites/>
        </div>
    )
}
