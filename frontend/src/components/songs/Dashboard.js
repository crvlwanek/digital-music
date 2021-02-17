import React, { Fragment } from 'react';
import Form from './Form';
import Portfolio from './Portfolio';
import SongsPreview from './SongsPreview';

import { Grid, Typography, Box } from '@material-ui/core';

const styles = {
  title: {
    backgroundColor: "#e8eae6",
    textAlign: "center",
    paddingTop: "30px"
  },
  holder: {
    backgroundColor: "#e8eae6",
    padding: "20px 7% 20px"
  },
}

export default function Dashboard() {
  return (
    <Fragment>
      <Box textAlign="center" 
        justifyContent="center" 
        display="flex"
        width="100%" 
        style={styles.title}>
        <Typography variant="h3">My Portfolio</Typography>
      </Box>
      <Grid container direction="row" spacing={2} style={styles.holder}>
        <Grid item xs={12} md={6}>
          <Form />
        </Grid>
        <Grid item xs={12} md={6}>
          <Portfolio />
        </Grid>
      </Grid>
      <Box style={styles.title}>
        <Typography variant="h3">Preview</Typography>
        <SongsPreview />
      </Box>

    </Fragment>
  );
}
