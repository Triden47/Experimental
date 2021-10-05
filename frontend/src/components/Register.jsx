import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function FormDialog() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    const [open, setOpen] = React.useState(false);

    const [year, setYear] = React.useState("1");

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{ marginLeft: "auto" }}
            >
                Register!!!
            </Button>
            <ThemeProvider theme={darkTheme}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Register</DialogTitle>
                <form>
                    <DialogContent>
                        <DialogContentText>
                            To register for this contest fill out all the
                            details carefully.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Full Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                        />
                        <FormControl
                            variant="standard"
                            sx={{ m: 0, minWidth: 125 }}
                            required
                        >
                            <InputLabel>Year</InputLabel>
                            <Select
                                id="year-selector"
                                value={year}
                                onChange={handleChange}
                                label="Year"
                            >
                                <MenuItem value={1}>1st</MenuItem>
                                <MenuItem value={2}>2nd</MenuItem>
                                <MenuItem value={3}>3rd</MenuItem>
                                <MenuItem value={4}>4th</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="hacker-id"
                            label="HackerRank ID"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
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
