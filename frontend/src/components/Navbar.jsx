import React, { useState, useEffect } from 'react'
// import { Nav, Navbar, Container } from 'react-bootstrap'
import '../css/nav.css'
import { Link } from 'react-router-dom'
import { Box, Slide } from '@mui/material'

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
                            <Link className="link" to="contest/">
                                Contest
                            </Link>
                        </div>
                        <div>
                            <Link className="link" to="team/">
                                Team
                            </Link>
                        </div>
                        <div>
                            <Link className="link" to="about/">
                                About
                            </Link>
                        </div>
                    </nav>
                </Slide>
            </Box>
        </Box>
  );
    //     <nav>
    //       <div><Link className="link" to='contest/'>Contest</Link></div>
    //       <div><Link className="link" to="team/">Team</Link></div>
    //       <div><Link className="link" to="about/">About</Link></div>  
    //     </nav>
    // )
}

export default Nav