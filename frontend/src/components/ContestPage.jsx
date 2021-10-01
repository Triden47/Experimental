import { React, useEffect } from 'react'
import '../css/contestPage.css'
import Navbar from './Navbar.jsx'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function ContestPage() {
    const input = [0, 300, 650]
    const output = [0, 1, 0]
    
    const { scrollY } = useViewportScroll()

    const opacity = useTransform(scrollY, input, output)
    const ip = [0, 80]
    const op = ["80%", "10%"]
    const movement = useTransform(scrollY, ip, op)

    scrollY.onChange(() => {
        console.log(scrollY.get())
    })

    return (
        <div className="parent">
            <Navbar/>
            <motion.h1
                style={{ x: movement, opacity }}
            >President</motion.h1>
            <div className="stay-tuned">
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                >Stay Tuned</motion.div>
            </div>
        </div>
    )
}
