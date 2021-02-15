import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

import {
  Typography, Avatar, 
  TextField, Grid,
  Container, Button, Box

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
    url(../../../static/images/studio.jpg)`,
    backgroundColor: "#845ec2",
    backgroundBlendMode: "hard-light",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: "50px 0 50px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: "auto",
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
    marginTop: "24px",
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

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <Container style={styles.main} component="main">
        <Box style={styles.background}>
          <Container maxWidth="xs" style={styles.paper}>
            <Avatar style={styles.avatar}>
              <LockIcon />
            </Avatar>
            <Typography style={styles.header} component="h1" variant="h5">
              Register
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
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.onChange}
                    value={email}
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
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    name="password2"
                    label="Confirm Password"
                    type="password"
                    id="password2"
                    onChange={this.onChange}
                    value={password2}
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
              Register
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link style={styles.linkText} to="/login" variant="body2">
                    Already have an account? Login
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

export default connect(mapStateToProps, { register, createMessage })(Register);
