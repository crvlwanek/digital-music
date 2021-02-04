import React from "react";
import { IconButton, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    socialItem: {
        color: "grey",
    }
})

function SocialIcon(props) {
    const classes = useStyles();
    const Icon = props.icon;

    return (
            <IconButton aria-label="home">
                <Link href={props.link}>
                    <Icon className={classes.socialItem} />
                </Link>
            </IconButton>
    )
}

export default SocialIcon;