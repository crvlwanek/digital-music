import React from 'react';
import { Box, Grid, Card, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MusicNote from '@material-ui/icons/MusicNote';
import RadioIcon from '@material-ui/icons/Radio';
import ShareIcon from '@material-ui/icons/Share';
import IconBarItem from "./fragments/IconBarItem";

const useStyles = makeStyles({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), 
        url(../../../static/images/hero-splash.jpg)`,
        height: "300px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "5rem",
        textAlign: "center",
        lineHeight: "5rem", 
        padding: "20px",
        textShadow: "3px 3px 7px black",
        backgroundColor: "#75e8e6",
        backgroundBlendMode: "hard-light"
    },
    cardHolder: {
        backgroundColor: "#e8eae6",
        padding: "30px 50px 30px",
        width: "100%",
        margin: "0"
    },
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

export default function HomePage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.hero}>
                <Box>Intro to Digital Music</Box>
            </Box>
            <Grid 
                container
                justify="center"
                alignItems="center"
                spacing={4} 
                direction="row"
                className={classes.cardHolder}>
                <Grid item xs={12} md={3}>
                    <Card className={classes.card}>
                        <Grid 
                        container
                        spacing={4}
                        alignItems="center"
                        justify="center"
                        direction="row">
                        <Grid item>
                        <RadioIcon className={classes.icon} />
                        </Grid>
                        <Grid item>
                        <Typography>
                            Listen to original music
                        </Typography>
                        </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card className={classes.card}>
                        <Grid 
                        container
                        alignItems="center"
                        justify="center"
                        direction="row">
                        <MusicNote className={classes.icon} />
                        <Typography>
                            Make your own music
                        </Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card className={classes.card}>
                        <Grid 
                        container
                        alignItems="center"
                        justify="center"
                        direction="row">
                        <ShareIcon className={classes.icon} />
                        <Typography>
                            Share it with your friends
                        </Typography>
                        </Grid>
                    </Card>
                </Grid>

            </Grid>
        </React.Fragment>
        
    )
}

