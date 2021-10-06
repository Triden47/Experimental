import React from 'react'
import { Zoom, IconButton, Stack } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const inlineStyle = {
    position: "fixed",
    bottom: "10px",
    width: "100%"

}

function SimpleZoom() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked((prev) => !prev);
  }, []);
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={inlineStyle}
      >
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "3500ms" : "0ms" }}
        >
            <IconButton style={{"color": "white"}} href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
            </IconButton>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "3500ms" : "0ms" }}
        >
            <IconButton style={{"color": "white"}} href="https://instagram.com" target="_blank">
                <InstagramIcon />
            </IconButton>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "3500ms" : "0ms" }}
        >
            <IconButton style={{"color": "white"}} href="https://github.com" target="_blank">
                <GitHubIcon />
            </IconButton>
        </Zoom>
    </Stack>
  );
}
export default function SocialSites() {
    return <SimpleZoom/>
}