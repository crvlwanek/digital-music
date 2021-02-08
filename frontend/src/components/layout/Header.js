import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { 
  Button, Grid, Box, Typography,
  AppBar, Toolbar
} from '@material-ui/core';

const classes = {
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: 'black',
    display: 'flex'
  },
  logo: {
    width: '2rem',
    height: '2rem',
  }
};

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <Grid item>
          <Typography whiteSpace="nowrap">
            {user ? `Welcome ${user.username}` : ''}
          </Typography>
        </Grid>
        <Grid item>
          <Button 
            onClick={this.props.logout}
            variant="contained"
            color="secondary"
          >
            Logout
          </Button>
        </Grid>
      </React.Fragment>
    );

    const guestLinks = (
      <Box>
        <Button color="primary" component={RouterLink} to="/register">
          Register
        </Button>
        <Button color="primary" component={RouterLink} to="/login">
          Login
        </Button>
      </Box>
    );

    return (
      <AppBar color="#e8eae6" position="static"> 
        <Toolbar>
        <Box width="300px">
          <Button fullWidth="true" className={classes.linkText} component={RouterLink} to="/">
              {/* <img className={classes.logo} src="../../../static/images/DigitalLogo.png"/> */}
              Intro to Digital Music
          </Button>
        </Box>
          
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={4}
          >
            {isAuthenticated ? authLinks : guestLinks}
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
