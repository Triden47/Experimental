import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import "../css/contest/contestPage.css";
import { useTransform, useViewportScroll } from "framer-motion";
import Register from "./Register";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import Hacker from "../images/contest/HackerRank.png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NewContestCard(props) {
    const [success, setSuccess] = useState(false);

    const DarkTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    }));

    function handleSuccess() {
        setSuccess(true);
    }

    //SnackBar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Card
            sx={{
                maxWidth: "30%",
                textAlign: "center",
                backgroundColor: "#222831",
                color: "white",
                background: success
                    ? "linear-gradient(180deg, rgba(230, 255, 0, 0.7) 0%, rgba(3, 209, 0, 0.7) 100%)"
                    : "linear-gradient(180deg, #7700ff 0%, rgba(68, 0, 255, 0.7) 100%)",
            }}
        >
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
                    {props.contestName}
                </Typography>
                <Typography style={{ display: "inline" }} variant="body2">
                    Date:
                </Typography>
                <Typography style={{ display: "inline" }} variant="body1">
                    {props.date}
                </Typography>
                <br />
                <Typography style={{ display: "inline" }} variant="body2">
                    Time:
                </Typography>
                <Typography style={{ display: "inline" }} variant="body1">
                    {props.time}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
                <DarkTooltip title="Link" arrow>
                    <IconButton href="https://hackerrank.com" target="_blank">
                        <LinkIcon sx={{ color: "white" }} />
                    </IconButton>
                </DarkTooltip>

                <Stack spacing={2} sx={{ width: "100%" }}>
                    <DarkTooltip title="Spread the word" arrow>
                        <IconButton
                            sx={{ marginRight: "auto" }}
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "https://hackerrank.com"
                                );
                                handleClick();
                            }}
                        >
                            <ShareIcon sx={{ color: "white" }} />
                        </IconButton>
                    </DarkTooltip>
                    <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <Alert
                            onClose={handleClose}
                            severity="info"
                            sx={{ width: "100%" }}
                        >
                            Link Text Copied
                        </Alert>
                    </Snackbar>
                </Stack>

                <Register success={handleSuccess} />
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

            <div className="contest-grid">
                <NewContestCard
                    contestName="Enter contest name"
                    date="Enter contest date"
                    time="Enter contest time"
                />
                {/* <NewContestCard contestName="Enter contest name" date="Enter contest date" time="Enter contest time"/> */}
            </div>
        </div>
    );
}
