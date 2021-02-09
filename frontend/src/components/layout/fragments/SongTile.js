import React from 'react';

import { Box } from '@material-ui/core';

function SongTile(props){
    const styles = {
        tile: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.3)), 
            url(${props.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
    }
    return (
        
        <Box height={300} width="100%" style={styles.tile}/>
    )
}

export default SongTile;