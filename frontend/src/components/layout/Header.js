import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { 
  Button, Link, Box, Typography,
  List, ListItem, ListItemText 
} from '@material-ui/core';

const classes = {
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: 'black'
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
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <Typography>
        {user ? `Welcome ${user.username}` : ''}
        </Typography>
        <li className="nav-item">
          <Button 
            onClick={this.props.logout}
            variant="contained"
            color="secondary">
              Logout
          </Button>
        </li>
      </ul>
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
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Button component={RouterLink} to="/">
                {/* <img className={classes.logo} src="../../../static/images/DigitalLogo.png"/> */}
                Intro to Digital Music
            </Button>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
