import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import {
  Typography, Avatar, 
  TextField, Grid,
  Container, Button, Box,

} from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';

const styles = {
  main: {
    margin: "0",
    padding: "0",
    width: "100%",
    display: "contents",
  },
  background: {
    width: "100%",
    margin: "auto",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
    url(../../../static/images/music-crowd.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: "120px 0 120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto"
  },
  avatar: {
    margin: "8px",
    backgroundColor: "#75e8e6",
    color: "black",
  },
  header: {
    color: "white",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "8px",
  },
  input: {
    backgroundColor: "white"
  },
  submit: {
    margin: "24px 0 16px",
  },
  linkText: {
    color: "white"
  },
}

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/portfolio" />;
    }
    const { username, password } = this.state;
    return (
      <Container style={styles.main} component="main">
        <Box style={styles.background}>
          <Container maxWidth="xs" style={styles.paper}>
            <Avatar style={styles.avatar}>
              <LockIcon />
            </Avatar>
            <Typography style={styles.header} component="h1" variant="h5">
              Login
            </Typography>
            <form onSubmit={this.onSubmit} style={styles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                      autoComplete="username"
                      name="username"
                      variant="filled"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      onChange={this.onChange}
                      value={username}
                      autoFocus
                      style={styles.input}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.onChange}
                    value={password}
                    style={styles.input}
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
              Login
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link style={styles.linkText} to="/register" variant="body2">
                    Don't have an account? Register
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
