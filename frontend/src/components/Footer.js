import React from "react";
import { Link, Grid, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <footer>
        <Grid className="social-text" container direction="row" justify="center" alignItems="center">
            <Grid item xs={6} className="social-item">
            <IconButton aria-label="home">
            <Link href="https://github.com/crvlwanek/digital-music">
            <GitHubIcon />
            </Link>
            </IconButton>
            </Grid>
            <Grid item xs={6} className="social-item">
            <IconButton aria-label="home">
            <Link href="https://www.linkedin.com/in/chris-van-lanen-wanek-63b91514b/">
            <LinkedInIcon />
            </Link>
            </IconButton>
            </Grid>
        </Grid>
        </footer>
    
    )
}

export default Footer;