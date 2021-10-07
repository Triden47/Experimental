import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import "../css/team/teamPage.css";
import Navbar from "./Navbar.jsx";
import Vaibhav from "../images/team/Vaibhav.jpg";
import PictureBook from "./PictureBook.jsx";

export default function TeamPage() {
    const [year, setYear] = useState("0000");
    const [cnt, setCount] = useState(0);
    let thresholdArray = [];
    for (let i = 0; i < 1; i += 0.01) thresholdArray.push(i);

    useEffect(() => {
        if (cnt === 25) {
            setYear("2K21");
        } else {
            const val = Math.floor(Math.random() * 10000).toString();
            setYear(val);
            setTimeout(() => setCount(cnt + 1), 100);
        }
    }, [cnt]);
    return (
        <div>
            <Navbar />
            <InView threshold={thresholdArray}>
                {({ ref, inView, entry }) => {
                    const val = Math.floor(
                        inView ? entry.intersectionRatio * 100 : 0
                    );
                    return (
                        <motion.div
                            ref={ref}
                            className="team"
                            animate={{
                                y: (100 - val) * 1.5,
                                opacity: val / 50 - 1,
                            }}
                            transition={{
                                type: "tween",
                                duration: "0.001",
                            }}
                        >
                            <motion.div
                                className="team1"
                            >
                                <p>Meet the</p>
                                <p style={{ paddingRight: "5%" }}>team</p>
                            </motion.div>
                            <motion.div 
                                className="team2"
                                // animate={{
                                //     y: (100 - val) * 1.5,
                                //     opacity: val / 50 - 1,
                                // }}
                                // transition={{
                                //     type: "tween",
                                //     duration: "0.001",
                                // }}
                            >
                                {year}
                            </motion.div>
                        </motion.div>
                    );
                }}
            </InView>

            <div className="wrapper">
                <PictureBook
                    item="1"
                    arr={thresholdArray}
                    title="Web-master"
                    name="Vaibhav Kumar"
                    year="3"
                    branch="CSE"
                    image={Vaibhav}
                    githubId="https://github.com"
                />
                {/* To add a PictureBook element all the above props are required, in addition new item prop should be given for each and css is to be applied to each in teamPage.css */}

                <PictureBook
                    item="2"
                    arr={thresholdArray}
                    title="President"
                    image={Vaibhav}
                />
            </div>
        </div>
    );
}
