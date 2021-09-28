import React, { useState, useEffect } from 'react'
import '../css/nav.css'
import { Box, Slide } from '@mui/material'
import ComplexButton from './ComplexButton.jsx'


function Nav() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    useEffect(() => {
        setTimeout(handleChange, 3000);
    }, []);

    return (
        <Box sx={{ height: 80 }}>
            <Box>
                <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
                    <nav>
                        <div>
                            <ComplexButton name="contests"/>
                        </div>
                        <div>
                            <ComplexButton name="team"/>
                        </div>
                        <div>
                            <ComplexButton name="about"/>
                        </div>
                    </nav>
                </Slide>
            </Box>
        </Box>
  );
}

export default Nav