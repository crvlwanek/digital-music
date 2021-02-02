import React from 'react';
import Banner from "./Banner";
import { Grid, Typography, Container } from "@material-ui/core";
import MusicNote from '@material-ui/icons/MusicNote';
import RadioIcon from '@material-ui/icons/Radio';
import ShareIcon from '@material-ui/icons/Share';

function HomePage() {
    return (
        <div>
            <Banner />
            <Container maxWidth="md">
            <Grid className="itemRow" container spacing={1} direction="row" justify="center" alignItems="center">
                <Grid className="gridRow" item xs={12} md={4}>
                    <Typography>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <RadioIcon color="primary" className="icon"/>
                            <h1 className="icon-text">
                            Listen to original compositions
                            </h1>
                            
                        </Grid>
                    </Typography>
                </Grid>
                <Grid className="gridRow" item xs={12} md={4}>
                    <Typography>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <MusicNote color="primary" className="icon"/>
                            <h1 className="icon-text">
                                Create your own music
                            </h1>
                        </Grid>
                    </Typography>
                </Grid>
                <Grid className="gridRow" item xs={12} md={4}>
                    <Typography>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <ShareIcon color="primary" className="icon"/>
                            <h1 className="icon-text">
                            Share it with your friends
                            </h1>
                        </Grid>
                    </Typography>
                </Grid>
            </Grid>
            </Container>
            
        </div>
        
    )
}

export default HomePage;