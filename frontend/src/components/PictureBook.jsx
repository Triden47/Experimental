import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
// import styles from '../css/team/teamPage.module.css'


export default function PictureBook(props) {
    const control = useAnimation()

    const headingVariant = {
        visible: val => ({
            x: 200 - 2 * val,
            opacity: val / 100,
            transition: {
                type: "tween",
                duration: 0.0001
            }
        }),
        hidden: {
            x: 200,
            opacity: 0
        }
    }
    const imgVariant = {
        visible: val => ({
            y: -val,
            opacity: val / 50 - 1
        }),
        hidden: { opacity: 0 }
    }

    return (
        
        <InView threshold={ props.arr }>
            {({ ref, inView, entry }) => {
                const val = Math.floor(inView ? entry.intersectionRatio * 100 : 0)
                return (
                    
                    <div ref={ref} className={"grid-item item" +  props.item}>
                        <motion.h2
                            custom={val}
                            animate="visible"
                            initial="hidden"
                            variants={headingVariant}
                        >{props.title}</motion.h2>

                        <motion.div
                            whileHover={{ filter: "grayscale(100%)" }}
                            onHoverStart={() => {
                                control.start({
                                    y: "-100%",
                                    transition: { duration: 0.1 }
                                })
                            }}
                            onHoverEnd={() => {
                                control.start({
                                    y: "0%"
                                })
                            }}
                            className="img-box"
                            variants={imgVariant}
                            animate="visible"
                            initial="hidden"
                            custom={ val }
                        >
                            <motion.img 
                                className="members-image"
                                src={props.image}
                                alt={props.title}
                            />

                            <motion.div 
                                className="details"
                                animate={control}
                            >
                                <h3>{props.name}</h3>
                                <p>{props.year}rd year | {props.branch}</p>
                                <IconButton 
                                    class="icon"
                                    href={props.githubId}target="_blank">
                                    <GitHubIcon style={{ fontSize: "2rem", color: "white" }}/>
                            </IconButton>
                            </motion.div>
                        </motion.div>
                    </div>
                )
            }}
        </InView>
    )
}
