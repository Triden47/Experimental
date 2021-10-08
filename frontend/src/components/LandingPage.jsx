import React from 'react'
import Navbar from './Navbar.jsx'
import '../css/home/landingPage.css'
import SocialSites from './SocialSites.jsx'
import { motion, useViewportScroll } from 'framer-motion'
import BackgroundImg from '../images/dying-light2.jpg'

export default function LandingPage() {

    const { scrollXProgress } = useViewportScroll()
    console.log(scrollXProgress)

    const lightRight = {
        visible: {
            opacity: [0, 0.5, 0, 0, 0.5],
            transition: {
                type: "tween",
                duration: 5, 
                times: [0.3, 0.35, 0.4, 0.7, 0.8],
            }
        },
        hidden: {
            opacity: 0
        }
    }
    const lightLeft = {
        visible: {
            opacity: [0, 1],
            transition: {
                type: "tween",
                duration: 5, times: [0.5, 0.75]
            }
        },
        hidden: {
            opacity: 0
        }
    }
    return (
        <div>
            <motion.img 
                animate="visible"
                initial="hidden"
                variants={lightRight}
                className="experimental" 
                src={BackgroundImg} 
                alt={"Dying Light"}
            />
            <motion.img 
                animate="visible"
                initial="hidden"
                variants={lightLeft}
                className="experimental-flip" 
                src={BackgroundImg} 
                alt={"Dying Light"}
            />

            <Navbar/>
            <motion.svg 
                className="acm"
                viewBox="0 0 1400 400"
                animate={{
                    // y: [-100, 0],
                    // opacity: [0, 1]
                }}
                transition={{ duration: 3 }}
            >
                <text x="50%" y="65%" fill="transparent" text-anchor="middle">
                ACM
                </text>
            </motion.svg>
            <SocialSites/>
        </div>
    )
}
