import React from "react";
import { Grid, IconButton, Link } from '@material-ui/core';

function SocialIcon(props) {
    const Icon = props.icon;
    return (
        <Grid justify="center" alignItems="center" item className="social-item">
            <IconButton aria-label="home">
                <Link href={props.link}>
                    <Icon />
                </Link>
            </IconButton>
        </Grid>
    )
}

export default SocialIcon;