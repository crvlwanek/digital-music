import React from "react";
import { Grid, Typography, Card, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        height: "200px",
        backgroundColor: "white",
        alignItems: "center",
        justify: "center",
        display: "flex",
    },
    icon: {
        color: "#75e8e6",
        fontSize: "4rem"
    }
})

function IconBarItem(props) {
    const classes = useStyles();
    const Icon = props.icon;

    return (
        <Grid item xs={12} md={3}>
            <Card component={props.link[0] === '/' ? RouterLink : Link} 
                to={props.link}
                href={props.link}
                className={classes.card}>
                <Grid 
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                    direction="column">
                    <Grid item xs={12}>
                        <Icon className={classes.icon} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            {props.text}
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default IconBarItem;