import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import {
  Typography, Avatar, 
  TextField, Grid, CssBaseline,
  Container, Button

} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
    const classes = {
      paper: {
        marginTop: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: "8px",
        backgroundColor: "blue",
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: "8px",
      },
      submit: {
        margin: "24px 0 16px",
      },
    }

    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form onSubmit={this.onSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                      autoComplete="username"
                      name="username"
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      onChange={this.onChange}
                      value={username}
                      autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.onChange}
                    value={password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
              Login
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/register" variant="body2">
                    Don't have an account? Register
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
