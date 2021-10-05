import React from "react";
import Navbar from "./Navbar.jsx";
import "../css/contest/contestPage.css";
import { useTransform, useViewportScroll } from "framer-motion";
import Register from './Register'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import Hacker from "../images/contest/HackerRank.png"

function NewContestCard() {
    return (
        <Card sx={{ maxWidth: "30%", textAlign: "center", backgroundColor: "#222831", color: "white" }}>
            <CardHeader
                title="Announced"
                // subheader="September 14, 2016"
            />
            <CardMedia
                sx={{ backgroundColor: "white" }}
                component="img"
                height="20%"
                image={Hacker}
                alt="Hacker Pic"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    CQM 9._
                </Typography>
                <Typography
                    style={{ display: "inline" }}
                    variant="body2"
                >
                    Date:
                </Typography>
                <Typography
                    style={{ display: "inline" }}
                    variant="body1"
                >
                    "Enter date here"
                </Typography>
                <br />
                <Typography
                    style={{ display: "inline" }}
                    variant="body2"
                >
                    Time:
                </Typography>
                <Typography
                    style={{ display: "inline" }}
                    variant="body1"
                >
                    "Enter time here"
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
                <IconButton aria-label="add to favorites">
                    <LinkIcon sx={{ color: "white" }}/>
                </IconButton>
                <IconButton sx={{ marginRight: "auto" }}aria-label="share">
                    <ShareIcon sx={{ color: "white" }}/>
                </IconButton>
                <Register/>
            </CardActions>
        </Card>
    );
}

export default function ContestPage() {
    const input = [0, 300, 650];
    const output = [0, 1, 0];

    const { scrollY } = useViewportScroll();

    const opacity = useTransform(scrollY, input, output);
    const ip = [0, 80];
    const op = ["80%", "10%"];
    const movement = useTransform(scrollY, ip, op);

    scrollY.onChange(() => {
        console.log(scrollY.get());
    });

    return (
        <div className="parent">
            <Navbar />
            {/* <div className="stay-tuned">
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                >Stay Tuned</motion.div>
            </div> */}
            <NewContestCard />
            {/* <ContestDetails /> */}
        </div>
    );
}
