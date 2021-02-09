import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

import { 
  Button, Grid, Box, Typography,
  AppBar, Toolbar, IconButton
} from '@material-ui/core';

const classes = {
  links: {
    paddingRight: "20px"
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
        <Box display={{ xs: 'none', md: 'inline' }} width="300px">
          <Button fullWidth="true" component={RouterLink} to="/">
              {/* <img className={classes.logo} src="../../../static/images/DigitalLogo.png"/> */}
              Intro to Digital Music
          </Button>
        </Box>
        <Box display={{ xs: 'inline', md: 'none' }}>
          <IconButton display={{ md: 'hidden' }} component={RouterLink} to="/">
            <HomeIcon />
          </IconButton>
        </Box>
        
          
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={4}
            paddingRight="20px"
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
