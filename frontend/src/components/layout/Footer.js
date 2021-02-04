import React from "react";
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SocialIcon from "./fragments/SocialIcon";

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#cdd0cb",
        color: "#495464",
        width: "100%",
        padding: "50px 0 30px",
    },
    footerText: {
        fontWeight: "200",
        fontSize: "small"
    },
    socialText: {
        width: "100%"
    }
})

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Box alignItems="center" justify="center">
                <Typography align="center" className={classes.footerText}>
                    Chris VL-Wanek © {new Date().getFullYear()}
                </Typography>
            </Box>
            <Grid className={classes.socialText} container direction="row" justify="center" alignItems="center">
                <SocialIcon icon={GitHubIcon} 
                    link="https://github.com/crvlwanek/digital-music" />
                <SocialIcon icon={LinkedInIcon} 
                    link="https://www.linkedin.com/in/chris-van-lanen-wanek-63b91514b/" />
            </Grid>
        </footer>
    )
}

export default Footer;