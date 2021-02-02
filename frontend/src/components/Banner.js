import React from "react";
import { Typography, ThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Banner() {
    return (
        <div className="banner">
            <img className="banner-img" src="../../static/images/tech-background.jpg"/>
            <div className="center">
                <ThemeProvider theme={theme}>
                    <Typography id="banner-text" variant="h1">Intro to Digital Music Composition</Typography>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Banner;