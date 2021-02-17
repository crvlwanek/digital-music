import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSong } from '../../actions/songs';

import { Typography, Paper, TextField, Container, Button, Grid } from '@material-ui/core';

const styles = {
  header: {
    width: "90%",
  },
  paper: {
    paddingTop: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: "90%",
    margin: "20px 0 20px"
  },
  submit: {
    margin: "15px 0 15px"
  }
}


export class Form extends Component {
  state = {
    name: '',
    url: '',
    image: '',
  };

  static propTypes = {
    addSong: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, url, image } = this.state;
    const song = { name, url, image };
    this.props.addSong(song);
    this.setState({
      name: '',
      url: '',
      image: '',
    });
  };

  render() {
    const { name, url, image } = this.state;
    console.log(this.state)
    return (
      <Paper style={styles.paper}>
        <Typography style={styles.header} variant="h4">
          Add a song
        </Typography>
        <form style={styles.form} onSubmit={this.onSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                type="text"
                onChange={this.onChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="url"
                variant="outlined"
                required
                fullWidth
                id="url"
                label="Song URL (Google Drive Link)"
                type="url"
                onChange={this.onChange}
                value={url}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="image"
                variant="outlined"
                fullWidth
                id="image"
                label="Image URL"
                type="url"
                onChange={this.onChange}
                value={image}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={styles.submit}
          >
            Submit
          </Button>
        </form>
       </Paper>
    );
  }
}

export default connect(null, { addSong })(Form);
