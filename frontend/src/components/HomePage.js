import React from 'react';
import Banner from "./Banner";
import { Grid } from "@material-ui/core";
import MusicNote from '@material-ui/icons/MusicNote';
import RadioIcon from '@material-ui/icons/Radio';
import ShareIcon from '@material-ui/icons/Share';
import IconBarItem from './IconBarItem';

function HomePage() {
    return (
        <React.Fragment>
            <Banner />
            <Grid 
            spacing={3}
            className="itemRow" 
            container direction="row" 
            justify="center" 
            alignItems="center" >
                <IconBarItem 
                    icon={RadioIcon}
                    text="Listen to original music"
                />
                <IconBarItem
                    icon={MusicNote}
                    text="Create your own music"
                />
                <IconBarItem
                    icon={ShareIcon}
                    text="Share it with your friends"
                />
            </Grid>
        </React.Fragment>
    )
}

export default HomePage;