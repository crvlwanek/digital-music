import React from "react";
import { Grid, Typography, Box } from '@material-ui/core';

function IconBarItem(props) {
    const Icon = props.icon;
    return (
        <Grid 
        justify="center" 
        alignItems="center"
        item xs={12} md={4}
        >
            <Box fontSize="large">
                <Icon fontSize="large"/>
            </Box>
            <Typography 
                variant="h3">
                {props.text}
            </Typography>
        </Grid>
    )
}

export default IconBarItem;