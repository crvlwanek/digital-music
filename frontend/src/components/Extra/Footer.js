import React from "react";
import { Grid, Typography, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SocialIcon from "./SocialIcon";

function Footer() {
    return (
        <footer>
        <Box alignItems="center" justify="center">
            <Typography align="center" className="footer-text">
                Chris VL-Wanek © {new Date().getFullYear()}
            </Typography>
        </Box>
        <Grid className="social-text" container direction="row" justify="center" alignItems="center">
            <SocialIcon icon={GitHubIcon} link="https://github.com/crvlwanek/digital-music"/>
            <SocialIcon icon={LinkedInIcon} link="https://www.linkedin.com/in/chris-van-lanen-wanek-63b91514b/"/>
        </Grid>
        </footer>
    
    )
}

export default Footer;