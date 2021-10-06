import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Register(props) {
    const [registerUser, setRegisterUser] = useState({
        name: "",
        year: 1,
        roll: "",
        email: "",
        hackerID: "",
    });
    const [open, setOpen] = React.useState(false);
    const [registered, setRegistered] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(value);
        setRegisterUser((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function checkAndSave(e) {
        e.preventDefault();
        if (e.target.checkValidity) {
            console.log(registerUser);
            //registerUser consists of all the data collected from the form and can be stored into a db using axios & mongoose
            props.success();
            setRegistered(true);
            setOpen(false);
        } else {
            e.target.reportValidity();
        }
    }

    return (
        <div>
            {!registered ? (
                <Button
                    variant="outlined"
                    onClick={handleClickOpen}
                    style={{
                        marginLeft: "auto",
                        backgroundColor: "white",
                        color: "rgb(68, 0, 255)",
                    }}
                >
                    Register!!!
                </Button>
            ) : (
                <Fab disabled>
                    <CheckCircleIcon sx={{ color: "white", height: "inherit", width: "auto" }}/>
                </Fab>
            )}
            <ThemeProvider theme={darkTheme}>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Register</DialogTitle>
                    <form onSubmit={checkAndSave}>
                        <DialogContent>
                            <DialogContentText>
                                To register for this contest fill out all the
                                details carefully.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="name"
                                label="Full Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                onChange={handleChange}
                                value={registerUser.name}
                            />
                            <TextField
                                sx={{ width: "15ch" }}
                                autoFocus
                                margin="dense"
                                id="year-selector"
                                name="year"
                                select
                                label="Year"
                                variant="standard"
                                value={registerUser.year}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>1st</MenuItem>
                                <MenuItem value={2}>2nd</MenuItem>
                                <MenuItem value={3}>3rd</MenuItem>
                                <MenuItem value={4}>4th</MenuItem>
                            </TextField>

                            <TextField
                                sx={{ ml: 10 }}
                                autoFocus
                                margin="dense"
                                id="roll"
                                name="roll"
                                label="Roll Number"
                                type="text"
                                variant="standard"
                                required
                                onChange={handleChange}
                                value={registerUser.roll}
                            />

                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                                required
                                onChange={handleChange}
                                value={registerUser.email}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="hacker-id"
                                name="hackerID"
                                label="HackerRank ID"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                onChange={handleChange}
                                value={registerUser.hackerID}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </ThemeProvider>
        </div>
    );
}
