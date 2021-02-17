import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserProfile } from '../../actions/songs';

import { 
  Grid, Container, Typography, Box, Link,
  Button
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AudioPlayer from 'material-ui-audio-player';
import MissingImage from '../layout/fragments/MissingImage';
import SongTile from '../layout/fragments/SongTile';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = {
  title: {
    backgroundColor: "#e8eae6",
    textAlign: "center",
    padding: "40px 0 40px",
  },
  holder: {
    backgroundColor: "#e8eae6",
    margin: "0",
    maxWidth: "100%",
    paddingBottom: "50px",
  },
  songTitle: {
    padding: "20px 0 0"
  },
  missing: {
    textAlign: "center",
    padding: "200px 0 200px"
  },
}

export class UserProfile extends Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
    getUserProfile: PropTypes.func.isRequired
  }
  
  username = this.props.match.params.username

  componentDidMount = () => {
    this.props.getUserProfile(this.username);
  }

  render() {
    return (
      <Fragment>
        <Grid container
          textAlign="center" 
          justify="center"
          alignItems="center" 
          display="flex"
          width="100%" 
          style={styles.title}>
          <Grid item xs={2}>
            <Button component={RouterLink} to="/songs" 
              variant="contained" color="primary">
              <ArrowLeftIcon />
              Songs  
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3">{this.username}'s Portfolio</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button component={RouterLink} to="/users"
            variant="contained" color="primary">
              Users
              <ArrowRightIcon />
            </Button>
          </Grid>
        </Grid>
        <Container padding={60} style={styles.holder}>
          <Grid container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={5}
          >
          {console.log(this.props.songs)}
          {this.props.songs.length > 0 ? this.props.songs.map(song => (
            <Grid item container xs={12} sm={7} md={4}
              direction="column"
              alignItems="center"
              justify="center">
              {song.image ? <SongTile image={song.image} /> : <MissingImage />}
              <AudioPlayer src={"http://docs.google.com/uc?export=open&id=" + song.url.split("/")[5]} />
              <Typography style={styles.songTitle}>
                {`"${song.name}"`}
              </Typography>
            </Grid>
          )) : 
          <Grid item xs={12} style={styles.missing}>
            <Typography>No songs found</Typography>
           </Grid>}
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs.songs,
});

export default connect(mapStateToProps, { getUserProfile })(UserProfile);