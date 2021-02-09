import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSongs, deleteSong } from '../../actions/songs';

import { Grid, Container, Typography, Box } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import MissingImage from '../layout/fragments/MissingImage';
import SongTile from '../layout/fragments/SongTile';

const styles = {
  title: {
    backgroundColor: "#e8eae6"
  },
  holder: {
    backgroundColor: "#e8eae6",
    margin: "0",
    maxWidth: "100%",
  },
  songTitle: {
    padding: "20px 0 0"
  }
}

export class Portfolio extends Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
    getSongs: PropTypes.func.isRequired,
    deleteSong: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    return (
      <Fragment>
        <Box textAlign="center" 
          justifyContent="center" 
          display="flex"
          width="100%" 
          padding="20px 0 40px"
          style={styles.title}>
          <Typography variant="h1">Songs</Typography>
        </Box>
        <Container padding={60} style={styles.holder}>
          <Grid container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={5}
          >
            {this.props.songs.map((song) => (
              <Grid item container xs={12} sm={7} md={4}
                direction="column"
                alignItems="center"
                justify="center">
                {song.image ? <SongTile image={song.image} /> : <MissingImage />}
                <AudioPlayer src={"http://docs.google.com/uc?export=open&id=" + song.url.split("/")[5]} />
                <Typography style={styles.songTitle}>{song.name}</Typography>
              </Grid>            
            ))}
          </Grid>
          </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs.songs,
});

export default connect(mapStateToProps, { getSongs, deleteSong })(Portfolio);
