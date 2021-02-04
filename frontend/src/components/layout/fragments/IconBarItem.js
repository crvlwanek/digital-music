import React from "react";
import { Grid, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: "100px",
        backgroundColor: "white",
        alignItems: "center",
        justify: "center",
        display: "flex",
    },
    icon: {
        color: "#75e8e6"
    }
})

function IconBarItem(props) {
    const classes = useStyles();
    const Icon = props.icon;

    return (
        <Grid item xs={12} md={3}>
            <Card className={classes.card}>
                <Grid 
                    container
                    spacing={4}
                    alignItems="center"
                    justify="center"
                    direction="row">
                    <Grid item>
                        <Icon className={classes.icon} />
                    </Grid>
                    <Grid item>
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