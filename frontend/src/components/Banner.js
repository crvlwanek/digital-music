import React from "react";
import { Typography, Box, ThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Banner() {
    return (
        <Box 
            className="banner"
            display="flex"
            height={200}
            bgcolor="#75e8e6"
            alignItems="center"
            justifyContent="center">
            <ThemeProvider theme={theme}>
                <Typography 
                    className="banner-text"
                    variant="h1">
                    Intro to Digital Music
                </Typography>
            </ThemeProvider>
        </Box>
    )
}

export default Banner;