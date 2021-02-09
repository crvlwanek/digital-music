import React from 'react';
import { Box } from '@material-ui/core';
import { MusicNote } from '@material-ui/icons';

const styles = {
    icon: {
      fontSize: "6rem"
    }
}

export default function MissingImage() {
    return (
        <Box height={300} width="100%" 
            bgcolor="text.disabled"
            alignItems="center" 
            justifyContent="center" 
            display="flex" 
            justify="center"
        >
            <MusicNote style={styles.icon} />
        </Box>
    )
}
